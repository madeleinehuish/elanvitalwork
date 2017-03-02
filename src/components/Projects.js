import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Projects.css';


class Projects extends React.Component {

  componentDidMount() {
    let anchor = this.props.anchor;
    let node;

    // if (anchor === 'USAAnchor') {
    //
    //   node = ReactDOM.findDOMNode(this.refs.USAAnchor);
    //
    // } else

    if (anchor === 'africaAnchor') {

      node = ReactDOM.findDOMNode(this.refs.africaAnchor);

    }
    node.scrollIntoView();
  }

  render() {
    return (
      <section>
        <div>
          <h3>Projects</h3>
          <a ref="USAAnchor">USA PROJECTS</a>
          <div>
            i. Arlington Veterans Training Center – drawings and description
          </div>
          <div>
            ii. Stand Alone Units (SAUs) Describe lease program
          </div>
          <div>
            i. Show 3 models
          </div>
          <div>
            a. SAU 1 Buddy Bunkhouse – drawings and description
          </div>
          <div>
            b. SAU 2 Chateaux Elan Vital – drawings and description
          </div>
          <div>
            c. SAU 3 Buddy Bungalow – drawings and description
          </div>
          <div>
            i. Potential clients
          </div>
          <div>
            1. Pastor Kim
          </div>
          <div>
            2. Four Square Church, Marysville, WA
          </div>
          <div>
            3. HR Project, Marysville, WA
          </div>
          <div>
            iii. Marysville Veterans Center – drawings and description
          </div>
          <div>
            iv. Marysville 150 Unit for x-cons – Pastor John Mack – drawings and description
          </div>
          <div>
            v. Pastor DJ Rabe, Covision Ministries - Portable cloths washing and showers for homeless - drawings and description
          </div>
          <a ref="africaAnchor">AFRICA PROJECTS</a>
        </div>
      </section>
    );
  }

}

export default Projects;
