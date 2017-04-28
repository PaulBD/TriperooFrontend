import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/authenticationActions';
import ReviewPopup from './reviewPopup';

let titleCase = require('title-case');

class ReviewButton extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <div>
          <a href="#" className="btn btn-info questionBtn" data-toggle="modal" data-target="#reviewLocationModel" >
              <i className="fa fa-comments"></i>
              Write a Review
          </a>
          <div className="gap gap-small"></div>
          <ReviewPopup modalName="reviewLocationModel" locationId={this.props.locationId} locationName={titleCase(this.props.locationName)} locationType={this.props.locationType} />
        </div>
      );
    }
    else { 
      return null; 
    }
  }
}

ReviewButton.defaultProps = {
  locationId: 0,
  locationName: '',
  isAuthenticated: false,
  isFetching: false
};

ReviewButton.propTypes = {
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.authentication.isFetching,
    isAuthenticated: state.authentication.isAuthenticated,
    errorMessage: state.authentication.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewButton);

