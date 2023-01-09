export default class Card {
  constructor(card, templateSelector, handleCardClick, handleTrashClick, userId) {
    this._card = card;
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._id = card._id;
    this._userId = userId;
    // this._ownerId = card.owner._id;
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

    this._elementDelete = this._newElement.querySelector('.element__delete');

    if (this._ownerId !== this._userId) {
      this._elementDelete.classList.add('element__delete_hidden')
    }

    this._setListeners(this._newElement);
    return this._newElement;
  }

  _likeCard(evt) {
    const cardLike = evt.target.closest('.element__like');
    cardLike.classList.toggle('element__like_active');
  }

  deleteCard() {
    this._newElement.remove();
    this._newElement = null;
  }

  _handleImageClick() {
		this._handleCardClick(this._name, this._link);
	}

  // getCard() {
  //   return this._card
  // }

  _setListeners(card) {
    this._newElement.querySelector('.element__image').addEventListener('click', () => {
      this._handleImageClick(this._name, this._link)});

    const likeButton = card.querySelector('.element__like');
    likeButton.addEventListener('click', this._likeCard);

    if (this._newElement.querySelector('.element__delete')) {
      this._newElement.querySelector('.element__delete').addEventListener('click', () => this._handleTrashClick());
    }
    // this._newElement.querySelector('.element__delete').addEventListener('click', () => this._handleTrashClick())
  }
}
