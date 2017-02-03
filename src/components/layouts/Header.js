import React from 'react';
import { Link } from 'react-router';
import '../../styles/Header.css';

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

  handleLinkClick() {
    // this.refs.dropdown.hide();
    // this.displayProjectsNav = false;
    this.setState({ displayProjectsNav: 'nonActive' });
    this.setState({ displayAboutNav: 'nonActive' });
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
          <div className="six columns" id="titleWord">
            <h5><Link to="/">Elan Vital Solutions</Link></h5>
          </div>
          <nav className="six columns">
            <ul >

              <div className="projectsTitle" onMouseEnter={this.handleProjectsMouseEnter} onMouseLeave={this.handleProjectsMouseLeave}>
                <span id="projectsTitleSpan">Projects</span>

              <div className={this.state.displayProjectsNav} id="projectsDiv">
                  <ul className="projects-dropdown__quick-links projects-dropdown__segment">
                    <li className="projects-dropdown__link">
                      <a className="projects-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                        U.S.A.
                      </a>
                    </li>
                    <li className="projects-dropdown__link">
                      <a className="projects-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                        Africa
                      </a>
                    </li>
                  </ul>
              </div>
              </div>

              <div className="aboutTitle" onMouseEnter={this.handleAboutMouseEnter} onMouseLeave={this.handleAboutMouseLeave}>
                <span>About</span>

              <div className={this.state.displayAboutNav} id="aboutDiv">
                <ul className="account-dropdown__quick-links account-dropdown__segment">
                  <li className="account-dropdown__link">
                    <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                      Staff
                    </a>
                  </li>
                  <li className="account-dropdown__link">
                    <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                      Board of Directors
                    </a>
                  </li>
                  <li className="account-dropdown__link">
                    <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                      Advisory Board
                    </a>
                  </li>
                </ul>
              </div>
              </div>

              <span className="giveTitle"><Link to="/newsletter">News</Link></span>
              <span className="giveTitle">Give</span>

            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
