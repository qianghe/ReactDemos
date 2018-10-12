import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '@route';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        {routes()}
      </>
    );
  }
}

export default App;
