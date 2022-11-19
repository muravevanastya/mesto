import * from './constants';

class Card {
  constructor(card, templateSelector) {
    this._newElement = this._getTemplate();
    this._newElementImage = this._newElement.querySelector('.element__image');
    this._newElementTitle = this._newElement.querySelector('.element__title');
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = this._templateSelector.querySelector('.element').cloneNode(true);
    return cardTemplate;
  };

  generateCard() {
    this._newElementTitle.textContent = this._name;
    this._newElementImage.alt = this._name;
    this._newElementImage.src = this.link;

    this._setListeners(this._newElement);
    return this._newElement;
  }

  _openCardImage(card) {

  }

  _setListeners() {

  }
}
