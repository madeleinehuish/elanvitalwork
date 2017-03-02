import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/About.css';


class About extends React.Component {

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
          <h3>About</h3>
          <a ref="staffAnchor">Staff</a>

          i. Marc Fulmer – CEO

i. BIO

Robert Marc Fulmer

Marc's early career years (1966-2002) were in the construction industry, mainly focused on general contracting in light commercial tenant improvements and hospital renovations. In 2002 Marc transitioned to the nonprofit world as a founding staff member and eventual President of Agathos International working in Africa on orphan care, medical and food relief. Marc remains as Director of GIK and Medical Relief for Agathos International. Marc also serves on the board of the Persecution Project Foundation working in Southern Sudan. In 2011 in addition to his nonprofit work, Marc went to work with his partners in Thain Boatworks Inc building passenger ferries for Eastern Africa. In August of 2016 Marc began to transition into a new role with Buddy Shelters LLC as VP as well as beginning the new nonprofit with his partner Darrel Potter called Elan Vital Solutions, addressing homelessness here in the United States. Marc resides in Arlington, WA and is married to Mae Fulmer for 24 years, they have four children and 4 grandchildren.

ii.

ii. David Scratchley – Development Director & Investor Relations

i. BIO

iii. More to come
        </div>

      </section>
    );
  }

}

export default About;
