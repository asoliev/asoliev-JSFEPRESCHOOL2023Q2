export function profileMenu() {
  const profileIcon = document.body.querySelector('.profile-icon');
  const profileMenuBox = document.body.querySelector('.profile-menu-box');
  const profileElements = document.body.querySelectorAll('.profile-menu-body');

  function toggleProfileMenu() {
    profileMenuBox.classList.toggle('profile-menu-box-show');
  }

  profileElements.forEach((el) => el.addEventListener('click', toggleProfileMenu));

  profileIcon.addEventListener('click', toggleProfileMenu);

  document.addEventListener('click', (event) => {
    if (!profileMenuBox.contains(event.target) && !profileIcon.contains(event.target))
      profileMenuBox.classList.remove('profile-menu-box-show');
  });
}