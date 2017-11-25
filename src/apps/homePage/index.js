import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/customer/userActions';
import * as locationActions from '../../actions/location/locationActions';

import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import Search from '../../components/forms/searchForms/homePage';
import Destinations from '../../components/content/dynamic/destinations';
import ReviewList from '../../components/layout/cards/reviews/homePageReviewList';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';


import RecentQuestions from '../../components/layout/cards/questions/list';
import WeatherForcast from '../../components/layout/weather/forecast';
import TopEvents from '../../components/layout/cards/events/topEvents';
import TriperooLoader from '../../components/loaders/globalLoader';
import TopRestaurants from '../../components/layout/cards/location/topRestaurants';
import TopAttractions from '../../components/layout/cards/location/topAttractions';
import TopPointsOfInterest from '../../components/layout/cards/location/topPointOfInterest';
import LastMinuteDeals from '../../components/layout/cards/location/lastMinuteDeals';


class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isUpdatingLike: false, showLike: true, isLoading: false, isLoadingLocation: true };
  }

  componentWillMount() {
    if (this.props.currentUserId != undefined) {
      this.loadUser();
    }
  }

  loadUser() {
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

  loadLocation() {
    this.setState({ isLoadingLocation: true });
    this.props.locationActions.loadLocationById(this.props.user.profile.currentLocationId, true)
      .then(() => {
        this.setState({
          isLoadingLocation: false
        });

      })
      .catch(error => {
        this.setState({isLoadingLocation: false});
      });
  }

  render() {

    document.title = 'Explore, Plan, Book - Get the best deals from top travel websites';

    let style = {
      backgroundImage: 'url(/static/img/holiday.jpg)'
    };

    if (this.props.currentUserId == 0) {
      return (
        <div>
          <div className="bg-holder full text-center text-white holidayPage">
            <div className="bg-mask"></div>
            <div className="bg-img" style={style}></div>
            <div className="bg-front full-center">
              <div className="owl-cap">
                <h1 className="owl-cap-title fittext">Explore, Plan & Book</h1>
                <div className="owl-cap-price">
                  <small>Get the best deals from the top travel websites, plus reviews on the <br />best hotels, restaurants, attractions & more from local experts!</small>
                </div>
                <Search searchType="all"/>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="gap gap-mini"></div>
            <div className="row text-center">
              <Destinations locationCount={3} title="Our Top Destinations" contentType="homePage"/>
            </div>
            <hr />
            <div className="gap"></div>
            <div className="row row-wrap">
              <ReviewList locationType="all" locationId={0} pageSize={3} locationName="" pageNumber={0}
                          showTitle={true}/>
            </div>
          </div>
          <LastMinuteDeal locationId={2114}/>
          <div className="container">
            <div className="gap"></div>
            <BulletPoints />
            <div className="gap gap-mini"></div>
            <FacebookSignup />
            <TrustedPartners />
            <div className="gap gap-mini"></div>
          </div>
        </div>
      );
    }
    else {

      if (!this.state.isLoadingLocation) {

        if (this.props.user != undefined) {
          let premiumActivitiesTitle = 'Premium attractions in ' + this.props.location.regionName;
          let premiumActivitiesUrl = this.props.location.url + '/attractions';

          let topThingsToDoTitle = 'Things to do in ' + this.props.location.regionName;
          let thingsToDoUrl = this.props.location.url + '/activities';

          let topRestaurantTitle = 'Places to eat in ' + this.props.location.regionName;
          let restaurantUrl = this.props.location.url + '/activities';


          let lastMinuteTitle = 'Last minute deals outside of ' + this.props.location.regionName;


          return (
            <div>
              <div className="bg-holder full text-center text-white holidayPage">
                <div className="bg-mask"></div>
                <div className="bg-img" style={style}></div>
                <div className="bg-front full-center">
                  <div className="owl-cap">
                    Welcome back {this.props.user.profile.name}
                    <h1 className="owl-cap-title fittext">Explore, Plan & Book</h1>
                    <div className="owl-cap-price">
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
                  <div className="col-md-8">
                    <div className="row">
                      <TopRestaurants title={topRestaurantTitle} locationId={this.props.location.regionID}
                                      name={this.props.location.regionName} locationType="Restaurants" pageSize={4}
                                      locationName={this.props.location.regionName} url={restaurantUrl}/>
                    </div>
                    <div className="row">
                      <TopAttractions title={premiumActivitiesTitle} locationId={this.props.location.regionID}
                                      name={this.props.location.regionName} locationType="Attractions" pageSize={4}
                                      locationName={this.props.location.regionName} url={premiumActivitiesUrl}/>
                    </div>
                    <div className="row">
                      <TopPointsOfInterest title={topThingsToDoTitle} locationId={this.props.location.regionID}
                                           name={this.props.location.regionName} locationType="Point of Interest"
                                           pageSize={4} locationName={this.props.location.regionName}
                                           url={thingsToDoUrl}/>
                    </div>
                    <div className="row">
                      <LastMinuteDeals title={lastMinuteTitle} locationId={this.props.location.regionID}
                                       name={this.props.location.regionName} locationType="Point of Interest"
                                       pageSize={4} locationName={this.props.location.regionName}/>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <WeatherForcast locationId={this.props.location.regionID}
                                    locationType={this.props.location.regionType}/>
                    <div className="gap gap-mini"></div>
                    <RecentQuestions locationId={this.props.location.regionID}
                                     locationName={this.props.location.regionName} pageSize={3} pageNumber={0}
                                     locationUrl={this.props.location.url} showTitle={true} isSideComponent={true}/>
                  </div>
                </div>
              </div>
              <TopEvents locationId={this.props.location.regionID} locationName={this.props.location.regionName}
                         baseUrl={this.props.location.url}/>
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
}

HomePage.defaultProps = {
  isAuthenticated: false,
  isActiveUser: false,
  user: {},
  currentUserId: 0
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUserId: PropTypes.number.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  errorMessage: PropTypes.string,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: user.userId,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.user.user ? state.user.user : null,
    errorMessage: state.user.errorMessage,
    location: state.location.location ? state.location.location : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
