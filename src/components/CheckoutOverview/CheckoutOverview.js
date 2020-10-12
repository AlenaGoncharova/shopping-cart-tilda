const CheckoutOverview = {
  render(orderСost, shippingCost) {
    return `
      <div id="checkout-overview">
        <table id="order-totals-table">
          <tbody>
            <tr>
              <th><span>Стоимость заказа</span></th>
              <td>${orderСost}</td>
            </tr>
            <tr>
              <th><span>Доставка</span></th>
              <td><span>${shippingCost ? shippingCost : 'БЕСПЛАТНО'}</span></td>
            </tr>
            <tr>
              <th><span>Итого к оплате:</span></th>
              <td>${orderСost + shippingCost}</td>
            </tr>
          </tbody>
        </table>
        <button type="submit" disabled>Оформить заказ</button>
      </div>
    `;
  },
};
export default CheckoutOverview;
