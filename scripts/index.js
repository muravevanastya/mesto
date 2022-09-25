const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');

const editCloseButton = popupEdit.querySelector('.popup__close-button');
const addCloseButton = popupAdd.querySelector('.popup__close-button');

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

const elementsTemplate = document.querySelector('.elements-template').content;
const elementsContainer = document.querySelector('.popup__container');
const createAddButton = document.querySelector('.popup__save-button');
const formElement = document.querySelector('.popup__form')


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
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupOpen(popupEdit);
})

addOpenButton.addEventListener('click', () => {
  placeInput.value = '';
  imageInput.value = '';
  placeInput.placeholder = 'Название';
  imageInput.placeholder = 'Ссылка на картинку';
  popupOpen(popupAdd);
})

editCloseButton.addEventListener('click', () => {
  popupClose(popupEdit);
})

addCloseButton.addEventListener('click', () => {
  popupClose(popupAdd);
})

initialCards.forEach(function (value) {
  const item = renderItem(value.name, value.link);
  elementsContainer.prepend(item);
});

function renderItem(text, link) {
  const newElement = elementsTemplate.cloneNode(true);
  const elementTitle = newElement.querySelector('.element__title');
  const elementImage = newElement.querySelector('.element__image');
  elementImage.alt = text;
  elementImage.src = link;
  elementTitle.textContent = text;
  setListenersForButtons(newElement);
  return newElement;
}

function elementSubmitHandler(evt){
  evt.preventDefault();
  const item = renderItem(placeInput.value, imageInput.value);
  elementsContainer.prepend(item);
  popupClose(popupAdd)
}

function setListenersForButtons(element) {
  const elementDeleteButton = element.querySelector('.element__delete');
  elementDeleteButton.addEventListener('click', elementDeleteHandler);
  const elementLikeButton = element.querySelector('.element__like');
  elementLikeButton.addEventListener('click', elementLikeHandler);
  const elementImg = element.querySelector('.element__image');
  elementImg.addEventListener('click', elementOpenHandler);
}

function elementDeleteHandler(evt) {
  const currentElement = evt.target.closest('.element');
  currentElement.remove();
}
