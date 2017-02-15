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
        resolve(response.json());
      } else {
        reject(response.error);
      }
    });
  });
}

/**
 * Retrieves a list of all elements given a table
 */
export function selectAll(table) {
  return new Promise((resolve, reject) => {
    fetch(`${apiPath}/${table}`, {
      method: 'GET'
    })
    .then((response) => {
      response.json()
      .then(json => {
        resolve(json._embedded[table])
      });
    });
  });
}

/**
 * Deletes one resource from a table given an id
 */
export function deleteOne(table, id) {
  return new Promise((resolve, reject) => {
    fetch(`${apiPath}/${table}/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if (response.ok) {
        resolve();
      } else {
        reject(response);
      }
    });
  });
}

/**
 * Returns column data given a table
 */
export function getColumnData(table) {
  return new Promise((resolve, reject) => {
    fetch(`${apiPath}/profile/${table}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const tableColumns = json.alps.descriptors[0].descriptors;
      resolve(tableColumns);
    })
    .catch(error => {
      reject(error);
    });
  });
}

