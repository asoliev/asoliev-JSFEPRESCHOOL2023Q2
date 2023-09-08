import { registerModalForm } from './register_form.js';
import { loginModalForm } from './login_form.js';
export function unauthorizedUserFunc() {

  const registerForm = document.getElementById('modal-register-form');
  const loginForm = document.getElementById('modal-login-form');

  registerModalForm(registerForm, loginForm);

  loginModalForm(registerForm, loginForm);
}