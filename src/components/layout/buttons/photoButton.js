import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../actions/customer/authenticationActions';
import * as modalActions from '../../../actions/common/modalActions';
let titleCase = require('title-case');

class PhotoButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  uploadPhoto(e) {
    e.preventDefault();
    this.props.modalActions.openPhoto(this.props.locationId, this.props.locationName, this.props.locationNameLong, this.props.locationType);
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <div key={this.props.name}>
          <a href="#" className="btn btn-secondary questionBtn" onClick={this.uploadPhoto}>
              <i className="fa fa-picture-o"></i>
              Upload Photos
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

PhotoButton.defaultProps = {
  locationId: 0,
  locationName: '',
  isAuthenticated: false
};

PhotoButton.propTypes = {
  name: PropTypes.string.isRequired,
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationNameLong: PropTypes.string,
  locationType: PropTypes.string,
  authenticationActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoButton);

