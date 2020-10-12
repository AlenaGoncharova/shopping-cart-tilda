import CheckingCartSection from './CheckingCartSection';
import CustomerDataSection from './CustomerDataSection';
import ShippingSection from './ShippingSection';
import PaymentScreen from './PaymentSection';

const OrderPage = {
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