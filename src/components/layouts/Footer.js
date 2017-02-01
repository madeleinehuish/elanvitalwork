import React from 'react';
// import { Link } from 'react-router';
import '../../styles/Footer.css';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="twelve columns" id="upperFooter">
          <div className="row">
            <div className="four columns" id="titleWord">
              <h5>Join Us</h5>
              <p>add email signup form</p>
            </div>
            <div className="four columns">
              <h5>Center info</h5>
              <p>suggestions? newsletter</p>
            </div>
            <div className="four columns">
              <h5 id="footerTopText">Contact Us</h5>
              <p>Elan Vital Solutions</p>
              <p>18503 Teeside Lane</p>
              <p>Arlington, WA 98223-5088, USA</p>
              <p>Tel: +1 (206) 353-2328</p>
              <p>Email: marc@elanvitalsolutions.org</p>
            </div>
          </div>
        </div>
        <div className="twelve columns" id="lowerFooter">
          <p>copyright and social media links</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
