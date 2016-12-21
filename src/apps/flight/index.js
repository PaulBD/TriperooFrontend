import React from 'react';
import Feature from '../../components/common/feature';
import Search from '../../components/flight/search';
import TopDestinations from '../../components/flight/topDestinations';

import Deals from '../../components/deals/list';

import FacebookSignup from '../../components/common/facebookSignup';

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
                    <Deals searchType="trending" title="Trending Now"/>
                </div>
                <div className="col-md-4">
                    <Deals searchType="hot" title="Hot Deals" />
                </div>
                <div className="col-md-4">
                    <Deals searchType="special" title="Special Deals"/>
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
