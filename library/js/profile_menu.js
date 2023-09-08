export function profileMenu(userObj) {
  const profileIcon = document.body.querySelector('.profile-icon');
  const profileMenuBox = document.body.querySelector('.profile-menu-box');
  const profileMenuAuthorized = document.getElementById('profile-menu-authorized');
  const profileMenuUnauthorized = document.getElementById('profile-menu-unauthorized');
  const profileElements = document.body.querySelectorAll('.profile-menu-body');

  const toggleProfileMenu = () => {
    profileMenuBox.classList.toggle('profile-menu-box-show');
    if (userObj && userObj.isLoggedIn) {
      profileMenuAuthorized.style.display = 'flex';
      profileMenuUnauthorized.style.display = 'none';
    } else {
      profileMenuAuthorized.style.display = 'none';
      profileMenuUnauthorized.style.display = 'flex';
    }
  }

  profileElements.forEach((el) => el.addEventListener('click', toggleProfileMenu));

  profileIcon.addEventListener('click', toggleProfileMenu);

  document.addEventListener('click', (event) => {
    if (!profileMenuBox.contains(event.target) && !profileIcon.contains(event.target))
      profileMenuBox.classList.remove('profile-menu-show');
  });
}