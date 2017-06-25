import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import UserHeader from '../../components/customer/user/userHeader';
import BookmarkList from '../../components/customer/user/bookmarkList';
import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';

class UserBookmarks extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
    this.state = { loading: true, loadingBookmarks: false };
  }

  componentDidMount() {
    document.title = 'Your Bookmarks';
    window.scrollTo(0, 0);

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false});
        this.loadBookmarks();
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false});
      });
  }

  handleMissingImage(e) {
    e.target.src='/static/img/placeholder.png';
  }

  loadBookmarks() {
    this.setState({loadingBookmarks: true});
    this.props.userActions.getBookmarks()
      .then(() => {
        this.setState({loadingBookmarks: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loadingBookmarks: false});
      });
  }

  render(){
    if (!this.state.loading) {
      return (
        <div>
          <UserHeader user={this.props.user} isAuthenticated={this.props.isAuthenticated}/>
          <div className="container">
            <div className="gap gap"></div>
            <div className="row">
              <div className={this.props.bookmarks.length > 0 ? "col-md-12" : "hide"}>
                <BookmarkList bookmarks={this.props.bookmarks} loadingBookmarks={this.state.loadingBookmarks} i={0} handleMissingImage={this.handleMissingImage}/>
              </div>
              <div className={this.props.bookmarks.length == 0 ? "col-md-12" : "hide"}>
                <p>You have no bookmarks</p>
              </div>
            </div>
            <div className="gap gap"></div>
          </div>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

UserBookmarks.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  bookmarks: PropTypes.array,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  currentUserId: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.user.user ? state.user.user : null,
    bookmarks: state.user.bookmarks ? state.user.bookmarks : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBookmarks);
