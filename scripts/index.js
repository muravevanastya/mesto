import FormValidator from './FormValidator.js';
import Card from './Card.js';
import { initialCards } from './cards.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';

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

// export function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', handleClosePopupByEsc);
//   document.addEventListener('click', handleClosePopupByOverlayClick);
// };

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', handleClosePopupByEsc);
//   document.removeEventListener('click', handleClosePopupByOverlayClick);
// };

editOpenButton.addEventListener('click', () => {
  openEditPopup();
});

function openEditPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEditProfile);
};

addOpenButton.addEventListener('click', () => {
  openAddPopup();
});

function openAddPopup() {
  validationPopupAddCard.disableSubmitButton();
  placeInput.value = '';
  imageInput.value = '';
  openPopup(popupAddCard);
};

editCloseButton.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

addCloseButton.addEventListener('click', () => {
  closePopup(popupAddCard);
});

// imageCloseButton.addEventListener('click', () => {
//   closePopup(popupImage);
// });

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: placeInput.value,
    link: imageInput.value
  };
  renderCard(createCard(card));
  closePopup(popupAddCard);
};

const imageElement = new PopupWithImage('.popup_type_image');
imageElement.setEventListeners();

const renderCard = (card) => {
  // const cardItem = new Card(card, elementsTemplate);
  // cardSection.addItem(cardItem.createCard());
  cardSection.prepend(card.generateCard())
  // const cardElement = createCard(cardItem);
  // cardsContainer.addItem(cardElement);
};

initialCards.forEach((item) => {
  renderCard(createCard(item));
});

function createCard(card) {
  const cardItem = new Card(card, elementsTemplate, imageElement.open.bind(imageElement));
  // const cardElement = cardItem.generateCard();
  return cardItem;
};

// const cardsContainer = new Section({items: initialCards, renderer: renderCard}, cardSection);
// cardsContainer.renderItems();

formAddCard.addEventListener('submit', handleCardFormSubmit);

// function handleClosePopupByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   };
// };

// function handleClosePopupByOverlayClick(evt) {
//   if (evt.target.classList.contains('popup')) {
//     closePopup(evt.target);
//   };
// };

