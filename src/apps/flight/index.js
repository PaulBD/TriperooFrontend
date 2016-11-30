import React from 'react';
import Search from '../../components/flight/search';
import Feature from '../../components/flight/feature';

import TrendingNow from '../../components/trendingNow';
import HotDeals from '../../components/hotDeals';
import Recommendations from '../../components/recommendations';
import TopDestinations from '../../components/topDestinations';
import LastMinuteDeal from '../../components/lastMinuteDeal';
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
          <div className="row row-wrap text-xs-center">
            <div className="gap"></div>
            <h3 className="mb20">Our Top Flight Destinations</h3>
            <div className="row">
                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>
            </div>
            <div className="gap gap-small"></div>
            <div className="row">

                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>
            </div>
            <div className="gap gap-small"></div>
            <div className="row">

                <div className="col-md-3">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-3">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-3">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>
                <div className="col-md-3">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
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
  )};
};