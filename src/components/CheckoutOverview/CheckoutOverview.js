import './checkout-overview.css';

const CheckoutOverview = {
  render(orderСost, shippingCost) {
    return `
      <div id="checkout-overview">
        <table id="order-totals-table">
          <tbody>
            <tr>
              <th><span>Стоимость заказа</span></th>
              <td><span id="order-cost">${orderСost} Руб</span></td>
            </tr>
            <tr>
              <th><span>Доставка</span></th>
              <td><span id="shipping-cost">${shippingCost ? shippingCost + ' Руб' : 'БЕСПЛАТНО'}</span></td>
            </tr>
            <tr>
              <th><span>Итого к оплате:</span></th>
              <td><span id="total-cost">${orderСost + shippingCost} Руб</span></td>
            </tr>
          </tbody>
        </table>
        <input id="btn-checkout" type="submit" disabled value="Оформить заказ" />
      </div>
    `;
  },
};
export default CheckoutOverview;
