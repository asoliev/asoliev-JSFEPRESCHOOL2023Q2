import { registerModalForm, loginModalForm } from './unauthorized_form.js';
import { logoutFunc } from './authorized_form.js';
export function modalForms(userObj, userIndex, changeModalFormType) {
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

  registerModalForm(modalDivToggle, userObj, userIndex, changeModalFormType, drawWebPageForAuthorizedUser);
  loginModalForm(modalDivToggle, changeModalFormType, userObj, userIndex, drawWebPageForAuthorizedUser);
  logoutFunc(userObj, userIndex);
}

export function changeModalFormType(isRegistered = false) {
  const registerForm = document.getElementById('modal-register-form');
  const loginForm = document.getElementById('modal-login-form');

  if (isRegistered) {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
    modalFormTitle.innerHTML = 'Login';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
    modalFormTitle.innerHTML = 'Register';
  }
}

const modalFormBottomRegister = document.getElementById('modal-form-bottom-register');
const modalFormBottomLogin = document.getElementById('modal-form-bottom-login');
modalFormBottomRegister.addEventListener('click', () => changeModalFormType());
modalFormBottomLogin.addEventListener('click', () => changeModalFormType(true));

const modalFormTitle = document.body.querySelector('.modal-form-title');
const profileMenuTitle = document.getElementById('profile-menu-title-authorized');
const profileMenuAuthorized = document.getElementById('profile-menu-authorized');
const profileMenuUnauthorized = document.getElementById('profile-menu-unauthorized');
const profileIconSvg = document.body.querySelector('.profile-icon-svg');
const profileIconUser = document.body.querySelector('.profile-icon-user');
const libraryGetCardAuthorized = document.getElementById('library-get-card-authorized');
const libraryGetCardUnauthorized = document.getElementById('library-get-card-unauthorized');

export function drawWebPageForAuthorizedUser(user) {
  profileIconSvg.style.display = 'none';

  profileIconUser.style.display = 'block';
  const fullName = user.firstName[0] + user.lastName[0];
  profileIconUser.innerHTML = fullName;
  profileIconUser.title = fullName;

  profileMenuTitle.innerHTML = user.cardNumber;
  profileMenuAuthorized.style.display = 'flex';
  profileMenuUnauthorized.style.display = 'none';

  libraryGetCardAuthorized.style.display = 'block';
  libraryGetCardUnauthorized.style.display = 'none';

  changeModalFormType(true);
}

export function drawWebPageForUnauthorizedUser() {
  profileIconSvg.style.display = 'block';

  profileIconUser.style.display = 'none';
  profileIconUser.innerHTML = '';
  profileIconUser.title = '';

  profileMenuTitle.innerHTML = '';
  profileMenuAuthorized.style.display = 'none';
  profileMenuUnauthorized.style.display = 'flex';

  libraryGetCardAuthorized.style.display = 'none';
  libraryGetCardUnauthorized.style.display = 'block';

  changeModalFormType();
}