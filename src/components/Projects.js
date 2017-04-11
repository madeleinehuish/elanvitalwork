import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import projectPic1 from '../assets/images/IMG_4572.JPG';
import projectPic2 from '../assets/images/africa5.jpg';
import '../styles/Projects.css';


class Projects extends React.Component {

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
        <div ref="firstPic" className="background background-projects-one back">
          <div id="titleWordsProjects">
            <h2>Current Projects</h2>
            {/* <h5>“Covering the USA and Africa”</h5> */}
          </div>
        </div>
        {/* <div className="section">
          <div className="container">
            <h3>Our USA Projects</h3>
            <div className="row">
              <div className="twelve columns">
                <div >
                  <Link to='/projects'>
                    <img src={projectPic1} className="profile-pictures" alt="USA projects"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <h5>test</h5>
        <div ref="secondPic" className="background  back">
        </div>
        {/* <div className="section second-section">
          <div className="container">
            <h3>Our Africa Projects</h3>
            <a ref="africaAnchor"></a>
            <div className="row">
              <div className="twelve columns">
                <div >
                  <Link to='/projects'>
                    <img src={projectPic2} className="profile-pictures" alt="USA projects"/>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div> */}
        <div ref="thirdPic" className="background back"></div>
      </section>
      );

  }

}

export default Projects;
