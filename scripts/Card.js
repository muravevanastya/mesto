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
    const likeButton = evt.target.closest('.element__like');
    likeButton.classList.toggle('element__like_active');
  }

  _setListeners(card) {
    this._newElementImage.addEventListener('click', () => this._openCardImage(this._newElement));

    const cardLike = card.querySelector('.element__like');
    cardLike.addEventListener('click', this._likeCard);
  }
}
