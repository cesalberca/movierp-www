import AuthLock from 'auth0-lock';
import { browserHistory } from 'react-router';

class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        responseType: 'token'
      }
    });

    this.lock.on('authenticated', this.doAuthentication.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

   doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken);
    // navigate to the home route
    browserHistory.replace('/cinemas');
  }

  login() {
    this.lock.show();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken();
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token');
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
  }
}

export default AuthService;
