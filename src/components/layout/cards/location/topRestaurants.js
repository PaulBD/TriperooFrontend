import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as restaurantActions from '../../../../actions/location/travelContent/restaurantActions';
import LocationList from './locationList';
import Loader from '../../../loaders/contentLoader';
import Toastr from 'toastr';

class TopRestaurants extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingRestaurantList: true };
  }

  componentWillMount() {
    this.loadRestaurants(this.props.locationId, '', '', this.props.pageSize, 0);
  }

  loadRestaurants(locationId, restaurantType, searchName, pageSize, pageNumber) {
    this.setState({isLoadingRestaurantList: true });
    this.props.restaurantActions.loadRestaurantsByParentLocationId(locationId, restaurantType, searchName, pageSize, pageNumber)
      .then(() => this.setState({isLoadingRestaurantList: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingRestaurantList: false});
      });
  }

  render(){
    if (!this.state.isLoadingRestaurantList)
    {
      return (
        <div className="col-md-12">
          {this.props.title ? <h4 className="locationTitle">{this.props.title} <small className="float-sm-right"><a href={this.props.url} >See all</a></small></h4> : ''}
          <LocationList locations={this.props.restaurants} cssClass="col-md-3 col-12" />
        </div>
      );
    }
    else {
      return (
        <div className="col-md-12">
          <Loader showLoader={true}/>
        </div>
      );
    }
  }
}

TopRestaurants.defaultProps = {
  name: '',
  locationId: 0,
  locationName: '',
  pageSize: 8,
  locations: {},
  isFetching: false,
  title: ''
};

TopRestaurants.propTypes = {
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  restaurants: PropTypes.object.isRequired,
  restaurantActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locations.isFetching ? state.locations.isFetching : false,
    restaurants: state.restaurants.restaurantsList ? state.restaurants.restaurantsList : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    restaurantActions: bindActionCreators(restaurantActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRestaurants);
