import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router';
// import Newsletter from './Newsletter';
import MyPdfViewer from './MyPdfViewer';
import '../styles/Newsletter.css';

class NewsMenu extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <div className="row">
                <div className="three columns">
                  <h3>Newsletters</h3>
                  <p><Link to="/newsletter-oct2016">October 2016</Link></p>
                  <p><Link to="/newsletter-nov2016">November 2016</Link></p>
                  <p><Link to="/newsletter-dec2016">December 2016</Link></p>
                </div>
                <div className="nine columns">
                  <div className="pdf-view">
                    <MyPdfViewer/>
                    {/* <Route pattern="/newsletter-oct2016" exactly render={
                      () => <Newsletter
                          { ...this.state }
                      />
                    }/> */}
                     {/* <Route path="/newsletter-oct2016" component={Newsletter}/> */}
                    {/* <Match pattern="/newsletter-nov2016" exactly render={
                      () => <Newsletter
                          { ...this.state }
                      />
                    }/>
                    <Match pattern="/newsletter-dec2016" exactly render={
                      () => <Newsletter
                          { ...this.state }
                      />
                    }/> */}
                    {/* <Miss component={ MyPdfViewer } /> */}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Router>
      );
    }
  }

export default NewsMenu;
