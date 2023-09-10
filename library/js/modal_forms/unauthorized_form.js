export function registerModalForm(modalDivToggle, userObj, changeModalFormType, drawWebPageForUnauthorizedUser) {
  const registerForm = document.getElementById('modal-register-form');
  const libraryCardSignup = document.getElementById('library-card-signup');
  const profileMenuRegister = document.getElementById('profile-menu-register');

  profileMenuRegister.addEventListener('click', () => {
    changeModalFormType();
    modalDivToggle();
  });
  libraryCardSignup.addEventListener('click', modalDivToggle);

  function generateCardNumber() {
    const characters = "0123456789abcdef"
    let str = ""
    for (let i = 0; i < 9; i++) {
      const index = Math.floor(Math.random() * 16);
      str += characters[index];
    }
    return str;
  }

  function submitRegForm(e) {
    e.preventDefault();
    const regFormEls = registerForm.elements;
    const firstName = regFormEls['register-first-name-input'];
    const lastName = regFormEls['register-last-name-input'];
    const email = regFormEls['register-email-input'];
    const password = regFormEls['register-password-input'];
    const cardNumber = generateCardNumber();

    const userDataJson = localStorage.getItem('user-data');
    const userData = JSON.parse(userDataJson);

    let isValid = true;
    userData.forEach((el) => {
      if (el.email === email.value) {
        isValid = false;
        alert('Email is busy');
      }
    });
    if (!isValid) return;

    let tmpUserObj = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      cardNumber: cardNumber,
      isLoggedIn: true
    }

    userObj = tmpUserObj;
    userIndex = userData.push(userObj) - 1;

    localStorage.setItem('user-data', JSON.stringify(userData));

    //registerForm.submit();
    drawWebPageForUnauthorizedUser(userObj);
    modalDivToggle();
  }

  registerForm.addEventListener('submit', submitRegForm);
}

export function loginModalForm(modalDivToggle, changeModalFormType, userObj, userIndex, drawWebPageForAuthorizedUser) {
  const loginForm = document.getElementById('modal-login-form');
  const libraryCardLogin = document.getElementById('library-card-login');
  const profileMenuLogin = document.getElementById('profile-menu-login');

  profileMenuLogin.addEventListener('click', () => {
    changeModalFormType(true);
    modalDivToggle();
  });
  libraryCardLogin.addEventListener('click', modalDivToggle);

  function submitLogForm(e) {
    e.preventDefault();

    const emailOrCardNumber = loginForm.elements['login-email-input'];
    const password = loginForm.elements['login-password-input'];

    let userDataJson = localStorage.getItem('user-data');
    if (!userDataJson) return;

    const userData = JSON.parse(userDataJson);
    if (!userData) return;

    function findUser(el, index) {
      if (el.email === emailOrCardNumber.value || el.cardNumber === emailOrCardNumber.value) {
        if (el.password === password.value) {
          userIndex = index;
          userObj = el;
          return true;
        }
        else {
          alert('Wrong password');
          return false;
        }
      } else {
        alert('Email or Card number not found');
        return false;
      }
    }
    const tmpUserObj = userData.find(findUser);
    if(!tmpUserObj) return;

    userObj.isLoggedIn = true;
    userData[userIndex] = userObj;
    userDataJson = JSON.stringify(userData);
    localStorage.setItem('user-data', userData);

    drawWebPageForAuthorizedUser(userObj);
    modalDivToggle();
  }
  loginForm.addEventListener('submit', submitLogForm);
}