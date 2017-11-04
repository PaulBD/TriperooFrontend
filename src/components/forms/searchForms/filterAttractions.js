import React, {PropTypes} from 'react';
import CategoryFilter from '../common/categoryFilter';
import NameFilter from '../common/nameFilter';
import Loader from '../../loaders/contentLoader';
let _ = require('lodash');

class FilterAttractions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      attractionCategory: [],
      filteredName: ''
    };
    this.filterAttractions = this.filterAttractions.bind(this);
    this.filterByName = this.filterByName.bind(this);
  }

  filterAttractions(filter) {
    this.setState({attractionCategory: filter });
    this.applyFilter(filter, this.state.filteredName);
  }

  filterByName(filteredName) {
    this.setState({filteredName: filteredName});
    if (filteredName.length > 3) {
      this.applyFilter(this.state.attractionCategory, filteredName);
    }
    else {
      if (filteredName.length == 0) {
        this.applyFilter(this.state.attractionCategory, '');
      }
    }
  }

  applyFilter(attractionCategory, filteredName) {
    this.props.filterAttractions(attractionCategory, filteredName);
  }

  render(){
    if (!this.props.isFetching) {
      return (
        <div className="profile-usermenu">
          <CategoryFilter title="Attraction Types" searchName={this.props.searchName} locationId={this.props.locationId} pageSize={this.props.pageSize} pageNumber={this.props.pageNumber} contentType="Attractions" categories={this.props.categories} filterResults={this.filterAttractions} numberToShow={6} />
          <NameFilter placeHolder="Enter Attraction name" title="Filter by Name" searchName={this.state.filteredName} updateFilter={this.filterByName} />
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

