function markWork() {
  const lib3MarkStep1 = `
  Этап 1: Пользователь не зарегистрирован

  - Ограниченная карусель в блоке About
    1. Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания. +15
    2. На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева. +2
    3. Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная. +2
    4. Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии. +2
    5. На экране шириной 768px проверяем, чтобы было доступно 2 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5. +2
    6. Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. +2

  - Слайдер в блоке Favorites
    1. Слайдер реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления. +15
    2. На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие. +2
    3. Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Должна отрабатывать до конца. +2
    4. Во время анимаций высота блока Favorites не должна меняться. +2
    5. ❗Панель навигации слайдера сделана по технологии "styicky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites. +2

  - До регистрации
    1. Нажатие на кнопку Check the card ни к чему не приведет.

  - До авторизации
    1. Иконка юзера в хедере отображается в виде силуэта.
    2. В блоке Favorites все кнопки должны иметь имя Buy, а не Own. +2

  `;
  const lib3MarkStep2 = `
  Этап 2: Пользователь на этапе регистрации

  - Меню авторизации при нажатии на иконку пользователя
    1. Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2
    2. На разрешении 768px при открытом бургер-меню, оно закрвывается и открывается меню авторизации. +2
    3. То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации. +2
    4. Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации. +2

  - Модальное окно REGISTER
    1. Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
    2. При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password. +2
    3. При нажатии кнопки Sign Up в блоке  Digital Library Cards также появляется модальное окно REGISTER. +2
    4. Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
    5. При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2
    6. В данном случае, ограничения по полям - все поля должны быть не пустыми. +2
    7. Пароль должен быть не короче 8 символов. +2
    8. В поле E-mail должна быть валидация типа email. +2

  - Окончание регистрации
    1. Данные сохраняются в хранилище localStorage, в том числе и пароль, хотя в реальной жизни так делать нельзя. +2
    2. Иконка пользователя меняется на заглавные буквы имени. +2
    3. Отображение страницы приходит в состояние после авторизации (этап 4). +2
    4. Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа. +2

  - При наличии регистрации, но будучи не авторизованным
    1. Блок Digital Library Cards. Если введенные имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2
    2. Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. +2

  `;
  const lib3MarkStep3 = `
  Этап 3: Пользователь на этапе входа в учетную запись после регистрации.

  - Модальное окно LOGIN
    1. Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
    2. При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password. +2
    3. При нажатии кнопки Log In в блоке  Digital Library Cards также появляется модальное окно LOGIN. +2
    4. Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
    5. При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2
    6. Для авторизации все поля должны быть не пустыми. +2
    7. Пароль должен быть не короче 8 символов. +2

  - Блок Favorites
    1. Если пользователь еще не вошел в учетную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN. +2

  `;
  const lib3MarkStep4 = `
  Этап 4: Пользователь после входа в учетную запись

  - Меню профиля при нажатии на иконку с инициалами пользователя
    1. При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title). +2
    2. Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2
    3. На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2
    4. То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна. +2
    5. Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля. +2
    6. ❗Вместо надписи Profile отображается девятизначный Card Number. +2
    7. Нажатие на кнопку My Profile открывает модальное окно MY PROFILE. +2
    8. Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1. +2

  - Модальное окно MY PROFILE
    1. Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
    2. Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию. +2
    3. Счетчик для Visits отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16. +2
    4. Рядом с Card Number есть кнопка, нажатие на которую код карты клиента будет скопирован в буфер обмена. +2
    5. Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
    6. При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2

  - Блок Favorites
    1. При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD. +2
    2. При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле. +2

  - Модальное окно BUY A LIBRARY CARD
    1. ❗Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще. +2
    1. Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
    2. При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2
    3. Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми. +2
    4. Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет. +2
    5. Expiration code содержит 2 поля на с ограничением в 2 цифры. +2
    6. CVC должен содержать 3 цифры. +2
    7. После удачного нажатия на кнопку Buy, окно закрывается, и больше мы к нему не возвращаемся.

  - Блок Digital Library Cards
    1. При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account. +2

  `;

  const libMark = `
  1. Library#1 - Фиксированная вёрстка

    1.1. Вёрстка валидная +10
    1.2. Вёрстка семантическая +16
    1.3. Вёрстка соответствует макету +54
    1.4. Общие требования к верстке +20

  Максимальная оценка за задание 100 баллов



  2. Library#2 - Адаптивная вёрстка

    2.1 Вёрстка соответствует макету. Ширина экрана 768px +26
    2.2 Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. +12
    2.3 На ширине экрана 768рх реализовано адаптивное меню +12

  Максимальная оценка за задание 50 баллов



  3. Library#3

    ${lib3MarkStep1}
    ${lib3MarkStep2}
    ${lib3MarkStep3}
    ${lib3MarkStep4}
  Максимальная оценка за задание 200 баллов
  `;

  console.log(libMark);
}
//markWork();


function burgerMenuBehaviour(){
  const burgerMenu = document.body.querySelector('.burger-menu');
  const headerNav = document.body.querySelector('.nav');
  const headerItem = headerNav.querySelectorAll('a');

  const toggleClass = (element, className) => element.classList.toggle(className);

  burgerMenu.addEventListener('click', () => {
    toggleClass(burgerMenu, 'burger-menu-opened');
    toggleClass(headerNav, 'nav-burger');
  })

  const closeMenu = () => {
    burgerMenu.classList.remove('burger-menu-opened');
    headerNav.classList.remove('nav-burger');
  }

  headerItem.forEach((e) => e.addEventListener('click', closeMenu));

  document.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !headerNav.contains(event.target))
      closeMenu();
  });
}
burgerMenuBehaviour();


function sliderBehaviour() {
  const slideImages = document.body.querySelector('.slider-images');
  const prevBtn = document.body.querySelector("[data-slide-btn='prev']");
  const nextBtn = document.body.querySelector("[data-slide-btn='next']");
  const pageBtns = document.body.querySelectorAll('.slider-radio-btn');

  let slideImgX = 0;
  let slideCurPage = 0;
  const imgWidth = 475;

  prevBtn.addEventListener('click', () => {
    slideCurPage--;
    prevNextSlide();
  });

  nextBtn.addEventListener('click', () => {
    slideCurPage++;
    prevNextSlide();
  });

  pageBtns.forEach(
    (el) => el.addEventListener('change', (event) => slideSelect(event))
  );

  function prevNextSlide() {
    selectPageDot();
    slideMove();
  }
  
  function slideSelect(event) {
    slideCurPage = event.target.dataset.pagination;
    slideMove();
  }

  function slideMove() {
    slideImgX = -imgWidth * slideCurPage;
    slideImages.style.transform = `translateX(${slideImgX}px)`;
    checkSlideEnd();
  }

  function selectPageDot() {
    for (let i = 0; i < 5; i++) {
      const sliderDot = document.body.querySelector(`[data-pagination='${i}']`);

      if (i === slideCurPage) sliderDot.checked = true;
      else sliderDot.checked = false;
    }
  }

  function checkSlideEnd() {
    prevBtn.disabled = slideCurPage == 0;
    nextBtn.disabled = slideCurPage == 4;
  }

  window.addEventListener('resize', (event) => {
    slideCurPage = 0;
    slideMove();
    selectPageDot();
  });
}
sliderBehaviour();


function favoritesSeasonChange() {
  const seasonForm = document.body.querySelector('.favorites-seasons');

  let books = null;
  async function getFavoriteSeasonsData() {
    const response = await fetch("./assets/favorites.json");
    return await response.json();
  }
  async function initFavoritesSeason() {
    books = await getFavoriteSeasonsData();
    changeSeasonBook('winter');
  }
  initFavoritesSeason();

  seasonForm.addEventListener('input', (e) => changeSeasonBook(e.target.id));
  function changeSeasonBook(season) {
    const favoriteItems = document.body.querySelector('.favorites-items');
    favoriteItems.style.opacity = 0;
    setTimeout(() => { drawSeasonBooks(season); }, 300);
  }
  function drawSeasonBooks(season) {
    const favoriteItems = document.body.querySelector('.favorites-items');
    let html = '';
    for (let i = 0; i < 4; i++) {
      html += drawBookHTML(books[season][i], season, i);
    }
    favoriteItems.innerHTML = html;
    favoriteItems.style.opacity = 1;
  }
  function drawBookHTML(obj, season, i) {
    return `<div class='favorites-items-box'>
      <h4 class='favorites-items-staff-picks'>Staff Picks</h4>
      <hr class='favorites-items-hr'>

      <h5 class='favorites-items-header'>
        <span class='favorites-items-title'>${obj.title}</span>
        <br>
        <span class='favorites-items-author'>${obj.author}</span>
      </h5>

      <p class='favorites-items-description'>${obj.description}</p>

      <button type='button' class='button'>Buy</button>
      <img src='assets/img/favorites/${season}/book${i+1}.jpg' alt='${obj.title}' class='favorites-items-box-img'>
    </div>`;
  }
}
favoritesSeasonChange();


function profileMenu() {
  const profileIcon = document.body.querySelector('.profile-icon');
  const profileMenu = document.body.querySelector('.profile-menu');
  const profileElements = document.body.querySelectorAll('.profile-menu-body');

  const toggleProfileMenu = () => profileMenu.classList.toggle('profile-menu-show');

  profileElements.forEach((el) => el.addEventListener('click', toggleProfileMenu));

  profileIcon.addEventListener('click', toggleProfileMenu);

  document.addEventListener('click', (event) => {
    if (!profileMenu.contains(event.target) && !profileIcon.contains(event.target))
      profileMenu.classList.remove('profile-menu-show');
  });
}
profileMenu();


function modalForms() {
  const modalDiv = document.body.querySelector('.modal');
  const modalFormContainer = document.body.querySelector('.modal-form-container');
  const modalFormTitle = document.body.querySelector('.modal-form-title');
  const registerForm = document.body.querySelector('.modal-register-form');
  const loginForm = document.body.querySelector('.modal-login-form');

  const profileMenuRegister = document.body.querySelector('.profile-menu-register');
  const profileMenuLogin = document.body.querySelector('.profile-menu-login');
  const modalRegisterCloseIcon = document.body.querySelector('.modal-form-close-icon');

  modalRegisterCloseIcon.addEventListener('click', () => modalDiv.style.display = 'none');

  modalDiv.addEventListener('click', (event) => {
    if (!modalFormContainer.contains(event.target))
      modalDiv.style.display = 'none';
  });


  function registerModalForm() {
    profileMenuRegister.addEventListener('click', () => {
      loginForm.style.display = 'none';
      registerForm.style.display = 'flex';
      modalFormTitle.innerHTML = 'Register';
      modalDiv.style.display = 'flex';
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

    const user = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      cardNumber:''
    }
    const users = [];

    function submitForm(e) {
      e.preventDefault();
      const firstName = registerForm.elements['register-first-name-input'];
      const lastName = registerForm.elements['register-last-name-input'];
      const email = registerForm.elements['register-email-input'];
      const password = registerForm.elements['register-password-input'];
      const cardNumber = generateCardNumber();

      user.firstName = firstName.value;
      user.lastName = lastName.value;
      user.email = email.value;
      user.password = password.value;
      user.cardNumber = cardNumber;

      users.push(user);

      localStorage.setItem('user-data', JSON.stringify(users));

      registerForm.submit();
    }

    registerForm.addEventListener('submit', submitForm);
  }
  registerModalForm();


  function loginModalForm() {
    profileMenuLogin.addEventListener('click', () => {
      registerForm.style.display = 'none';
      loginForm.style.display = 'flex';
      modalFormTitle.innerHTML = 'Login';
      modalDiv.style.display = 'flex';
    });

    function submitForm(e) {
      e.preventDefault();
      const email = loginForm.elements['login-email-input'];
      const password = loginForm.elements['login-password-input'];

      const tmp = localStorage.getItem('user-data');
      const tmp1 = JSON.parse(tmp);
      const tmp2 = tmp1.find((v) => {
        console.log(email.value);
        if (v.email === email.value) return true;
        if (v.cardNumber === email.value) return true;
        return false;
      });
      console.log(tmp2);
      //loginForm.submit();
    }

    loginForm.addEventListener('submit', submitForm);
  }
  loginModalForm();
}
modalForms();
const tmp = localStorage.getItem('user-data');
//JSON.parse(tmp)[0]
console.log(tmp);