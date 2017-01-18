import React from 'react';

import Navbar from './../components/Navbar';

import './App.css';

import logo from './../assets/logo.svg';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar logo={logo} />
        <main className="App__content">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
