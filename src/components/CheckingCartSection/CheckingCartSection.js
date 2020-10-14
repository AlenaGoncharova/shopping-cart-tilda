import { getCartItems } from '../../localStorage';

const CheckingCartSection = {
  cartItems: null,
  orderSum: null,

  isValidData() {
    return true;
  },

  calcOrderSum() {
    return this.cartItems.reduce((sum, { price, count }) => sum += price * count, 0);
  },

  updateItemCount(itemId, count, cart) {
    const item = this.cartItems.find(({ id }) => id === itemId);
    item.count += count;

    if (item.count <= 0) {
      const el = document.querySelector(`#cart-items-list [id="${Number(itemId)}"]`);
      el.remove();
    } else {
      const el = document.querySelector(`#cart-items-list [id="${Number(itemId)}"] span`);
      el.innerText = item.count;
    }

    this.orderSum = this.calcOrderSum();
    cart.dispatchEvent(new CustomEvent("cart-items-changed", {
      bubbles: true,
      detail: { orderSum: this.orderSum }
    }));
  },

  afterRender() {
    const cart = document.getElementById('cart-items-list');
    cart.addEventListener('click', ({ target }) => {
      console.log(target);
      const itemId = target.closest('tr').getAttribute('id');
      const actionType = target.getAttribute('data-action');
      switch (actionType) {
        case 'inc-item':
          this.updateItemCount(itemId, 1, cart);
          console.log('inc-item');
          break;
        case 'dec-item':
          this.updateItemCount(itemId, -1, cart);
          console.log('dec-item');
          break;
        case 'remove-item':
          const item = this.cartItems.find(({ id }) => id === itemId);
          this.updateItemCount(itemId, -item.count, cart);
          console.log('remove-item');
          break;
        default:
          break;
        // const newListItem = this.render();
      }
    });
  },

  render() {
    this.cartItems = getCartItems();
    this.orderSum = this.calcOrderSum();

    let content = `
      <div class="info-section-container active-info-section" data-section="checkingCart">
        <h3>Детали заказа</h3>
        <div class="info-section-content">
          Корзина
          <div id="cart-items-list">
    `;
    if (this.cartItems !== null){
      content += `
        <table>
          <tr>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Кол-во</th>
          </tr>
      `;
      this.cartItems.map((item) => {
        const {id, name, price, count} = item;
        content += `
          <tr id=${id} class="cart-item">
            <td>${name}</td>
            <td>${price}</td>
            <td><span>${count}</span> <button data-action="inc-item">+</button> <button data-action="dec-item">-</button> <button data-action="remove-item">Удалить</button></td>
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
