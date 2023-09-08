export function loginModalForm(registerForm, loginForm) {
  const profileMenuLogin = document.getElementById('profile-menu-login');

  profileMenuLogin.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
    modalDivToggle();
  });

  function submitLogForm(e) {
    e.preventDefault();
    const emailOrCardNumber = loginForm.elements['login-email-input'];
    const password = loginForm.elements['login-password-input'];

    const userDataJson = localStorage.getItem('user-data');
    if (!userDataJson) return;
    const userData = JSON.parse(userDataJson);
    if (!userData) return;
    function findUser(v) {
      if (v.email === emailOrCardNumber.value || v.cardNumber === emailOrCardNumber.value) {
        if (v.password === password) return true;
        else {
          alert('Wrong password');
          return false;
        }
      } else {
        alert('Email or Card number not found');
        return false;
      }
    }
    userObj = userData.find(findUser);
    //loginUser(userObj);
    modalDivToggle();
  }
  loginForm.addEventListener('submit', submitLogForm);
}