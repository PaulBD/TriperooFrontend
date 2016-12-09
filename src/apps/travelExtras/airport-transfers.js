import React from 'react';
import AirportTransfersFeature from '../../components/travelExtras/airportTransfersFeature';
import FacebookSignup from '../../components/common/facebookSignup';

export default class AirportTransfers extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render(){
      return (
        <div>
          
          <AirportTransfersFeature />
          
          <div className="container">
              <div className="gap"></div>
              <FacebookSignup />
              <div className="gap"></div>
          </div>
        </div>
      );
   }
}