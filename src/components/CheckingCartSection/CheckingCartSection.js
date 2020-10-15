import { getCartItems } from '../../localStorage';

import './checking-cart-section.css';

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
      const el = document.querySelector(`#cart-items-list [id="${Number(itemId)}"] .item-count-value`);
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
    const btnUpdateItem = document.querySelectorAll('.btn-update-item');
    btnUpdateItem.forEach((btn) => {
      btn.addEventListener('click', ({ target }) => {
        const itemId = target.closest('li').getAttribute('id');
        const actionType = btn.getAttribute('data-action');
        switch (actionType) {
          case 'inc-item':
            this.updateItemCount(itemId, 1, cart);
            break;
          case 'dec-item':
            this.updateItemCount(itemId, -1, cart);
            break;
          case 'remove-item':
            const item = this.cartItems.find(({ id }) => id === itemId);
            this.updateItemCount(itemId, -item.count, cart);
            break;
          default:
            break;
        }
      });
    });
  },

  render() {
    this.cartItems = getCartItems();
    this.orderSum = this.calcOrderSum();

    let content = `
      <div class="info-section-container active-info-section" data-section="checkingCart">
        <h3 class="section-header col-25">Детали заказа</h3>
        <div class="info-section-content col-75">
          <ul id="cart-items-list">
    `;
    if (this.cartItems !== null){
      content += `
      ${
        this.cartItems.map((item) => {
          const {id, name, price, count, img} = item;
          return `
            <li id=${id} class="cart-item">
              <div class="item-img"><img src="../../../${img}" height="65px"/></div>
              <span class="item-name">${name}</span>
              <span class="item-price">${price}</span>
              <div class="item-count">
                <div class="btn-update-item" data-action="inc-item">
                  <img src="../../../images/up-chevron.svg" width="15px" height="15px" />
                </div>
                <div class="item-count-value">${count}</div>
                <div class="btn-update-item" data-action="dec-item">
                  <img src="../../../images/down-chevron.svg" width="15px" height="15px" />
                </div>
              </div>
              <div class="btn-update-item item-remove" data-action="remove-item">
                <img src="../../../images/Tilda_Icons_30_system_trash.svg" width="20px" height="20px" />
              </div>
            </li>
          `;
        })
        .join('\n')
      }`;
    } else {
      content = 'В корзине пусто!';
    }
    content += `
          </ul>
          <div id="cart-btn-next-section">
            <input type="submit" class="btn-next-section" value="Продолжить" />
          </div>
        </div>
      </div>
    </div>`

    return content;
  }
};

export default CheckingCartSection;
