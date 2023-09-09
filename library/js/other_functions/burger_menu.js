export function burgerMenuBehaviour() {
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