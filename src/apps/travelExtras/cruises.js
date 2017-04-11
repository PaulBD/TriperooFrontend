import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../../components/travelExtras/header';

export default class Cruises extends React.Component {
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
      <Header contentType="cruises" headerTitle="Cruises" subHeaderTitle="Save up to 60% on worldwide cruises" showSmallHeader={this.state.showSmallHeader} />
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