import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import { initialCards } from '../components/cards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

import {
  popupEditProfile,
  popupAddCard,
  nameInput,
  jobInput,
  popupProfileOpenButton,
  popupAddOpenButton,
  elementsTemplate,
  validationSettings
} from '../components/constants';

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
  validationPopupEditProfile.disableSubmitButton();
  userInfo.setUserInfo(inputValue.name, inputValue.description);
  popupEdit.close();
};

function handleCardFormSubmit(inputValue) {
  validationPopupAddCard.disableSubmitButton();
  cardsContainer.addItem(createCard(inputValue));
  popupAdd.close();
};

const imageElement = new PopupWithImage('.popup_type_image');
imageElement.setEventListeners();

const renderCard = (card) => {
  const cardElement = createCard(card);
  cardsContainer.addItem(cardElement);
};

function createCard(card) {
  const cardItem = new Card(card, elementsTemplate, imageElement.open.bind(imageElement));
  const cardElement = cardItem.generateCard();
  return cardElement;
};

const cardsContainer = new Section({items: initialCards, renderer: renderCard}, '.elements');
cardsContainer.renderItems();

const popupEdit = new PopupWithForm('.popup_type_edit', handleProfileFormSubmit);
popupEdit.setEventListeners();
popupProfileOpenButton.addEventListener('click', handleProfileButtonClick);


const popupAdd = new PopupWithForm('.popup_type_add', handleCardFormSubmit);
popupAdd.setEventListeners();
popupAddOpenButton.addEventListener('click', () => popupAdd.open())

const userInfo = new UserInfo({nameInfo: '.profile__info-name', jobInfo: '.profile__info-text'});


