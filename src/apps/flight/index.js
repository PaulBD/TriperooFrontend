import React from 'react';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import Search from '../../components/flights/search';
import Destinations from '../../components/content/dynamic/destinations';
import FacebookSignup from '../../components/authentication/facebookSignup';

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
                <Destinations title="Our Top Flight Destinations" destinationCount={6} contentType="flights" />
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
