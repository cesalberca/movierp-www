import React from 'react';

import Navbar from './../components/Navbar';

import './App.css';

class App extends React.Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth
      });
    }

    // We need to hide the navbar in the main view
    return(
      <div className="App">
        <Navbar auth={this.props.route.auth} isActive={this.props.location.pathname !== '/'}/>
        <main className="App__content">
          {children}
        </main>
      </div>
    );
  }
}

export default App;
