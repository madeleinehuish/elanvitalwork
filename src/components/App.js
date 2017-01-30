import React, { Component } from 'react';
// import logo from '../assets/logo.svg';
import '../styles/App.css';
import { BrowserRouter } from 'react-router';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          {/* test something */}
          <Header/>
          <Main/>
          <Footer/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
