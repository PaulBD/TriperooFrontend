import React from 'react';
import Search from '../../components/holiday/search';
import Feature from '../../components/common/feature';
import Copy from '../../components/holiday/copy';

import TrendingDeals from '../../components/trendingDeals';
import HotDeals from '../../components/hotDeals';
import SpecialDeals from '../../components/specialDeals';

import TopDestinations from '../../components/topDestinations';
import LastMinuteDeal from '../../components/lastMinuteDeal';
import FacebookSignup from '../../components/facebookSignup';

// Since this component is simple and static, there's no parent container for it.
export default class Holidays extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
      <div>
        <Feature featureType="holiday" />
        <div className="container">
            <Search />
        </div>
        <div className="container">
          <div className="row row-wrap text-xs-center">
              <TopDestinations />
          </div>
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
            <div className="gap gap"></div>
            <Copy />
            <div className="gap gap-small"></div>
            <hr />
            <div className="gap"></div>
            <FacebookSignup />
            <div className="gap"></div>
        </div>
      </div>
    );
  }
}
