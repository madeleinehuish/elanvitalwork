import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Main.css';
import profilePic1 from '../assets/images/passport_pic.jpg';
import profilePic2 from '../assets/images/fbb115b8_1385308.jpg';
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
          <h5>“Serving those experiencing homelessness”</h5>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
            <h3>Our Mission</h3>
              <h5 id="mission-statement" className="u-width-full-length">"To demonstrate Christ’s love to people experiencing homelessness through the provision of transitional housing, education and job training."</h5>
              <p className="extMission-statement">
                Our focus is housing. We offer unique housing solutions teaming with nonprofits who
                offer programs to provide the homeless with comprehensive care, counseling and training.
                Our goal is to see self-reliant individuals exiting the programs offered.
              </p>
            </div>
          </div>
        </div>
        <div ref="secondPic" className="background background-two back">
        </div>
        <div className="section second-section">
          <div className="container">
            <h3>Our People</h3>
            <div className="row">
              <div className="six columns">
                <div className="profile-pictures">
                  <img src={profilePic1} alt="Marc"/>
                </div>
                <h4>CEO, R. Marc Fulmer</h4>
              </div>
              <div className="six columns">
                <div className="profile-pictures">
                  <img src={profilePic2} alt="Darrel"/>
                </div>
                <h4>Chairman, Darrel Potter</h4>
              </div>
            </div>
          </div>
        </div>
        <div ref="thirdPic" className="background background-three back"></div>
      </section>
      );
    }
  }

export default Main;
