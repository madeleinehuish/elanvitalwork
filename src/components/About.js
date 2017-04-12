import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import projectPic1 from '../assets/images/HomelessPlaque.jpg';
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

  // componentDidMount() {
  //   window.addEventListener('scroll', this.scrollEvent);
  //   let anchor = this.props.anchor;
  //   let node;
  //
  //   // if (anchor === 'USAAnchor') {
  //   //
  //   //   node = ReactDOM.findDOMNode(this.refs.USAAnchor);
  //   //
  //   // } else
  //
  //   // if (anchor === 'africaAnchor') {
  //   //
  //   //   node = ReactDOM.findDOMNode(this.refs.africaAnchor);
  //   //
  //   // }
  //   node.scrollIntoView();
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.scrollEvent);
  // }



  render() {
    return (
      <section className="backDropAbout">
        <div id="topSpacer"></div>
        <div ref="firstPic" className="background-about background-about-one back">
          <div id="titleWordsProjects">
            <h2>What is Elan Vital Solutions?</h2>
          </div>
        </div>
        <div className="sectionAbout">
          <div className="container">
            <div className="offset-by-one ten columns aboutTextBlock">
              <h5 className="h5BlockAbout">Our Story</h5>
              <p className="pAbout">Elan Vital Solutions (EVS) grew out of a common commitment between the founding families
                to provide shelter to those in need around the world. With a combined 75 years’ experience in the construction
                industry and 45 years’ experience in nonprofit administration, EVS was established on September 12, 2016 as a
                nonprofit organization in the State of Washington.</p>
            </div>
            <div className="twelve columns aboutTextBlock">
              <h5 className="h5BlockAbout">Robert Marc Fulmer CEO</h5>
              <div className="container">
                <div className="row">
                  <div className="twelve columns">
                    <p className="pAbout"><img src={projectPic3} alt="Marc Fulmer" className="marcImage"></img>Marc's early career years (1966-2002) were in the construction industry, mainly focused on general contracting in light commercial tenant improvements and hospital renovations. In 2002 Marc transitioned to the nonprofit world as a founding staff member and eventual President of Agathos International working in Africa on orphan care, medical and food relief. Marc remains as Director of GIK and Medical Relief for Agathos International. Marc also serves on the board of the Persecution Project Foundation working in Southern Sudan. In 2011 in addition to his nonprofit work, Marc went to work with his partners in Thain Boatworks Inc building passenger ferries for Eastern Africa. In August of 2016 Marc began to transition into a new role with Buddy Shelters LLC as VP as well as beginning the new nonprofit with his partner Darrel Potter called Elan Vital Solutions, addressing homelessness here in the United States. Marc resides in Arlington, WA and is married to Mae Fulmer for 24 years, they have four children and 4 grandchildren.  The Fulmer’s are members of Damascus Road Church in Marysville, WA.</p>
                  </div>
                  {/* <div className="six columns imgDiv"> */}

                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="twelve columns aboutTextBlock">
              <h5 className="h5BlockAbout">Marc Fulmer CEO</h5>
              <div className="container">
                <div className="row">
                  <div className="twelve columns">
                    <p className="pAbout"><img src={projectPic4} alt="Darrell V. Potter" className="darrellImage"></img>Mr. Potter, started his construction career with Landmark Homes from 1977 – 2010. He has built custom and speculative homes, commercial buildings and developed commercial and residential communities both West and East of the mountains in Washington State.
                    Most recently he changed directions and began embarking upon a “Built Green” affordable portable building product under Mainstream Building Green Alliance registered as (MHE America, LLC.). Then embarked upon Buddy Shelters, LLC. In 2012. Darrel is a member of PHBS, (Pacific HOPE Building Systems) and of MBA (Master Builder Association), SICBA (Skagit and Island County Builder Association), NAHB (National Association of Home Builders), a CGP (Certified Green Professional), is a graduate of Business Management for Building Professionals (NAHB) and a Certified AAC Specialist trained as an AAC Installation certifier. Darrel is proud to be Board Chairman of Elan Vital Solutions.
                    Darrel and Jill Potter have been married for 24 years, have 4 children and 7 grandchildren and 2 great grandchildren. The Potters live in Arlington, WA.
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        {/* <div ref="secondPic" className="background back">
        </div> */}
        {/* <div className="section second-section">
          <div className="container">
            <h3>Our Leadership</h3>
            <a ref="africaAnchor"></a>
            <div className="row">
              <div className="six columns">
                <div >

                    <img src={projectPic3} className="profile-pictures" alt="USA projects"/>

                </div>

              </div>
              <div className="six columns">
                <div >

                    <img src={projectPic4} className="profile-pictures" alt="USA projects"/>

                </div>

              </div>
            </div>
          </div>
        </div>
        <div ref="thirdPic" className="background back"></div> */}
      </section>
      );

  }

}

export default About;
