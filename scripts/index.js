const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');

const editCloseButton = popupEdit.querySelector('.popup__close-button');
const addCloseButton = popupAdd.querySelector('.popup__close-button');
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
const formElement = document.querySelector('.popup__form');

const elementsTemplate = document.querySelector('.elements-template').content;
const elements = document.querySelector('.elements');


const initialCards = [
  {
    name: 'Мёртвое море',
    link: 'https://avatars.mds.yandex.net/get-images-cbir/985591/3YG0Sw62UxB6SPjE6cI-yg6146/ocr'
  },
  {
    name: 'Гранд-Каньон',
    link: 'https://avatars.mds.yandex.net/get-images-cbir/2130213/-F3PYbpfZhrYZczaXTtrGA6065/ocr'
  },
  {
    name: 'Утёсы Мохер',
    link: 'https://pibig.info/uploads/posts/2022-03/thumbs/1646705299_17-pibig-info-p-otvesnaya-skala-priroda-krasivo-foto-26.jpg'
  },
  {
    name: 'Вулкан Бромо',
    link: 'https://sun9-83.userapi.com/impf/1q7uw-Az3foBorQqZgSYgFu_zcK5FhHs2M2rQg/zZvS4yIrvjw.jpg?size=1600x956&quality=96&sign=28753ee71b1a80032fa55287cb035520&c_uniq_tag=t9BW8yE4YoUAbYOor_Ad5bU0XZL9mYP-dW3tu7BsDV8&type=album'
  },
  {
    name: 'Озеро Спенсер',
    link: 'https://ifbest.org/uploads/images/2021/11/image_750x_619a50a9df9e8.jpg'
  },
  {
    name: 'Памуккале',
    link: 'https://www.nationalturk.com/en/wp-content/uploads/2022/05/pamukkale-turkey.jpg'
  },
];


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose(popupEdit);
};

editSaveButton.addEventListener('click', formSubmitHandler);
editForm.addEventListener('submit', formSubmitHandler);


function popupOpen(popup) {
  popup.classList.add('popup_opened');
};

function popupClose(popup) {
  popup.classList.remove('popup_opened');
};

editOpenButton.addEventListener('click', () => {
  popupOpen(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

addOpenButton.addEventListener('click', () => {
  placeInput.value = '';
  imageInput.value = '';
  placeInput.placeholder = 'Название';
  imageInput.placeholder = 'Ссылка на картинку';
  popupOpen(popupAdd);
});

editCloseButton.addEventListener('click', () => {
  popupClose(popupEdit);
});

addCloseButton.addEventListener('click', () => {
  popupClose(popupAdd);
});


// function setEventListeners(el) {
//   const deleteButton = el.querySelector('.element__delete');
//   deleteButton.addEventListener('click', deleteHandler);

//   const likeButton = el.querySelector('.element__like');
//   likeButton.addEventListener('click', likeHandler);

//   const elementImage = el.querySelector('.element__image');
//   elementImage.addEventListener('click', imageOpenHandler)
// };


function addElement(name, link) {
  const newElement = elementsTemplate.querySelector('.element').cloneNode(true);

  const newElementTitle = newElement.querySelector('.element__title');
  const newElementImage = newElement.querySelector('.element__image');

  newElementTitle.textContent = name;
  newElementImage.alt = name;
  newElementImage.src = link;

  // setEventListeners(newElement);
  return newElement;
};

function elementSubmitHandler(evt) {
  evt.preventDefault();

  const card = addElement(placeInput.value, imageInput.value);
  elements.prepend(card);
  popupClose(popupAdd);
};

initialCards.forEach(function(item) {
  addElement(item.name, item.link);
});

createAddButton.addEventListener('click', elementSubmitHandler);
addForm.addEventListener('submit', elementSubmitHandler);

// addOpenButton.addEventListener('click', function () {
//   const name = document.querySelector('.popup__input_type_name');
//   const link = document.querySelector('.popup__input_type_job');

//   addElement(name.value, link.value);

//   name.value = '';
//   link.value = '';
// });




// function elementDeleteHandler(evt) {
//   const currentElement = evt.target.closest('.element');
//   currentElement.remove();
// };

// function setEventListeners() {
//   const el = elementsTemplate.querySelector('.element').cloneNode(true);
  // const deleteButton = el.querySelector('.element__delete');
//   deleteButton.addEventListener('click', elementDeleteHandler);
// };

// const elementLike = document.querySelector('.element__like');

// elementLike.addEventListener('click', function (evt) {
//   const elementLike = evt.target.closest('.element__like');
//   elementLike.classList.toggle('.element__like_active');
// });

// deleteButton.addEventListener('click', elementDeleteHandler);


