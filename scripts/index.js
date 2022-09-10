const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__container');
const closePopupButton = formElement.querySelector('.popup__close-button');
const saveButton = formElement.querySelector('.popup__save-button')
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_job');

const profile = document.querySelector('.profile');
const openEditButton = profile.querySelector('.profile__info-edit-button');
const profileName = profile.querySelector('.profile__info-name');
const profileJob = profile.querySelector('.profile__info-text');

function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

function popupClose() {
  popup.classList.remove('popup_opened');
};

openEditButton.addEventListener('click', popupOpen);

closePopupButton.addEventListener('click', popupClose);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
};

saveButton.addEventListener('click', formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler);
