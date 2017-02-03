import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './Main';
import Newsletter from './Newsletter';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header/>
          <Match pattern="/" exactly render={
            () => <Main
                { ...this.state }
            />
          }/>
          <Match pattern="/newsletter" exactly render={
            () => <Newsletter
                { ...this.state }
            />
          }/>
          <Footer/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
