const apiKey = '?api_key=';
const basePath = 'api.themoviedb.org/3/search/movie';
const imageApiPath = 'https://image.tmdb.org/t/p/w300'

export function getFilmData(filmName) {
  const path = `${basePath}/${apiKey}&query=${filmName}`;
  console.log(path);
  fetch(path, {
    method: 'GET',
    headers: new Headers({'content-type': 'application/json'}),
    mode: 'no-cors'
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(e => console.log(e))
}
