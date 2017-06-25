import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import UserProfile from '../../components/customer/user/userProfile';
import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';

class Following extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: true };
  }

  componentDidMount() {
    document.title = 'Other Triperooers your following';
    window.scrollTo(0, 0);

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false});
      });

  }

  render(){
    if (!this.state.loading) {
      return (
        <div className="container">
          <div className="gap gap-small"></div>
          <div className="row">
            <div className="col-md-4">
              <UserProfile user={this.props.user} isActiveUser={this.props.isActiveUser}/>
            </div>
            <div className="col-md-8">
              <h3>People your following..</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Following);


