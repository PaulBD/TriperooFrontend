import React, {PropTypes} from 'react';
import CategoryFilter from '../common/categoryFilter';
import Loader from '../../loaders/contentLoader';
let _ = require('lodash');

class FilterRestaurants extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      restaurantCategory: []
    };
    this.filterRestaurant = this.filterRestaurant.bind(this);
  }

  filterRestaurant(filter) {
    this.setState({restaurantCategory: filter });
    this.applyFilter(filter);
  }

  applyFilter(restaurantCategory) {
    this.props.filterRestaurant(restaurantCategory);
  }

  render(){
    if (!this.props.isFetching) {
      return (
      <div className="profile-usermenu">
        <CategoryFilter title="Cuisine & Dishes" categories={this.props.categories} filterResults={this.filterRestaurant} numberToShow={6} />
        <ul className="list booking-filters-list">
          <li><h5>Price</h5></li>
          <li><a href="#"><input type="checkbox" className="form-check-inline" /> Cheap Eats </a></li>
          <li><a href="#"><input type="checkbox" className="form-check-inline" /> Mid-range </a></li>
          <li><a href="#"><input type="checkbox" className="form-check-inline" /> Fine Dining </a></li>
        </ul>
      </div>
      );
    }
    else {
      return (
        <div className="profile-usermenu">
          <Loader showLoader={this.props.isFetching} />
        </div>
      );
    }
  }
}

FilterRestaurants.propTypes = {
  categories: PropTypes.array,
  isFetching: PropTypes.bool,
  filterRestaurant: PropTypes.func
};

export default FilterRestaurants;

