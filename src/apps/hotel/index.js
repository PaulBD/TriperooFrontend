import React from 'react';
import Feature from '../../components/common/feature';
import Search from '../../components/hotel/search';
import TopDestinations from '../../components/hotel/topDestinations';

import TrendingDeals from '../../components/trendingDeals';
import HotDeals from '../../components/hotDeals';
import SpecialDeals from '../../components/specialDeals';

import LastMinuteDeal from '../../components/lastMinuteDeal';
import FacebookSignup from '../../components/common/facebookSignup';

export default class SearchHotels extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
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
          <div className="row">
              <div className="col-md-4">
                  <TrendingDeals searchType="trending"/>
              </div>
              <div className="col-md-4">
                  <HotDeals searchType="hot" />
              </div>
              <div className="col-md-4">
                  <SpecialDeals searchType="special"/>
              </div>
          </div>
          <div className="gap gap-small"></div>
        </div>
        <LastMinuteDeal /> 
        <div className="container">
            <div className="gap"></div>
            <FacebookSignup />
            <div className="gap"></div>
        </div>
      </div>
      );
   }
}