import React from 'react';
import AirportHotelsFeature from '../../components/travelExtras/airportHotelsFeature';
import FacebookSignup from '../../components/common/facebookSignup';

export default class AirportHotels extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render(){
      return (
        <div>
          
          <AirportHotelsFeature />
          
          <div className="container">
              <div className="gap"></div>
              <FacebookSignup />
              <div className="gap"></div>
          </div>
        </div>
      );
   }
}