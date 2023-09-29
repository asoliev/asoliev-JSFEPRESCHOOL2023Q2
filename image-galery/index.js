const galleryContainer = document.getElementById('gallery-container');

function getData(query='start') {
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
    console.log('Empty response');
    return;
  }
  data.results.map(item => {
    const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = item.urls.small;
    img.alt = item.alt_description;

    const div = document.createElement('div');
    div.classList.add('gallery-card');

    div.append(img);
    galleryContainer.append(div);

    // const desc = document.createElement('p');
    // desc.classList.add('img-desc');
    // desc.textContent = item.description;
    // galleryContainer.append(desc);
  });
}
getData();