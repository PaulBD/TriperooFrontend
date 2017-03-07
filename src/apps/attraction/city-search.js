import React from 'react';
import FacebookSignup from '../../components/authentication/facebookSignup';
import CitySubHeader from '../../components/places/common/subHeader';

export default class AttractionHome extends React.Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }
    
    render(){
    return (
      <div>

          <CitySubHeader pageType="attraction" />
          <div className="gap gap-small"></div>

          <div className="container">
              <div className="row">
                  
              </div>
          </div>
          
          <div className="container">
              <div className="gap gap-small"></div>
              <hr />
              <div className="gap"></div>
              <FacebookSignup />
              <div className="gap"></div>
          </div>
      </div>
    );
  }
}