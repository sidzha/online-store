import { itemsListElem } from '../index';

//рендерим список товаров на страницу
function drawList(list) {
  itemsListElem.innerHTML = '';
  list.forEach(({ id, name, image, descr, price, available }) => {
    let listItem = createItem(id, name, image, descr, price, available);
    itemsListElem.insertAdjacentHTML('beforeend', listItem);
  });
}

//функция создания элемента
function createItem(id, name, image, descr, price, available) {
  let newItem = `
      <div class="item-card" id ="${id}">
        <img src=${image} />
        <h4>${name}</h4>
        <p>${descr}</p>
        <h2>${price}</h2>
        ${checkAvailability(available)}
      <div>
      `;
  return newItem;
}

//чекаем доступность товара, для UX
function checkAvailability(status) {
  if (status) {
    return `
    <span class='status-badge available'>В наличии</span>
    <button class="btn" id="js-cart-btn">В корзину</button>
    `;
  } else {
    return `
    <span class='status-badge unavailable'>Закончился</span>
    <button class="btn"id="js-cart-btn" disabled>В корзину</button>
    `;
  }
}

export { drawList };
