const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');

const editCloseButton = popupEdit.querySelector('.popup__close-button');
const addCloseButton = popupAdd.querySelector('.popup__close-button');
const imageCloseButton = popupImage.querySelector('.popup__close-button')
const elementCloseButton =popupImage.querySelector('.popup__close-button')

const editSaveButton = popupEdit.querySelector('.popup__save-button')

const editForm = popupEdit.querySelector('.popup__container');
const nameInput = editForm.querySelector('.popup__input_type_name');
const jobInput = editForm.querySelector('.popup__input_type_job');
const popupTitle = editForm.querySelector('.popup__title');

const addForm = popupAdd.querySelector('.popup__container');
const placeInput = addForm.querySelector('.popup__input_type_name');
const imageInput = addForm.querySelector('.popup__input_type_job');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__info-name');
const profileJob = profile.querySelector('.profile__info-text');

const editOpenButton = profile.querySelector('.profile__info-edit-button');
const addOpenButton = profile.querySelector('.profile__add-button');

const elementsContainer = document.querySelector('.popup__container');
const createAddButton = popupAdd.querySelector('.popup__save-button');
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
  closePopup(popupEdit);
};

editForm.addEventListener('submit', handleProfileFormSubmit);



function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

editOpenButton.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

addOpenButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

editCloseButton.addEventListener('click', () => {
  closePopup(popupEdit);
});

addCloseButton.addEventListener('click', () => {
  closePopup(popupAdd);
});

imageCloseButton.addEventListener('click', () => {
  closePopup(popupImage);
})




function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const card = addElement(placeInput.value, imageInput.value);
  cardSection.prepend(card);
  placeInput.value = '';
  imageInput.value = '';
  closePopup(popupAdd);
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


addForm.addEventListener('submit', handleCardFormSubmit);

