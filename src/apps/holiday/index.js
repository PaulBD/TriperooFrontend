import React from 'react';
import Search from '../../components/holiday/search';
import Feature from '../../components/common/feature';
import Copy from '../../components/holiday/copy';

import Deals from '../../components/deals/list';

import TopDestinations from '../../components/topDestinations';
import LastMinuteDeal from '../../components/lastMinuteDeal';
import FacebookSignup from '../../components/common/facebookSignup';

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
                <Deals searchType="trending" title="Trending Now"/>
            </div>
            <div className="col-md-4">
                <Deals searchType="hot" title="Hot Deals" />
            </div>
            <div className="col-md-4">
                <Deals searchType="special" title="Special Deals"/>
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
