import React from 'react';
import Search from '../../components/holiday/search';
import Feature from '../../components/holiday/feature';
import Copy from '../../components/holiday/copy';


import TrendingNow from '../../components/trendingNow';
import HotDeals from '../../components/hotDeals';
import Recommendations from '../../components/recommendations';
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
        <Feature />
        <div className="container">
            <Search />
        </div>
        <div className="container">
          <div className="row row-wrap text-xs-center">
            <div className="gap"></div>
            <h3 className="mb20">Our Top Holidays Destinations</h3>
            <div className="row row-wrap">
                <div className="col-md-4">
                    <div className="thumb">
                        <a className="hover-img" href="/city">
                            <img src="/static/img/locations/popular-destinations/london.png" alt="London" /><i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumb">
                        <a className="hover-img" href="/city">
                            <img src="/static/img/locations/popular-destinations/dubai.png" alt="Dubai"/><i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumb">
                        <a className="hover-img" href="/city">
                            <img src="/static/img/locations/popular-destinations/newyork.png" alt="New York" /><i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                        </a>
                    </div>
                </div>
            </div>
          </div>
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
  )};
};