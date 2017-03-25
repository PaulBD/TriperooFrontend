import React from 'react';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import Search from '../../components/hotels/search';
import Destinations from '../../components/content/dynamic/destinations';

import Deals from '../../components/legacy/deals/list';

import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import FacebookSignup from '../../components/authentication/facebookSignup';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

export default class SearchHotels extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    
    document.title = 'Search for hotels';
  }
  
  render(){
    return (
      <div>
        <FeaturedHeader contentType="hotel" />
        <div className="container">            
          <Search searchType="all" />
        </div>
        <div className="container">
          <Destinations destinationCount={6} title="Our Top Hotel Destinations" />
          <div className="gap"></div>
        </div>
        <LastMinuteDeal featureType="lastMinute" />
        <div className="container">
          <div className="gap"></div>
          <BulletPoints />
          <div className="gap gap-small"></div>
          <hr />
          <div className="gap"></div>
          <FacebookSignup />
          <div className="gap"></div>
          <hr />
          <TrustedPartners />
          <div className="gap"></div>
        </div>
      </div>
      );
   }
}