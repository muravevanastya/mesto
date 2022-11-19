import {
  popupImageTitle,
  popupImageOpen,
  popupImage
} from './constants';

import {openPopup} from './index';

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
    const newElementImage = card.querySelector('.element__image');
    const newElementTitle = card.querySelector('.element__title');

    popupImageTitle.textContent = newElementTitle.textContent;
    popupImageOpen.alt = newElementImage.alt;
    popupImageOpen.src = newElementImage.src;

    openPopup(popupImage);
  }

  _likeCard(evt) {
    const cardLike = evt.target.closest('.element__like');
    cardLike.classList.toggle('element__like_active');
  }

  _deleteCard(evt) {
    const cardDelete = evt.target.closest('.element');
    cardDelete.remove();
  }

  _setListeners(card) {
    this._newElementImage.addEventListener('click', () => this._openCardImage(this._newElement));

    const likeButton = card.querySelector('.element__like');
    likeButton.addEventListener('click', this._likeCard);

    const deleteButton = card.querySelector('.element__delete');
    deleteButton.addEventListener('click', this._deleteCard);
  }
}
