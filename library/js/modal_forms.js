import { unauthorizedUserFunc } from './modal_forms/modal_unauthorized.js';
export function modalForms(userObj) {
  const modalDiv = document.body.querySelector('.modal');
  const modalFormContainer = document.body.querySelector('.modal-form-container');

  const modalRegisterCloseIcon = document.body.querySelector('.modal-form-close-icon');

  const modalDivToggle = () => modalDiv.classList.toggle('display-flex');
  const modalDivToggleRemove = () => modalDiv.classList.remove('display-flex');

  modalRegisterCloseIcon.addEventListener('click', modalDivToggle);

  modalDiv.addEventListener('click', (event) => {
    if (!modalFormContainer.contains(event.target))
      modalDivToggleRemove();
  });

  unauthorizedUserFunc();

  function loginUser(user) {
    const profileIcon = document.body.querySelector('.profile-icon');
    const profileMenuTitle = document.getElementById('profile-menu-title2');
    const profileIconUser = document.body.querySelector('.profile-icon-user');
    const profileIconSvg = document.body.querySelector('.profile-icon-svg');

    profileIconSvg.style.display = 'none';

    profileIconUser.style.display = 'block';
    profileIconUser.innerHTML = user.firstName[0] + user.lastName[0];

    profileMenuTitle.innerHTML = user.cardNumber;
  }

  function readLocalStorage() {
    const userDataJson = localStorage.getItem('user-data');
    const userData = JSON.parse(userDataJson);
    const tmpUserObj = userData?.find((v) => {
      return v.isLoggedIn;
    });
    if (tmpUserObj) {
      userObj = tmpUserObj;
      loginUser(userObj);
    }
  }
  readLocalStorage();
}