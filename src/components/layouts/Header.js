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

    return (
      <header>
        <div className="twelve columns">
          <div className="six columns" id="titleWord">
            <h5>Elan Vital Solutions</h5>
          </div>
          <nav className="six columns">
            <ul>

              <Dropdown className="projects-dropdown" ref="dropdown">
                <DropdownTrigger>
                  <span className="projects-dropdown__name">Projects</span>
                </DropdownTrigger>
                <DropdownContent>
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
                <DropdownTrigger>
                  <span className="account-dropdown__name">About</span>
                </DropdownTrigger>
                <DropdownContent>
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

              <Dropdown className="projects-dropdown" ref="dropdown">
                <DropdownTrigger>
                  <span className="projects-dropdown__name">Give</span>
                </DropdownTrigger>
              </Dropdown>

            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
