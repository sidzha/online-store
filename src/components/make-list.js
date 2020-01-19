let itemList = []; // Общий массив товаров
let pageList = []; // Массив таваров отображаемых на странице
const numberPerPage = 15; // Кол-во элементов per page
let numberOfPages = 0; // Всего страниц (необходимо для пагинации)
const numberOfItems = 3000; // Общее кол-во элементов в массиве

import { currentPage } from '../index';
import { drawList } from './draw-list';

//получаем общее кол-во страниц
function getNumberOfPages() {
  return Math.ceil(itemList.length / numberPerPage);
}

//Заполняем массив позициями
function makeList() {
  for (let id = 0; id < numberOfItems; id++)
    itemList.push({
      id,
      name: `Item ${(~~(Math.random() * 1e8)).toString(16)}`,
      image: `https://via.placeholder.com/150.png`,
      descr: `Супер стул ${(~~(Math.random() * 1e8)).toString(16)}`,
      price: `${Math.floor(Math.random() * 9999)}₽`,
      available: Math.random() < 0.7,
      count: 0
    });
  numberOfPages = getNumberOfPages();
}

//Получаем кусок массива дл отображния на странице
function loadList() {
  let begin = (currentPage - 1) * numberPerPage;
  let end = begin + numberPerPage;
  pageList = itemList.slice(begin, end); //вырезаем нужный нам кусок
  drawList(pageList); //рендерим на странице
  check();
}

//чекаем своё положение, для откл. кнопок
function check() {
  document.getElementById('next').disabled =
    currentPage == numberOfPages ? true : false;
  document.getElementById('previous').disabled =
    currentPage == 1 ? true : false;
}

export { itemList, makeList, loadList };
