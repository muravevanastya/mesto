export default class FormValidator {
  constructor(popupForm, validationSettings) {
    this._popupForm = popupForm;
    this._formSelector = validationSettings.formSelector;
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;

    this._saveButtonElement = this._popupForm.querySelector(this._submitButtonSelector);
  };

  _showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  };

  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const saveButtonElement = formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, saveButtonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, saveButtonElement);
      });
    });
  };

  enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    });
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  enableValidationCheck() {
    this._setEventListeners();
  }

  _toggleButtonState = (inputList, saveButtonElement) => {
    if (this._hasInvalidInput(inputList)) {
      saveButtonElement.classList.add(this._inactiveButtonClass);
      saveButtonElement.setAttribute('disabled', true);
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
