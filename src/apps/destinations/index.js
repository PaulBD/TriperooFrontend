import React from 'react';
import Destinations from '../../components/content/dynamic/destinations';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import WorldCities from '../../components/content/static/worldCities';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';

export default class DestinationHome extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
      document.title = 'Explore the world! Pick a destination and start exploring';
    }

    render(){
      return (
    <div>
        <FeaturedHeader contentType="destination" />
        <div className="container">
          <div className="search-tabs search-tabs-bg search-tabs-to-top">
            <div className="tab-content">
                <div className="tab-pane active" id="tab-1">
                  <div className="worldMap">
                    <ul className="regionList">
                      <li className="UnitedStates"><small></small><a className="openList" href="/201/visit/united-states-of-america">United States</a></li>
                      <li className="Africa"><small></small><a className="openList" href="/6023185/visit/africa-and-indian-ocean">Africa</a></li>
                      <li className="Asia"><small></small><a className="openList" href="#">Asia</a></li>
                      <li className="Australia"><small></small><a className="openList" href="/6023180/visit/australia-new-zealand-and-the-south-pacific">Australia &amp; the Pacific Islands</a></li>
                      <li className="Caribbean"><small></small><a className="openList" href="#">Caribbean</a></li>
                      <li className="Europe"><small></small><a className="openList" href="#">Europe</a></li>
                      <li className="Mexico"><small></small><a className="openList" href="/117/visit/mexico">Mexico</a></li>
                      <li className="CentralAmerica"><small></small><a className="openList" href="#">Central America</a></li>
                      <li className="Canada"><small></small><a className="openList" href="/31/visit/canada">Canada</a></li>
                      <li className="MiddleEast"><small></small><a className="openList" href="#">Middle East</a></li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="container">
            <div className="gap gap"></div>
            <WorldCities />
            <div className="gap gap-small"></div>
             <hr />
            <div className="row text-center">
              <Destinations locationCount={3} title="Our Top Destinations" contentType="" />
            </div>
            <div className="row">
                <FacebookSignup showLines={true} />
            </div>
        </div>
      </div>
    );
  }
}
