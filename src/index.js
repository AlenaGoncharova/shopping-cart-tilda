import './main.css';

const cartItems = [
  {
    id: "1",
    name: "Ноутбук Lenovo",
    price: "18000",
    img: "img/cars/notebook_lenovo.jpg",
    count: 1,
  },
  {
    id: "2",
    name: "Фотокамера Nikon",
    price: "25000",
    img: "img/cars/camera_nikon.jpg",
    count: 2,
  },
  {
    id: "3",
    name: "Apple ipad",
    price: "35000",
    img: "img/cars/ipad.jpg",
    count: 1,
  },
  {
    id: "4",
    name: "Samsung Galaxy",
    price: "20000",
    img: "img/cars/phone_galaxy.jpg",
    count: 3,
  },
  {
    id: "5",
    name: "Телевизор SUPRA",
    price: "19000",
    img: "img/cars/tv_supra.jpg",
    count: 1,
  }
];

function openCart(){
  function displayCartItems() {
    const cart = document.querySelector('.cart');
    if (cartItems !== null){
      let totalItems = '<table class="shopping-list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
      cartItems.map((item) => {
        const {name, price, count} = item;
        totalItems += `
          <tr>
            <td>${name}</td>
            <td>${price}</td>
            <td>${count}</td>
          </tr>
        `;
      });
      totalItems += '</table>';
      cart.innerHTML = totalItems;
    } else {
      cart.innerHTML = 'В корзине пусто!';
    }
  }
 
  displayCartItems();

  const orderDetails = {
    customerData: {
      name: null,
      email: null,
      phone: null,
    },
    delivery: {
      method: null,
      address: null,
    },
    payment: {
      method: null,
    }
  };

  let activeInfoSection = document.querySelector('.active-info-section');
  const infoSectionContainers = document.querySelectorAll('.info-section-container');

  const forms = document.querySelectorAll('form');
  forms.forEach((form) => form.addEventListener('change', (event) => {
    const container = form.closest('.info-section-container');
    const step = container.getAttribute('data-step');

    const { target } = event;
    if (target.type !== 'radio') {
      const { name, value } = target;
      orderDetails[step][name] = value;
    } else {
      const { checked, name } = target;
      if (checked) {
        const value = target.getAttribute('data-type');
        orderDetails[step][name] = value;
      }
    }
  }));

  infoSectionContainers.forEach((section) => { 
    section.addEventListener('click', () => {
      if (section !== activeInfoSection) {
        activeInfoSection.classList.remove('active-info-section');

        section.classList.add('active-info-section');
        activeInfoSection = section;
      }
    });
  });
}

openCart();
