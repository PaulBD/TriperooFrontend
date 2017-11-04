import React, {PropTypes} from 'react';
import CategoryFilter from '../common/categoryFilter';
import NameFilter from '../common/nameFilter';
import Loader from '../../loaders/contentLoader';
let _ = require('lodash');

class FilterPointOfInterests extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      pointOfInterestsCategory: [],
      filteredName: ''
    };
    this.filterPointOfInterests = this.filterPointOfInterests.bind(this);
    this.filterByName = this.filterByName.bind(this);
  }

  filterPointOfInterests(filter) {
    this.setState({pointOfInterestsCategory: filter });
    this.applyFilter(filter, this.state.filteredName);
  }

  filterByName(filteredName) {
    this.setState({filteredName: filteredName});
    if (filteredName.length > 3) {
      this.applyFilter(this.state.pointOfInterestsCategory, filteredName);
    }
    else {
      if (filteredName.length == 0) {
        this.applyFilter(this.state.pointOfInterestsCategory, '');
      }
    }
  }

  applyFilter(pointOfInterestsCategory, filteredName) {
    this.props.filterPointOfInterests(pointOfInterestsCategory, filteredName);
  }

  render(){
    if (!this.props.isFetching) {
      return (
      <div className="profile-usermenu">
        <CategoryFilter title="Point Of Interest Types" searchName={this.props.searchName} locationId={this.props.locationId} pageSize={this.props.pageSize} pageNumber={this.props.pageNumber} contentType="PointsOfInterest" categories={this.props.categories} filterResults={this.filterPointOfInterests} numberToShow={6} />
        <NameFilter placeHolder="Enter Point of Interest name" title="Filter by Name" searchName={this.state.filteredName} updateFilter={this.filterByName} />
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

FilterPointOfInterests.propTypes = {
  searchName: PropTypes.string,
  locationId: PropTypes.number,
  pageSize: PropTypes.number,
  pageNumber: PropTypes.number,
  categories: PropTypes.array,
  isFetching: PropTypes.bool,
  filterPointOfInterests: PropTypes.func
};

export default FilterPointOfInterests;

