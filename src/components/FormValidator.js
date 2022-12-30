export default class FormValidator {
  constructor(popupForm, validationSettings) {
    this._popupForm = popupForm;
    this._formSelector = validationSettings.formSelector;
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;
    this._inputList = Array.from(this._popupForm.querySelectorAll(this._inputSelector));
    this._saveButtonElement = this._popupForm.querySelector(this._submitButtonSelector);
  };

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._popupForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._popupForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState(this._inputList, this._saveButtonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._saveButtonElement);
      });
    });
  };

  enableValidation = () => {
    const formList = Array.from(this._popupForm.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    });
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputList, saveButtonElement) => {
    if (this._hasInvalidInput(inputList)) {
      this.disableSubmitButton();
    } else {
      saveButtonElement.classList.remove(this._inactiveButtonClass);
      saveButtonElement.removeAttribute('disabled', true);
    };
  };

  disableSubmitButton() {
    this._saveButtonElement.classList.add(this._inactiveButtonClass);
    this._saveButtonElement.setAttribute('disabled', true)
  };
}
