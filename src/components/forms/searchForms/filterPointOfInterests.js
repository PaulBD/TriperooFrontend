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
        <CategoryFilter title="Point Of Interest Types" categories={this.props.categories} filterResults={this.filterPointOfInterests} numberToShow={6} />
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
  categories: PropTypes.array,
  isFetching: PropTypes.bool,
  filterPointOfInterests: PropTypes.func
};

export default FilterPointOfInterests;

