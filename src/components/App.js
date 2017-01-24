import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './layouts/Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header/>
          <Main/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
