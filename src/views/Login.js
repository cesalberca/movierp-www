import React from 'react';
import AuthService from './../utils/authService';

export class Login extends React.Component {
  render() {
    const { auth } = this.props;
    return(
      <div>
        <h2>Login</h2>
        <button onClick={auth.login.bind(this)}>Login</button>
      </div>
    );
  }
}

export default Login;
