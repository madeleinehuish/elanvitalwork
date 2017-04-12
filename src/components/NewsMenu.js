import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router';
import oct from '../assets/newsletters/newsletterOCT2016.pdf';
import nov from '../assets/newsletters/newsletterNOV2016.pdf';
import dec from '../assets/newsletters/newsletterDEC2016.pdf';
import q1_2017 from '../assets/newsletters/newsletter1stQuarter2017.pdf';
import '../styles/Newsletter.css';

class NewsMenu extends Component {

  constructor() {
    super();
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  scrollEvent(e) {
    const height = window.pageYOffset;
    const firstPic = ReactDOM.findDOMNode(this.refs.firstPic);

    if (height > 200 && firstPic.classList.value.indexOf('back-opacity')  < 0) {
      firstPic.classList.add('back-opacity');
    } else if (height < 200 && firstPic.classList.value.indexOf('back-opacity')  > 0) {
      firstPic.classList.remove('back-opacity');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollEvent);
    let node = ReactDOM.findDOMNode(this.refs.theNewsAnchor);

    node.scrollIntoView();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  }

  render() {
  return (
    <section ref="theNewsAnchor">
      <div id="topSpacer"></div>
      <div ref="firstPic" className="background background-newsletter-one back">
        <div id="titleWordsProjects">
          <h2>Elan Vital Solutions News</h2>
        </div>
      </div>
      <br/>
      <Router>
        <div className="newsletter">
          <div className="container">
            <div className="row">
              <h3>Newsletters</h3>
              <p className="month"><a href={oct} target="_blank">October 2016</a></p>
              <p className="month"><a href={nov} target="_blank">November 2016</a></p>
              <p className="month"><a href={dec} target="_blank">December 2016</a></p>
              <p className="month"><a href={q1_2017} target="_blank">First Quarter 2017</a></p>
              <br/>
            </div>
          </div>
        </div>
      </Router>
    </section>
    );
  }
}

export default NewsMenu;
