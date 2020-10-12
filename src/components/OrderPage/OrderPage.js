import CheckingCartSection from '../CheckingCartSection';
import CustomerDataSection from '../CustomerDataSection';
import ShippingSection from '../ShippingSection';
import PaymentSection from '../PaymentSection';

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

    CustomerDataSection.afterRender();
    ShippingSection.afterRender();
    PaymentSection.afterRender();
  },

  render: () => {
    let content = CheckingCartSection.render();
    content += CustomerDataSection.render();
    content += ShippingSection.render();
    content += PaymentSection.render();
    const container = document.getElementById('main-container');
    container.innerHTML = content;
  },
}

export default OrderPage;