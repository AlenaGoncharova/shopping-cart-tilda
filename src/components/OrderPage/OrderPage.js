import CheckingCartSection from '../CheckingCartSection';
import CustomerDataSection from '../CustomerDataSection';
import ShippingSection from '../ShippingSection';
import PaymentSection from '../PaymentSection';
import CheckoutOverview from '../CheckoutOverview';

import './order-page.css';
import './forms.css'

const OrderPage = {
  afterRender() {
    const checkoutSteps = [
      { 
        sectionName: 'checkingCart',
        isValid: true,
        isActive: true,
      },
      {
        sectionName: 'customerData',
        isvalid: false,
        isActive: false,
      },
      { 
        sectionName: 'shipping',
        isValid: false,
        isActive: false,
      },
      {
        sectionName: 'payment',
        isValid: false,
        isActive: false,
      }
    ];

    const mappingSection = {
      checkingCart: CheckingCartSection,
      customerData: CustomerDataSection,
      shipping: ShippingSection,
      payment: PaymentSection,
    };

    const infoSectionContainers = document.querySelectorAll('.info-section-container');
    const btnNextSection = document.querySelectorAll('.btn-next-section');
    const shippingForm = document.querySelector('[data-section="shipping"]');
    const sidebarContainer = document.getElementById('sidebar-container');

    function changeActiveSection(currentActiveSection, newActiveSection) {
      const sectionName = currentActiveSection.getAttribute('data-section');
      const preview = currentActiveSection.querySelector('.info-section-preview');
      const previewContent = mappingSection[sectionName].generatePreviewData();
      preview.innerHTML = previewContent;
      currentActiveSection.classList.remove('active-info-section');

      if (newActiveSection) {
        newActiveSection.classList.add('active-info-section');
        const newSectionName = newActiveSection.getAttribute('data-section');
        const currentStep = checkoutSteps.find(({ sectionName }) => sectionName === newSectionName);
        currentStep.isActive = true;
      }
    }

    infoSectionContainers.forEach((section) => { 
      section.addEventListener('click', () => { 
        section.classList.add('active-info-section');
        const currentSectionName = section.getAttribute('data-section');
        const currentStep = checkoutSteps.find(({ sectionName }) => sectionName === currentSectionName);
        currentStep.isActive = true;
      });
    });

    btnNextSection.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const currentSection = event.target.closest('.active-info-section');
        const currentSectionName = currentSection.getAttribute('data-section');

        const nextStep = checkoutSteps.find(({ sectionName, isValid, isActive }) => {
          return (!isValid && !isActive && sectionName !== currentSectionName);
        });
        if (nextStep) {
          const newActiveSection = document.querySelector(`[data-section="${nextStep.sectionName}"]`);
          changeActiveSection(currentSection, newActiveSection);
        } else {
          changeActiveSection(currentSection, null);
        }

        event.stopPropagation();
      });
    });

    shippingForm.addEventListener("shipping-method-changed", function(event) {
      sidebarContainer.innerHTML = CheckoutOverview.render(CheckingCartSection.calcOrderSum(), event.detail.cost);
    });

    const cart = document.querySelector('[data-section="checkingCart"]');
    cart.addEventListener("cart-items-changed", function(event) {
      const totalCount = CheckingCartSection.calcTotalCount();
      if (totalCount > 0) {
        sidebarContainer.innerHTML = CheckoutOverview.render(event.detail.orderSum, ShippingSection.shippingData.cost);
      } else {
        const container = document.querySelector('.container');
        container.innerHTML = `
          <div id="empty-cart"><div>Корзина пуста :(</div>
          <div>Но в нашем каталоге вы найдете все, что нужно!</div></div>
        `;
      }
    });

    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      form.addEventListener("data-is-valid", function(event) {
        const currentStep = checkoutSteps.find(({ sectionName }) => sectionName === event.detail.section);
        currentStep.isValid = true;
        const validSteps = checkoutSteps.map((step) => step.isValid === true);
        if (!validSteps.includes(false)) {
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

  render() {
    let content = CheckingCartSection.render();
    content += CustomerDataSection.render();
    content += ShippingSection.render();
    content += PaymentSection.render();
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = content;

    const sidebarContainer = document.getElementById('sidebar-container');
    sidebarContainer.innerHTML = CheckoutOverview.render(CheckingCartSection.orderSum, 0);
    this.afterRender();
  },
}

export default OrderPage;