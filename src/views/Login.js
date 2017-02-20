import React from 'react';

export class Login extends React.Component {
  render() {
    const { auth } = this.props;
    return(
      <div>
        <h1>Bienvenid@ a Movierp</h1>
        <button className="btn btn--dark" onClick={auth.login.bind(this)}>Iniciar sesión</button>
      </div>
    );
  }
}

export default Login;
