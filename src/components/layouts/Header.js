import React from 'react';
// import { Link } from 'react-router';
import '../../styles/Header.css';
import Dropdown, { DropdownContent, DropdownTrigger } from "react-simple-dropdown";

class Header extends React.Component {

  constructor() {
    super();
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick() {
    this.refs.dropdown.hide();
  }

  render() {
    var user = 'joe';
    return (
      <header>
        <div className="twelve columns">
          <div className="six columns" id="titleWord">
            <h5>Elan Vital Solutions</h5>
          </div>
          <nav className="six columns">
            <ul>
              <li>Give</li>
              {/* <li>Projects</li> */}
              <Dropdown className="projects-dropdown" ref="dropdown">
        <DropdownTrigger>
          <span className="projects-dropdown__name">Projects</span>
        </DropdownTrigger>
        <DropdownContent>
          {/* <div className="account-dropdown__identity account-dropdown__segment">
            Signed in as <strong>{user.name}</strong>
          </div> */}
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
        </DropdownContent>
        </Dropdown>
        <Dropdown>

              {/* <li>About</li> */}
              <DropdownTrigger>
                <span className="account-dropdown__name">About</span>
              </DropdownTrigger>
              <DropdownContent>
                {/* <div className="account-dropdown__identity account-dropdown__segment">
                  Signed in as <strong>{user.name}</strong>
                </div> */}
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
              </DropdownContent>
              </Dropdown>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
