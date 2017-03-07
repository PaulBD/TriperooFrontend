import React from 'react';
import Search from '../../components/holidays/search';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import TopDestinations from '../../components/content/dynamic/topDestinations';
import Copy from '../../components/holidays/copy';

import Deals from '../../components/legacy/deals/list';

import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import FacebookSignup from '../../components/authentication/facebookSignup';

// Since this component is simple and static, there's no parent container for it.
export default class Holidays extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Search for holidays';
  }
  
  render(){
    return (
      <div>
        <FeaturedHeader headerType="holiday" />
        <div className="container">
          <Search />
          <div className="gap"></div>
            <div className="row row-wrap text-xs-center">
            <TopDestinations destinationCount={3} title="Our Top Destinations" />
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
        <LastMinuteDeal featureType="lastMinute" />
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
