import { markWork } from './js/mark_work.js';
import { burgerMenuBehaviour } from './js/burger_menu.js';
import { sliderBehaviour } from './js/slider.js';
import { favoritesSeasonChange } from './js/favorites.js';
import { profileMenu } from './js/profile_menu.js';
import { modalForms } from './js/modal_forms.js';

//markWork();
burgerMenuBehaviour();
sliderBehaviour();
favoritesSeasonChange();

let userObj = {
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  cardNumber:'',
  isLoggedIn: false
}

profileMenu(userObj);

modalForms(userObj);