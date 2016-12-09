import React from 'react';
import CarHireFeature from '../../components/travelExtras/careHireFeature';
import FacebookSignup from '../../components/common/facebookSignup';

export default class CarHire extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render(){
      return (
        <div>
          
          <CarHireFeature />
          
          <div className="container">
              <div className="gap"></div>
              <FacebookSignup />
              <div className="gap"></div>
          </div>
        </div>
      );
   }
}