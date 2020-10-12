const PaymentSection = {
  render: () => {
    return `
      <div class="info-section-container" data-step="payment">
        <h3>Оплата</h3>
        <div class="info-section-preview">Способ оплаты не выбран</div>
        <div class="info-section-content">
          <div class="form-container">
            <form id="payment-form">
              <div class="form-group">
                <label class="control-label">Способ оплаты</label>
                <div>
                    <div class="radio">
                        <label><input type="radio" name="method" data-type="Наличными">Наличными</label>
                    </div>
                    <div class="radio">
                        <label><input type="radio" name="method" data-type="Картой">Картой</label>
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },
};
export default PaymentSection;
