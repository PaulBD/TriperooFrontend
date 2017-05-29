import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as modalActions from '../../actions/common/modalActions';

class BookmarkButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.openBookmark = this.openBookmark.bind(this);
  }

  openBookmark(e) {
    e.preventDefault();
    this.props.modalActions.openBookmark(this.props.locationId, this.props.locationNameLong, this.props.locationName, this.props.locationType, this.props.locationImage, this.props.locationUrl);
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <div key={this.props.name}>
          <a href="#" className="btn btn-info questionBtn" onClick={this.openBookmark}>
              <i className="fa fa-heart-o"></i>
              Add to Wishlist
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

BookmarkButton.defaultProps = {
  locationId: 0,
  locationName: '',
  isAuthenticated: false,
  isFetching: false
};

BookmarkButton.propTypes = {
  name: PropTypes.string.isRequired,
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationNameLong: PropTypes.string,
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

