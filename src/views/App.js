import React from "react";

import Navbar from './../components/Navbar';
import Header from './../components/Header';
import FormContainer from './../components/FormContainer';
import FormItem from './../components/FormItem';

import './App.css';

import logo from './../assets/logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBreadcrumb: ''
    }

    this.handlePathLocation = this.handlePathLocation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handlePathLocation() {
    const currentLocation = this.props.location.pathname;
    console.log(this.props.location.pathname);
    this.setState({currentBreadcrumb: currentLocation});
  }

  handleInputChange() {
    console.log('input cambiado');
  }

  render() {
    
    return (
      <div className="App">
        <Header breadcrumb={this.state.currentBreadcrumb}/>
        <Navbar logo={logo} handlePathLocation={this.handlePathLocation} />
        <main className="App__content">
          {this.props.children}
          <FormContainer/>
        </main>
      </div>
    );
  }
}

export default App;
