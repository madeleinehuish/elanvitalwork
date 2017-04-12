import React, { Component } from 'react';
import MyPdfViewer from './MyPdfViewer';
import '../styles/Newsletter.css';
import projectPic from '../assets/images/newsroom.png';

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
