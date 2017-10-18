import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../actions/customer/authenticationActions';
import * as modalActions from '../../../actions/common/modalActions';

class BookmarkButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.openBookmark = this.openBookmark.bind(this);
  }

  openBookmark(e) {
    e.preventDefault();
    this.props.modalActions.openBookmark(this.props.parentLocationId, this.props.parentLocationName, this.props.parentLocationNameLong, this.props.parentLocationImage, this.props.locationId, this.props.locationNameLong, this.props.locationName, this.props.locationType, this.props.locationImage, this.props.locationUrl, false, this.props.latitude, this.props.longitude);
  }

  render() {
    if (this.props.isAuthenticated) {

      let message = 'Add to Trips';

      if (this.props.locationId == 0)
      {
        message = 'Create Trip';
      }

      return (
          <a href="#" className="btn btn-secondary questionBtn" onClick={this.openBookmark}>
              <i className="fa fa-heart-o"></i>
            {message}
          </a>
      );
    }
    else {
      return null;
    }
  }
}

BookmarkButton.defaultProps = {
  locationId: 0,
  locationName: '',
  isAuthenticated: false,
  isFetching: false
};

BookmarkButton.propTypes = {
  parentLocationId: PropTypes.number,
  parentLocationName: PropTypes.string,
  parentLocationNameLong: PropTypes.string,
  parentLocationImage: PropTypes.string,
  name: PropTypes.string.isRequired,
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationNameLong: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  locationType: PropTypes.string,
  locationImage: PropTypes.string,
  locationUrl: PropTypes.string,
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

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);

