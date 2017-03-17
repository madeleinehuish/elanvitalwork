import React from 'react';
import { BrowserRouter as Router} from 'react-router';
// import Newsletter from './Newsletter';
// import MyPdfViewer from './MyPdfViewer';
import oct from '../assets/newsletters/newsletterOCT2016.pdf';
import nov from '../assets/newsletters/newsletterNOV2016.pdf';
import dec from '../assets/newsletters/newsletterDEC2016.pdf';
import '../styles/Newsletter.css';

class NewsMenu extends React.Component {

  render() {
    return (
      <Router>
        <div className="newsletter">
          <div className="container">
            <div className="row">
              <h3>Newsletters</h3>
              <p className="month"><a href={oct}>October 2016</a></p>
              <p className="month"><a href={nov}>November 2016</a></p>
              <p className="month"><a href={dec}>December 2016</a></p>
            </div>
          </div>
        </div>
      </Router>
      );
    }
  }

export default NewsMenu;
