import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as restaurantActions from '../../actions/location/travelContent/restaurantActions';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import TriperooLoader from '../../components/loaders/globalLoader';
import SubPageHeader from '../../components/content/headers/locationCategory';
import Restaurants from '../../components/layout/cards/location/locationListWrapper';
import FilterRestaurants from '../../components/forms/searchForms/filterRestaurants';
import MapSideBar from '../../components/maps/mapSideBar';

let titleCase = require('title-case');
import Toastr from 'toastr';

class RestaurantContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.filterRestaurant = this.filterRestaurant.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSearchRestaurant = this.onSearchRestaurant.bind(this);
    this.state = { restaurants: [], mapRestaurants:[], searchValue: '', isLoadingLocation: false, isLoadingRestaurantCategories: true, isLoadingRestaurantList: false, restaurantType: '', restaurantFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
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

  filterRestaurant(restaurantCategory) {
    console.log(restaurantCategory);
    this.setState({ restaurantType: restaurantCategory, restaurantFriendlyName: restaurantCategory });
    this.loadRestaurants(this.props.locationId, restaurantCategory, this.state.pageSize, this.state.pageNumber);
  }

  changePage(value){
    this.loadRestaurants(this.props.locationId, this.state.restaurantType, this.state.pageSize, value - 1);
  }

  loadRestaurants(locationId, restaurantType, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingRestaurantList: true });
    this.props.restaurantActions.loadRestaurantsByParentLocationId(locationId, restaurantType, pageSize, pageNumber)
      .then(() => this.setState({isLoadingRestaurantList: false, isLoadingRestaurantCategories: false, restaurants: this.props.restaurants, mapRestaurants: this.props.mapRestaurants}))
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
    let title = 'Places to eat in ' + titleCase(this.props.location.regionName);

    document.title = title;

    if (! this.state.isLoadingLocation)
    {
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="restaurants" title={title} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 sideBar">
                    <MapSideBar latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={title} zoom={13} markerArray={this.props.mapRestaurants} isLoading={this.state.isLoadingRestaurantList} locationType={this.props.location.subClass} />
                    <FilterRestaurants categories={this.props.restaurantCategories} filterRestaurant={this.filterRestaurant} isFetching={this.state.isLoadingRestaurantCategories}/>
                  </div>
                  <div className="col-md-9 restaurantList">
                    <Restaurants useMinHeight={false} locationId={this.props.locationId} locations={this.props.restaurants} locationCount={this.props.restaurantCount} changePage={this.changePage} isFetching={this.state.isLoadingRestaurantList}/>
                  </div>
                </div>
                <div className="gap gap-small"></div>
              </div>
            </div>
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
  restaurantType: '',
  mapRestaurants: [],
  restaurantCategories: []
};

RestaurantContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  restaurantActions: PropTypes.object.isRequired,
  restaurantCount: PropTypes.number.isRequired,
  restaurants: PropTypes.array.isRequired,
  mapRestaurants: PropTypes.array.isRequired,
  restaurantCategories: PropTypes.array.isRequired,
  restaurantType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    restaurants: state.restaurants.restaurantsList ? state.restaurants.restaurantsList.locations : [],
    mapRestaurants: state.restaurants.restaurantsList ? state.restaurants.restaurantsList.mapLocations : [],
    restaurantCategories: state.restaurants.restaurantsList ? state.restaurants.restaurantsList.categories : [],
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
