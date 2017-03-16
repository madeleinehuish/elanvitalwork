import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import projectPic1 from '../assets/images/africa3.jpg';
// import projectPic2 from '../assets/images/africa5.jpg';
import projectPic3 from '../assets/images/profile1.jpg';
import projectPic4 from '../assets/images/profile2.jpg';
import '../styles/About.css';


class About extends React.Component {

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
    let anchor = this.props.anchor;
    let node;

    // if (anchor === 'USAAnchor') {
    //
    //   node = ReactDOM.findDOMNode(this.refs.USAAnchor);
    //
    // } else

    if (anchor === 'africaAnchor') {

      node = ReactDOM.findDOMNode(this.refs.africaAnchor);

    }
    node.scrollIntoView();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  }



  render() {
    return (
      <section>
        <div id="topSpacer"></div>
        <div ref="firstPic" className="background background-about-one back">
          <div id="titleWordsProjects">
            <h2>What is Elan Vital Solutions?</h2>
            {/* <h5>“Covering the USA and Africa”</h5> */}
          </div>
        </div>
        <div className="section">
          <div className="container">
            <h3>Our Story</h3>
            <div className="row">
              <div className="twelve columns">
                <div >
                  <Link to='/projects'>
                    <img src={projectPic1} className="profile-pictures" alt="USA projects"/>
                  </Link>
                </div>
                {/* <h4>U.S.A.</h4> */}
              </div>
            </div>
          </div>
        </div>
        <div ref="secondPic" className="background back">
        </div>
        <div className="section second-section">
          <div className="container">
            <h3>Our Leadership</h3>
            <a ref="africaAnchor"></a>
            <div className="row">
              <div className="six columns">
                <div >

                    <img src={projectPic3} className="profile-pictures" alt="USA projects"/>

                </div>
                {/* <h4>U.S.A.</h4> */}
              </div>
              <div className="six columns">
                <div >

                    <img src={projectPic4} className="profile-pictures" alt="USA projects"/>

                </div>
                {/* <h4>U.S.A.</h4> testing */}
              </div>
            </div>
          </div>
        </div>
        <div ref="thirdPic" className="background back"></div>
      </section>
      );

  }

}

export default About;
