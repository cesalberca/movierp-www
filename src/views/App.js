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
          <FormContainer targetTable="cinemas" title="New employee" actionButtonText="Create new employee"/>
        </main>
      </div>
    );
  }
}

export default App;
