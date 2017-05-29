import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/customer/userActions';
import Toastr from 'toastr';

class BookmarkLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
    this.state = { postingBookmark: false, loadingBookmarks: false, title: 'Thanks for the Bookmark', message: 'Thank you for bookmarking this location.' };
  }

  componentWillMount() {

    const bookmark = {
      "regionID": this.props.locationId,
      "subClass": this.props.locationType,
      "regionName": this.props.locationName,
      "regionNameLong": this.props.locationNameLong,
      "image": this.props.locationImage,
      "url": this.props.locationUrl
    };

    if (this.props.removeBookmark)
    {
      this.setState({postingBookmark: true, title: 'Bookmark Removed', message: 'This bookmark has been removed.'});
      this.props.userActions.archiveBookmark(this.props.locationId)
        .then(() => {
          this.setState({postingBookmark: false, loadingBookmarks: true});
          this.props.userActions.getBookmarks()
            .then(() => {
              this.setState({loadingBookmarks: false});
            })
            .catch(error => {
              Toastr.error(error);
              this.setState({loadingBookmarks: false});
            });
        })
        .catch(error => {
          Toastr.error(error);
          this.setState({postingBookmark: false});
        });
    }
    else {
      this.setState({postingBookmark: true});
      this.props.userActions.postBookmark(bookmark)
        .then(() => {
          this.setState({postingBookmark: false});
        })
        .catch(error => {
          Toastr.error(error);
          this.setState({postingBookmark: false});
        });
    }
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render(){
    if (!this.state.postingBookmark) {
      return (
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <h3>{this.state.title}</h3>
                  <p>{this.state.message} Please click <a href="#" onClick={this.closeModal}>here</a> to
                    close the window.</p>
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
    else {
      return (<p>Posting...</p>);
    }
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
  locationNameLong: PropTypes.string,
  locationImage: PropTypes.string,
  locationUrl: PropTypes.string,
  userActions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPosted: PropTypes.bool,
  closeModal: PropTypes.func,
  removeBookmark: PropTypes.bool
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
