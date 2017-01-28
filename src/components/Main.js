import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Main.css';
// import { Link } from 'react-router';

class Main extends React.Component {
  constructor() {
    super();
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  scrollEvent(e) {
    const height = window.pageYOffset;
    const firstPic = ReactDOM.findDOMNode(this.refs.firstPic);
    const secondPic = ReactDOM.findDOMNode(this.refs.secondPic);
    // const thirdPic = ReactDOM.findDOMNode(this.refs.thirdPic);

    if (height > 200 && firstPic.classList.value.indexOf('back-opacity')  < 0) {
      firstPic.classList.add('back-opacity');
    } else if (height < 200 && firstPic.classList.value.indexOf('back-opacity')  > 0) {
      firstPic.classList.remove('back-opacity');
    }

    if (height > 1000 && secondPic.classList.value.indexOf('back-opacity')  < 0) {
      secondPic.classList.add('back-opacity');
    } else if (height < 1000 && secondPic.classList.value.indexOf('back-opacity')  > 0) {
      secondPic.classList.remove('back-opacity');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  }

  render() {
    return (
      <section>
        <div ref="firstPic" className="background background-one back">
          <h1>Elan Vital Solutions</h1>
        </div>
        <div className="section">
          <div className="container">
            <h3>Our Mission</h3>

          </div>
        </div>
        <div ref="secondPic" className="background background-two back">
        </div>
        <div className="section second-section">
          <div className="container">
            <h3>Our People</h3>
          </div>
        </div>
        <div ref="thirdPic" className="background background-three back"></div>
      </section>
      );
    }
  }

export default Main;
