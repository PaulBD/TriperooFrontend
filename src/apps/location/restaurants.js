import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as restaurantActions from '../../actions/location/travelContent/restaurantActions';
import FacebookSignup from '../../components/customer/authentication/facebookSignup';

import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';

import SubPageHeader from '../../components/locations/subPageHeader';
import RestaurantCategories from '../../components/locations/common/categorySideBar';
import Restaurants from '../../components/locations/locationListWrapper';

let titleCase = require('title-case');

class RestaurantContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeRestaurant = this.changeRestaurant.bind(this);
    this.changePage = this.changePage.bind(this);
    this.state = { isLoadingLocation: false, isLoadingRestaurantList: false, restaurantType: '', restaurantFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
  }

  componentDidMount() {
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
      .then(() => this.setState({isLoadingRestaurantList: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingRestaurantList: false});
      });
  }

  render(){
    document.title = this.state.restaurantType == '' ? titleCase(this.props.location.regionName) + ' Restaurants' : titleCase(this.state.restaurantFriendlyName) + ' in ' + titleCase(this.props.location.regionName);

    if (! this.state.isLoadingLocation)
    {
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="restaurants" />
          <div className="container">
            <div className="row row-wrap">
              <div className="gap gap-small"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <div className={this.state.isLoadingRestaurantList ? "hide" : "nav-drop booking-sort"}>
                      {this.props.restaurantCount} Results {this.state.restaurantType != '' ? ' - filtered by ' + titleCase(this.state.restaurantFriendlyName) : ''}
                    </div>
                    <Restaurants locationId={this.props.locationId} locations={this.props.restaurants} locationCount={this.props.restaurantCount} changePage={this.changePage} isFetching={this.state.isLoadingRestaurantList}/>
                  </div>
                  <div className="col-md-3">
                    <RestaurantCategories changeCategory={this.changeRestaurant} contentType="restaurants"  />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FacebookSignup />
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
