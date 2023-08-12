function selfMark(){
  const valid_layout = `
  1. Вёрстка валидная +10
    - для проверки валидности вёрстки используйте сервис https://validator.w3.org/
    - валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью.
    - если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований.
  `;

  const sematic_layout = `
  2. Вёрстка семантическая +16
  В коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше):
    - <header>, <main>, <footer> +2.
    - шесть элементов <section> (по количеству секций) +2.
    - только один заголовок <h1> +2. Если элементов <h1> на странице больше одного, считаем это ошибкой.
    - пять заголовков <h2> (легко отличимы на верхних границах секций, имеют единый стиль) +2.
    - один элемент <nav> (панель навигации в хедере) +2.
    - два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2.
    - семь кнопок <button> +2.
    - два инпута <input> +2.
  `;

  const layout_matches_template = `
  3. Вёрстка соответствует макету +54
  Под оценкой за блок или секцию вы найдете более подробное описание задания, если возникнут вопросы по совпадению с макетом. За нарушения в пунктах, которые можно проверить, снимаем по 2 балла помимо других явных ошибок, но не больше общего количества баллов за блок:
    - блок <header> +8:
      - Стараемся, чтобы текст совпадал с макетом. Если есть небольшие отклонения, то главное для нас, чтобы расстояние между элементами меню было одинаковое, 30px.
      - Элементы меню работают как якоря. При нажатии на один из них нас перебросит наверх соответствующего раздела.
      - Сами элементы меню при наведении (эффект hover) должны быть интерактивными (решайте сами, должны ли они стновиться жирными или подчеркнутыми. Но обязательно курсор должен поменяться на cursor: pointer)
      - Расстояние от самого меню до иконки пользователя - 40px. Иконка является отдльным элементом, и не входит в <nav>.
      - Текст "Brooklyn Public Library" находится в <h1>.
    - секция Welcome +4.
    - секция About +6:
      - Добавьте все картинки, которые будут использованы в папку с картинками. Даже если отображается всего 3, в папке должны быть все 5.
      - Расстояния между кнопками пагинации 10px.
      - Обратите внимание, что кнопки хоть и имеют вид круга, но интерактивная область (область нажатия, выделяемая cursor:pointer) должна быть размером +5px в каждую сторону (круглая, квадратная или со скошенными углами - на ваш выбор). Т.е. это будут прозрачные элементы размерами 26x26, внутри которых будут располагаться непосредственно кнопки 16x16.
    - секция Favorites +8:
      - Интерактивные кнопки дожны иметь структуру input type="radio" + label.
      - Добавьбте небольшую область вокруг кнопки и надписи (например, 5px как в примере секции about) для того, чтобы была возможность легче наводить мышку.
      - Картинок и описаний - много, для 4х секций. Их стоит добавить в проект. А лучше сразу на страницу, и скрыть с помощью CSS свойств, например display: none;.
      - Кнопки "buy" должны быть интерактивными, плавно менять свой цвет при наведении на них, как указано в макете styleguides.
      - Кнопка "own" не должна быть интерактивной, не должна нажиматься. И на ней должен присутствовать атрибут disabled.
    - секция CoffeShop +6.
    - секция Contacts +6:
      - Карту можно вставить просто картинкой. Добавлять ее отдельным сервисом не обязательно.
      - Везде, где в тексте встречаются цифры в виде телефонного номера, это должны быть ссылки с типом "tel" и номером.
      - Там, где в тексте встречается текст с именем контактного лица, это должна быть ссылка с типом "mailto" и адресом почты (например, AmandaHirst@gmail.com).
    - секция LibraryCard +8:
      - "Find your Library card" - это должа быть форма с полями input.
      - Желательно сделать ограничения в полях input на использование только букв и цифр, а также дефиса. Но это правило проверять не нужно.
      - Все 3 кнопки должны быть интерактивными, плавно менять свой цвет при наведении на них, как указано в макете  styleguides.
      - Хоть иконки из модального окна (Visits, Bonuses, Books) сейчас не нужны будут, можно их добавить в соответствующую папку проекта.
    - блок <footer> +8:
      - Адрес библиотеки должен быть ссылкой (место на карте, например).
      - Иконки соцсетей также должны быть ссылками (можете вставить свои соцсети или любые другие аккаунты этих сервисов).
      - Вместо Username должно быть ваше имя, как оно пишется на английском языке и ссылка на GitHub.
  `;

  const layout_general_requirments = `
  4. Общие требования к верстке +20
    - для построения сетки используются флексы или гриды (display: flex... или display: grid...) +2.
    - при уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону +2. Для этого должна быть обертка вокруг всей страницы, которая выравнивается по центру. Фон за рамками страницы может быть черным, белым или любого оттенка серого. Изображение библиотеки в секции Welcome - тянется на всю ширину экрана.
    - иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2.
    - изображения добавлены в формате .jpg (.jpeg) или .png +2.
    - есть favicon +2. В макете иконки нет, поэтому можно сгенерировать самому с помощью сервиса [favicon-generator](https://favicon.io/favicon-generator/). Иконка должна содержать 3 буквы "BPL" (Brooklyn Public Library)
    - плавная прокрутка по якорям +2.
    - в футере название ссылки Username заменено и ведет на GitHub студента +2.
    - в футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2.
    - интерактивность элементов согласно макету. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2.
    - обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2.
  `;

  const summary_mark = "\n Максимальная оценка за задание 100 баллов";

  const str = valid_layout.concat(sematic_layout, layout_matches_template, layout_general_requirments, summary_mark);

  console.log(str);
}
selfMark();

function burgerMenuBehaviour(){
  const burgerMenu = document.querySelector('.burger-menu');
  const headerNav = document.querySelector('.nav');
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

  document.body.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !headerNav.contains(event.target))
      closeMenu();
  });
}
burgerMenuBehaviour();