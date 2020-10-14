import CheckingCartSection from '../CheckingCartSection';
import CustomerDataSection from '../CustomerDataSection';
import ShippingSection from '../ShippingSection';
import PaymentSection from '../PaymentSection';
import CheckoutOverview from '../CheckoutOverview';

import './order-page.css';

const OrderPage = {
  afterRender: () => {
    const checkoutSteps = [
      { 
        sectionName: 'checkingCart',
        isValid: true,
      },
      {
        sectionName: 'customerData',
        isvalid: false,
      },
      { 
        sectionName: 'shipping',
        isValid: false,
      },
      {
        sectionName: 'payment',
        isValid: false,
      }
    ];

    const infoSectionContainers = document.querySelectorAll('.info-section-container');
    let activeInfoSection = document.querySelector('.active-info-section');
    const btnNextSection = document.querySelectorAll('.btn-next-section');

    const mappingSection = {
      checkingCart: CheckingCartSection,
      customerData: CustomerDataSection,
      shipping: ShippingSection,
      payment: PaymentSection,
    };

    function changeActiveSection(newActiveSection) {
      const sectionName = activeInfoSection.getAttribute('data-section');
      const preview = activeInfoSection.querySelector('.info-section-preview');
      if (preview) {
        const previewContent = mappingSection[sectionName].generatePreviewData();
        preview.innerHTML = previewContent;
      }
      activeInfoSection.classList.remove('active-info-section');

      newActiveSection.classList.add('active-info-section');
      activeInfoSection = newActiveSection;
    }

    infoSectionContainers.forEach((section) => { 
      section.addEventListener('click', () => { 
        if (section !== activeInfoSection) {
          changeActiveSection(section);
        }
      });
    });

    btnNextSection.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const activeSectionName = activeInfoSection.getAttribute('data-section'); 
        if (mappingSection[activeSectionName].isValidData()) {
          const currentStep = checkoutSteps.find(({ sectionName }) => sectionName === activeSectionName);
          currentStep.isValid = true;

          const nextStep = checkoutSteps.find(({ sectionName, isValid }) => !isValid && sectionName !== activeSectionName);
          if (nextStep) {
            const newActiveSection = document.querySelector(`[data-section="${nextStep.sectionName}"]`);
            changeActiveSection(newActiveSection);
          }
        }

        event.stopPropagation();
      });
    });

    const shippingForm = document.querySelector('[data-section="shipping"]');
    const sidebarContainer = document.getElementById('sidebar-container');
    shippingForm.addEventListener("shipping-method-changed", function(event) {
      sidebarContainer.innerHTML = CheckoutOverview.render(CheckingCartSection.calcOrderSum(), event.detail.cost);
    });

    const cart = document.querySelector('[data-section="checkingCart"]');
    cart.addEventListener("cart-items-changed", function(event) {
      sidebarContainer.innerHTML = CheckoutOverview.render(event.detail.orderSum, ShippingSection.shippingData.cost);
    });

    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      form.addEventListener("data-is-valid", function(event) {
        const currentStep = checkoutSteps.find(({ sectionName }) => sectionName === event.detail.section);
        currentStep.isValid = true;
        if (!checkoutSteps.map(({isValid}) => isValid).includes(false)) {
          const btn = document.getElementById('btn-checkout');
          btn.removeAttribute('disabled');
        }
      });
    });

    forms.forEach((form) => {
      form.addEventListener("data-is-not-valid", function(event) {
        const currentStep = checkoutSteps.find(({ sectionName }) => sectionName === event.detail.section);
        currentStep.isValid = false;
        const btn = document.getElementById('btn-checkout');
        btn.setAttribute('disabled', true);
      });
    });

    CheckingCartSection.afterRender();
    CustomerDataSection.afterRender();
    ShippingSection.afterRender();
    PaymentSection.afterRender();
  },

  render: () => {
    let content = CheckingCartSection.render();
    content += CustomerDataSection.render();
    content += ShippingSection.render();
    content += PaymentSection.render();
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = content;

    const sidebarContainer = document.getElementById('sidebar-container');
    sidebarContainer.innerHTML = CheckoutOverview.render(CheckingCartSection.calcOrderSum(), 0);
  },
}

export default OrderPage;