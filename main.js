(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function n(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var o=function(){function e(t,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_showInputError",(function(e,t){var n=o._popupForm.querySelector(".".concat(e.id,"-error"));e.classList.add(o._inputErrorClass),n.textContent=t,n.classList.add(o._errorClass)})),n(this,"_hideInputError",(function(e){var t=o._popupForm.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._inputErrorClass),t.textContent="",t.classList.remove(o._errorClass)})),n(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),n(this,"_setEventListeners",(function(){o._toggleButtonState(o._inputList,o._saveButtonElement),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState(o._inputList,o._saveButtonElement)}))}))})),n(this,"enableValidation",(function(){Array.from(o._popupForm.querySelectorAll(o._formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),o._setEventListeners(e)}))})),n(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),n(this,"_toggleButtonState",(function(e,t){o._hasInvalidInput(e)?o.disableSubmitButton():(t.classList.remove(o._inactiveButtonClass),t.removeAttribute("disabled",!0))})),this._popupForm=t,this._formSelector=r.formSelector,this._inputSelector=r.inputSelector,this._submitButtonSelector=r.submitButtonSelector,this._inactiveButtonClass=r.inactiveButtonClass,this._inputErrorClass=r.inputErrorClass,this._errorClass=r.errorClass,this._inputList=Array.from(this._popupForm.querySelectorAll(this._inputSelector)),this._saveButtonElement=this._popupForm.querySelector(this._submitButtonSelector)}var r,o;return r=e,(o=[{key:"disableSubmitButton",value:function(){this._saveButtonElement.classList.add(this._inactiveButtonClass),this._saveButtonElement.setAttribute("disabled",!0)}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var l=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=t,this._name=t.name,this._link=t.link,this._id=t._id,this._userId=u,this._ownerId=t.owner._id,this._likes=t.likes,this._templateSelector=n,this._handleCardClick=r,this._handleTrashClick=o,this._handleLikeClick=i,this._newElement=this._getTemplate(),this._newElementImage=this._newElement.querySelector(".element__image"),this._newElementTitle=this._newElement.querySelector(".element__title")}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._templateSelector.querySelector(".element").cloneNode(!0)}},{key:"updateData",value:function(e){this._likes=e.likes}},{key:"updateShowedLikes",value:function(){this._likesCounter.textContent=this._likes.length,this.isLiked()?this._like.classList.add("element__like_active"):this._like.classList.remove("element__like_active")}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"generateCard",value:function(){return this._newElementTitle.textContent=this._name,this._newElementImage.alt=this._name,this._newElementImage.src=this._link,this._elementDelete=this._newElement.querySelector(".element__delete"),this._ownerId!==this._userId&&this._elementDelete.classList.add("element__delete_hidden"),this._like=this._newElement.querySelector(".element__like"),this._likesCounter=this._newElement.querySelector(".element__like-counter"),this._likesCounter.textContent=this._likes.length,this.isLiked()&&this._like.classList.add("element__like_active"),this._setListeners(this._newElement),this._newElement}},{key:"deleteCard",value:function(){this._newElement.remove(),this._newElement=null}},{key:"_handleImageClick",value:function(){this._handleCardClick(this._name,this._link)}},{key:"_setListeners",value:function(){var e=this;this._newElement.querySelector(".element__image").addEventListener("click",(function(){e._handleImageClick(e._name,e._link)})),this._like.addEventListener("click",(function(){return e._handleLikeClick()})),this._newElement.querySelector(".element__delete")&&this._newElement.querySelector(".element__delete").addEventListener("click",(function(){return e._handleTrashClick()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._container.append(t._renderer(e))}))}},{key:"addItem",value:function(e){this._container.prepend(this._renderer(e))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleClickClose=this._handleClickClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickClose",value:function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close-button"))&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleClickClose)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imageElement=t._popup.querySelector(".popup__image-open"),t._imageTitle=t._popup.querySelector(".popup__image-title"),t}return t=u,(n=[{key:"open",value:function(e,t){m(S(u.prototype),"open",this).call(this),this._imageElement.src=t,this._imageElement.alt=e,this._imageTitle.textContent=e}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function O(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitCallbackForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;E(P(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallbackForm(e._getInputValues())}))}},{key:"close",value:function(){E(P(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setButtonText",value:function(e){this._saveButtonElement=this._popup.querySelector(".popup__save-button"),this._saveButtonElement.textContent=e}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var I=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameInfo=document.querySelector(t),this._jobInfo=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameInfo.textContent,about:this._jobInfo.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._nameInfo.textContent=t,this._jobInfo.textContent=n}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar,this._avatar.alt="Аватар"}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfoApi",value:function(e){var t=e.name,n=e.description;return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"addUserCard",value:function(e){return fetch(this._baseUrl+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.userAvatar})}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch(this._baseUrl+"/cards/".concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch(this._baseUrl+"/cards/".concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function H(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var J,G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setConfirmHandler",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;D(N(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y),M=document.querySelector(".popup_type_edit"),z=document.querySelector(".popup_type_add"),$=document.querySelector(".popup_type_image"),K=(document.querySelector(".popup_type_confirm"),document.querySelector(".popup_type_avatar")),Q=(M.querySelector(".popup__close-button"),z.querySelector(".popup__close-button"),$.querySelector(".popup__close-button"),$.querySelector(".popup__close-button"),M.querySelector(".popup__save-button"),M.querySelector(".popup__save-button"),document.querySelector(".profile__ellipse-pencil")),W=M.querySelector(".popup__container"),X=W.querySelector(".popup__input_type_name"),Y=W.querySelector(".popup__input_type_job"),Z=(W.querySelector(".popup__title"),z.querySelector(".popup__container")),ee=(Z.querySelector(".popup__input_type_name"),Z.querySelector(".popup__input_type_job"),document.querySelector(".profile")),te=(ee.querySelector(".profile__info-name"),ee.querySelector(".profile__info-text"),ee.querySelector(".profile__info-edit-button")),ne=ee.querySelector(".profile__add-button"),re=(document.querySelector(".popup__container"),z.querySelector(".popup__save-button"),document.querySelector(".popup__form"),document.querySelector(".popup__form"),document.querySelector(".elements-template").content),oe=(document.querySelector(".elements"),document.querySelector(".element__delete"),$.querySelector(".popup__image-title"),$.querySelector(".popup__image-open"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error"});function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ue=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-56",headers:{authorization:"af3c3b2b-36c2-4b4e-b99e-3893cac6c5e1","Content-Type":"application/json"}});Promise.all([ue.getUserInfo(),ue.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,l=[],c=!0,a=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];he.setUserInfo(o),J=o._id,pe.renderItems(i)})).catch((function(e){return console.log(e)}));var le=new o(M,oe),ce=new o(z,oe),ae=new o(K,oe);le.enableValidation(),ce.enableValidation(),ae.enableValidation();var se=new g(".popup_type_image");function fe(e){var t=new l(e,re,se.open.bind(se),(function(){me.setConfirmHandler((function(){ue.deleteCard(e._id).then((function(){t.deleteCard(),me.close()})).catch((function(e){return console.log(e)}))})),me.open()}),(function(){t.isLiked()?ue.deleteLike(e._id).then((function(e){t.updateData(e),t.updateShowedLikes()})).catch((function(e){return console.log(e)})):ue.addLike(e._id).then((function(e){t.updateData(e),t.updateShowedLikes()})).catch((function(e){return console.log(e)}))}),J);return t.generateCard()}se.setEventListeners();var pe=new s((function(e){return fe(e)}),".elements"),ye=new L(".popup_type_edit",(function(e){ye.setButtonText("Сохранение..."),ue.setUserInfoApi(e).then((function(e){le.disableSubmitButton(),he.setUserInfo(e),ye.close()})).catch((function(e){return console.log(e)})).finally((function(){return ye.setButtonText("Сохранить")}))}));ye.setEventListeners(),te.addEventListener("click",(function(){var e=he.getUserInfo();X.value=e.name,Y.value=e.about,ye.open()}));var _e=new L(".popup_type_add",(function(e){_e.setButtonText("Создание..."),ue.addUserCard(e).then((function(e){ce.disableSubmitButton(),pe.addItem(fe(e)),_e.close()})).catch((function(e){return console.log(e)})).finally((function(){return _e.setButtonText("Создать")}))}));_e.setEventListeners(),ne.addEventListener("click",(function(){return _e.open()}));var he=new I(".profile__info-name",".profile__info-text",".profile__ellipse"),me=new G(".popup_type_confirm");me.setEventListeners();var de=new L(".popup_type_avatar",(function(e){de.setButtonText("Сохранение..."),ue.changeUserAvatar(e).then((function(e){ae.disableSubmitButton(),he.setUserAvatar(e),de.close()})).catch((function(e){return console.log(e)})).finally((function(){return de.setButtonText("Сохранить")}))}));de.setEventListeners(),Q.addEventListener("click",(function(){return de.open()}))})();