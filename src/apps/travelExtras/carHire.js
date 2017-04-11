import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../../components/travelExtras/header';

export default class CarHire extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { showSmallHeader: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render(){
    return (
    <div>
      <Header contentType="carHire" headerTitle="Car Hire" subHeaderTitle="Find great car hire deals from under £10 a day" showSmallHeader={this.state.showSmallHeader} />
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