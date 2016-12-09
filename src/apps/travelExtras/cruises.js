import React from 'react';
import CruisesFeature from '../../components/travelExtras/cruisesFeature';
import FacebookSignup from '../../components/common/facebookSignup';

export default class Cruises extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render(){
      return (
        <div>
          
          <CruisesFeature />
          
          <div className="container">
              <div className="gap"></div>
              <FacebookSignup />
              <div className="gap"></div>
          </div>
        </div>
      );
   }
}