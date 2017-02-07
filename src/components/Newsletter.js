import React from 'react';
// import ReactDOM from 'react-dom';
import MyPdfViewer from './MyPdfViewer';
import '../styles/Newsletter.css';


class Newsletter extends React.Component {


  render() {
    return (
      <section>
        <div>
          <h3>Newsletters</h3>
          <div className="pdf-view">
            <MyPdfViewer/>
          </div>
        </div>




      </section>
      );
    }
  }

export default Newsletter;
