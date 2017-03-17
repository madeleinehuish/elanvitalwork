import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './Main';
import NewsMenu from './NewsMenu';
import About from './About';
import Give from './Give';
import Projects from './Projects';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anchor: ''
    };
    this.changeAnchor = this.changeAnchor.bind(this);
  }

  changeAnchor(anchorVar) {
    console.log('im in the changeAnchor function in app');
    this.setState({ anchor: anchorVar });
  }

  render() {
    return (
      <BrowserRouter >
        <main>
          <Header
              { ...this.state }
              changeAnchor={this.changeAnchor}
          />
          <section className="body">
            <Match pattern="/" exactly render={
              () => <Main
                { ...this.state }
              />
            }/>
            <Match pattern="/newsletter" exactly render={
              () => <NewsMenu
                { ...this.state }
              />
            }/>
            <Match pattern="/about" exactly render={
              () => <About
                { ...this.state }
              />
            }/>
            <Match pattern="/give" exactly render={
              () => <Give
                { ...this.state }
              />
            }/>
            <Match pattern="/projects" exactly render={
              () => <Projects
                {...this.state}
              />
            }/>
          </section>
          <Footer/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
