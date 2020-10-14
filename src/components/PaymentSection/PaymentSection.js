const PaymentSection = {
  paymentData: {
    method: null,
    isValid: false,
  },

  generatePreviewData() {
    const { method }= this.paymentData;
    return (
      `<p>${method ? method : ''}</p>`
    );
  },

  isValidData() {
    return !Object.values(this.paymentData).includes(null);
  },

  afterRender() {
    const form = document.getElementById('payment-form');

    form.addEventListener('change', ({ target }) => {
      const { name, checked } = target;
      if (checked) {
        const value = target.getAttribute('data-type');
        this.paymentData[name] = value;
      }

      if (this.paymentData.isValid !== this.isValidData()) {
        let eventType;
        if (this.isValidData()) {
          eventType = 'data-is-valid' 
        } else {
          eventType = 'data-is-not-valid'
        }
        form.dispatchEvent(new CustomEvent(eventType, {
          bubbles: true,
          detail: { section: 'payment' }
        }));

        this.paymentData.isValid = this.isValidData();
      }
    });

    form.addEventListener('submit', (e) => e.preventDefault());
  },

  render: () => {
    return `
      <div class="info-section-container" data-section="payment">
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
              <button type="submit" class="btn-next-section">Продолжить</button>
            </form>
          </div>
        </div>
      </div>
    `;
  },
};
export default PaymentSection;
