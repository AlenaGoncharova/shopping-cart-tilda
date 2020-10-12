import CheckingCartSection from '../CheckingCartSection';
import CustomerDataSection from '../CustomerDataSection';
import ShippingSection from '../ShippingSection';
import PaymentScreen from '../PaymentSection';

import './order-page.css';

const OrderPage = {
  afterRender: () => {
    const infoSectionContainers = document.querySelectorAll('.info-section-container');
    let activeInfoSection = document.querySelector('.active-info-section');

    infoSectionContainers.forEach((section) => { 
      section.addEventListener('click', ({ target }) => { 
        if (section !== activeInfoSection) {
          activeInfoSection.classList.remove('active-info-section');

          section.classList.add('active-info-section');
          activeInfoSection = section;
        }
      });
    });
  },

  render: () => {
    let content = CheckingCartSection.render();
    content += CustomerDataSection.render();
    content += ShippingSection.render();
    content += PaymentScreen.render();
    const container = document.getElementById('main-container');
    container.innerHTML = content;
  },
}

export default OrderPage;