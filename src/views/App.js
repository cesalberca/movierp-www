import React from "react";

import Navbar from './../components/Navbar';
import FormContainer from './../components/FormContainer';

import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Navbar />
        <main className="App__content">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
