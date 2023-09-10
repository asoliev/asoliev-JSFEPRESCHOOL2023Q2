export function favoritesSeasonChange(user, changeModalFormType) {
  userObj = user;
  const seasonForm = document.body.querySelector('.favorites-seasons');

  async function getFavoriteSeasonsData() {
    const response = await fetch("./assets/favorites.json");
    return await response.json();
  }
  async function initFavoritesSeason() {
    books = await getFavoriteSeasonsData();
    changeSeasonBook('winter');
  }
  initFavoritesSeason();

  function changeSeasonBook(season) {
    const favoriteItems = document.body.querySelector('.favorites-items');
    favoriteItems.style.opacity = 0;
    setTimeout(() => { drawSeasonBooks(season); }, 300);
  }
  seasonForm.addEventListener('input', (e) => changeSeasonBook(e.target.id));

  function drawSeasonBooks(season) {
    const favoriteItems = document.body.querySelector('.favorites-items');
    let html = '';

    for (let i = 0; i < 4; i++)
      html += drawBookHTML(books[season][i], season, i);

    favoriteItems.innerHTML = html;
    favoriteItems.style.opacity = 1;
    favoriteBuyBook(season, changeModalFormType);
  }

  function drawBookHTML(obj, season, i) {
    return `<div class='favorites-items-box'>
    <h4 class='favorites-items-staff-picks'>Staff Picks</h4>
    <hr class='favorites-items-hr'>

    <h5 class='favorites-items-header'>
      <span class='favorites-items-title'>${obj.title}</span>
      <br>
      <span class='favorites-items-author'>By ${obj.author}</span>
    </h5>

    <p class='favorites-items-description'>${obj.description}</p>

    <button type='button' class='button favorite-buy-buttons'>Buy</button>
    <img src='assets/img/favorites/${season}/book${i + 1}.jpg' alt='${obj.title}' class='favorites-items-box-img'>
    </div>`;
  }
}

let books = null;
let userObj = {};

function favoriteBuyBook(season, changeModalFormType) {
  const favoriteBuyButtons = document.querySelectorAll('.favorite-buy-buttons');
  favoriteBuyButtons.forEach((el, n, p) => {
    el.addEventListener('click', (event)=> favoriteBuyClick(event, n, season, changeModalFormType))
  });
}

function favoriteBuyClick(event, n, season, changeModalFormType) {
  const el = event.target;
  if (!userObj) {
    changeModalFormType(true);
    modalDivToggle();
  }
}
const modalDiv = document.body.querySelector('.modal');
const modalDivToggle = () => modalDiv.classList.toggle('display-flex');