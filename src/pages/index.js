import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import { initialCards } from '../components/cards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import './index.css';

import {
  popupEditProfile,
  popupAddCard,
  popupConfirm,
  popupAvatarForm,
  nameInput,
  jobInput,
  popupProfileOpenButton,
  popupAddOpenButton,
  elementsTemplate,
  validationSettings,
  elementDelete,
  popupAvatarOpenButton
} from '../components/constants';

let userId;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: 'af3c3b2b-36c2-4b4e-b99e-3893cac6c5e1',
    'Content-Type': 'application/json'
  }
})
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([info, initialCards]) => {
    userInfo.setUserInfo(info);
    userId = info._id;
    cardsContainer.renderItems(initialCards)
  })
  .catch((err) => console.log(err))

const validationPopupEditProfile = new FormValidator(popupEditProfile, validationSettings);
const validationPopupAddCard = new FormValidator(popupAddCard, validationSettings);
const validationPopupAvatar = new FormValidator(popupAvatarForm, validationSettings);

validationPopupEditProfile.enableValidation();
validationPopupAddCard.enableValidation();
validationPopupAvatar.enableValidation();

// function confirmDeleteCard(card) {
//   const handleConfirmClick = (data) => {
//     api.deleteCard(data._id)
//       .then(() => {
//         card.deleteCard();
//         confirmDeletePopup.close();
//       })
//       .catch(err => console.log(err));
//   }
//   confirmDeletePopup.setConfirmHandler(handleConfirmClick);
//   confirmDeletePopup.open()
// };

// function confirmDeleteCard(data) {
//   popupConfirm.setConfirmHandler(() => {
//     popupConfirm.setButtonText('Сохранение...');
//     api.deleteCard(data._id)
//       .then(() => {

//       })
//   })
// }

// function confirmDeleteCard(cardId, deleteCardHandler) {
//   api.deleteCard(cardId)
//     .then(() => {
//       deleteCardHandler();
//       confirmDeletePopup.close()
//     })
//     .catch((err) => console.log(err));
// }

function handleProfileButtonClick() {
  const userInfoObj = userInfo.getUserInfo();
  nameInput.value = userInfoObj.name;
  jobInput.value = userInfoObj.about;
  popupEdit.open();
};

function handleProfileFormSubmit(inputValue) {
  popupEdit.setButtonText('Сохранение...');
  api.setUserInfoApi(inputValue)
    .then(info => {
      validationPopupEditProfile.disableSubmitButton();
      userInfo.setUserInfo(info);
      // userInfo.setUserInfo(inputValue.name, inputValue.description);

      popupEdit.close();
    })
  // popupEdit.close();
    .catch((err) => console.log(err))
    .finally(() => popupEdit.setButtonText('Сохранить'))
};

function handleAvatarFormSubmit(inputValue) {
  popupAvatar.setButtonText('Сохранение...');
  api.changeUserAvatar(inputValue)
    .then(data => {
      validationPopupAvatar.disableSubmitButton();
      userInfo.setUserAvatar(data);
      popupAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupAvatar.setButtonText('Сохранить'))
};

function handleCardFormSubmit(inputValue) {
  popupAdd.setButtonText('Создание...');
  api.addUserCard(inputValue)
    .then(card => {
      validationPopupAddCard.disableSubmitButton();
      cardsContainer.addItem(createCard(card));
      popupAdd.close();
    })
    .catch(err => console.log(err))
    .finally(() => popupAdd.setButtonText('Создать'));
};

const imageElement = new PopupWithImage('.popup_type_image');
imageElement.setEventListeners();

const renderCard = (card) => {
  const cardElement = createCard(card);
  cardsContainer.addItem(cardElement);
};

function createCard(card) {
  const cardItem = new Card(card, elementsTemplate, imageElement.open.bind(imageElement),
  () => {
    confirmDeletePopup.setConfirmHandler(() => {
      api
      .deleteCard(card._id)
      .then(() => {
        cardItem.deleteCard();
        confirmDeletePopup.close();
      })
      .catch(err => console.log(err));
    });
    confirmDeletePopup.open();
  }, userId);
  const cardElement = cardItem.generateCard();
  return cardElement;
};

const cardsContainer = new Section({items: initialCards, renderer: renderCard}, '.elements');
// cardsContainer.renderItems();

const popupEdit = new PopupWithForm('.popup_type_edit', handleProfileFormSubmit);
popupEdit.setEventListeners();
popupProfileOpenButton.addEventListener('click', handleProfileButtonClick);


const popupAdd = new PopupWithForm('.popup_type_add', handleCardFormSubmit);
popupAdd.setEventListeners();
popupAddOpenButton.addEventListener('click', () => popupAdd.open());

const userInfo = new UserInfo('.profile__info-name', '.profile__info-text', '.profile__ellipse');

const confirmDeletePopup = new PopupWithConfirmation('.popup_type_confirm');
confirmDeletePopup.setEventListeners();

const popupAvatar = new PopupWithForm('.popup_type_avatar', handleAvatarFormSubmit);
popupAvatar.setEventListeners();
popupAvatarOpenButton.addEventListener('click', () => popupAvatar.open())
