import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallbackForm) {
    super(popupSelector);
    this._submitCallbackForm = submitCallbackForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'))
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallbackForm(this._getInputValues())
    })
  }

  close() {
    super.close();
    this._form.reset();
  }

  setButtonText(text) {
    this._saveButtonElement = this._popup.querySelector('.popup__save-button');
    this._saveButtonElement.textContent = text;
  }
}
