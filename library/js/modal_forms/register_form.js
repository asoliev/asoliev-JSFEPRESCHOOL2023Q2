export function registerModalForm(registerForm, loginForm) {
  const profileMenuRegister = document.getElementById('profile-menu-register');

  profileMenuRegister.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
    modalDivToggle();
  });

  function generateCardNumber() {
    const characters = "0123456789abcdef"
    let str = ""
    for (let i = 0; i < 9; i++) {
      const index = Math.floor(Math.random() * 16);
      str += characters[index];
    }
    return str;
  }

  const users = [];

  function submitRegForm(e) {
    e.preventDefault();
    const regFormEls = registerForm.elements;
    const firstName = regFormEls['register-first-name-input'];
    const lastName = regFormEls['register-last-name-input'];
    const email = regFormEls['register-email-input'];
    const password = regFormEls['register-password-input'];
    const cardNumber = generateCardNumber();

    userObj.firstName = firstName.value;
    userObj.lastName = lastName.value;
    userObj.email = email.value;
    userObj.password = password.value;
    userObj.cardNumber = cardNumber;
    userObj.isLoggedIn = true;

    users.push(userObj);

    localStorage.setItem('user-data', JSON.stringify(users));

    //registerForm.submit();
    //loginUser(userObj);
    modalDivToggle();
  }

  registerForm.addEventListener('submit', submitRegForm);
}