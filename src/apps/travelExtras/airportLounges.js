import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../../components/travelExtras/header';

export default class AirportLounges extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { showSmallHeader: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Start your holiday stress free and escape the airport hustle - Triperoo Airport Lounges';
  }
  
  render(){
    return (
    <div>
      <Header contentType="airportLounge" headerTitle="Airport Lounges" subHeaderTitle="Save up to 60% on an airport lounge" showSmallHeader={this.state.showSmallHeader} />
      <div className="gap"></div>
      <div className="container">
        <div className="row"> 
        
        </div>
      </div>
      <div className="gap"></div>
      <div className="container">
        <div className="row">            

        </div>
      </div>
      <div className="gap"></div>
    </div>
    );
  }
}