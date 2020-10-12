import CheckingCartSection from '../CheckingCartSection';
import CustomerDataSection from '../CustomerDataSection';
import ShippingSection from '../ShippingSection';
import PaymentSection from '../PaymentSection';

import './order-page.css';

const OrderPage = {
  afterRender: () => {
    const infoSectionContainers = document.querySelectorAll('.info-section-container');
    let activeInfoSection = document.querySelector('.active-info-section');

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