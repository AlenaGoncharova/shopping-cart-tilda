import { setCartItems } from './localStorage';
import OrderPage from './components/OrderPage';

const cartItems = [
  {
    id: "1",
    name: "Ноутбук Lenovo",
    price: "18000",
    img: "images/lenovo.jpg",
    count: 1,
  },
  {
    id: "2",
    name: "Apple Macbook",
    price: "25000",
    img: "images/macbook.jpg",
    count: 2,
  },
  {
    id: "3",
    name: "Apple ipad",
    price: "35000",
    img: "images/ipad.jpg",
    count: 1,
  },
  {
    id: "4",
    name: "Samsung Galaxy",
    price: "20000",
    img: "images/samsung.jpeg",
    count: 3,
  }
];

setCartItems(cartItems);
OrderPage.render();
