import React, {PropTypes} from 'react';
import Destinations from '../components/content/dynamic/destinations';

export default class NotFoundPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Page Not Found - Triperoo';
  }

  render(){
    let style = {
      backgroundImage: 'url(/static/img/about.jpg)'
    };

    return (
      <div>
        <div className="bg-holder full text-center text-white infoPageWrapper">
          <div className="bg-mask"></div>
          <div style={style} className="bg-img infoImg" ></div>
          <div className="bg-front full-center">
            <div className="owl-cap">
              <h1 className="owl-cap-title fittext">Oops An Error Has Occurred!</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-wrap">
            <div className="gap gap-small"></div>
            <div className="col-md-12 text-center pageNotFound">
              <h4>We are very sorry for the inconvenience</h4>
              <p>The Triperoo Tech team have been informed of the issue and will do their best to resolve the problem straight away!</p>

              <div className="gap gap-small"></div>
              <hr />
              <Destinations locationCount={3} title="Our Top Destinations" contentType="homePage" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
