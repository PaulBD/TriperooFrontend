import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as restaurantActions from '../../actions/location/travelContent/restaurantActions';
import FacebookSignup from '../../components/customer/authentication/facebookSignup';
import Loader from '../../components/common/loadingDots';

import SubPageHeader from '../../components/locations/subPageHeader';
import RestaurantCategories from '../../components/locations/common/categorySideBar';
import Restaurants from '../../components/locations/locationListWrapper';

let titleCase = require('title-case');

class RestaurantContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.changeRestaurant = this.changeRestaurant.bind(this);
        this.changePage = this.changePage.bind(this);
        this.state = { restaurantType: '', restaurantFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.locationActions.loadLocationById(this.props.locationId);
        this.props.restaurantActions.loadRestaurantsByParentLocationId(this.props.locationId, this.state.restaurantType, this.state.pageSize, this.state.pageNumber);
    }

    changeRestaurant(value, friendlyName) {
        this.setState({ restaurantType: value, restaurantFriendlyName: friendlyName });
        this.props.restaurantActions.loadRestaurantsByParentLocationId(this.props.locationId, value, this.state.pageSize, this.state.pageNumber);
    }

    changePage(value){
        this.props.restaurantActions.loadRestaurantsByParentLocationId(this.props.locationId, this.state.restaurantType, this.state.pageSize, value - 1);
    }

    render(){
        document.title = this.state.restaurantType == '' ? titleCase(this.props.location.regionName) + ' Restaurants' : titleCase(this.state.restaurantFriendlyName) + ' in ' + titleCase(this.props.location.regionName);

        if (this.props.location.regionName != undefined)
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
                                    <div className={this.props.isFetchingRestaurants ? "hide" : "nav-drop booking-sort"}>
                                        {this.props.restaurantCount} Results {this.state.restaurantType != '' ? ' - filtered by ' + titleCase(this.state.restaurantFriendlyName) : ''}
                                    </div>
                                    <Restaurants locationId={this.props.locationId} locations={this.props.restaurants} locationCount={this.props.restaurantCount} changePage={this.changePage} isFetching={this.props.isFetchingRestaurants}/>
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
            return (<Loader showLoader={this.props.isFetching} />);
        }
  }
}

RestaurantContent.defaultProps = {
    isFetching: false,
    isFetchingRestaurants: true,
    attractionType: ''
};

RestaurantContent.propTypes = {
    locationId: PropTypes.number,
    location: PropTypes.object,
    locationActions: PropTypes.object.isRequired,
    restaurantActions: PropTypes.object.isRequired,
    restaurantCount: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isFetchingRestaurants: PropTypes.bool.isRequired,
    restaurants: PropTypes.array.isRequired,
    restaurantType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
     return {
        isFetching: state.location.isFetching ? state.location.isFetching : false,
        isFetchingRestaurants: state.restaurants.isFetching ? state.restaurants.isFetching : false,
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
