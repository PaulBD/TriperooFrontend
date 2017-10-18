import React, {PropTypes} from 'react';
import CategoryFilter from '../common/categoryFilter';
import Loader from '../../loaders/contentLoader';
let _ = require('lodash');

class FilterNightlife extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      nightlifeCategory: []
    };
    this.filterNightlife = this.filterNightlife.bind(this);
  }

  filterNightlife(filter) {
    this.setState({nightlifeCategory: filter });
    this.applyFilter(filter);
  }

  applyFilter(nightlifeCategory) {
    this.props.filterNightlife(nightlifeCategory);
  }

  render(){
    if (!this.props.isFetching) {
      return (
      <div className="profile-usermenu">
        <CategoryFilter title="Nightlife" categories={this.props.categories} filterResults={this.filterNightlife} numberToShow={6} />
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

FilterNightlife.propTypes = {
  categories: PropTypes.array,
  isFetching: PropTypes.bool,
  filterNightlife: PropTypes.func
};

export default FilterNightlife;

