import React from 'react';
import VillasFeature from '../../components/travelExtras/villasFeature';
import FacebookSignup from '../../components/facebookSignup';

export default class Villas extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render(){
      return (
        <div>
          
          <VillasFeature />
          
          <div className="container">
              <div className="gap"></div>
              <FacebookSignup />
              <div className="gap"></div>
          </div>
        </div>
      );
   }
}