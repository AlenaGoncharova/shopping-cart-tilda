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
    }

    infoSectionContainers.forEach((section) => { 
      section.addEventListener('click', ({ target }) => { 
        if (section !== activeInfoSection) {
          const step = activeInfoSection.getAttribute('data-step');
          const preview = activeInfoSection.querySelector('.info-section-preview');
          if (preview) {
            const previewContent = mappingSection[step].generatePreviewData();
            preview.innerHTML = previewContent;
          }
          activeInfoSection.classList.remove('active-info-section');

          section.classList.add('active-info-section');
          activeInfoSection = section;
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