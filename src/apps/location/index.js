import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';

import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import LocationReviews from '../../components/layout/cards/reviews/locationReviewList';
import RecentQuestions from '../../components/layout/cards/questions/list';
import ReviewButton from '../../components/layout/buttons/reviewButton';
import QuestionButton from '../../components/layout/buttons/questionButton';
import TopLocations from '../../components/layout/cards/location/topLocations';
import NavigationWrapper from '../../components/layout/common/locationNav';
import Summary from '../../components/layout/location/summary';
import Header from '../../components/content/headers/location';
import LocationStats from '../../components/layout/location/stats';
import LocationArticles from '../../components/content/articles/location';
import WeatherForcast from '../../components/layout/weather/forecast';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import Loader from '../../components/loaders/globalLoader';
import TopEvents from '../../components/layout/cards/events/topEvents';
import LocationOverview from '../../components/layout/location/locationDescription';
import Toastr from 'toastr';
import HotelsNearLocation from '../../components/layout/cards/hotels/hotelsNearLocation';

let titleCase = require('title-case');
let _ = require('lodash');
let moment = require('moment');

class LocationHome extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.likeLocation = this.likeLocation.bind(this);
    this.state = { isLoadingLocation: true, isUpdatingLike: false, location: {}, showLike: true };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.setState({ isLoadingLocation: true });
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => {
        this.setState({
          isLoadingLocation: false,
          location: _.cloneDeep(this.props.location)
        });

      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  likeLocation(likeLocation) {
    let location = this.state.location;

    if (likeLocation) {
      location.stats.likeCount += 1;
    }
    else {
      location.stats.likeCount -= 1;
    }

    this.setState({ isUpdatingLike: true, location: location });

    this.props.locationActions.likeLocationById(this.props.locationId, likeLocation, _.cloneDeep(location))
      .then(() => {
        this.setState({
          isUpdatingLike: false,
          location: location,
          showLike: false
        });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isUpdatingLike: false});
      });
  }

  render(){
    if (!this.state.isLoadingLocation)
    {
      document.title = 'Explore, Plan, Book in ' + titleCase(this.state.location.regionName);

      return (
        <div>
          <Header location={this.state.location}  />
          <div className="container">
            <NavigationWrapper name={this.state.location.regionName} location={this.state.location} />
            <div className="gap gap-small"></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <TopLocations locationId={this.props.locationId} name={this.state.location.regionName} locationType={this.state.location.regionType} {...this.props} />
              </div>
              <div className="col-md-8">
                <Summary location={this.props.location} showMap={true} />
              </div>
              <div className="col-md-4">
                <LocationStats showLike={this.state.showLike} likeLocation={this.likeLocation} locationId={this.props.locationId} stats={this.state.location.stats} locationUrl={this.state.location.url} locationName={this.state.location.regionName}  />
                <QuestionButton locationId={this.props.locationId} locationName={this.state.location.regionName} pageSize={3} pageNumber={0} locationNameLong={this.state.location.regionNameLong} locationType={this.state.location.regionType} />
                <RecentQuestions locationId={this.props.locationId} locationName={this.state.location.regionName} pageSize={3} pageNumber={0} locationUrl={this.state.location.url} showTitle={true} isSideComponent={true}/>
              </div>
            </div>
          </div>
          <div className="gap"></div>
          <LastMinuteDeal locationId={this.props.locationId} />
          <HotelsNearLocation
            arrivalDate={moment().add(7, 'days').format('YYYY-MM-DD')}
            pageNumber={0}
            currencyCode='GBP'
            exclude={0}
            locale='en_en'
            radius={5}
            rooms1={1}
            nights={1}
            guests={1}
            sortBy='PROMO'
            locationId={this.props.locationId} latitude={this.props.location.latitude} longitude={this.props.location.longitude} pageSize={4} locationName={this.props.location.regionNameLong} url={this.props.location.url}/>
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4>Reviews About {this.state.location.regionName}...</h4>
                <hr/>
              </div>
              <div className="col-md-8">
                <LocationReviews cssClass="col-md-6" showTitle={true} locationId={this.props.locationId} locationName={this.state.location.regionName} locationType={this.state.location.subClass} pageSize={4} pageNumber={0}  />
              </div>
              <div className="col-md-4">
                <ReviewButton locationId={this.props.locationId} locationName={this.state.location.regionName} locationNameLong={this.state.location.regionNameLong} locationType={this.state.location.regionType} pageSize={4} pageNumber={0}  />
                <div className="gap gap-small"></div>
                <LocationOverview location={this.props.location} />
                <div className={this.state.location.regionType == 'Country' ? "hide" : "gap gap-small"}></div>
                <WeatherForcast locationId={this.props.locationId} locationType={this.state.location.regionType} />
                <div className="gap gap-small"></div>
                <LocationArticles locationId={this.props.locationId} locationName={this.state.location.regionName}/>
              </div>
            </div>
          </div>
          <div className="gap"></div>
          <TopEvents locationId={this.props.locationId} locationName={this.state.location.regionName} baseUrl={this.state.location.url}/>
          <FacebookSignup />
        </div>
      );
    }
    else {
      return (<Loader/>);
    }
  }
}

LocationHome.defaultProps = {
  isFetching: false
};

LocationHome.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationHome);
