import React from 'react';
import MyPdfViewer from './MyPdfViewer';
import '../styles/Newsletter.css';


const Newsletter = (props) => {

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

export default Newsletter;
