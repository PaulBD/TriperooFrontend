import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/customer/userActions';

class BookmarkLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {

    const bookmark = { "locationId": this.props.locationId, 
      "locationType": this.props.locationType,
      "locationName": this.props.locationName
    };
    
    this.props.userActions.postBookmark(bookmark);
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render(){
    return (
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            
            <div className="modal-body" >
              <div className="row">
                <div className="col-md-12">
                  <h3>Thanks for the Bookmark</h3>
                  <p>Thank you for bookmarking this location. Please click <a href="#" onClick={this.closeModal}>here</a> to close the window.</p>
                </div>
              </div>
            </div>
            <div className="modal-footer text-xs-center">
              <a href="#" onClick={this.closeModal}>Close</a>
            </div>
          </div>
        </div>
    );
  }
}

BookmarkLocation.defaultProps = {
  locationId: 0,
  locationName: '',
  isSending: false,
  hasPosted: false
};

BookmarkLocation.propTypes = {
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  userActions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPosted: PropTypes.bool,
  closeModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    isSending: state.location.isFetching,
    errorMessage: state.location.errorMessage,
    hasPosted: state.location.hasPosted 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkLocation);
