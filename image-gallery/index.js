const galleryContainer = document.getElementById('gallery-container');
const search = document.getElementById('search');
const searchInput = document.getElementById('search-input');
const clearInput = document.getElementById('clear-input');
const searchIcon = document.getElementById('search-icon');
const closeIcon = document.getElementById('close-icon');

searchInput.addEventListener('input', (e) => {
  if (searchInput.value.length > 0) {
    searchIcon.classList.add("hide");
    closeIcon.classList.remove("hide");
  }
  else {
    searchIcon.classList.remove("hide");
    closeIcon.classList.add("hide");
  }
});
clearInput.addEventListener('click', (e) => {
  searchInput.value = '';
});
search.addEventListener('submit', (e) => {
  e.preventDefault();
  getData(searchInput.value);
});

function getData(query='start') {
  if (query.length < 1) return;
  const api = 'https://api.unsplash.com';
  const endpoint = '/search/photos';
  const paramArray = [
    'client_id=KQkGd_2wSFOFk-qsUMybi91oWfGmKJXkcizrPgVw9Xw',
    'orientation=squarish',
    'content_filter=high',
    'page=1'
  ];
  const params = paramArray.join('&');

  fetch(`${api}${endpoint}?query=${query}&${params}`)
  .then(response => response.json())
  .then(data => renderImages(data))
  .catch(err => console.error(err));
}
function renderImages(data) {
  if (data.total === 0) {
    console.warn('Empty response');
    return;
  }

  const galleryArray = [];
  data.results.map(item => {
    const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = item.urls.small;
    img.alt = item.alt_description;

    const div = document.createElement('div');
    div.classList.add('gallery-card');

    div.append(img);
    galleryArray.push(div);
  });
  galleryContainer.replaceChildren(...galleryArray);
}
getData();