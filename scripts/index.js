import FormValidator from './FormValidator.js';

import Card from './Card.js';

import { initialCards } from './cards.js';

import {
  popupEditProfile,
  popupAddCard,
  popupImage,
  editCloseButton,
  addCloseButton,
  imageCloseButton,
  formEditProfile,
  nameInput,
  jobInput,
  formAddCard,
  placeInput,
  imageInput,
  profileName,
  profileJob,
  editOpenButton,
  addOpenButton,
  elementsTemplate,
  cardSection,
  validationSettings
} from './constants.js';

const validationPopupEditProfile = new FormValidator(popupEditProfile, validationSettings);
const validationPopupAddCard = new FormValidator(popupAddCard, validationSettings);

validationPopupEditProfile.enableValidation();
validationPopupAddCard.enableValidation();

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
};

formEditProfile.addEventListener('submit', handleProfileFormSubmit);

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleClosePopupByEsc);
  document.addEventListener('click', handleClosePopupByOverlayClick);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleClosePopupByEsc);
  document.removeEventListener('click', handleClosePopupByOverlayClick);
};

editOpenButton.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

addOpenButton.addEventListener('click', () => {
  openPopup(popupAddCard);
});

editCloseButton.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

addCloseButton.addEventListener('click', () => {
  closePopup(popupAddCard);
});

imageCloseButton.addEventListener('click', () => {
  closePopup(popupImage);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: placeInput.value,
    link: imageInput.value
  };

  evt.submitter.classList.add('popup__save-button_disabled');
  evt.submitter.setAttribute('disabled', true);
  placeInput.value = '';
  imageInput.value = '';

  renderCard(createCard(card));
  closePopup(popupAddCard);
};

const renderCard = (cardItem) => {
  cardSection.prepend(cardItem.generateCard());
};

initialCards.forEach((item) => {
  renderCard(createCard(item));
});

function createCard(card) {
  const cardItem = new Card(card, elementsTemplate);
  return cardItem;
};

formAddCard.addEventListener('submit', handleCardFormSubmit);

function handleClosePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

function handleClosePopupByOverlayClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
};
