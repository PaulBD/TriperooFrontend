import React from 'react';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import Search from '../../components/forms/searchForms/flights';
import Destinations from '../../components/content/dynamic/destinations';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

export default class FlightsPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Search for flights';
  }

  render(){
    return (
      <div>
        <FeaturedHeader contentType="flight" />
        <div className="container">
          <div className="search-tabs search-tabs-bg search-tabs-to-top">
            <div className="tabbable">
              <div className="tab-content">
                <div className="tab-pane active" id="tab-1">
                  <h2 className="text-center">Compare Cheap Flights</h2>
                  <p className="text-center">Find great flight deals from hundreds of airlines</p>
                  <Search />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Destinations title="Our Top Flight Destinations" locationCount={6} contentType="flights" cssClass="col-md-4" />
          <hr />
        </div>
        <div className="container">
          <div className="gap"></div>
          <BulletPoints />
          <div className="gap gap-mini"></div>
          <FacebookSignup />
          <TrustedPartners />
          <div className="gap gap-mini"></div>
        </div>
      </div>
    );
  }
}
