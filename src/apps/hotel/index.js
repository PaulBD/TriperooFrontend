import React from 'react';
import Feature from '../../components/common/feature';
import Search from '../../components/hotels/search';
import TopDestinations from '../../components/hotels/topDestinations';

import Deals from '../../components/deals/list';

import LastMinuteDeal from '../../components/deals/lastMinuteDeal';
import FacebookSignup from '../../components/common/facebookSignup';
import BulletPoints from '../../components/common/bulletPoints';
import TrustedPartners from '../../components/common/trustedPartners';

export default class SearchHotels extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    
    document.title = 'Explore, Plan, Book - Get the best deals from top travel websites';
  }
  
  render(){
    return (
      <div>
        <Feature featureType="hotel" />
        <div className="container">            
          <Search searchType="all" />
        </div>
        <div className="container">
          <TopDestinations />
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