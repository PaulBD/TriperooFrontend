import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
let _ = require('lodash');
import * as locationActions from '../../actions/location/locationActions';

import FacebookSignup from '../../components/customer/authentication/facebookSignup';
import ReviewList from '../../components/reviews/textList';
import RecentQuestions from '../../components/questions/list';
import QuestionButton from '../../components/questions/questionButton';
import TopLocations from '../../components/locations/topLocations';
import NavigationWrapper from '../../components/locations/navigation/navigationWrapper';
import Summary from '../../components/locations/summary';
import Header from '../../components/locations/homeHeader';
import LocationStats from '../../components/locations/stats';
import WeatherForcast from '../../components/locations/weather/forecast';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import Loader from '../../components/common/triperooLoader';
import TopEvents from '../../components/locations/topEvents';
import ReviewButton from '../../components/reviews/reviewButton';
import Toastr from 'toastr';

let titleCase = require('title-case');

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
                <Summary locationName={this.props.location.regionName} summary={this.props.location.summary ? this.props.location.summary.en : ''} />
              </div>
              <div className="col-md-4">
                <LocationStats showLike={this.state.showLike} likeLocation={this.likeLocation} locationId={this.props.locationId} stats={this.state.location.stats} locationUrl={this.state.location.url} locationName={this.state.location.regionName}  />
                <QuestionButton locationId={this.props.locationId} locationName={this.state.location.regionName} locationNameLong={this.state.location.regionNameLong} locationType={this.state.location.regionType} />
                <RecentQuestions locationId={this.props.locationId} locationName={this.state.location.regionName} pageSize={3} pageNumber={0} locationUrl={this.state.location.url} showTitle={true} isSideComponent={true}/>
              </div>
            </div>
          </div>
          <div className="gap"></div>
          <LastMinuteDeal locationId={this.props.locationId} />
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ReviewList locationId={this.props.locationId} locationName={this.state.location.regionName} locationType="" pageSize={10} pageNumber={0} showTitle={true} />
              </div>
              <div className="col-md-4">
                <ReviewButton name="sidePanel" locationId={this.props.locationId} locationName={this.state.location.regionName} locationNameLong={this.state.location.regionNameLong} locationType="" />
                <div className="gap gap-small"></div>
                <WeatherForcast locationId={this.props.locationId} />
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
