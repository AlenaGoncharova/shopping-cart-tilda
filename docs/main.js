/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CheckingCartSection/CheckingCartSection.js":
/*!*******************************************************************!*\
  !*** ./src/components/CheckingCartSection/CheckingCartSection.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../localStorage */ "./src/localStorage.js");
/* harmony import */ var _checking_cart_section_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checking-cart-section.css */ "./src/components/CheckingCartSection/checking-cart-section.css");


const CheckingCartSection = {
  cartItems: null,
  orderSum: null,

  isValidData() {
    return true;
  },

  calcOrderSum() {
    return this.cartItems.reduce((sum, {
      price,
      count
    }) => sum += price * count, 0);
  },

  calcTotalCount() {
    return this.cartItems.reduce((sum, {
      count
    }) => sum += count, 0);
  },

  generatePreviewData() {
    return 'Нажмите для редактирования списка товаров';
  },

  updateItemCount(itemId, count, cart) {
    const item = this.cartItems.find(({
      id
    }) => id === itemId);
    item.count += count;

    if (item.count <= 0) {
      const el = document.querySelector(`#cart-items-list [id="${Number(itemId)}"]`);
      el.remove();
    } else {
      const el = document.querySelector(`#cart-items-list [id="${Number(itemId)}"] .item-count-value`);
      el.innerText = item.count;
    }

    this.orderSum = this.calcOrderSum();
    cart.dispatchEvent(new CustomEvent("cart-items-changed", {
      bubbles: true,
      detail: {
        orderSum: this.orderSum
      }
    }));
  },

  afterRender() {
    const cart = document.getElementById('cart-items-list');
    const btnUpdateItem = document.querySelectorAll('.btn-update-item');
    btnUpdateItem.forEach(btn => {
      btn.addEventListener('click', ({
        target
      }) => {
        const itemId = target.closest('li').getAttribute('id');
        const actionType = btn.getAttribute('data-action');

        switch (actionType) {
          case 'inc-item':
            this.updateItemCount(itemId, 1, cart);
            break;

          case 'dec-item':
            this.updateItemCount(itemId, -1, cart);
            break;

          case 'remove-item':
            const item = this.cartItems.find(({
              id
            }) => id === itemId);
            this.updateItemCount(itemId, -item.count, cart);
            break;

          default:
            break;
        }
      });
    });
  },

  render() {
    this.cartItems = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getCartItems)();
    this.orderSum = this.calcOrderSum();
    let content = `
      <div class="info-section-container active-info-section" data-section="checkingCart">
        <h3 class="section-header col-25">Детали заказа</h3>
        <div class="info-section-preview col-75">Нажмите для редактирования списка товаров</div>
        <div class="info-section-content col-75">
          <ul id="cart-items-list">
    `;

    if (this.cartItems !== null) {
      content += `
      ${this.cartItems.map(item => {
        const {
          id,
          name,
          price,
          count,
          img
        } = item;
        return `
            <li id=${id} class="cart-item">
              <div class="item-img"><img src="./${img}" height="65px"/></div>
              <span class="item-name">${name}</span>
              <span class="item-price">${price} Руб</span>
              <div class="item-count">
                <div class="btn-update-item" data-action="inc-item">
                  <img src="./images/up-chevron.svg" width="15px" height="15px" />
                </div>
                <div class="item-count-value">${count}</div>
                <div class="btn-update-item" data-action="dec-item">
                  <img src="./images/down-chevron.svg" width="15px" height="15px" />
                </div>
              </div>
              <div class="btn-update-item item-remove" data-action="remove-item">
                <img src="./images/Tilda_Icons_30_system_trash.svg" width="20px" height="20px" />
              </div>
            </li>
          `;
      }).join('\n')}`;
    } else {
      content = 'В корзине пусто!';
    }

    content += `
          </ul>
          <div id="cart-btn-next-section">
            <input type="submit" class="btn-next-section" value="Продолжить" />
          </div>
        </div>
      </div>
    </div>`;
    return content;
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckingCartSection);

/***/ }),

/***/ "./src/components/CheckingCartSection/index.js":
/*!*****************************************************!*\
  !*** ./src/components/CheckingCartSection/index.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _CheckingCartSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckingCartSection */ "./src/components/CheckingCartSection/CheckingCartSection.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CheckingCartSection__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/components/CheckoutOverview/CheckoutOverview.js":
/*!*************************************************************!*\
  !*** ./src/components/CheckoutOverview/CheckoutOverview.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _checkout_overview_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-overview.css */ "./src/components/CheckoutOverview/checkout-overview.css");

const CheckoutOverview = {
  render(orderСost, shippingCost) {
    return `
      <div id="checkout-overview">
        <table id="order-totals-table">
          <tbody>
            <tr>
              <th><span>Стоимость заказа</span></th>
              <td><span id="order-cost">${orderСost} Руб</span></td>
            </tr>
            <tr>
              <th><span>Доставка</span></th>
              <td><span id="shipping-cost">${shippingCost ? shippingCost + ' Руб' : 'БЕСПЛАТНО'}</span></td>
            </tr>
            <tr>
              <th><span>Итого к оплате:</span></th>
              <td><span id="total-cost">${orderСost + shippingCost} Руб</span></td>
            </tr>
          </tbody>
        </table>
        <input id="btn-checkout" type="submit" disabled value="Оформить заказ" />
      </div>
    `;
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutOverview);

/***/ }),

/***/ "./src/components/CheckoutOverview/index.js":
/*!**************************************************!*\
  !*** ./src/components/CheckoutOverview/index.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _CheckoutOverview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutOverview */ "./src/components/CheckoutOverview/CheckoutOverview.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CheckoutOverview__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/components/CustomerDataSection/CustomerDataSection.js":
/*!*******************************************************************!*\
  !*** ./src/components/CustomerDataSection/CustomerDataSection.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _customer_data_section_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-data-section.css */ "./src/components/CustomerDataSection/customer-data-section.css");

const CustomerDataSection = {
  customerData: {
    name: null,
    surname: null,
    patronymic: null,
    phone: null,
    email: null,
    isValid: false
  },

  generatePreviewData() {
    if (Object.values(this.customerData).find(value => value !== null)) {
      const {
        surname,
        name,
        patronymic,
        phone,
        email
      } = this.customerData;
      return `
          <p>${surname ? surname : ''} ${name ? name : ''} ${patronymic ? patronymic : ''}</p>
          <p>${phone ? phone : ''}</p>
          <p>${email ? email : ''}</p>
        `;
    } else {
      return '<p>Введите данные покупателя</p>';
    }
  },

  isValidData() {
    return customerData.isValid;
  },

  afterRender() {
    const form = document.getElementById('customer-data-form');
    const btnNext = form.querySelector('.btn-next-section');
    form.addEventListener('change', event => {
      const {
        target
      } = event;
      const {
        name,
        value
      } = target;
      this.customerData[name] = value;
      console.log(form.checkValidity());

      if (this.customerData.isValid !== form.checkValidity()) {
        this.customerData.isValid = form.checkValidity();
        let eventType;

        if (this.customerData.isValid) {
          eventType = 'data-is-valid';
          btnNext.removeAttribute('disabled');
        } else {
          eventType = 'data-is-not-valid';
          btnNext.setAttribute('disabled', true);
        }

        form.dispatchEvent(new CustomEvent(eventType, {
          bubbles: true,
          detail: {
            section: 'customerData'
          }
        }));
      }
    });
    form.addEventListener('submit', e => e.preventDefault());
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
            <input type="text" class="form-field" id="input-surname" name="surname" placeholder=" " required>

            <label for="input-patronymic" class="form-label">Отчество</label>
            <input type="text" class="form-field" id="input-patronymic" name="patronymic" placeholder=" ">

            <label for="input-email" class="form-label">Email*</label>
            <div class="form-field">
              <input type="email" id="input-email" name="email" placeholder=" " required>
              <span class="form-error">Это поле должно содержать E-Mail в формате example@site.com</span>
            </div>

            <label for="input-phone" class="form-label">Телефон*</label>
            <div class="form-field">
              <input id="input-phone" type="tel" name="phone" placeholder=" " required
                    minlength="16" maxlength="16" />
              <span class="form-error">Это поле должно содержать телефон в формате <br/>+7(123)456-78-90</span>
            </div>

            <input type="submit" class="btn-next-section form-field" disabled value="Сохранить" />
          </form>
        </div>
      </div>
    `;
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerDataSection);

/***/ }),

/***/ "./src/components/CustomerDataSection/index.js":
/*!*****************************************************!*\
  !*** ./src/components/CustomerDataSection/index.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _CustomerDataSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerDataSection */ "./src/components/CustomerDataSection/CustomerDataSection.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CustomerDataSection__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/components/OrderPage/OrderPage.js":
/*!***********************************************!*\
  !*** ./src/components/OrderPage/OrderPage.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _CheckingCartSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CheckingCartSection */ "./src/components/CheckingCartSection/index.js");
/* harmony import */ var _CustomerDataSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomerDataSection */ "./src/components/CustomerDataSection/index.js");
/* harmony import */ var _ShippingSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ShippingSection */ "./src/components/ShippingSection/index.js");
/* harmony import */ var _PaymentSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PaymentSection */ "./src/components/PaymentSection/index.js");
/* harmony import */ var _CheckoutOverview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CheckoutOverview */ "./src/components/CheckoutOverview/index.js");
/* harmony import */ var _order_page_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-page.css */ "./src/components/OrderPage/order-page.css");
/* harmony import */ var _forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms.css */ "./src/components/OrderPage/forms.css");







const OrderPage = {
  afterRender() {
    const checkoutSteps = [{
      sectionName: 'checkingCart',
      isValid: true,
      isActive: true
    }, {
      sectionName: 'customerData',
      isvalid: false,
      isActive: false
    }, {
      sectionName: 'shipping',
      isValid: false,
      isActive: false
    }, {
      sectionName: 'payment',
      isValid: false,
      isActive: false
    }];
    const mappingSection = {
      checkingCart: _CheckingCartSection__WEBPACK_IMPORTED_MODULE_0__.default,
      customerData: _CustomerDataSection__WEBPACK_IMPORTED_MODULE_1__.default,
      shipping: _ShippingSection__WEBPACK_IMPORTED_MODULE_2__.default,
      payment: _PaymentSection__WEBPACK_IMPORTED_MODULE_3__.default
    };
    const infoSectionContainers = document.querySelectorAll('.info-section-container');
    const btnNextSection = document.querySelectorAll('.btn-next-section');
    const shippingForm = document.querySelector('[data-section="shipping"]');
    const sidebarContainer = document.getElementById('sidebar-container');

    function changeActiveSection(currentActiveSection, newActiveSection) {
      const sectionName = currentActiveSection.getAttribute('data-section');
      const preview = currentActiveSection.querySelector('.info-section-preview');
      const previewContent = mappingSection[sectionName].generatePreviewData();
      preview.innerHTML = previewContent;
      currentActiveSection.classList.remove('active-info-section');

      if (newActiveSection) {
        newActiveSection.classList.add('active-info-section');
        const newSectionName = newActiveSection.getAttribute('data-section');
        const currentStep = checkoutSteps.find(({
          sectionName
        }) => sectionName === newSectionName);
        currentStep.isActive = true;
      }
    }

    infoSectionContainers.forEach(section => {
      section.addEventListener('click', () => {
        section.classList.add('active-info-section');
        const currentSectionName = section.getAttribute('data-section');
        const currentStep = checkoutSteps.find(({
          sectionName
        }) => sectionName === currentSectionName);
        currentStep.isActive = true;
      });
    });
    btnNextSection.forEach(btn => {
      btn.addEventListener('click', event => {
        const currentSection = event.target.closest('.active-info-section');
        const currentSectionName = currentSection.getAttribute('data-section');
        const nextStep = checkoutSteps.find(({
          sectionName,
          isValid,
          isActive
        }) => {
          return !isValid && !isActive && sectionName !== currentSectionName;
        });

        if (nextStep) {
          const newActiveSection = document.querySelector(`[data-section="${nextStep.sectionName}"]`);
          changeActiveSection(currentSection, newActiveSection);
        } else {
          changeActiveSection(currentSection, null);
        }

        event.stopPropagation();
      });
    });
    shippingForm.addEventListener("shipping-method-changed", function (event) {
      sidebarContainer.innerHTML = _CheckoutOverview__WEBPACK_IMPORTED_MODULE_4__.default.render(_CheckingCartSection__WEBPACK_IMPORTED_MODULE_0__.default.calcOrderSum(), event.detail.cost);
    });
    const cart = document.querySelector('[data-section="checkingCart"]');
    cart.addEventListener("cart-items-changed", function (event) {
      const totalCount = _CheckingCartSection__WEBPACK_IMPORTED_MODULE_0__.default.calcTotalCount();

      if (totalCount > 0) {
        sidebarContainer.innerHTML = _CheckoutOverview__WEBPACK_IMPORTED_MODULE_4__.default.render(event.detail.orderSum, _ShippingSection__WEBPACK_IMPORTED_MODULE_2__.default.shippingData.cost);
      } else {
        const container = document.querySelector('.container');
        container.innerHTML = `
          <div id="empty-cart"><div>Корзина пуста :(</div>
          <div>Но в нашем каталоге вы найдете все, что нужно!</div></div>
        `;
      }
    });
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener("data-is-valid", function (event) {
        const currentStep = checkoutSteps.find(({
          sectionName
        }) => sectionName === event.detail.section);
        currentStep.isValid = true;
        const validSteps = checkoutSteps.map(step => step.isValid === true);

        if (!validSteps.includes(false)) {
          const btn = document.getElementById('btn-checkout');
          btn.removeAttribute('disabled');
        }
      });
    });
    forms.forEach(form => {
      form.addEventListener("data-is-not-valid", function (event) {
        const currentStep = checkoutSteps.find(({
          sectionName
        }) => sectionName === event.detail.section);
        currentStep.isValid = false;
        const btn = document.getElementById('btn-checkout');
        btn.setAttribute('disabled', true);
      });
    });
    _CheckingCartSection__WEBPACK_IMPORTED_MODULE_0__.default.afterRender();
    _CustomerDataSection__WEBPACK_IMPORTED_MODULE_1__.default.afterRender();
    _ShippingSection__WEBPACK_IMPORTED_MODULE_2__.default.afterRender();
    _PaymentSection__WEBPACK_IMPORTED_MODULE_3__.default.afterRender();
  },

  render() {
    let content = _CheckingCartSection__WEBPACK_IMPORTED_MODULE_0__.default.render();
    content += _CustomerDataSection__WEBPACK_IMPORTED_MODULE_1__.default.render();
    content += _ShippingSection__WEBPACK_IMPORTED_MODULE_2__.default.render();
    content += _PaymentSection__WEBPACK_IMPORTED_MODULE_3__.default.render();
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = content;
    const sidebarContainer = document.getElementById('sidebar-container');
    sidebarContainer.innerHTML = _CheckoutOverview__WEBPACK_IMPORTED_MODULE_4__.default.render(_CheckingCartSection__WEBPACK_IMPORTED_MODULE_0__.default.orderSum, 0);
    this.afterRender();
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderPage);

/***/ }),

/***/ "./src/components/OrderPage/index.js":
/*!*******************************************!*\
  !*** ./src/components/OrderPage/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _OrderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderPage */ "./src/components/OrderPage/OrderPage.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OrderPage__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/components/PaymentSection/PaymentSection.js":
/*!*********************************************************!*\
  !*** ./src/components/PaymentSection/PaymentSection.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _payment_section_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-section.css */ "./src/components/PaymentSection/payment-section.css");

const PaymentSection = {
  paymentData: {
    method: null,
    isValid: false
  },

  generatePreviewData() {
    const {
      method
    } = this.paymentData;
    return `<p>${method ? method : 'Выберите способ оплаты'}</p>`;
  },

  isValidData() {
    return this.paymentData.isValid;
  },

  afterRender() {
    const form = document.getElementById('payment-form');
    const btnNext = form.querySelector('.btn-next-section');
    form.addEventListener('change', ({
      target
    }) => {
      const {
        name,
        checked
      } = target;

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
          detail: {
            section: 'payment'
          }
        }));
        this.paymentData.isValid = this.isValidData();
      }
    });
    form.addEventListener('submit', e => e.preventDefault());
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
                      <img class="label-icon" src="./images/Tilda_Icons_3st_money.svg" width="50px" height="50px" />
                      Наличный расчёт
                    </label>
                  </div>
                  <div class="radio">
                    <input id="payment-card" type="radio" name="method" data-type="Картой онлайн">
                    <label for="payment-card">
                      <img class="label-icon" src="./images/Tilda_Icons_3st_card.svg" width="50px" height="50px" />
                      Оплата онлайн на сайте
                    </label>
                  </div>
              </div>
              <input type="submit" class="btn-next-section" disabled value="Сохранить" />
            </form>
          </div>
        </div>
      </div>
    `;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentSection);

/***/ }),

/***/ "./src/components/PaymentSection/index.js":
/*!************************************************!*\
  !*** ./src/components/PaymentSection/index.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _PaymentSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentSection */ "./src/components/PaymentSection/PaymentSection.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PaymentSection__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/components/ShippingSection/ShippingSection.js":
/*!***********************************************************!*\
  !*** ./src/components/ShippingSection/ShippingSection.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _shipping_section_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipping-section.css */ "./src/components/ShippingSection/shipping-section.css");

const ShippingSection = {
  shippingData: {
    method: null,
    address: null,
    pickupAddress: 'Москва, Красная площадь 3.',
    cost: null,
    isValid: false
  },

  generatePreviewData() {
    const {
      method,
      address,
      pickupAddress
    } = this.shippingData;

    if (method !== null) {
      return `
          <p>${method ? method : ''}</p>
          <p>${method !== 'Самовывоз' ? address ? address : '' : pickupAddress}</p>
        `;
    } else {
      return 'Выберите способ оплаты';
    }
  },

  isValidData() {
    return this.shippingData.isValid;
  },

  afterRender() {
    const form = document.getElementById('shipping-form');
    const addressInfo = document.getElementById('address-info-container');
    const pickupAddress = addressInfo.querySelector('#pickup-address');
    const shippingAddress = addressInfo.querySelector('#shipping-address');
    const btnNext = form.querySelector('.btn-next-section');
    form.addEventListener('change', ({
      target
    }) => {
      const value = target.getAttribute('data-type');
      this.shippingData.method = value;
      const cost = Number(target.getAttribute('data-summa'));
      this.shippingData.cost = cost;
      form.dispatchEvent(new CustomEvent("shipping-method-changed", {
        bubbles: true,
        detail: {
          cost
        }
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
        detail: {
          section: 'shipping'
        }
      }));
    });
    form.addEventListener('submit', e => e.preventDefault());
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
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingSection);

/***/ }),

/***/ "./src/components/ShippingSection/index.js":
/*!*************************************************!*\
  !*** ./src/components/ShippingSection/index.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ShippingSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShippingSection */ "./src/components/ShippingSection/ShippingSection.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ShippingSection__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _components_OrderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OrderPage */ "./src/components/OrderPage/index.js");


const cartItems = [{
  id: "1",
  name: "Ноутбук Lenovo",
  price: "18000",
  img: "./images/lenovo.jpg",
  count: 1
}, {
  id: "2",
  name: "Apple Macbook",
  price: "25000",
  img: "./images/macbook.jpg",
  count: 2
}, {
  id: "3",
  name: "Apple ipad",
  price: "35000",
  img: "./images/ipad.jpg",
  count: 1
}, {
  id: "4",
  name: "Samsung Galaxy",
  price: "20000",
  img: "./images/samsung.jpeg",
  count: 3
}];
(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.setCartItems)(cartItems);
_components_OrderPage__WEBPACK_IMPORTED_MODULE_0__.default.render();

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/*! namespace exports */
/*! export getCartItems [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setCartItems [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCartItems": () => /* binding */ getCartItems,
/* harmony export */   "setCartItems": () => /* binding */ setCartItems
/* harmony export */ });
const getCartItems = () => {
  const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
  return cartItems;
};
const setCartItems = cartItems => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CheckingCartSection/checking-cart-section.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CheckingCartSection/checking-cart-section.css ***!
  \************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#cart-items-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n#cart-items-list li {\n  display: grid;\n  grid-template-areas: \n    \"item-img item-name item-count item-remove\"\n    \"item-img item-name item-count item-price\";\n  grid-template-rows: 25px 40px;\n  grid-template-columns: 100px 1fr 15px 120px;\n  margin: 15px 0;\n}\n\n#cart-items-list li:first-child {\n  margin-top: 0;\n}\n\n.item-img {\n  grid-area: item-img;\n}\n\n.item-name {\n  grid-area: item-name;\n}\n\n.item-price { \n  grid-area: item-price;\n  justify-self: end; \n  align-self: end; \n}\n\n.item-count { \n  grid-area: item-count; \n  align-self: center;\n}\n\n.item-count .item-count-value {\n  text-align: center;\n}\n\n.item-remove { \n  grid-area: item-remove;\n  justify-self: end;\n}\n\n#cart-btn-next-section {\n  display: flex;\n  justify-content: flex-end;\n}\n\n#cart-btn-next-section .btn-next-section {\n  flex: 0.35;\n}\n\n.btn-update-item {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://src/components/CheckingCartSection/checking-cart-section.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb;;8CAE4C;EAC5C,6BAA6B;EAC7B,2CAA2C;EAC3C,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB","sourcesContent":["#cart-items-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n#cart-items-list li {\n  display: grid;\n  grid-template-areas: \n    \"item-img item-name item-count item-remove\"\n    \"item-img item-name item-count item-price\";\n  grid-template-rows: 25px 40px;\n  grid-template-columns: 100px 1fr 15px 120px;\n  margin: 15px 0;\n}\n\n#cart-items-list li:first-child {\n  margin-top: 0;\n}\n\n.item-img {\n  grid-area: item-img;\n}\n\n.item-name {\n  grid-area: item-name;\n}\n\n.item-price { \n  grid-area: item-price;\n  justify-self: end; \n  align-self: end; \n}\n\n.item-count { \n  grid-area: item-count; \n  align-self: center;\n}\n\n.item-count .item-count-value {\n  text-align: center;\n}\n\n.item-remove { \n  grid-area: item-remove;\n  justify-self: end;\n}\n\n#cart-btn-next-section {\n  display: flex;\n  justify-content: flex-end;\n}\n\n#cart-btn-next-section .btn-next-section {\n  flex: 0.35;\n}\n\n.btn-update-item {\n  cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CheckoutOverview/checkout-overview.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CheckoutOverview/checkout-overview.css ***!
  \*****************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#checkout-overview {\n  padding: 10px;\n}\n\n#order-totals-table {\n  border-spacing: 0;\n  width: 100%;\n}\n\n#order-totals-table tr:last-child th,\n#order-totals-table tr:last-child td {\n  border-top: 1px solid #000;\n}\n\n#order-totals-table th {\n  text-align: left;\n  padding: 10px 0;\n}\n\n#order-totals-table td {\n  text-align: right;\n  padding: 10px 0;\n}\n\n#btn-checkout {\n  width: 100%;\n  height: 40px;\n}", "",{"version":3,"sources":["webpack://src/components/CheckoutOverview/checkout-overview.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":["#checkout-overview {\n  padding: 10px;\n}\n\n#order-totals-table {\n  border-spacing: 0;\n  width: 100%;\n}\n\n#order-totals-table tr:last-child th,\n#order-totals-table tr:last-child td {\n  border-top: 1px solid #000;\n}\n\n#order-totals-table th {\n  text-align: left;\n  padding: 10px 0;\n}\n\n#order-totals-table td {\n  text-align: right;\n  padding: 10px 0;\n}\n\n#btn-checkout {\n  width: 100%;\n  height: 40px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CustomerDataSection/customer-data-section.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CustomerDataSection/customer-data-section.css ***!
  \************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#customer-data-form {\n  display: grid;\n  grid-template-columns: [labels] auto [controls] 1fr;\n  grid-auto-flow: row;\n  grid-gap: .8em;\n}\n\n#customer-data-form > .form-label  {\n  grid-column: labels;\n  grid-row: auto;\n}\n\n#customer-data-form > .form-field {\n  grid-column: controls;\n  grid-row: auto;\n}\n\n#customer-data-form > button {\n  grid-column: span 2;\n}\n\n#customer-data-form .form-error {\n\tcolor: red;\n\ttext-align: right;\n\tfont-size: 14px;\n\tdisplay: block;\n\tmargin-top: 3px;\n\tdisplay: none;\n}\n\n#customer-data-form .form-field input {\n\twidth: 100%;\n}\n\n#customer-data-form input:valid:not(:placeholder-shown) {\n\tborder-color: green;\n}\n\n#customer-data-form input:invalid:not(:placeholder-shown) {\n\tborder-color: red;\n}\n\n#customer-data-form input:invalid:not(:placeholder-shown) + .form-error {\n\tdisplay: block;\n}", "",{"version":3,"sources":["webpack://src/components/CustomerDataSection/customer-data-section.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mDAAmD;EACnD,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;CACC,UAAU;CACV,iBAAiB;CACjB,eAAe;CACf,cAAc;CACd,eAAe;CACf,aAAa;AACd;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,cAAc;AACf","sourcesContent":["#customer-data-form {\n  display: grid;\n  grid-template-columns: [labels] auto [controls] 1fr;\n  grid-auto-flow: row;\n  grid-gap: .8em;\n}\n\n#customer-data-form > .form-label  {\n  grid-column: labels;\n  grid-row: auto;\n}\n\n#customer-data-form > .form-field {\n  grid-column: controls;\n  grid-row: auto;\n}\n\n#customer-data-form > button {\n  grid-column: span 2;\n}\n\n#customer-data-form .form-error {\n\tcolor: red;\n\ttext-align: right;\n\tfont-size: 14px;\n\tdisplay: block;\n\tmargin-top: 3px;\n\tdisplay: none;\n}\n\n#customer-data-form .form-field input {\n\twidth: 100%;\n}\n\n#customer-data-form input:valid:not(:placeholder-shown) {\n\tborder-color: green;\n}\n\n#customer-data-form input:invalid:not(:placeholder-shown) {\n\tborder-color: red;\n}\n\n#customer-data-form input:invalid:not(:placeholder-shown) + .form-error {\n\tdisplay: block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/OrderPage/forms.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/OrderPage/forms.css ***!
  \**********************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[type=text],\ninput[type=email],\ninput[type=tel] {\n  border: 1px solid #005b85;\n  box-sizing: border-box;\n  font-family: 'Poiret One', cursive;\n  font-size: 1.1rem;\n  height: 35px;\n  padding: 8px;\n}\n\ninput[type=text]::placeholder,\ninput[type=email]::placeholder,\ninput[type=tel] {\n  font-family: 'Poiret One', cursive;\n}\n\ninput[type=\"submit\"] {\n  border: 1px solid #000;\n  background-color: #000;\n  color: #FFF;\n  font-size: 1.1rem;\n  font-family: 'Poiret One', cursive;\n  font-weight: 700;\n  box-sizing: border-box;\n  height: 40px;\n  padding: 8px;\n  cursor: pointer;\n}\n\ninput[type=\"submit\"]:hover {\n  background-color: #005b85;\n  border-color: #005b85;\n}\n\ninput[type=\"submit\"]:disabled {\n  background-color: rgb(177, 177, 177);\n  border-color:  rgb(177, 177, 177);\n  cursor: auto;\n}\n\ntextarea:focus, input:focus, button:hover {\n  outline: none;\n}\n\ninput[type=\"radio\"] {\n  position: absolute;\n  opacity: 0;\n}\n\ninput[type=\"radio\"] + label {\n  position: relative;\n  cursor: pointer;\n  line-height: 30px;\n}\n\ninput[type=\"radio\"] + label {\n  padding: 0 0 0 35px;\n}\n\ninput[type=\"radio\"] + label:before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  left: 0;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #CDD1DA;\n  border-radius: 50%;\n  background: #FFF;\n}\n\ninput[type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  top: 9px;\n  left: 12px;\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  background: rgb(165, 165, 165);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.5);\n  opacity: 0;\n  transition: .2s;\n}\n\ninput[type=\"radio\"]:checked + label:after {\n  opacity: 1;\n  top: 1px;\n  left: 4px;\n  width: 16px;\n  height: 16px;\n}\n\n.label-icon {\n  vertical-align: middle;\n}", "",{"version":3,"sources":["webpack://src/components/OrderPage/forms.css"],"names":[],"mappings":"AAAA;;;EAGE,yBAAyB;EACzB,sBAAsB;EACtB,kCAAkC;EAClC,iBAAiB;EACjB,YAAY;EACZ,YAAY;AACd;;AAEA;;;EAGE,kCAAkC;AACpC;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,kCAAkC;EAClC,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;EACpC,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,8BAA8B;EAC9B,0CAA0C;EAC1C,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;EACT,WAAW;EACX,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["input[type=text],\ninput[type=email],\ninput[type=tel] {\n  border: 1px solid #005b85;\n  box-sizing: border-box;\n  font-family: 'Poiret One', cursive;\n  font-size: 1.1rem;\n  height: 35px;\n  padding: 8px;\n}\n\ninput[type=text]::placeholder,\ninput[type=email]::placeholder,\ninput[type=tel] {\n  font-family: 'Poiret One', cursive;\n}\n\ninput[type=\"submit\"] {\n  border: 1px solid #000;\n  background-color: #000;\n  color: #FFF;\n  font-size: 1.1rem;\n  font-family: 'Poiret One', cursive;\n  font-weight: 700;\n  box-sizing: border-box;\n  height: 40px;\n  padding: 8px;\n  cursor: pointer;\n}\n\ninput[type=\"submit\"]:hover {\n  background-color: #005b85;\n  border-color: #005b85;\n}\n\ninput[type=\"submit\"]:disabled {\n  background-color: rgb(177, 177, 177);\n  border-color:  rgb(177, 177, 177);\n  cursor: auto;\n}\n\ntextarea:focus, input:focus, button:hover {\n  outline: none;\n}\n\ninput[type=\"radio\"] {\n  position: absolute;\n  opacity: 0;\n}\n\ninput[type=\"radio\"] + label {\n  position: relative;\n  cursor: pointer;\n  line-height: 30px;\n}\n\ninput[type=\"radio\"] + label {\n  padding: 0 0 0 35px;\n}\n\ninput[type=\"radio\"] + label:before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  left: 0;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #CDD1DA;\n  border-radius: 50%;\n  background: #FFF;\n}\n\ninput[type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  top: 9px;\n  left: 12px;\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  background: rgb(165, 165, 165);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.5);\n  opacity: 0;\n  transition: .2s;\n}\n\ninput[type=\"radio\"]:checked + label:after {\n  opacity: 1;\n  top: 1px;\n  left: 4px;\n  width: 16px;\n  height: 16px;\n}\n\n.label-icon {\n  vertical-align: middle;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/OrderPage/order-page.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/OrderPage/order-page.css ***!
  \***************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #e2ebee;\n  font-family: 'Poiret One', cursive;\n  font-size: 16px;\n}\n\n.container {\n  display: flex;\n  max-width: 1200px;\n  margin: auto;\n}\n\n.col-25 {\n  -ms-flex: 25%;\n  flex: 25%;\n}\n\n.col-75 {\n  -ms-flex: 75%;\n  flex: 75%;\n}\n\n@media (max-width: 800px) {\n  .container {\n    flex-direction: column;\n  }\n  .col-25 {\n    margin-bottom: 20px;\n    margin-left: 0 !important;\n  }\n}\n\n#main-container,\n#sidebar-container {\n  background-color: #fff;\n  padding: 25px;\n}\n\n#sidebar-container {\n  margin-left: 20px;\n}\n\n.info-section-container {\n  border-bottom: 1px solid #000;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  display: flex;\n  min-height: 80px;\n}\n\n.info-section-container:last-child {\n  border-bottom: none;\n}\n\n.info-section-content {\n  display: none;\n  padding: 0 15px 15px 20px;\n}\n\n.info-section-preview {\n  display: block;\n  margin-top: 3px;\n  padding: 0 15px 15px 20px;\n}\n\n.info-section-preview p {\n  margin: 0;\n  padding: 0;\n}\n\n.active-info-section .info-section-content  {\n  display: block;\n}\n\n.active-info-section .info-section-preview  {\n  display: none;\n}\n\n.section-header {\n  margin: 0;\n}\n\n#empty-cart {\n  width: 100%;\n  padding: 150px;\n  font-size: 1.5em;\n}", "",{"version":3,"sources":["webpack://src/components/OrderPage/order-page.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,mBAAmB;IACnB,yBAAyB;EAC3B;AACF;;AAEA;;EAEE,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB","sourcesContent":["body {\n  background-color: #e2ebee;\n  font-family: 'Poiret One', cursive;\n  font-size: 16px;\n}\n\n.container {\n  display: flex;\n  max-width: 1200px;\n  margin: auto;\n}\n\n.col-25 {\n  -ms-flex: 25%;\n  flex: 25%;\n}\n\n.col-75 {\n  -ms-flex: 75%;\n  flex: 75%;\n}\n\n@media (max-width: 800px) {\n  .container {\n    flex-direction: column;\n  }\n  .col-25 {\n    margin-bottom: 20px;\n    margin-left: 0 !important;\n  }\n}\n\n#main-container,\n#sidebar-container {\n  background-color: #fff;\n  padding: 25px;\n}\n\n#sidebar-container {\n  margin-left: 20px;\n}\n\n.info-section-container {\n  border-bottom: 1px solid #000;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  display: flex;\n  min-height: 80px;\n}\n\n.info-section-container:last-child {\n  border-bottom: none;\n}\n\n.info-section-content {\n  display: none;\n  padding: 0 15px 15px 20px;\n}\n\n.info-section-preview {\n  display: block;\n  margin-top: 3px;\n  padding: 0 15px 15px 20px;\n}\n\n.info-section-preview p {\n  margin: 0;\n  padding: 0;\n}\n\n.active-info-section .info-section-content  {\n  display: block;\n}\n\n.active-info-section .info-section-preview  {\n  display: none;\n}\n\n.section-header {\n  margin: 0;\n}\n\n#empty-cart {\n  width: 100%;\n  padding: 150px;\n  font-size: 1.5em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/PaymentSection/payment-section.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/PaymentSection/payment-section.css ***!
  \*************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#payment-form {\n  display: flex;\n  justify-content: space-between;\n}\n\n#payment-form input[type=\"submit\"] {\n  flex: 0.8;\n}", "",{"version":3,"sources":["webpack://src/components/PaymentSection/payment-section.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,SAAS;AACX","sourcesContent":["#payment-form {\n  display: flex;\n  justify-content: space-between;\n}\n\n#payment-form input[type=\"submit\"] {\n  flex: 0.8;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ShippingSection/shipping-section.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ShippingSection/shipping-section.css ***!
  \***************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#address-info-container {\n  margin: 10px 0;\n}\n\n.address-info {\n  display: none;\n}\n\n.active-address {\n  display: grid;\n  grid-template-columns: [labels] auto [controls] 1fr;\n  grid-auto-flow: row;\n  grid-gap: .8em;\n}\n\n.active-address .form-label  {\n  grid-column: labels;\n  grid-row: auto;\n}\n\n.active-address .form-field {\n  grid-column: controls;\n  grid-row: auto;\n}\n\n.active-address .btn-next-section {\n  grid-column: controls;\n}\n\n#shipping-btn-next-section {\n  text-align: right;\n  margin-top: 10px;\n}\n\n#shipping-btn-next-section .btn-next-section {\n  width: 40%;\n}", "",{"version":3,"sources":["webpack://src/components/ShippingSection/shipping-section.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mDAAmD;EACnD,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ","sourcesContent":["#address-info-container {\n  margin: 10px 0;\n}\n\n.address-info {\n  display: none;\n}\n\n.active-address {\n  display: grid;\n  grid-template-columns: [labels] auto [controls] 1fr;\n  grid-auto-flow: row;\n  grid-gap: .8em;\n}\n\n.active-address .form-label  {\n  grid-column: labels;\n  grid-row: auto;\n}\n\n.active-address .form-field {\n  grid-column: controls;\n  grid-row: auto;\n}\n\n.active-address .btn-next-section {\n  grid-column: controls;\n}\n\n#shipping-btn-next-section {\n  text-align: right;\n  margin-top: 10px;\n}\n\n#shipping-btn-next-section .btn-next-section {\n  width: 40%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./src/components/CheckingCartSection/checking-cart-section.css":
/*!**********************************************************************!*\
  !*** ./src/components/CheckingCartSection/checking-cart-section.css ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_checking_cart_section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./checking-cart-section.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CheckingCartSection/checking-cart-section.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_checking_cart_section_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_checking_cart_section_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/CheckoutOverview/checkout-overview.css":
/*!***************************************************************!*\
  !*** ./src/components/CheckoutOverview/checkout-overview.css ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_checkout_overview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./checkout-overview.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CheckoutOverview/checkout-overview.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_checkout_overview_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_checkout_overview_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/CustomerDataSection/customer-data-section.css":
/*!**********************************************************************!*\
  !*** ./src/components/CustomerDataSection/customer-data-section.css ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_customer_data_section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./customer-data-section.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CustomerDataSection/customer-data-section.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_customer_data_section_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_customer_data_section_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/OrderPage/forms.css":
/*!********************************************!*\
  !*** ./src/components/OrderPage/forms.css ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./forms.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/OrderPage/forms.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/OrderPage/order-page.css":
/*!*************************************************!*\
  !*** ./src/components/OrderPage/order-page.css ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_order_page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./order-page.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/OrderPage/order-page.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_order_page_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_order_page_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/PaymentSection/payment-section.css":
/*!***********************************************************!*\
  !*** ./src/components/PaymentSection/payment-section.css ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_payment_section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./payment-section.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/PaymentSection/payment-section.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_payment_section_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_payment_section_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/ShippingSection/shipping-section.css":
/*!*************************************************************!*\
  !*** ./src/components/ShippingSection/shipping-section.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shipping_section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./shipping-section.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ShippingSection/shipping-section.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shipping_section_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shipping_section_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map