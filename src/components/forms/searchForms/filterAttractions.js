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
    this.FilterAttractions = this.FilterAttractions.bind(this);
  }

  FilterAttractions(filter) {
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
          <CategoryFilter title="Attraction Types" searchName={this.props.searchName} locationId={this.props.locationId} pageSize={this.props.pageSize} pageNumber={this.props.pageNumber} contentType="Attractions" categories={this.props.categories} filterResults={this.FilterAttractions} numberToShow={6} />
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
  searchName: PropTypes.string,
  locationId: PropTypes.number,
  pageSize: PropTypes.number,
  pageNumber: PropTypes.number,
  categories: PropTypes.array,
  selectedCategories: PropTypes.array,
  isFetching: PropTypes.bool,
  filterAttractions: PropTypes.func
};

export default FilterAttractions;

