import React from 'react';
// import { Link } from 'react-router';
import '../../styles/Footer.css';
import facebookLogo from '../../assets/images/Facebook_logo.png';
import twitterLogo from '../../assets/images/twitter_logo.png';
import linkedinLogo from '../../assets/images/linkedin-icon-cropped.png';
import instagramLogo from '../../assets/images/instagram_logo.png';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="twelve columns" id="upperFooter">
          <div className="row">
            <div className="six columns" id="titleWord">
              <div className="left">
                <h5>Join our newsletter</h5>
                <form>Email
                  <br/>
                  <input></input>
                  <input type="submit" value="Submit" id="submitButton"></input>

                </form>
              </div>
            </div>
            {/* <div className="four columns">
              <h5>Center info</h5>
              <p>suggestions? newsletter</p>
            </div> */}
            <div className="six columns">
              <div className="right">
                <h5 id="footerTopText">Contact Us</h5>
                <p>Elan Vital Solutions</p>
                <p>2203 172nd Street NE, Suite 201</p>
                <p>Marysville, WA 98271 USA</p>
                <p>Tel: +1 (206) 353-2328</p>
                <p>Email: mainstreamdarrel@aol.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="twelve columns" id="lowerFooter">
          <div className="row">
            <div className="eight columns" id="copyright">© Copyright Elan Vital Solutions. All Rights Reserved</div>
            <div className="four columns">
              <a href="https://www.facebook.com/elanvitalsolutions/"  target="_blank"><img src={facebookLogo} alt="facebookLogo" id="facebookLogo" /></a>
              <a href="https://twitter.com/ElanVitalSol" target="_blank"><img src={twitterLogo} alt="facebookLogo" id="twitterLogo" /></a>
              <a href="https://www.linkedin.com/in/marc-fulmer-1040464" target="_blank"><img src={linkedinLogo} alt="facebookLogo" id="linkedinLogo" /></a>
              <a href="https://www.instagram.com/elanvitalsolutions/" target="_blank"><img src={instagramLogo} alt="instagramLogo" id="instagramLogo" /></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
