import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import TriperooLoader from '../../components/common/triperooLoader';
import TripItem from '../../components/customer/user/tripItem';
import UserProfile from '../../components/customer/user/userProfile';
import Toastr from 'toastr';

class CustomerTrips extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: false};
  }

  componentDidMount() {
    document.title = 'Your Trips';
    window.scrollTo(0, 0);

    this.setState({loading: true});

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
    if (!this.state.loadingTrips) {
      let profileUrl = this.props.user && this.props.user.profile ? this.props.user.profile.profileUrl : '';
      return (
        <div className="container">
          <div className="gap gap-small"></div>
          <div className="row">
            <div className="col-md-4">
              <UserProfile user={this.props.user} isActiveUser={this.props.isActiveUser}/>
            </div>
            <div className="col-md-8">
              <h4>Your Trips</h4>
              <hr/>
                  {
                    this.props.user.trips != null && this.props.user.trips.length > 0 ? this.props.user.trips.map(function(trip, i) { return (<TripItem trip={trip} key={trip.id} parentUrl={profileUrl} cssClass="col-md-4" position={i} />);}) : <p>This user has never been on any trips</p>
                  }
            </div>
          </div>
          <div className="gap gap-small"></div>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

CustomerTrips.defaultProps = {
  tripList: []
};

CustomerTrips.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  currentUserId: PropTypes.string,
  tripList: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.user.user ? state.user.user : {},
    trips: state.user.user ? state.user.user.trips : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTrips);
