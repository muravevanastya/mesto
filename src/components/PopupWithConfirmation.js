import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    // this._buttonSubmit = this._popup.querySelector('.popup__save-button');
  }

  // getCardId(id) {
  //   this._cardId = id;
  //   super.open()
  // }

  setConfirmHandler(callback) {
    this._handleSubmitCallback = callback
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleSubmitCallback()
    })
  }
}

  // setEventListeners() {
  //   super.setEventListeners();
  //   this._buttonSubmit.addEventListener('click', () => {
  //     this._handleSubmitCallback()
  //   })
  // }

