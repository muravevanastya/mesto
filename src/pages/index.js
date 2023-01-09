import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
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
  popupAvatarForm,
  nameInput,
  jobInput,
  popupProfileOpenButton,
  popupAddOpenButton,
  elementsTemplate,
  validationSettings,
  popupAvatarOpenButton
} from '../utils/constants';

let userId;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: 'af3c3b2b-36c2-4b4e-b99e-3893cac6c5e1',
    'Content-Type': 'application/json'
  }
})
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([info, initialCards]) => {
    userInfo.setUserInfo(info);
    userId = info._id;
    cardsContainer.renderItems(initialCards.reverse())
  })
  .catch((err) => console.log(err))

const validationPopupEditProfile = new FormValidator(popupEditProfile, validationSettings);
const validationPopupAddCard = new FormValidator(popupAddCard, validationSettings);
const validationPopupAvatar = new FormValidator(popupAvatarForm, validationSettings);

validationPopupEditProfile.enableValidation();
validationPopupAddCard.enableValidation();
validationPopupAvatar.enableValidation();

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
      popupEdit.close();
    })
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
      // validationPopupAddCard.disableSubmitButton();
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
    popupConfirmation.setConfirmHandler(() => {
      api
      .deleteCard(card._id)
      .then(() => {
        cardItem.deleteCard();
        popupConfirmation.close();
      })
      .catch(err => console.log(err));
    });
    popupConfirmation.open();
  },
  () => {
    if (!cardItem.isLiked()) {
      api.addLike(card._id)
        .then(card => {
          cardItem.updateData(card);
          cardItem.updateShowedLikes();
        })
        .catch(err => console.log(err));
    } else {
      api.deleteLike(card._id)
        .then(card => {
          cardItem.updateData(card);
          cardItem.updateShowedLikes();
        })
        .catch(err => console.log(err));
    }
  },
  userId);
  const cardElement = cardItem.generateCard();
  return cardElement;
};

const cardsContainer = new Section(renderCard, '.elements');

const popupEdit = new PopupWithForm('.popup_type_edit', handleProfileFormSubmit);
popupEdit.setEventListeners();
popupProfileOpenButton.addEventListener('click', handleProfileButtonClick);


const popupAdd = new PopupWithForm('.popup_type_add', handleCardFormSubmit);
popupAdd.setEventListeners();
popupAddOpenButton.addEventListener('click', () => {
  validationPopupAddCard.disableSubmitButton();
  popupAdd.open();
});

const userInfo = new UserInfo('.profile__info-name', '.profile__info-text', '.profile__ellipse');

const popupConfirmation = new PopupWithConfirmation('.popup_type_confirm');
popupConfirmation.setEventListeners();

const popupAvatar = new PopupWithForm('.popup_type_avatar', handleAvatarFormSubmit);
popupAvatar.setEventListeners();
popupAvatarOpenButton.addEventListener('click', () => popupAvatar.open())
