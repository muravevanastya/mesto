export default class UserInfo {
  constructor({nameInfo, jobInfo}) {
    this._nameInfo = document.querySelector(nameInfo);
    this._jobInfo = document.querySelector(jobInfo);
  }

  getUserInfo() {
    return {
      name: this._nameInfo.textContent,
      job: this._jobInfo.textContent
    }
  }

  setUserInfo(name, job) {
    this._nameInfo.textContent = name;
    this._jobInfo.textContent = job;
  }
}
