import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import TriperooLoader from '../../components/loaders/globalLoader';
import TripItem from '../../components/layout/cards/customer/tripItem';
import UserProfile from '../../components/forms/customer/userProfile';
import Toastr from 'toastr';

class CustomerTrips extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: true};
  }

  componentWillMount() {
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
    if (!this.state.loading) {
      let profileUrl = this.props.user && this.props.user.profile ? this.props.user.profile.profileUrl : '';
      return (
        <div className="container">
          <div className="gap gap-small"></div>
          <div className="row">
            <div className="col-md-12">
              <h5 className="mb-2">Your Trips</h5>
              <hr className="pageTitle"/>
              <div className="card-columns">
                {
                  this.props.user.trips != null && this.props.user.trips.length > 0 ? this.props.user.trips.map(function(trip, i) { return (<TripItem trip={trip} key={trip.id} parentUrl={profileUrl} position={i} />);}) : <p>This user has never been on any trips</p>
                }
              </div>
              <div className="gap gap-small"></div>
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
