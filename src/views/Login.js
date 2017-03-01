import React from 'react';

import './Login.css';

class Login extends React.Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="Login">
        <div className="card card--no-overlay">
          <h1>Bienvenid@ a Movierp</h1>
          <button className="btn btn--dark Login__button" onClick={auth.login.bind(this)}>Iniciar sesión</button>
        </div>
      </div>
    );
  }
}

export default Login;
