import React, {PropTypes} from 'react';
import CategoryFilter from '../common/categoryFilter';
import NameFilter from '../common/nameFilter';
import Loader from '../../loaders/contentLoader';
let _ = require('lodash');

class FilterPointOfInterests extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      pointOfInterestsCategory: []
      , filteredName: ''
      , filterState: 'Show Filters'
    };
    this.filterPointOfInterests = this.filterPointOfInterests.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.showFilter = this.showFilter.bind(this);
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

  showFilter(e) {
    if (this.state.filterState == 'Show Filters') {
      this.setState({filterState: 'Hide Filters'});
    }
    else {
      this.setState({filterState: 'Show Filters'});
    }
  }

  render(){
    if (!this.props.isFetching) {
      return (
      <div className="profile-usermenu">
        <div className="col-md-12 hidden-md-up mb-3 text-center">
          <a onClick={this.showFilter} data-toggle="collapse" href="#flightFilter" aria-expanded="false" aria-controls="flightFilter">{this.state.filterState}</a>
        </div>
        <div className="collapse flightFilter" id="flightFilter">
          <CategoryFilter title="Point Of Interest Types" searchName={this.props.searchName} locationId={this.props.locationId} pageSize={this.props.pageSize} pageNumber={this.props.pageNumber} contentType="PointsOfInterest" categories={this.props.categories} filterResults={this.filterPointOfInterests} numberToShow={6} />
          <NameFilter placeHolder="Enter Point of Interest name" title="Filter by Name" searchName={this.state.filteredName} updateFilter={this.filterByName} />
        </div>
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

