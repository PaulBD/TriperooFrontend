import React from 'react';
import Feature from '../../components/common/feature';
import Search from '../../components/flight/search';
import TopDestinations from '../../components/flight/topDestinations';

import TrendingDeals from '../../components/trendingDeals';
import HotDeals from '../../components/hotDeals';
import SpecialDeals from '../../components/specialDeals';

import FacebookSignup from '../../components/facebookSignup';

// Since this component is simple and static, there's no parent container for it.
export default class FlightsPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
        <div>
            <Feature featureType="flight" />
            <div className="container">
                <Search />
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
            </div>
            <div className="container">
                <div className="gap gap-small"></div>
                <hr />
                <div className="gap"></div>
                <FacebookSignup />
                <div className="gap"></div>
            </div>
            <div className="gap"></div>
        </div>
    );
  }
}
