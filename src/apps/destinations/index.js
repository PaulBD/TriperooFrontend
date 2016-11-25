import React from 'react';
import {Link} from 'react-router';
import TopDestinations from '../../components/topDestinations';
import FacebookSignup from '../../components/facebookSignup';
import WorldCities from '../../components/worldCities';

// Since this component is simple and static, there's no parent container for it.
export default class DestinationPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (

    <div className="container">
      <div className="container">
          <div className="row">
              <div className="col-md-8 exploreTitle">
                  <h1 className="page-title">Pick a destination to start exploring!</h1>
                  <h2>Photos, maps, and advice from your friends and people like you</h2>
              </div>

              <div className="col-md-4">
                  <a href="/random-destination" className="btn btn-info btn-lg whiskBtn">
                        <i className="fa fa-plane"></i>
                        Whisk My Away
                    </a>
              </div>
          </div>      
        </div>

        <div className="gap gap-small"></div>

        <div className="container">
          <div className="row">
              <div className="worldMap">
              <ul className="regionList">
                <li className="UnitedStates"><small></small><a className="openList" href="/united-states">United States</a></li>
                <li className="Africa"><small></small><a className="openList" href="/africa">Africa</a></li>
                <li className="Asia"><small></small><a className="openList" href="/asia">Asia</a></li>
                <li className="Australia"><small></small><a className="openList" href="/australia-the-pacific-islands">Australia &amp; the Pacific Islands</a></li>
                <li className="Caribbean"><small></small><a className="openList" href="/caribbean">Caribbean</a></li>
                <li className="Europe"><small></small><a className="openList" href="/europe">Europe</a></li>
                <li className="Mexico"><small></small><a className="openList" href="/mexico">Mexico</a></li>
                <li className="CentralAmerica"><small></small><a className="openList" href="/mexico-central-america">Central America</a></li>
                <li className="Canada"><small></small><a className="openList" href="/canada">Canada</a></li>
                <li className="MiddleEast"><small></small><a className="openList" href="/middle-east">Middle East</a></li>
              </ul>
              </div>
          </div>
        </div>
        <div className="gap gap-small"></div>
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
  )};
};