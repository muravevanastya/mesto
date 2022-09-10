const overlayEl = document.querySelector('.overlay');
const formElement = overlayEl.querySelector('.popup');
const closePopupButton = formElement.querySelector('.popup__close-button');
const nameInput = formElement.querySelector('.popup__input_name');
const jobInput = formElement.querySelector('.popup__input_job');

const profile = document.querySelector('.profile');
const openEditButton = profile.querySelector('.profile__info-edit-button');
const profileName = profile.querySelector('.profile__info-name');
const profileJob = profile.querySelector('.profile__info-text');

function overlayOpen() {
  overlayEl.classList.add('overlay_opened');
};

function overlayClose() {
  overlayEl.classList.remove('overlay_opened');
};

openEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  overlayOpen();
});

closePopupButton.addEventListener('click', () => {
  overlayClose();
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  overlayClose();
};

document.getElementById('submit').addEventListener('click', formSubmitHandler);
