const ShippingSection = {
  shippingData: {
    method: null,
    address: null,
    isValid: false,
  },

  generatePreviewData() {
    const { method, address } = this.shippingData;
    return (
      `
        <p>${method ? method : ''}</p>
        <p>${address ? address : ''}</p>
      `
    );
  },

  isValidData() {
    return !Object.values(this.shippingData).includes(null);
  },

  afterRender() {
    const form = document.getElementById('shipping-form');

    form.addEventListener('change', ({ target }) => {
      if (target.type !== 'radio') {
        const { name, value } = target;
        this.shippingData[name] = value;
      } else {
        const { name, checked } = target;
        if (checked) {
          const value = target.getAttribute('data-type');
          this.shippingData[name] = value;
          const cost = Number(target.getAttribute('data-summa'));

          form.dispatchEvent(new CustomEvent("shipping-method-changed", {
            bubbles: true,
            detail: { cost }
          }));
        }
      }

      if (this.shippingData.isValid !== this.isValidData()) {
        let eventType;
        if (this.isValidData()) {
          eventType = 'data-is-valid' 
        } else {
          eventType = 'data-is-not-valid'
        }
        form.dispatchEvent(new CustomEvent(eventType, {
          bubbles: true,
          detail: { section: 'shipping' }
        }));

        this.shippingData.isValid = this.isValidData();
      }
    });

    form.addEventListener('submit', (e) => e.preventDefault());
  },

  render: () => {
    return `
      <div class="info-section-container" data-section="shipping">
        <h3>Доставка</h3>
        <div class="info-section-preview">Выберите способ доставки</div>
        <div class="info-section-content">
          <div class="form-container">
            <form id="shipping-form">
              <div class="form-group">
                <label class="control-label">Способ доставки</label>
                <div>
                    <div class="radio">
                        <label><input type="radio" name="method" data-type="Самовывоз" data-summa="0">Самовывоз (бесплатно)</label>
                    </div>
                    <div class="radio">
                        <label><input type="radio" name="method" data-type="В пределах МКАД" data-summa="200">В пределах МКАД (200 рублей)</label>
                    </div>
                    <div class="radio">
                        <label><input type="radio" name="method" data-type="Почта России" data-summa="300">Доставка почтой России (300 рублей)</label>
                    </div>
                </div>
              </div>
              <div class="form-group">
                <label for="input-address" class="control-label">Адрес доставки</label>
                <div>
                    <textarea class="form-control" id="input-address" name="address" placeholder="Адрес доставки" row="3"></textarea>
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

export default ShippingSection;
