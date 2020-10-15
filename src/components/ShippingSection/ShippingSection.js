import './shipping-section.css';

const ShippingSection = {
  shippingData: {
    method: null,
    address: null,
    pickupAddress: 'Москва, Красная площадь 3.',
    cost: null,
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
    const addressInfo= document.getElementById('address-info-container');
    const pickupAddress = addressInfo.querySelector('#pickup-address');
    const shippingAddress = addressInfo.querySelector('#shipping-address');

    form.addEventListener('change', ({ target }) => {
      const value = target.getAttribute('data-type');
      this.shippingData.method = value;
      const cost = Number(target.getAttribute('data-summa'));
      this.shippingData.cost = cost;

      form.dispatchEvent(new CustomEvent("shipping-method-changed", {
        bubbles: true,
        detail: { cost }
      }));

      if (this.shippingData.method === 'pickup') {
        pickupAddress.classList.add('active-address');
        shippingAddress.classList.remove('active-address');
      } else {
        pickupAddress.classList.remove('active-address');
        shippingAddress.classList.add('active-address');
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

  render() {
    return `
      <div class="info-section-container" data-section="shipping">
        <h3 class="section-header col-25">Доставка</h3>
        <div class="info-section-preview col-75">Выберите способ доставки</div>
        <div class="info-section-content col-75">
          <span class="control-label">Способ доставки</span>
          <div class="form-container">
            <form id="shipping-form">
              <div class="radio">
                <input id="pickup-shipping" type="radio" name="method" data-type="pickup" data-summa="0">
                <label for="pickup-shipping">Самовывоз (бесплатно)</label>
              </div>
              <div class="radio">
                <input id="courier-shipping" type="radio" name="method" data-type="courier" data-summa="200">
                <label for="courier-shipping">В пределах МКАД (200 рублей)</label>
              </div>
              <div class="radio">
                <input id="mail-shipping" type="radio" name="method" data-type="mail" data-summa="300">
                <label for="mail-shipping">Доставка почтой России (300 рублей)</label>
              </div>

              <div id="address-info-container">
                <div id="pickup-address" class="address-info">
                  <div>Адрес для самовывоза:</div>
                  <div>${this.shippingData.pickupAddress}</div>
                </div>

                <div id="shipping-address" class="address-info">
                    <label for="input-city" class="form-label">Город*</label>
                    <input id="input-city" type="text" class="form-field" required name="city" placeholder=" ">
      
                    <label for="input-address" class="form-label">Адрес*</label>
                    <input id="input-address" type="text" class="form-field" required name="address" placeholder=" ">
                </div>
  
                <div id="shipping-btn-next-section">
                  <input type="submit" class="btn-next-section" value="Продолжить" disabled />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },
};

export default ShippingSection;
