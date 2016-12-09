import React from 'react';
import RailTravelFeature from '../../components/travelExtras/railTravelFeature';
import FacebookSignup from '../../components/common/facebookSignup';

export default class RailTravel extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render(){
      return (
        <div>
          
          <RailTravelFeature />
          
          <div className="container">
              <div className="gap"></div>
              <FacebookSignup />
              <div className="gap"></div>
          </div>
        </div>
      );
   }
}