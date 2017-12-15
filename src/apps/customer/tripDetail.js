import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as locationActions from '../../actions/location/locationActions';
import * as userActions from '../../actions/customer/userActions';
import TriperooLoader from '../../components/loaders/globalLoader';
import TripSummary from '../../components/layout/trip/summary';
import TripDayByDay from '../../components/layout/trip/dayByDay';
import TripWhereToStay from '../../components/layout/trip/whereToStay';
import TripHowToTravel from '../../components/layout/trip/howToTravel';
import Toastr from 'toastr';
import TripHeader from '../../components/content/headers/trip';

class CustomerTrips extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateNav = this.updateNav.bind(this);

    this.state = { loading: true, loadingTrip: false, loadingLocation: false, nav: 'overview' };
  }

  componentWillMount() {
    window.scrollTo(0, 0);

    this.setState({loading: true, loadingTrip: true});

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false, loadingTrip: true});
        this.getTrip();
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false, loadingTrip: false});
      });
  }

  updateNav(e) {
    e.preventDefault();
    this.setState({nav: e.target.getAttribute('data-id')});
  }


  getTrip() {
    this.props.userActions.getTrip(this.props.tripId, this.props.currentUserId)
      .then(() => {
        this.setState({loading: false, loadingTrip: false, loadingLocation: true});
        this.getLocation();
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false, loadingTrip: false});
      });
  }

  getLocation() {
    this.props.locationActions.loadLocationById(this.props.trip.tripDetails.regionID, true)
      .then(() => {
        this.setState({loading: false, loadingTrip: false, loadingLocation: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false, loadingTrip: false, loadingLocation: false});
      });
  }

  render(){
    if (!this.state.loadingTrip && !this.state.loadingLocation) {
      document.title = this.props.trip.tripName;
      return (
        <div>
          <TripHeader trip={this.props.trip} hasLoaded={!this.state.loadingTrip} user={this.props.user} />
          <div className="jumbotron tripNav">
            <div className="container">
              <nav className="nav">
                <a className={this.state.nav == 'overview' ? "nav-link active" : "nav-link"} href="#" onClick={this.updateNav} data-id="overview">Overview</a>
                <a className={this.state.nav == 'day' ? "nav-link active" : "nav-link"} href="#" onClick={this.updateNav} data-id="day">Day By Day</a>
                <a className={this.state.nav == 'stay' ? "nav-link active" : "nav-link"} href="#" onClick={this.updateNav} data-id="stay">Where To Stay</a>
                <a className={this.state.nav == 'travel' ? "nav-link active" : "nav-link hide"} href="#" onClick={this.updateNav} data-id="travel">How To Travel</a>
              </nav>
            </div>
          </div>
          <div className={this.state.nav == 'overview' ? "container" : "hide"}>
            <div className="gap gap-small"></div>
            <TripSummary location={this.props.location} trip={this.props.trip} />
            <div className="gap gap-small"></div>
          </div>
          <div className={this.state.nav == 'day' ? "container" : "hide"}>
            <div className="gap gap-small"></div>
            <TripDayByDay trip={this.props.trip} />
            <div className="gap gap-small"></div>
          </div>
          <div className={this.state.nav == 'stay' ? "container" : "hide"}>
            <div className="gap gap-small"></div>
            <TripWhereToStay trip={this.props.trip} />
            <div className="gap gap-small"></div>
          </div>
          <div className={this.state.nav == 'travel' ? "container" : "hide"}>
            <div className="gap gap-small"></div>
            <TripHowToTravel trip={this.props.trip} />
            <div className="gap gap-small"></div>
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
  trip: {},
  tripId: 0
};

CustomerTrips.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  currentUserId: PropTypes.string,
  trip: PropTypes.object,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  tripId: PropTypes.int
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    tripId: ownProps.params.tripId,
    user: state.user.user ? state.user.user : null,
    trip: state.user.trip ? state.user.trip : {},
    location: state.location.location ? state.location.location : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTrips);
