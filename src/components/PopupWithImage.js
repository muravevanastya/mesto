import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector('.popup__image-open');
    this._imageTitle = this._popup.querySelector('.popup__image-title');
  }

  open(name, link) {
    super.open();
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._imageTitle.textContent = name;
  }
}
