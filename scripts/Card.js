import {
  popupImageTitle,
  popupImageOpen,
  popupImage
} from './constants.js';

import {openPopup} from './index.js';

export default class Card {
  constructor(card, templateSelector) {
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
    this._newElement = this._getTemplate();
    this._newElementImage = this._newElement.querySelector('.element__image');
    this._newElementTitle = this._newElement.querySelector('.element__title');
  }

  _getTemplate() {
    const cardTemplate = this._templateSelector.querySelector('.element').cloneNode(true);
    return cardTemplate;
  };

  generateCard() {
    this._newElementTitle.textContent = this._name;
    this._newElementImage.alt = this._name;
    this._newElementImage.src = this._link;

    this._setListeners(this._newElement);
    return this._newElement;
  }

  _openCardImage() {
    popupImageTitle.textContent = this._newElementTitle.textContent;
    popupImageOpen.alt = this._newElementImage.alt;
    popupImageOpen.src = this._newElementImage.src;

    openPopup(popupImage);
  }

  _likeCard(evt) {
    const cardLike = evt.target.closest('.element__like');
    cardLike.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._newElement.remove();
    this._newElement = null;
  }

  _setListeners(card) {
    this._newElementImage.addEventListener('click', () => this._openCardImage(this._newElement));

    const likeButton = card.querySelector('.element__like');
    likeButton.addEventListener('click', this._likeCard);

    if (this._newElement.querySelector('.element__delete')) {
      this._newElement.querySelector('.element__delete').addEventListener('click', () => this._deleteCard());
    }
  }
}
