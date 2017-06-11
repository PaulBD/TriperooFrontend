import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as modalActions from '../../actions/common/modalActions';
let titleCase = require('title-case');

class ReviewButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.writeReview = this.writeReview.bind(this);
  }

  writeReview(e) {
    e.preventDefault();
    this.props.modalActions.openReview(this.props.locationId, this.props.locationNameLong, this.props.locationType);
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <div key={this.props.name}>
          <a href="#" className="btn btn-secondary questionBtn" onClick={this.writeReview}>
              <i className="fa fa-comments"></i>
              Write a Review
          </a>
          <div className="gap gap-small"></div>
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
  name: PropTypes.string.isRequired,
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationNameLong: PropTypes.string,
  locationType: PropTypes.string,
  authenticationActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
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
    authenticationActions: bindActionCreators(authenticationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewButton);

