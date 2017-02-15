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
export function insert(resource, item) {
  return new Promise((resolve, reject) => {
    fetch(`${apiPath}/${resource}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item)
    })
    .then(response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(response.error);
      }
    });
  });
}

export function update(resource, id, updatedResource) {
  return new Promise((resolve, reject) => {
    fetch(`${apiPath}/${resource}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedResource)
    })
    .then(response => {
      if(response.ok) {
        resolve(response.json());
      } else {
        reject(response.error);
      }
    });
  });
}

/**
 * Retrieves a list of all elements given a resource
 */
export function selectAll(resource) {
  return new Promise((resolve, reject) => {
    fetch(`${apiPath}/${resource}`, {
      method: 'GET'
    })
    .then(response => {
      if (response.ok) {
        response.json()
        .then(json => {
          resolve(json._embedded[resource])
        });
      } else {
        reject(response.error);
      }
    });
  });
}

/**
 * Deletes one resource from a resource given an id
 */
export function deleteOne(resource, id) {
  return new Promise((resolve, reject) => {
    fetch(`${apiPath}/${resource}/${id}`, {
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
 * Returns column data given a resource
 */
export function getColumnData(resource) {
  return new Promise((resolve, reject) => {
    fetch(`${apiPath}/profile/${resource}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const resourceColumns = json.alps.descriptors[0].descriptors;
      resolve(resourceColumns);
    })
    .catch(error => {
      reject(error);
    });
  });
}

