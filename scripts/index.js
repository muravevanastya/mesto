import FormValidator from './FormValidator.js';
import Card from './Card.js';
import { initialCards } from './cards.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

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
import UserInfo from './UserInfo.js';

const validationPopupEditProfile = new FormValidator(popupEditProfile, validationSettings);
const validationPopupAddCard = new FormValidator(popupAddCard, validationSettings);

validationPopupEditProfile.enableValidation();
validationPopupAddCard.enableValidation();

function handleProfileButtonClick() {
  const userInfoObj = userInfo.getUserInfo();
  nameInput.value = userInfoObj.name;
  jobInput.value = userInfoObj.job;
  popupEdit.open();
}

function handleProfileFormSubmit(inputValue) {
  // evt.preventDefault();
  // profileName.textContent = nameInput.value;
  // profileJob.textContent = jobInput.value;
  // closePopup(popupEditProfile);
  userInfo.setUserInfo(inputValue.name, inputValue.description);
  popupEdit.close();
};

// formEditProfile.addEventListener('submit', handleProfileFormSubmit);

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

// editOpenButton.addEventListener('click', () => {
//   openEditPopup();
// });

// function openEditPopup() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
//   openPopup(popupEditProfile);
// };

// addOpenButton.addEventListener('click', () => {
//   openAddPopup();
// });

// function openAddPopup() {
//   validationPopupAddCard.disableSubmitButton();
//   placeInput.value = '';
//   imageInput.value = '';
//   openPopup(popupAddCard);
// };

// editCloseButton.addEventListener('click', () => {
//   closePopup(popupEditProfile);
// });

// addCloseButton.addEventListener('click', () => {
//   closePopup(popupAddCard);
// });

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


const popupEdit = new PopupWithForm('.popup_type_edit', handleProfileFormSubmit);
popupEdit.setEventListeners();
editOpenButton.addEventListener('click', handleProfileButtonClick);


const popupAdd = new PopupWithForm('.popup_type_add', handleCardFormSubmit);
popupAdd.setEventListeners();
addOpenButton.addEventListener('click', () => popupAdd.open())

const userInfo = new UserInfo({nameInfo: '.profile__info-name', jobInfo: '.profile__info-text'});

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

