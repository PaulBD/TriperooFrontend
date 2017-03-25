import React from 'react';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import Search from '../../components/flights/search';
import TopDestinations from '../../components/flights/topDestinations';

import Deals from '../../components/legacy/deals/list';

import FacebookSignup from '../../components/authentication/facebookSignup';

// Since this component is simple and static, there's no parent container for it.
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
