import React from 'react';
import CottagesFeature from '../../components/travelExtras/cottagesFeature';
import FacebookSignup from '../../components/facebookSignup';

export default class Cottages extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render(){
      return (
        <div>
          
          <CottagesFeature />
          
          <div className="container">
              <div className="gap"></div>
              <FacebookSignup />
              <div className="gap"></div>
          </div>
        </div>
      );
   }
}