import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../../components/travelExtras/header';

export default class RailTravel extends React.Component {
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
      <Header contentType="railTravel" headerTitle="Rail Travel" subHeaderTitle="Great deals on train tickets with no booking or card fees" showSmallHeader={this.state.showSmallHeader} />
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