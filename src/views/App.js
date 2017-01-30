import React from 'react';

import Navbar from './../components/Navbar';
import Header from './../components/Header';

import './App.css';

import logo from './../assets/logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBreadcrumb: ''
    }

    this.handlePathLocation = this.handlePathLocation.bind(this);
  }

  handlePathLocation() {
    const currentLocation = this.props.location.pathname;
    console.log(this.props.location.pathname);
    this.setState({currentBreadcrumb: currentLocation});
  }

  render() {
    return (
      <div className="App">
        <Header breadcrumb={this.state.currentBreadcrumb}/>
        <Navbar logo={logo} handlePathLocation={this.handlePathLocation} />
        <main className="App__content">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
