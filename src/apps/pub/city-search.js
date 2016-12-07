import React from 'react';
import CitySubHeader from '../../components/city/subHeader';
import FacebookSignup from '../../components/facebookSignup';

export default class PubPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
      <div>
          <CitySubHeader pageType="pub" />
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