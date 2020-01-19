export default class StorageCart {
  //при инициализации StorageCart смотрим в хранилище,
  //если там что-то есть, то берем и помещаем в this.items,
  //если хранилище пустое, то просто создаем пустой массив this.items = [];
  constructor() {
    this.items = localStorage.getItem('items')
      ? JSON.parse(localStorage.getItem('items'))
      : [];
  }
  //Добавим метод для получения this.items
  getItems() {
    return this.items;
  }

  //Метод добавление товара в корзину
  add(id, itemName, image, price, count) {
    if (count == 1) {
      //проверяем уникальность
      this.items.push({ id, name: itemName, image, price, count });
    } else {
      //если товар не уникален, инкрементим счетчик сущ. позиции
      //и обновляем ценник
      this.items.find(item => {
        if (item.id == id) {
          ++item.count;
          item.price = parseInt(price) * item.count;
        }
      });
    }
  }

  //метод удаления товара из корзины
  remove(id, price) {
    id = parseInt(id);
    this.items.find(item => {
      //смотрим в массив, находим нужный товар
      //проверяем на количество, если последний то удаляем
      if (item.id == id && item.count == 1) {
        const filtrArr = this.items.filter(item => item.id !== id);
        this.items = filtrArr;
      }
      //в противном случае декриментим счетчик и правим цену
      if (item.id == id && item.count > 1) {
        --item.count;
        item.price = parseInt(price) * item.count;
      }
    });
  }

  //метод создания элемента
  createCartItem(id, name, image, price, count) {
    let newItem = `
    <div id ="${id}">
      <h3>${name}</h3>
      <img src=${image} />
      <h4>${price}</h4>
      <button class="js-remove-btn">Удалить</button>
      <span>x${count}</span>

    <div>
    `;
    return newItem;
  }

  //метод подсчета суммы для корзины + вставка на страничку
  //!!по хорошему нужно разбить на 2!!
  getTotalSumm() {
    let priceArr = [];
    this.items.forEach(({ price }) => {
      priceArr.push(parseInt(price));
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return `<br><hr>
    <p><b>Итого: ${priceArr.reduce(reducer, 0)}₽
    <b/></p>`;
  }
  //сохраняем корзину в localStorage
  saveItems() {
    localStorage.items = JSON.stringify(Array.from(this.items));
  }
}
