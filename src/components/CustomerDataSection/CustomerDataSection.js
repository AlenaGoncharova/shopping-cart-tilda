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
        <h3>Данные покупателя</h3>
        <div class="info-section-preview">
          Введите данные покупателя
        </div>
        <div class="info-section-content">
          <form id="customer-data-form">
            <div class="form-group">
                <label for="input-name" class="control-label">Ваше имя *</label>
                <input type="text" class="form-control" id="input-name" name="name" placeholder="Ваше имя">
            </div>
            <div class="form-group">
                <label for="input-email" class="control-label">Email *</label>
                <input type="email" class="form-control" id="input-email" name="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="input-phone" class="control-label">Телефон *</label>
                <input type="text" class="form-control" id="input-phone" name="phone" placeholder="Телефон">
            </div>
            <button type="submit" class="btn-next-section">Продолжить</button>
          </form>
        </div>
      </div>
    `;
  },
};

export default CustomerDataSection;
