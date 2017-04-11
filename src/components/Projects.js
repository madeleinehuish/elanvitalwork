import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
// import projectPic1 from '../assets/images/IMG_4573.JPG';
import projectPic2 from '../assets/images/VTCpicture.png';
import projectPic3 from '../assets/images/SAUpicture1.png';
import projectPic4 from '../assets/images/SAUpicture2.png';
import projectPic5 from '../assets/images/SAUpicture3.png';
import projectPic6 from '../assets/images/buddyLockerPicture.png';
import projectPic7 from '../assets/images/portableWasherPicture1.png';
import projectPic8 from '../assets/images/portableWasherPicture2.png';

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
          <h5 className="h5BlockProjects">Veteran's Training Center (VTC)</h5>
            <p className="pProjects">The proposed VTC will private dorms for 41 veterans as well as provide space for programs, chapel, classrooms, laundry, bath/shower, eating area, recreation, computer room, kitchen, TV room, outdoor deck sitting area.
            The building is designed for 7200 of manufacturing on 1st level, 864 sqft offices on 2nd level and 7200 VTC on 3rd level, plus 256 sqft of deck.
            Mayor Barbara Tolbert has been very helpful in helping us navigate the challenges of bringing the community, including program providers together. The VTC has gained the support of the City of Arlington building department.
            Multiple nonprofit organizations who address veterans have been keen to help us make this a reality. If you are interested in contributing to this project please drop us a line.</p>
        </div>
        <div className="imgDiv">
          <img src={projectPic2} alt="VTC picture"></img>
        </div>
        <div className="offset-by-one ten columns projectTextBlock">
          <h5 className="h5BlockProjects">Stand Alone Units (SAU)</h5>
            <p className="pProjects">We have developed multiple SAU designs to fit the needs of a variety of nonprofit program providers. From women escaping sex trafficking, to homeless students,  tiny homes to temporary shelters shown below for our homeless veterans and several other sub-categories of those experiencing homelessness. We are thankful for the expertise of a few national veterans’ organizations who have helped us understand the physiological / emotional needs of those needing temporary shelters. Currently a Buddy Double prototype is under construction for review from various veterans’ organizations for their use. See images below:</p>
        </div>
        <div className="imgDiv">
          <img src={projectPic3} alt="stand alone unit picture"></img>
        </div>
        <div className="offset-by-one ten columns projectTextBlock">
            <p className="pProjects">Shown below is the Buddy Double with its unique fold down bed in the down position and in the full upright position. Not shown is a midway positon of it being a sofa. Opposite the sofa on the center wall will be a fold down desk top. Each unit will come with a power outlet and light, lockable entry door, storage shelving and window for ventilation. Each unit is highly insulated and has a 100 year life cycle made from 100% recyclable materials. Each unit can be moved as need with a fork lift and flatbed truck. </p>
        </div>
        <div className="imgDiv">
          <img src={projectPic4} alt="stand alone unit picture"></img>
        </div>
        <div className="offset-by-one ten columns projectTextBlock">
            <p className="pProjects">ADU SAU:
              This single SAU has been developed for those needing special wheelchair accessibility.
            </p>
        </div>
        <div className="imgDiv">
          <img src={projectPic5} alt="stand alone unit picture"></img>
        </div>
        <div className="offset-by-one ten columns projectTextBlock">
          <h5 className="h5BlockProjects">Buddy Lockers</h5>
            <p className="pProjects">After talking to multiple nonprofits who provide programs to homeless individuals it has become apparent that storage lockers for belongings critically needed. For example, if a person wants to go to a job interview, what do they do with their backpack, tent, sleeping bag, etc? Typically, these things are hidden in the woods in hopes that they will not get stolen.  Every program we’ve talked to wants storage for those they serve. After consulting with several program providers we’ve come up with the design you see below:</p>
        </div>
        <div className="imgDiv">
          <img src={projectPic6} alt="buddy locker picture"></img>
        </div>
        <div className="offset-by-one ten columns projectTextBlock">
          <h5 className="h5BlockProjects">Portable Washer/Dryer/Shower Trailer</h5>
            <p className="pProjects">24’ Trailer outfitted with 4 washer/dryers and 4 showers 
              DJ Rabe and Eric Hogan of Covision Ministries have asked us to design new a washer/dryer trailer for their growing ministry. They currently use a box van with two washer/dryers 4-6 days each week to serve the homeless in several locations in Snohomish Co. The new trailer with have 4 washer/dryer units and 4 showers! We hope to build and get this new trailer in service by mid-year. See drawings below:</p>
        </div>
        <div className="imgDiv">
          <img src={projectPic7} alt="portable washer picture"></img>
        </div>
        <div className="imgDiv">
          <img src={projectPic8} alt="portable washer picture"></img>
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
        {/* <div ref="thirdPic" className="background back"></div> */}
      </section>
      );

  }

}

export default Projects;
