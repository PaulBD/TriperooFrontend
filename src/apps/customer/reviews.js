import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import UserHeader from '../../components/customer/user/userHeader';
import UserProfile from '../../components/customer/user/userProfile';
import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';

class UserReviews extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: false };
  }

  componentDidMount() {
    document.title = 'Your Reviews';
    window.scrollTo(0, 0);

    this.setState({loading: true});

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false});
      }).catch(error => {
        Toastr.error(error);
        this.setState({loading: false});
      });
  }

  render(){
    if (!this.state.loading) {
      let user = JSON.parse(localStorage.getItem('id_token'));
      return (
      <div>
        <UserHeader user={this.props.user} isAuthenticated={this.props.isAuthenticated}/>
        <div className="container">
            <div className="gap gap"></div>
            <div className="row">
                <div className="col-md-3">
                  <UserProfile user={this.props.user} isActiveUser={this.props.isActiveUser}/>
                </div>
                <div className="col-md-9">
                    Reviews

                </div>
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

UserReviews.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReviews);
