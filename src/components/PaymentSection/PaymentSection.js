import './payment-section.css';

const PaymentSection = {
  paymentData: {
    method: null,
    isValid: false,
  },

  generatePreviewData() {
    const { method }= this.paymentData;
    return (
      `<p>${method ? method : 'Выберите способ оплаты'}</p>`
    );
  },

  isValidData() {
    return !Object.values(this.paymentData).includes(null);
  },

  afterRender() {
    const form = document.getElementById('payment-form');
    const btnNext = form.querySelector('.btn-next-section');

    form.addEventListener('change', ({ target }) => {
      const { name, checked } = target;
      if (checked) {
        const value = target.getAttribute('data-type');
        this.paymentData[name] = value;
      }
      console.log(form.checkValidity());

      if (this.paymentData.isValid !== form.checkValidity()) {
        this.paymentData.isValid = form.checkValidity();

        let eventType;
        if (this.paymentData.isValid) {
          eventType = 'data-is-valid';
          btnNext.removeAttribute('disabled');
        } else {
          eventType = 'data-is-not-valid';
          btnNext.setAttribute('disabled', true);
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
        <h3 class="section-header col-25">Оплата</h3>
        <div class="info-section-preview col-75">Способ оплаты не выбран</div>
        <div class="info-section-content col-75">
          <span class="control-label">Способ оплаты</span>
          <div class="form-container">
            <form id="payment-form">
              <div>
                  <div class="radio">
                    <input id="payment-cash" type="radio" name="method" data-type="Наличные">
                    <label for="payment-cash">
                      <img class="label-icon" src="../../../images/Tilda_Icons_3st_money.svg" width="50px" height="50px" />
                      Наличный расчёт
                    </label>
                  </div>
                  <div class="radio">
                    <input id="payment-card" type="radio" name="method" data-type="Картой онлайн">
                    <label for="payment-card">
                      <img class="label-icon" src="../../../images/Tilda_Icons_3st_card.svg" width="50px" height="50px" />
                      Оплата онлайн на сайте
                    </label>
                  </div>
              </div>
              <input type="submit" class="btn-next-section" disabled value="Продолжить" />
            </form>
          </div>
        </div>
      </div>
    `;
  },
};
export default PaymentSection;
