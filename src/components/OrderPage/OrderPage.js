import CheckingCartSection from '../CheckingCartSection';
import CustomerDataSection from '../CustomerDataSection';
import ShippingSection from '../ShippingSection';
import PaymentScreen from '../PaymentSection';

import './order-page.css';

const OrderPage = {
  afterRender: () => {
    const infoSectionContainers = document.querySelectorAll('.info-section-container');

    infoSectionContainers.forEach((section) => { 
      section.addEventListener('click', () => { section.classList.toggle('active-info-section'); });
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