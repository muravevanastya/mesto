export default class Card {
  constructor(card, templateSelector, handleCardClick, handleTrashClick, handleLikeClick, userId) {
    this._card = card;
    this._name = card.name;
    this._link = card.link;
    this._id = card._id;
    this._userId = userId;
    this._ownerId = card.owner._id;
    this._likes = card.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
    this._newElement = this._getTemplate();
    this._newElementImage = this._newElement.querySelector('.element__image');
    this._newElementTitle = this._newElement.querySelector('.element__title');
  }

  _getTemplate() {
    const cardTemplate = this._templateSelector.querySelector('.element').cloneNode(true);
    return cardTemplate;
  };

  updateData(newData) {
    this._likes = newData.likes;
  }

  updateShowedLikes() {
    this._likesCounter.textContent = this._likes.length;
    if (this.isLiked()) {
      this._like.classList.add('element__like_active')
    } else {
      this._like.classList.remove('element__like_active')
    }
  }

  isLiked() {
    return this._likes.some((item) => item._id === this._userId);
  }

  generateCard() {
    this._newElementTitle.textContent = this._name;
    this._newElementImage.alt = this._name;
    this._newElementImage.src = this._link;

    this._elementDelete = this._newElement.querySelector('.element__delete');

    if (this._ownerId !== this._userId) {
      this._elementDelete.classList.add('element__delete_hidden')
    };

    this._like = this._newElement.querySelector('.element__like');
    this._likesCounter = this._newElement.querySelector('.element__like-counter');

    this._likesCounter.textContent = this._likes.length;

    if (this.isLiked()) {
      this._like.classList.add('element__like_active')
    }

    this._setListeners(this._newElement);
    return this._newElement;
  }

  deleteCard() {
    this._newElement.remove();
    this._newElement = null;
  }

  _handleImageClick() {
		this._handleCardClick(this._name, this._link);
	}

  _setListeners() {
    this._newElement.querySelector('.element__image').addEventListener('click', () => {
      this._handleImageClick(this._name, this._link)});

    this._like.addEventListener('click', () => this._handleLikeClick());

    if (this._newElement.querySelector('.element__delete')) {
      this._newElement.querySelector('.element__delete').addEventListener('click', () => this._handleTrashClick());
    }
  }
}
