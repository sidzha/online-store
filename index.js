import './style.css';
import StorageCart from './components/storage-cart';
import { itemList, makeList, loadList } from './components/make-list';

const cartElem = document.querySelector('.js-cart');
const itemsListElem = document.querySelector('.js-items');

let currentPage = 1; // Страница обитания

//Создаем экз. списка для сохранения в localStorage
let newCart = new StorageCart();

//проверка наличия товаров в локальном хранилище
//если есть -> формируем элементы, иначе выводим сообщение "cart is empty"
function makeCartList() {
  cartElem.innerHTML = '';
  if (newCart.getItems().length) {
    newCart.getItems().forEach(({ id, name, image, price, count }) => {
      let newCartItem = newCart.createCartItem(id, name, image, price, count);
      cartElem.insertAdjacentHTML('afterbegin', newCartItem);
    });
    cartElem.insertAdjacentHTML('beforeend', newCart.getTotalSumm());
  } else {
    cartElem.textContent = 'Корзина пуста';
  }
}

//Поехали
makeList();
loadList();
makeCartList();

//EventListener получился громоздким, и по хорошему в реальном проекте
//его лучше разбить на несколько обработчиков, для ясности кода
//а ещё лучше React :)
document.addEventListener('click', function(evt) {
  //довабление товара в корзину
  if (evt.target.id == 'js-cart-btn') {
    itemList.find(item => {
      let targetId = parseInt(event.target.parentNode.id);
      if (targetId == item.id) {
        ++item.count;
        newCart.add(item.id, item.name, item.image, item.price, item.count);
        newCart.saveItems();
        makeCartList();
      }
    });
  }
  //удание товара из корзины
  if (evt.target.className == 'js-remove-btn') {
    itemList.find(item => {
      let targetId = parseInt(event.target.parentNode.id);
      if (targetId == item.id) {
        --item.count;
        newCart.remove(targetId, item.price);
        newCart.saveItems();
        makeCartList();
      }
    });
  }
  //сортировка по цене (возрастание)
  if (evt.target.id == 'js-price-ascending') {
    itemList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    itemsListElem.innerHTML = '';
    loadList();
  }
  //сортировка по наличию
  if (evt.target.id == 'js-available-ascending') {
    itemList.sort((a, b) => b.available - a.available);
    itemsListElem.innerHTML = '';
    loadList();
  }
  //обработчик на кнопку "пред. стр."
  if (evt.target.id == 'previous') {
    currentPage -= 1;
    loadList();
  }
  //тоже самое, только для "сл. стр"
  if (evt.target.id == 'next') {
    currentPage += 1;
    loadList();
  }
});

export { itemsListElem, currentPage };
