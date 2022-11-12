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

const elementsTemplate = document.querySelector('.elements-template').content;
const cardSection = document.querySelector('.elements');

const popupImageTitle = popupImage.querySelector('.popup__image-title');
const popupImageOpen = popupImage.querySelector('.popup__image-open');


const initialCards = [
  {
    name: 'Памуккале',
    link: 'https://www.nationalturk.com/en/wp-content/uploads/2022/05/pamukkale-turkey.jpg'
  },
  {
    name: 'Озеро Спенсер',
    link: 'https://ifbest.org/uploads/images/2021/11/image_750x_619a50a9df9e8.jpg'
  },
  {
    name: 'Вулкан Бромо',
    link: 'https://sun9-83.userapi.com/impf/1q7uw-Az3foBorQqZgSYgFu_zcK5FhHs2M2rQg/zZvS4yIrvjw.jpg?size=1600x956&quality=96&sign=28753ee71b1a80032fa55287cb035520&c_uniq_tag=t9BW8yE4YoUAbYOor_Ad5bU0XZL9mYP-dW3tu7BsDV8&type=album'
  },
  {
    name: 'Утёсы Мохер',
    link: 'https://pibig.info/uploads/posts/2022-03/thumbs/1646705299_17-pibig-info-p-otvesnaya-skala-priroda-krasivo-foto-26.jpg'
  },
  {
    name: 'Гранд-Каньон',
    link: 'https://planettravel24.com/wp-content/uploads/2018/01/bolshoj-kanon-arizona.jpg'
  },
    {
    name: 'Мёртвое море',
    link: 'https://traveltimes.ru/wp-content/uploads/2021/07/1020x0_unbvkyltrihbtvfm_jpg_9a38.jpg'
  },
];

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
};

formEditProfile.addEventListener('submit', handleProfileFormSubmit);

function openPopup(popup) {
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
})

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const card = addElement(placeInput.value, imageInput.value);
  cardSection.prepend(card);
  // evt.submitter.classList.add('popup__save-button_disabled');
  // evt.submitter.setAttribute('disabled', true);
  placeInput.value = '';
  imageInput.value = '';
  closePopup(popupAddCard);
};

function addElement(name, link) {
  const newElement = elementsTemplate.querySelector('.element').cloneNode(true);

  const newElementTitle = newElement.querySelector('.element__title');
  const newElementImage = newElement.querySelector('.element__image');

  const deleteButton = newElement.querySelector('.element__delete');
  const likeButton = newElement.querySelector('.element__like');

  newElementTitle.textContent = name;
  newElementImage.alt = name;
  newElementImage.src = link;

  deleteButton.addEventListener('click', () => {
    newElement.remove();
  });

  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  });

  newElementImage.addEventListener('click', () => {
    openPopup(popupImage);
    popupImageTitle.textContent = name;
    popupImageOpen.alt = name;
    popupImageOpen.src = link;
  });

  return newElement;
};

initialCards.forEach((item) => {
  const card = addElement(item.name, item.link);
  cardSection.prepend(card);
});

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
