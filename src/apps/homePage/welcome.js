import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/customer/userActions';
import * as locationActions from '../../actions/location/locationActions';
import Search from '../../components/forms/searchForms/homePage';
import TopEvents from '../../components/layout/cards/events/topEvents';
import TriperooLoader from '../../components/loaders/globalLoader';
import TopRestaurants from '../../components/layout/cards/location/topRestaurants';
import TopAttractions from '../../components/layout/cards/location/topAttractions';
import TopPointsOfInterest from '../../components/layout/cards/location/topPointOfInterest';
import LastMinuteDeals from '../../components/layout/cards/location/lastMinuteDeals';

class WelcomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {isUpdatingLike: false, showLike: true, isLoading: false, isLoadingLocation: true};
  }

  componentWillMount() {
    if (this.props.currentUserId != undefined) {
      this.loadUser();
    }
    else {
      browserHistory.push('/');
    }
  }

  loadUser() {
    if (this.props.currentUserId != '') {
      this.setState({isLoading: true, isLoadingLocation: true});
      this.props.userActions.getUser(this.props.currentUserId)
        .then(() => {
          this.setState({isLoading: false, isLoadingLocation: true});
          this.loadLocation();

        })
        .catch(error => {
          this.setState({isLoading: false, isLoadingLocation: false});
        });
    }
    else {
      browserHistory.push('/');
    }
  }

  loadLocation() {
    console.log(this.props.currentLocationId);

    if (this.props.currentLocationId > 0) {
      this.setState({isLoadingLocation: true});
      this.props.locationActions.loadLocationById(this.props.currentLocationId, true)
        .then(() => {
          this.setState({isLoadingLocation: false});

        })
        .catch(error => {
          this.setState({isLoadingLocation: false});
        });
    }
  }

  render() {

    document.title = 'Explore - Plan - Book. Get the best deals from top travel websites';

    let style = {
      backgroundImage: 'url(/static/img/holiday.jpg)'
    };

    if (!this.props.loadingLocation) {

      if (this.props.stateUser) {
        let premiumActivitiesTitle = 'Attractions in ' + this.props.location.regionName;
        let premiumActivitiesUrl = this.props.location.url + '/attractions';

        let topThingsToDoTitle = 'Things to do in ' + this.props.location.regionName;
        let thingsToDoUrl = this.props.location.url + '/activities';

        let topRestaurantTitle = 'Places to eat in ' + this.props.location.regionName;
        let restaurantUrl = this.props.location.url + '/restaurants';


        let lastMinuteTitle = 'Last minute deals outside of ' + this.props.location.regionName;


        return (
          <div>
            <div className="bg-holder full text-center text-white holidayPage">
              <div className="bg-mask"></div>
              <div className="bg-img" style={style}></div>
              <div className="bg-front full-center text-xs-center">
                <div className="owl-cap">
                  <span>Welcome back {this.props.stateUser.profile.name}</span>
                  <h1 className="owl-cap-title fittext">Explore - Plan - Book</h1>
                  <div className="owl-cap-price hidden-md-down">
                    <small>Get the best deals from the top travel websites, plus reviews on the <br />best hotels,
                      restaurants, attractions & more from local experts!
                    </small>
                  </div>
                  <Search searchType="all"/>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="gap gap-mini"></div>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <TopRestaurants title={topRestaurantTitle} locationId={this.props.location.regionID} name={this.props.location.regionName} locationType="Restaurants" pageSize={4} locationName={this.props.location.regionName} url={restaurantUrl}/>
                  </div>
                  <div className="row">
                    <TopAttractions title={premiumActivitiesTitle} locationId={this.props.location.regionID} name={this.props.location.regionName} locationType="Attractions" pageSize={4} locationName={this.props.location.regionName} url={premiumActivitiesUrl}/>
                  </div>
                  <div className="row">
                    <TopPointsOfInterest title={topThingsToDoTitle} locationId={this.props.location.regionID} name={this.props.location.regionName} locationType="Point of Interest" pageSize={4} locationName={this.props.location.regionName} url={thingsToDoUrl}/>
                  </div>
                  <div className="row">
                    <LastMinuteDeals title={lastMinuteTitle} locationId={this.props.location.regionID} name={this.props.location.regionName} locationType="Point of Interest" pageSize={4} locationName={this.props.location.regionName}/>
                  </div>
                </div>
              </div>
            </div>
            <TopEvents locationId={this.props.location.regionID} locationName={this.props.location.regionName} baseUrl={this.props.location.url}/>
          </div>
        );
      }
      else {
        return (<TriperooLoader />);
      }
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

WelcomePage.defaultProps = {
  isAuthenticated: false,
  isActiveUser: false,
  user: {},
  currentUserId: '',
  currentLocationId: 0,
  loadingLocation: true
};

WelcomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentLocationId: PropTypes.number.isRequired,
  currentUserId: PropTypes.string.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  stateUser: PropTypes.object,
  errorMessage: PropTypes.string,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  loadingLocation: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: state.authentication.user ? state.authentication.user.customerReference : user.userId ? user.userId : '',
    currentLocationId: user.currentLocationId ? user.currentLocationId : 0,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.authentication.user ? state.authentication.user : state.user ? state.user.user : null,
    stateUser: state.user ? state.user.user : null,
    errorMessage: state.authentication.errorMessage,
    location: state.location.location ? state.location.location : {},
    loadingLocation: state.location.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
