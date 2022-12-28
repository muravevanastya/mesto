export default class Section {
  constructor({items, renderer}, _container) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector('.elements');
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item)
    })
  }

  addItem(element) {
    this._container.prepend(element)
  }
}
