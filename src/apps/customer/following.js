import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import * as userFollowActions from '../../actions/customer/userFollowActions';
import UserProfile from '../../components/forms/customer/userProfile';
import FollowerItem from '../../components/social/followers';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';

class Following extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: true, loadingFollowers: false };
  }

  componentWillMount() {
    document.title = 'Whos following you';
    window.scrollTo(0, 0);

    console.log(this.props.currentUserId);

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false, loadingFollowers: true});
        this.props.userFollowActions.getFollowing(this.props.currentUserId)
          .then(() => {
            this.setState({loadingFollowers: false});
          })
          .catch(error => {
            Toastr.error(error);
            this.setState({loadingFollowers: false});
          });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false});
      });
  }

  render(){
    if ((!this.state.loading) && (!this.state.loadingFollowers)) {
      return (
        <div className="container">
          <div className="gap gap-small"></div>
          <div className="row">
            <div className="col-md-4">
              <UserProfile user={this.props.user} isActiveUser={this.props.isActiveUser}/>
            </div>
            <div className="col-md-8">
              <h4>People your following..</h4>
              <hr />
              {
                this.props.following.length > 0 ?
                  this.props.following.map(function (user, i) {
                    return (<FollowerItem key={i} user={user} />);
                  }) : <p>You are currently not following any other travellers.</p>
              }
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

Following.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  userFollowActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  following: PropTypes.array,
  currentUserId: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.user.user ? state.user.user : null,
    following: state.userFollow.users ? state.userFollow.users : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch),
    userFollowActions: bindActionCreators(userFollowActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Following);


