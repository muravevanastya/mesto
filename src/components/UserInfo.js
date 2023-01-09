export default class UserInfo {
  constructor(nameInfo, jobInfo, avatarSelector) {
    this._nameInfo = document.querySelector(nameInfo);
    this._jobInfo = document.querySelector(jobInfo);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameInfo.textContent,
      about: this._jobInfo.textContent
    }
  }

  setUserInfo({name, about}) {
    this._nameInfo.textContent = name;
    this._jobInfo.textContent = about;
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar;
    this._avatar.alt = 'Аватар';
  }
}
