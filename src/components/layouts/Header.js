import React from 'react';
import { Link } from 'react-router';
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
import Radium from 'radium';
import '../../styles/Header.css';

let RadiumLink = Radium(Link);

class Header extends React.Component {

  constructor() {

    super();
    this.state = {
      displayProjectsNav: 'nonActive',
      displayAboutNav: 'nonActive'
    };
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleProjectsMouseEnter = this.handleProjectsMouseEnter.bind(this);
    this.handleProjectsMouseLeave = this.handleProjectsMouseLeave.bind(this);
    this.handleAboutMouseEnter = this.handleAboutMouseEnter.bind(this);
    this.handleAboutMouseLeave = this.handleAboutMouseLeave.bind(this);
  }

  handleLinkClick(event) {
    // this.refs.dropdown.hide();
    // this.displayProjectsNav = false;
    console.log('the event target name is ' + event.target.name);
    this.props.changeAnchor(event.target.name)
    this.setState({ displayProjectsNav: 'nonActive', displayAboutNav: 'nonActive' });
    // this.setState({ displayAboutNav: 'nonActive' });
  }

  handleProjectsMouseEnter() {
    this.setState({ displayProjectsNav: 'active' });
    // this.displayProjectsNav = true;
  }

  handleProjectsMouseLeave() {
    this.setState({ displayProjectsNav: 'nonActive' });
    // this.displayProjectsNav = false;
  }

  handleAboutMouseEnter() {
    this.setState({ displayAboutNav: 'active' });
    // this.displayProjectsNav = true;
  }

  handleAboutMouseLeave() {
    this.setState({ displayAboutNav: 'nonActive' });
    // this.displayProjectsNav = false;
  }

  render() {

    return (
      <header>
        <div className="twelve columns">

          <MediaQuery query='(min-device-width: 1224px)'>
            <div className="six columns" id="titleWordDiv">
              <h5><Link to="/">Elan Vital Solutions</Link></h5>
            </div>
            <nav className="six columns">
              <ul>
                <div className="projectsTitle" onMouseEnter={this.handleProjectsMouseEnter} onMouseLeave={this.handleProjectsMouseLeave}>
                  <span id="projectsTitleSpan">Projects</span>
                  <div className={this.state.displayProjectsNav} id="projectsDiv">
                      <ul className="projects-dropdown__quick-links projects-dropdown__segment">
                        <li className="projects-dropdown__link">
                          <Link className="projects-dropdown__link__anchor" to="/projects" name="USAAnchor" onClick={this.handleLinkClick}>
                            U.S.A.
                          </Link>
                        </li>
                        <li className="projects-dropdown__link">
                          <Link className="projects-dropdown__link__anchor" to="/projects" name="africaAnchor" onClick={this.handleLinkClick}>
                            Africa
                          </Link>
                        </li>
                      </ul>
                  </div>
                </div>

                <div className="aboutTitle" onMouseEnter={this.handleAboutMouseEnter} onMouseLeave={this.handleAboutMouseLeave}>
                  <span>About</span>

                  <div className={this.state.displayAboutNav} id="aboutDiv">
                    <ul className="account-dropdown__quick-links account-dropdown__segment">
                      <li className="account-dropdown__link">
                        <Link className="account-dropdown__link__anchor" to="/about" name="staffAnchor" onClick={this.handleLinkClick}>
                          Our Story
                        </Link>
                      </li>
                      <li className="account-dropdown__link">
                        <Link className="account-dropdown__link__anchor" to="/about" name="directorsAnchor" onClick={this.handleLinkClick}>
                          Leadership
                        </Link>
                      </li>
                      {/* <li className="account-dropdown__link">
                        <Link className="account-dropdown__link__anchor" to="/about" name="advisoryAnchor" onClick={this.handleLinkClick}>
                          Advisory Board
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                {/* <span className="giveTitle">News</span> */}
                <span className="giveTitle"><Link to="/newsletter">News</Link></span>
                <span className="giveTitle"><Link to="/give">Give</Link></span>
              </ul>
            </nav>
          </MediaQuery>
          <MediaQuery query='(max-device-width: 750px)'>
            <div className="six columns" id="titleWordDivMobile">
              <h5 id="titleMobile"><Link to="/">Elan Vital Solutions</Link></h5>
            </div>
            <nav className="six columns">
              {/* <h5>another test</h5> */}
              <Menu right width={ 200 }>
                <div>
                  <RadiumLink className="menu-item" to="/">Home</RadiumLink>
                </div>
                <div>
                  <RadiumLink className="menu-item" to="#">Projects</RadiumLink>
                    {/* <p></p>
                      <p><RadiumLink className="menu-item" to="/">USA</RadiumLink></p>
                      <p><RadiumLink className="menu-item" to="/">Africa</RadiumLink></p> */}


                </div>
                <div>
                  <RadiumLink className="menu-item" to="/">About</RadiumLink>
                </div>
                <div>
                  <RadiumLink className="menu-item" to="/">News</RadiumLink>
                </div>
                <div>
                  <RadiumLink className="menu-item" to="/">Give</RadiumLink>
                </div>
              </Menu>
            </nav>
          </MediaQuery>
        </div>
      </header>
    );
  }
}

export default Header;
