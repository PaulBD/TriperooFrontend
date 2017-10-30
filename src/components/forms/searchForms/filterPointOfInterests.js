import React, {PropTypes} from 'react';
import CategoryFilter from '../common/categoryFilter';
import Loader from '../../loaders/contentLoader';
let _ = require('lodash');

class FilterPointOfInterests extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      pointOfInterestsCategory: []
    };
    this.filterPointOfInterests = this.filterPointOfInterests.bind(this);
  }

  filterPointOfInterests(filter) {
    this.setState({pointOfInterestsCategory: filter });
    this.applyFilter(filter);
  }

  applyFilter(pointOfInterestsCategory) {
    this.props.filterPointOfInterests(pointOfInterestsCategory);
  }

  render(){
    if (!this.props.isFetching) {
      return (
      <div className="profile-usermenu">
        <CategoryFilter title="Point Of Interest Types" searchName={this.props.searchName} locationId={this.props.locationId} pageSize={this.props.pageSize} pageNumber={this.props.pageNumber} contentType="PointsOfInterest" categories={this.props.categories} filterResults={this.filterPointOfInterests} numberToShow={6} />
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

