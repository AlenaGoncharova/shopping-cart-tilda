import { getCartItems } from '../../localStorage';

const CheckingCartSection = {
  isValidData() {
    return true;
  },

  render: () => {
    const cartItems = getCartItems();
    let content = `
      <div class="info-section-container active-info-section" data-section="checkingCart">
        <h3>Детали заказа</h3>
        <div class="info-section-content">
          Корзина
          <div class="cart-items-list">
    `;
    if (cartItems !== null){
      content += `
        <table>
          <tr>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Кол-во</th>
          </tr>
      `;
      cartItems.map((item) => {
        const {name, price, count} = item;
        content += `
          <tr>
            <td>${name}</td>
            <td>${price}</td>
            <td>${count}</td>
          </tr>
        `;
      });
      content += '</table>';
    } else {
      content = 'В корзине пусто!';
    }
    content += `
          <button type="submit" class="btn-next-section">Продолжить</button>
        </div>
      </div>
    </div>`

    return content;
  }
};

export default CheckingCartSection;
