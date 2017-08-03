import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as restaurantActions from '../../actions/location/travelContent/restaurantActions';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';

import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';

import SubPageHeader from '../../components/content/headers/locationCategory';
import RestaurantCategories from '../../components/filters/locations';
import Restaurants from '../../components/layout/cards/location/locationListWrapper';
import PageTitle from '../../components/layout/location/pageTitle';
import GoogleMaps from '../../components/maps/googleMap';

let titleCase = require('title-case');

class RestaurantContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeRestaurant = this.changeRestaurant.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSearchRestaurant = this.onSearchRestaurant.bind(this);
    this.state = { restaurants: [], searchValue: '', isLoadingLocation: false, isLoadingRestaurantList: false, restaurantType: '', restaurantFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.setState({isLoadingLocation: true});
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => this.loadRestaurants(this.props.locationId, this.state.restaurantType, this.state.pageSize, this.state.pageNumber))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  changeRestaurant(value, friendlyName) {
    this.setState({ restaurantType: value, restaurantFriendlyName: friendlyName });
    this.loadRestaurants(this.props.locationId, value, this.state.pageSize, this.state.pageNumber);
  }

  changePage(value){
    this.loadRestaurants(this.props.locationId, this.state.restaurantType, this.state.pageSize, value - 1);
  }

  loadRestaurants(locationId, restaurantType, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingRestaurantList: true });
    this.props.restaurantActions.loadRestaurantsByParentLocationId(locationId, restaurantType, pageSize, pageNumber)
      .then(() => this.setState({isLoadingRestaurantList: false, restaurants: this.props.restaurants}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingRestaurantList: false});
      });
  }

  onSearchRestaurant(searchValue) {
    this.setState({searchValue: searchValue});
    this.loadRestaurants(this.props.locationId, this.state.restaurantType, searchValue, this.state.pageSize, this.state.pageNumber);
  }

  render(){
    document.title = this.state.restaurantType == '' ? titleCase(this.props.location.regionName) + ' Restaurants' : titleCase(this.state.restaurantFriendlyName) + ' in ' + titleCase(this.props.location.regionName);

    if (! this.state.isLoadingLocation)
    {
      console.log(this.state.restaurants);

      let title = 'Places to eat in' + titleCase(this.props.location.regionName);
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="restaurants" title={title} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <PageTitle defaultTitle="Top Places To Eat" locationName={this.props.location.regionName} name={this.state.restaurantFriendlyName} type={this.state.restaurantType} searchValue={this.state.searchValue} onSearch={this.onSearchRestaurant} />
                    <div className="gap gap-small"></div>
                    <div className="col-md-12">
                      <div className="row">
                        <Restaurants locationId={this.props.locationId} locations={this.props.restaurants} locationCount={this.props.restaurantCount} changePage={this.changePage} isFetching={this.state.isLoadingRestaurantList}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <RestaurantCategories changeCategory={this.changeRestaurant} contentType="restaurants"   />
                    <div className="gap gap-small"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gap gap-small"></div>
          <div className="row greyBg detailSubHeader">
            <GoogleMaps latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={this.props.location.regionName} zoom={13} markerArray={this.state.restaurants} isLoading={this.state.isLoadingRestaurantList} locationType={this.props.location.subClass} />
          </div>
          <FacebookSignup showLines={false}/>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

RestaurantContent.defaultProps = {
  attractionType: ''
};

RestaurantContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  restaurantActions: PropTypes.object.isRequired,
  restaurantCount: PropTypes.number.isRequired,
  restaurants: PropTypes.array.isRequired,
  restaurantType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    restaurants: state.restaurants.restaurantsList ? state.restaurants.restaurantsList.locations : [],
    restaurantCount:  state.restaurants.restaurantsList ? state.restaurants.restaurantsList.locationCount : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    restaurantActions: bindActionCreators(restaurantActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContent);
