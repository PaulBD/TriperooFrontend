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
import HotelsNearLocation from '../../components/layout/cards/hotels/hotelsForTrip';
let titleCase = require('title-case');
let moment = require('moment');

class CustomerTrips extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateNav = this.updateNav.bind(this);
    this.addActivities = this.addActivities.bind(this);
    this.showActivity = this.showActivity.bind(this);

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
    console.log(e.target.getAttribute('data-id'));
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

  addActivities(e) {
    e.preventDefault();
    alert('Add Activities');
  }

  showActivity(e) {
    e.preventDefault();
    alert('Show Activities');
  }

  render(){
    if (!this.state.loadingTrip && !this.state.loadingLocation) {

      console.log(this.props.trip);

      let highlightA = '';
      let highlightB = '';

      if (this.props.trip.days.length > 0)
      {
        highlightA = (
          <div className={this.props.trip.days.length > 0 ? "col-md-6" : "hide"}>
            <div className="card card-inverse inverseBg">
              <div className="card-block">
                <h4 className="card-title">{this.props.trip.days[0].regionName}</h4>
                <p className="card-text">{this.props.trip.days[0].type}</p>
                <a href="#" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        );
      }

      if (this.props.trip.days.length > 1)
      {
        highlightB = (
          <div className={this.props.trip.days.length > 1 ? "col-md-6" : "hide"}>
            <div className="card card-inverse inverseBg">
              <div className="card-block">
                <h4 className="card-title">{this.props.trip.days[1].regionName}</h4>
                <p className="card-text">{this.props.trip.days[1].type}</p>
                <a href="#" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        );
      }

      document.title = this.props.trip.tripName;
      let hotelUrl = this.props.trip.tripDetails.regionUrl + '/hotels';
      let foodUrl = this.props.trip.tripDetails.regionUrl + '/restaurants';
      return (
        <div>
          <TripHeader trip={this.props.trip} hasLoaded={!this.state.loadingTrip} user={this.props.user} />

          <div className="jumbotron tripNav">
            <div className="container">
              <nav className="nav">
                <a className={this.state.nav == 'overview' ? "nav-link active" : "nav-link"} href="#" onClick={this.updateNav} data-id="overview">Overview</a>
                <a className={this.state.nav == 'day' ? "nav-link active" : "nav-link"} href="#" onClick={this.updateNav} data-id="day">Day By Day</a>
                <a className={this.state.nav == 'stay' ? "nav-link active" : "nav-link"} href="#" onClick={this.updateNav} data-id="stay">Where To Stay</a>
                <a className={this.state.nav == 'travel' ? "nav-link active" : "nav-link"} href="#" onClick={this.updateNav} data-id="travel">How To Travel</a>
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
                            <p className={this.props.trip.tripDetails.tags.length > 0 ? "" : "hide"}><strong>Things to do in {this.props.location.regionName}</strong><br />
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
                    <div className={this.props.trip.days ? this.props.trip.days.length > 0 ? "row" : "hide" : "hide"}>
                      <div className="col-md-12">
                        <hr />
                        <h5 className="mb-2">Highlights From Your Plan</h5>
                        <hr className="pageTitle"/>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row">
                              {highlightA}
                              {highlightB}
                            </div>
                          </div>
                        </div>
                        <div className="gap gap-small"></div>
                      </div>
                    </div>
                    <div className={this.props.trip.days ? this.props.trip.days.length == 0 ? "row" : "hide" : "hide"}>
                      <div className="col-md-12 text-center">
                        <hr />
                        <a href="#" onClick={this.addActivities} className="btn btn-primary"><i className="fa fa-plus" /> Add Activities</a>
                      </div>
                    </div>
                    <div className="gap gap-small"></div>
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
                  <div className="gap gap-small"></div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-3">
                        <ul className="list-inline">
                          <li className="list-inline-item calanderSml active"><a href="#" onClick={this.showActivity} data-day="oct-21"><small>Oct</small><br />21</a></li>
                          <li className="list-inline-item calanderSml"><a href="#" onClick={this.showActivity} data-day="oct-22"><small>Oct</small><br />22</a></li>
                          <li className="list-inline-item calanderSml"><a href="#" onClick={this.showActivity} data-day="oct-23"><small>Oct</small><br />23</a></li>
                        </ul>
                      </div>
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-2 text-center">
                            <div className="tripDetailDate">
                              <small>Thursday</small><br />
                              21<br />
                              <small>October</small>
                            </div>
                          </div>
                          <div className="col-md-10">
                            <h4 className="tripDetailTitle">{this.props.trip.tripDetails.regionName}</h4>
                          </div>
                        </div>
                        <div className="gap gap-small"></div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card">
                              <div className="card-block">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Lorem ipsum</p>
                                <a href="" className="btn btn-primary">Button</a>
                              </div>
                            </div>
                          </div>
                          <div className="gap gap-mini"></div>
                          <div className="col-md-12">
                            <div className="card">
                              <div className="card-block">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Lorem ipsum</p>
                                <a href="" className="btn btn-primary">Button</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap gap-small"></div>
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
                      <HotelsNearLocation
                        locationType="activity"
                        arrivalDate={moment().add(7, 'days').format('YYYY-MM-DD')}
                        pageNumber={0}
                        currencyCode="GBP"
                        exclude={0}
                        locale="en_en"
                        radius={5}
                        rooms1={1}
                        nights={1}
                        guests={1}
                        sortBy="PROMO"
                        locationId={this.props.trip.tripDetails.regionID} latitude={0} longitude={0} pageSize={8} locationName={this.props.trip.tripDetails.regionName} url=""/>

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
