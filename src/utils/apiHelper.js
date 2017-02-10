const defaultPort = 8080;
const baseAPIPath = 'api'
const apiPath = `http://localhost:${defaultPort}/${baseAPIPath}`;

/**
 * Function that inserts to our database using the api. It returns a promise so it must be used as follows:
 *
 * insert(cinemas, {nombre: 'Yelmo', cif: '123'})
 * .then(response => console.log(response))
 * .catch(error => console.log(error));
 */
export function insert(table, item) {
  return new Promise((resolve, reject) => {
    fetch(`${apiPath}/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item)
    })
    .then((response) => {
      if (response.ok) {
        resolve(response);
      } else {
        reject(response.error);
      }
    })
  })
}

export function selectAll(table) {
  fetch(`${apiPath}/${table}`, {
    method: 'GET'
  })
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    this.setState({rooms: json._embedded.rooms});
  });
}
