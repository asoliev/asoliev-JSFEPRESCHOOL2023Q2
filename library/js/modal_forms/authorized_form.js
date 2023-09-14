export function logoutFunc(user, userIndex) {
  const menuLogout = document.getElementById('profile-menu-logout');
  const menuMyProfile = document.getElementById('profile-menu-myprofile');
  const libraryCardProfile = document.getElementById('library-card-profile');

  function logoutClick(e) {
    let userDataJson = '';
    userDataJson = localStorage.getItem('user-data');
    let userData = JSON.parse(userDataJson);
    userData[userIndex].isLoggedIn = false;
    userDataJson = JSON.stringify(userData);
    localStorage.setItem('user-data', userDataJson);
    window.location.reload();
  }
  menuLogout.addEventListener('click', logoutClick);

  function myProfile() {
    
  }
}