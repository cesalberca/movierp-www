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

    return(
      <div className="App">
        <Navbar auth={this.props.route.auth}/>
        <main className="App__content">
          {children}
        </main>
      </div>
    );
  }
}

export default App;
