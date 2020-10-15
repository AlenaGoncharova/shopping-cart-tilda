import './checkout-overview.css';

const CheckoutOverview = {
  render(orderСost, shippingCost) {
    return `
      <div id="checkout-overview">
        <table id="order-totals-table">
          <tbody>
            <tr>
              <th><span>Стоимость заказа</span></th>
              <td><span>${orderСost}</span></td>
            </tr>
            <tr>
              <th><span>Доставка</span></th>
              <td><span>${shippingCost ? shippingCost : 'БЕСПЛАТНО'}</span></td>
            </tr>
            <tr>
              <th><span>Итого к оплате:</span></th>
              <td><span>${orderСost + shippingCost}</span></td>
            </tr>
          </tbody>
        </table>
        <input id="btn-checkout" type="submit" disabled value="Оформить заказ" />
      </div>
    `;
  },
};
export default CheckoutOverview;
