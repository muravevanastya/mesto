const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');

const editCloseButton = popupEditProfile.querySelector('.popup__close-button');
const addCloseButton = popupAddCard.querySelector('.popup__close-button');
const imageCloseButton = popupImage.querySelector('.popup__close-button')
const elementCloseButton =popupImage.querySelector('.popup__close-button')

const editSaveButton = popupEditProfile.querySelector('.popup__save-button')

const formEditProfile = popupEditProfile.querySelector('.popup__container');
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_job');
const popupTitle = formEditProfile.querySelector('.popup__title');

const formAddCard = popupAddCard.querySelector('.popup__container');
const placeInput = formAddCard.querySelector('.popup__input_type_name');
const imageInput = formAddCard.querySelector('.popup__input_type_job');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__info-name');
const profileJob = profile.querySelector('.profile__info-text');

const editOpenButton = profile.querySelector('.profile__info-edit-button');
const addOpenButton = profile.querySelector('.profile__add-button');

const elementsContainer = document.querySelector('.popup__container');
const createAddButton = popupAddCard.querySelector('.popup__save-button');
const profileForm = document.querySelector('.popup__form');
const addForm = document.querySelector('.popup__form');

const elementsTemplate = document.querySelector('.elements-template').content;
const cardSection = document.querySelector('.elements');

const popupImageTitle = popupImage.querySelector('.popup__image-title');
const popupImageOpen = popupImage.querySelector('.popup__image-open');

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
};

export {
  popupEditProfile,
  popupAddCard,
  popupImage,
  editCloseButton,
  addCloseButton,
  imageCloseButton,
  elementCloseButton,
  editSaveButton,
  formEditProfile,
  nameInput,
  jobInput,
  popupTitle,
  formAddCard,
  placeInput,
  imageInput,
  profile,
  profileName,
  profileJob,
  editOpenButton,
  addOpenButton,
  elementsContainer,
  createAddButton,
  profileForm,
  addForm,
  elementsTemplate,
  cardSection,
  popupImageTitle,
  popupImageOpen,
  validationSettings
};