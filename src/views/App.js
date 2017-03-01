import React from 'react';

import Navbar from './../components/Navbar';

import './App.css';

class App extends React.Component {
  // We need to hide the erp modules in the main view if either one of these conditions is true:
  // The user is in / or in a route that contains /tickets
  shouldWeShowErpModules = () => {
    if (this.props.location.pathname === '/' || this.props.location.pathname.includes('tickets')) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth
      });
    }

    return(
      <div className="App">
        <Navbar
          auth={this.props.route.auth}
          showErpModules={this.shouldWeShowErpModules()}/>
        <main className="App__content">
          {children}
        </main>
      </div>
    );
  }
}

export default App;
