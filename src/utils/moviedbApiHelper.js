const apiKey = '?api_key=130513b81298a5645f81a5734d56f849';
const basePath = 'https://api.themoviedb.org/3';
const imageApiPath = 'https://image.tmdb.org/t/p/w300'
const searchPath = `${basePath}/search/movie`

export function getFilmData(filmName) {
  return new Promise((resolve, reject) => {
    fetch(`${searchPath}/${apiKey}&query=${filmName}`)
    .then((response) => {
      resolve(response.json());
    })
  });
}
