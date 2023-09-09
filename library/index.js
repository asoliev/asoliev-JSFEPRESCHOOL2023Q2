import { markWork } from './js/other_functions/mark_work.js';
import { burgerMenuBehaviour } from './js/other_functions/burger_menu.js';
import { sliderBehaviour } from './js/other_functions/slider.js';
import { favoritesSeasonChange } from './js/other_functions/favorites.js';
import { profileMenu } from './js/other_functions/profile_menu.js';
import { modalForms, drawWebPageForAuthorizedUser, drawWebPageForUnauthorizedUser, changeModalFormType } from './js/modal_forms/modals.js';

//markWork();
burgerMenuBehaviour();
sliderBehaviour();

let userObj = {
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  cardNumber:'',
  isLoggedIn: false
}
let userIndex = -1;

function readLocalStorage() {
  const userDataJson = localStorage.getItem('user-data');
  const userData = JSON.parse(userDataJson);

  const userFindResult = userData?.find((v, i) => {
    if (v.isLoggedIn) {
      userIndex = i;
      return true;
    }
  });

  if (userFindResult) {
    userObj = userFindResult;
    drawWebPageForAuthorizedUser(userObj);
  } else drawWebPageForUnauthorizedUser();
}
readLocalStorage();

profileMenu();
modalForms(userObj, userIndex);
favoritesSeasonChange(userObj, changeModalFormType);