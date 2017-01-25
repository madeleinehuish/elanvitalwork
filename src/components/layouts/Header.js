import React from 'react';
import { Link } from 'react-router';
import '../../styles/Header.css';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="twelve columns">
          <div className="six columns" id="titleWord">
            <h5>Elan Vital Solutions</h5>
          </div>
          <nav className="six columns">
            <ul>
              <li>Give</li>
              <li>Projects</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
