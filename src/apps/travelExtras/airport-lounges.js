import React from 'react';
import AirportLoungesFeature from '../../components/travelExtras/airportLoungesFeature';
import FacebookSignup from '../../components/facebookSignup';

export default class AirportLounges extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render(){
      return (
        <div>
          
          <AirportLoungesFeature />
          
          <div className="container">
              <div className="gap"></div>
              <FacebookSignup />
              <div className="gap"></div>
          </div>
        </div>
      );
   }
}