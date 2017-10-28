import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as locationActions from '../../actions/location/locationActions';
import * as userActions from '../../actions/customer/userActions';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';
import TripHeader from '../../components/content/headers/trip';
import Summary from '../../components/layout/location/summary';
import TagList from '../../components/forms/common/tagList';
let titleCase = require('title-case');

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
    this.props.locationActions.loadLocationById(this.props.trip.tripDetails.regionID)
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
      let hotelUrl = this.props.trip.tripDetails.regionUrl + '/hotels';
      let foodUrl = this.props.trip.tripDetails.regionUrl + '/restaurants';
      return (
        <div>
          <TripHeader trip={this.props.trip} hasLoaded={!this.state.loadingTrip} user={this.props.user} />

          <div className="jumbotron tripNav">
            <div className="container">
              <nav className="nav">
                <a className="nav-link active" href="#" onClick={this.updateNav} data-id="overview">Overview</a>
                <a className="nav-link" href="#" onClick={this.updateNav} data-id="day">Day By Day</a>
                <a className="nav-link" href="#" onClick={this.updateNav} data-id="stay">Where To Stay</a>
                <a className="nav-link" href="#" onClick={this.updateNav} data-id="travel">How To Travel</a>
              </nav>
            </div>
          </div>


          <div className={this.state.nav == 'overview' ? "container" : "hide"}>
            <div className="gap gap-small"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="mb-2">Overview</h5>
                    <hr className="pageTitle"/>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <img src={this.props.trip.tripDetails.image} />
                      </div>
                      <div className="col-md-7">
                        <Summary location={this.props.location} showMap={false} />
                        <div className="row">
                          <div className="col-md-6">
                            <p><strong>Things to do in {this.props.location.regionName}</strong><br />
                              <TagList tags={this.props.trip.tripDetails.tags} maxTags={5} /></p>
                            <p className=""><strong>Side Trip</strong><br />
                              <a href=""></a></p>
                          </div>
                          <div className="col-md-6">
                            <p><strong>Accommodation</strong><br />
                              Get expert advice on where to stay in {this.props.location.regionName}.<br />
                              <a href={hotelUrl}>Find places to stay »</a></p>
                            <p><strong>Where To Eat</strong><br />
                              See where to eat in {this.props.location.regionName}.<br />
                              <a href={foodUrl}>Find places to eat »</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={this.props.trip.days ? "row" : "hide"}>
                      <div className="col-md-12">
                        <h5 className="mb-2">Highlights From Your Plan</h5>
                        <hr className="pageTitle"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={this.state.nav == 'day' ? "container" : "hide"}>
            <div className="gap gap-small"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="mb-2">Day By Day</h5>
                    <hr className="pageTitle"/>
                  </div>
                  <div className="col-md-12">

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={this.state.nav == 'stay' ? "container" : "hide"}>
            <div className="gap gap-small"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="mb-2">Where To Stay</h5>
                    <hr className="pageTitle"/>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">

                      </div>
                      <div className="col-md-6">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={this.state.nav == 'travel' ? "container" : "hide"}>
            <div className="gap gap-small"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="mb-2">How To Travel</h5>
                    <hr className="pageTitle"/>
                  </div>
                  <div className="col-md-12">

                  </div>
                </div>
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
