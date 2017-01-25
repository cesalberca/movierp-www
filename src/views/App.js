import React from 'react';

import Navbar from './../components/Navbar';
import Header from './../components/Header';

import './App.css';

import logo from './../assets/logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreadcrumb: this.props.location.pathname
    }
  }

  componentDidMount() {
    this.setState({currentBreadcrumb: this.props.location.pathname})
  }

  render() {
    return (
      <div className="App">
        <Header breadcrumb={this.state.currentBreadcrumb}/>
        <Navbar logo={logo} />
        <main className="App__content">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
