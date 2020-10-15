import './customer-data-section.css';

const CustomerDataSection = {
  customerData: {
    name: null,
    phone: null,
    email: null,
    isValid: false,
  },

  generatePreviewData() {
    const { name, phone, email } = this.customerData;
    return (
      `
        <p>${name ? name : ''}</p>
        <p>${phone ? phone : ''}</p>
        <p>${email ? email : ''}</p>
      `
    );
  },

  isValidData() {
    return !Object.values(this.customerData).includes(null);
  },

  afterRender() {
    const form = document.getElementById('customer-data-form');

    form.addEventListener('change', (event) => {
      const { target } = event;
      const { name, value } = target;
      this.customerData[name] = value;
      console.log(form.checkValidity());

      if (this.customerData.isValid !== this.isValidData()) {
        let eventType;
        if (this.isValidData()) {
          eventType = 'data-is-valid' 
        } else {
          eventType = 'data-is-not-valid'
        }
        form.dispatchEvent(new CustomEvent(eventType, {
          bubbles: true,
          detail: { section: 'customerData' }
        }));

        this.customerData.isValid = this.isValidData();
      }
    });

    form.addEventListener('submit', (e) => e.preventDefault());
  },

  render() {
    return `
      <div class="info-section-container" data-section="customerData">
        <h3 class="section-header col-25">Данные покупателя</h3>
        <div class="info-section-preview col-75">
          Введите данные покупателя
        </div>
        <div class="info-section-content col-75">
          <form id="customer-data-form">
            <label for="input-name" class="form-label">Имя*</label>
            <input type="text" class="form-field" id="input-name" name="name" placeholder=" " required>

            <label for="input-surname" class="form-label">Фамилия*</label>
            <input type="text" class="form-field" id="input-surname" name="name" placeholder=" " required>

            <label for="input-patronymic" class="form-label">Отчество</label>
            <input type="text" class="form-field" id="input-patronymic" name="name" placeholder=" ">

            <label for="input-email" class="form-label">Email*</label>
            <div class="form-field">
              <input type="email" id="input-email" name="email" placeholder=" " required>
              <span class="form-error">Это поле должно содержать E-Mail в формате example@site.com</span>
            </div>

            <label for="input-phone" class="form-label">Телефон*</label>
            <div class="form-field">
              <input id="input-phone" type="tel" name="phone" placeholder=" " required
                    pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" minlength="18" maxlength="18" />
              <span class="form-error">Это поле должно содержать телефон в формате <br/>+7 (123) 456-78-90</span>
            </div>

            <input type="submit" class="btn-next-section form-field" disabled value="Продолжить" />
          </form>
        </div>
      </div>
    `;
  },
};

export default CustomerDataSection;
