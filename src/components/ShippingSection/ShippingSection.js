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
    const { method, address, pickupAddress } = this.shippingData;
    if (method !== null) {
      return (
        `
          <p>${method ? method : ''}</p>
          <p>${method !== 'Самовывоз' ? (address ? address : '' ) : pickupAddress}</p>
        `
      );
    } else {
      return 'Выберите способ оплаты';
    }
  },

  isValidData() {
    return this.shippingData.isValid;
  },

  afterRender() {
    const form = document.getElementById('shipping-form');
    const addressInfo= document.getElementById('address-info-container');
    const pickupAddress = addressInfo.querySelector('#pickup-address');
    const shippingAddress = addressInfo.querySelector('#shipping-address');
    const btnNext = form.querySelector('.btn-next-section');

    form.addEventListener('change', ({ target }) => {
      const value = target.getAttribute('data-type');
      this.shippingData.method = value;
      const cost = Number(target.getAttribute('data-summa'));
      this.shippingData.cost = cost;

      form.dispatchEvent(new CustomEvent("shipping-method-changed", {
        bubbles: true,
        detail: { cost }
      }));

      if (this.shippingData.method === 'Самовывоз') {
        pickupAddress.classList.add('active-address');
        shippingAddress.classList.remove('active-address');
        this.shippingData.isValid = true;
      } else {
        pickupAddress.classList.remove('active-address');
        shippingAddress.classList.add('active-address');

        if (this.shippingData.isValid !== form.checkValidity()) {
          this.shippingData.isValid = form.checkValidity();
        }
      }

      let eventType;
      if (this.shippingData.isValid) {
        eventType = 'data-is-valid';
        btnNext.removeAttribute('disabled');
      } else {
        eventType = 'data-is-not-valid';
        btnNext.setAttribute('disabled', true);
      }
      form.dispatchEvent(new CustomEvent(eventType, {
        bubbles: true,
        detail: { section: 'shipping' }
      }));
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
                <input id="pickup-shipping" type="radio" name="method" data-type="Самовывоз" data-summa="0">
                <label for="pickup-shipping">
                  <img class="label-icon" src="./images/Tilda_Icons_3st_map.svg" width="50px" height="50px" />
                  Самовывоз (бесплатно)
                </label>
              </div>
              <div class="radio">
                <input id="courier-shipping" type="radio" name="method" data-type="Доставка курьером" data-summa="350">
                <label for="courier-shipping">
                  <img class="label-icon" src="./images/Tilda_Icons_3st_van.svg" width="50px" height="50px" />
                  Курьерская служба (350 рублей)
                </label>
              </div>
              <div class="radio">
                <input id="mail-shipping" type="radio" name="method" data-type="Почтой" data-summa="200">
                <label for="mail-shipping">
                  <img class="label-icon" src="./images/Tilda_Icons_3st_box.svg" width="50px" height="50px" />
                  Доставка почтой России (200 рублей)
                </label>
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
                  <input type="submit" class="btn-next-section" value="Сохранить" disabled />
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
