const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectors.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.errorClass);
};

const hideInputError = (formElement, inputElement, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(selectors.errorClass);
};

const checkInputValidity = (formElement, inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
};

const setEventListeners = (formElement, selectors) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  const saveButtonElement = formElement.querySelector(selectors.submitButtonSelector);
  toggleButtonState(inputList, saveButtonElement, selectors);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(formElement, inputElement, selectors);
      toggleButtonState(inputList, saveButtonElement, selectors);
    });
  });
};

const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, selectors);
  })
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, saveButtonElement, selectors) => {
  if (hasInvalidInput(inputList)) {
    saveButtonElement.classList.add(selectors.inactiveButtonClass);
    saveButtonElement.setAttribute('disabled', true);
  } else {
    saveButtonElement.classList.remove(selectors.inactiveButtonClass);
    saveButtonElement.removeAttribute('disabled', true);
  };
};

enableValidation(selectors);
