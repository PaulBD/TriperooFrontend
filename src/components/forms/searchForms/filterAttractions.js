import React, {PropTypes} from 'react';
import CategoryFilter from '../common/categoryFilter';
import Loader from '../../loaders/contentLoader';
let _ = require('lodash');

class FilterAttractions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      attractionCategory: []
    };
    this.filterAttractions = this.filterAttractions.bind(this);
  }

  filterAttractions(filter) {
    this.setState({attractionCategory: filter });
    this.applyFilter(filter);
  }

  applyFilter(attractionCategory) {
    this.props.filterAttractions(attractionCategory);
  }

  render(){
    if (!this.props.isFetching) {
      return (
      <div className="profile-usermenu">
        <CategoryFilter title="Attraction Types" categories={this.props.categories} filterResults={this.filterAttractions} numberToShow={6} />
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

FilterAttractions.propTypes = {
  categories: PropTypes.array,
  isFetching: PropTypes.bool,
  filterAttractions: PropTypes.func
};

export default FilterAttractions;

