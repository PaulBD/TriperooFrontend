import React from 'react';
import {Link} from 'react-router';
import TopDestinations from '../../components/topDestinations';
import FacebookSignup from '../../components/facebookSignup';
import WorldCities from '../../components/worldCities';

export default class DestinationHome extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    
    render(){
      return (
    <div>
        <div className="bg-holder full text-xs-center text-white holidayPage">
            <div className="bg-mask"></div>
            <div className="bg-img destinationMain"></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">Pick a destination<br />to start exploring!</h1>
                    <div className="owl-cap-price">
                      <small>Photos, maps, and advice from your friends and people like you</small>
                    </div>
                    <Link to="city" className="btn btn-white btn-ghost">
                      <i className="fa fa-angle-right"></i> Whisk Me Away
                    </Link>
                </div>
            </div>
        </div>

        <div className="container">
          <div className="search-tabs search-tabs-bg search-tabs-to-top"> 
            <div className="tab-content">
                <div className="tab-pane fade in active" id="tab-1">
                  <div className="worldMap">
                    <ul className="regionList">
                      <li className="UnitedStates"><small></small><a className="openList" href="/place/united-states">United States</a></li>
                      <li className="Africa"><small></small><a className="openList" href="/place/africa">Africa</a></li>
                      <li className="Asia"><small></small><a className="openList" href="/place/asia">Asia</a></li>
                      <li className="Australia"><small></small><a className="openList" href="/place/australia-the-pacific-islands">Australia &amp; the Pacific Islands</a></li>
                      <li className="Caribbean"><small></small><a className="openList" href="/place/caribbean">Caribbean</a></li>
                      <li className="Europe"><small></small><a className="openList" href="/place/europe">Europe</a></li>
                      <li className="Mexico"><small></small><a className="openList" href="/place/mexico">Mexico</a></li>
                      <li className="CentralAmerica"><small></small><a className="openList" href="/place/mexico-central-america">Central America</a></li>
                      <li className="Canada"><small></small><a className="openList" href="/place/canada">Canada</a></li>
                      <li className="MiddleEast"><small></small><a className="openList" href="/place/middle-east">Middle East</a></li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="container">
            <div className="gap gap"></div>
            <WorldCities />
            <div className="gap"></div>
             <hr />
            <div className="gap gap-small"></div>
            <div className="container text-xs-center">
              <TopDestinations />
            </div>
            <div className="container">
                <div className="gap gap-small"></div>
                <hr />
                <div className="gap"></div>
                <FacebookSignup />
                <div className="gap"></div>
            </div>
        </div>
      </div>
    );
  }
}
