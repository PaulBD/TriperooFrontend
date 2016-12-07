import React from 'react';
import Feature from '../../components/flight/feature';
import Search from '../../components/flight/search';
import TopDestinations from '../../components/flight/topDestinations';

import TrendingNow from '../../components/trendingNow';
import HotDeals from '../../components/hotDeals';
import Recommendations from '../../components/recommendations';
import FacebookSignup from '../../components/facebookSignup';

// Since this component is simple and static, there's no parent container for it.
export default class FlightsPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
        <div>
            <Feature />
            <div className="container">
                <Search />
            </div>
            <div className="container">
                <TopDestinations />
                <div className="gap"></div>
                <div className="row">
                    <div className="col-md-4">
                        <TrendingNow />
                    </div>
                    <div className="col-md-4">
                        <HotDeals />
                    </div>
                    <div className="col-md-4">
                        <Recommendations />
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
