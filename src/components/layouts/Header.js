import React from 'react';
// import { Link } from 'react-router';
import '../../styles/Header.css';

// import Dropdown from 'react-simple-dropdown';

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
              <Dropdown className="account-dropdown" ref="dropdown">
        <DropdownTrigger>
          <span className="account-dropdown__name">Projects</span>
        </DropdownTrigger>
        <DropdownContent>
          {/* <div className="account-dropdown__identity account-dropdown__segment">
            Signed in as <strong>{user.name}</strong>
          </div> */}
          <ul className="account-dropdown__quick-links account-dropdown__segment">
            <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                U.S.A.
              </a>
            </li>
            <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                Africa
              </a>
            </li>
            {/* <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                Explore
              </a>
            </li>
            <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                Help
              </a>
            </li>
          </ul>
          <ul className="account-dropdown__management-links account-dropdown__segment">
            <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                Settings
              </a>
            </li>
            <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                Sign out
              </a>
            </li> */}
          </ul>
        </DropdownContent>
      </Dropdown>
              <li>About</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
