import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import projectPic1 from '../assets/images/IMG_4573.JPG';
import projectPic2 from '../assets/images/VTCpicture.png';

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
      <section className="backDrop">
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
        <br/>
        <div className="offset-by-one ten columns projectTextBlock">
          <h5 className="h5BlockProjects">Veteran's Training Center</h5>
            <p>The proposed VTC will private dorms for 41 veterans as well as provide space for programs, chapel, classrooms, laundry, bath/shower, eating area, recreation, computer room, kitchen, TV room, outdoor deck sitting area.
            The building is designed for 7200 of manufacturing on 1st level, 864 sqft offices on 2nd level and 7200 VTC on 3rd level, plus 256 sqft of deck.
            Mayor Barbara Tolbert has been very helpful in helping us navigate the challenges of bringing the community, including program providers together. The VTC has gained the support of the City of Arlington building department.
            Multiple nonprofit organizations who address veterans have been keen to help us make this a reality. If you are interested in contributing to this project please drop us a line.</p>
        </div>
        <div className="imgDiv">
          <img src={projectPic2}></img>
        </div>
        {/* <div ref="secondPic" className="background  back">
        </div> */}
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
