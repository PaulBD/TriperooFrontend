import React, {PropTypes} from 'react';
import StarFilter from '../../../components/forms/common/starFilter';
import FacilitiesFilter from '../../../components/forms/common/facilitiesFilter';
import PropertyCategoryFilter from '../../../components/forms/common/propertyCategoryFilter';
let _ = require('lodash');

class FilterHotels extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice,
      minStarRating: 1,
      maxStarRating: 5,
      minTripAdvisorRating: 0,
      maxTripAdvisorRating: 0,
      facilityList: [],
      propertyCategory: []
    };
    this.updateStarFilter = this.updateStarFilter.bind(this);
    this.updateTripAdvisorFilter = this.updateTripAdvisorFilter.bind(this);
    this.changeMinprice = this.changeMinprice.bind(this);
    this.changeMaxprice = this.changeMaxprice.bind(this);
    this.updateFacilitiesFilter = this.updateFacilitiesFilter.bind(this);
    this.updatePropertyCategoryFilter = this.updatePropertyCategoryFilter.bind(this);
  }

  updateStarFilter(filter) {
    let orderedFilter = _.sortBy(filter);
    let minStarRating = orderedFilter[0];
    let maxStarRating = orderedFilter[orderedFilter.length-1];

    this.setState({minStarRating: minStarRating, maxStarRating: maxStarRating });
    this.applyFilter(this.state.minPrice, this.state.maxPrice, minStarRating, maxStarRating, this.state.minTripAdvisorRating, this.state.maxTripAdvisorRating, this.state.facilityList, this.state.propertyCategory);
  }

  updateTripAdvisorFilter(filter) {
    let orderedFilter = _.sortBy(filter);
    let minTripAdvisorRating = orderedFilter[0];
    let maxTripAdvisorRating = orderedFilter[orderedFilter.length-1];

    this.setState({minTripAdvisorRating: minTripAdvisorRating, maxTripAdvisorRating: maxTripAdvisorRating });
    this.applyFilter(this.state.minPrice, this.state.maxPrice, this.state.minStarRating, this.state.maxStarRating, minTripAdvisorRating, maxTripAdvisorRating, this.state.facilityList, this.state.propertyCategory);
  }

  changeMinprice(event) {
    event.preventDefault();
    this.setState({minPrice: event.target.value });
    this.applyFilter(event.target.value, this.state.maxPrice, this.state.minStarRating, this.state.maxStarRating, this.state.minTripAdvisorRating, this.state.maxTripAdvisorRating, this.state.facilityList, this.state.propertyCategory);
  }

  changeMaxprice(event) {
    event.preventDefault();
    this.setState({maxPrice: event.target.value });
    this.applyFilter(this.state.minPrice, event.target.value, this.state.minStarRating, this.state.maxStarRating, this.state.minTripAdvisorRating, this.state.maxTripAdvisorRating, this.state.facilityList, this.state.propertyCategory);
  }

  updateFacilitiesFilter(filter) {
    this.setState({facilityList: filter });
    this.applyFilter(this.state.minPrice, this.state.maxPrice, this.state.minStarRating, this.state.maxStarRating, this.state.minTripAdvisorRating, this.state.maxTripAdvisorRating, filter, this.state.propertyCategory);
  }

  updatePropertyCategoryFilter(filter) {
    this.setState({propertyCategory: filter });
    this.applyFilter(this.state.minPrice, this.state.maxPrice, this.state.minStarRating, this.state.maxStarRating, this.state.minTripAdvisorRating, this.state.maxTripAdvisorRating, this.state.facilityList, filter);
  }

  applyFilter(minPrice, maxPrice, minStarRating, maxStarRating,  minTripAdvisorRating, maxTripAdvisorRating, facilityList, propertyCategory) {
    this.props.filterHotels(minPrice, maxPrice, minStarRating, maxStarRating, minTripAdvisorRating, maxTripAdvisorRating, facilityList, propertyCategory);
  }

  render(){
    return (
      <div className="profile-usermenu">
        <ul className="list booking-filters-list">
          <li>
            <h5>Price Range</h5>
            <div className="row">
              <div className="col-md-5">
                <input type="number" className="form-control" value={this.state.minPrice} min="1" max="100000" onChange={this.changeMinprice}/>
              </div>
              <div className="col-md-2">
                to
              </div>
              <div className="col-md-5">
                <input type="number" className="form-control" value={this.state.maxPrice} min="1" max="100000" onChange={this.changeMaxprice}/>
              </div>
              <div className="gap gap-mini"></div>
            </div>
          </li>
          <li>
            <h5>Star Rating</h5>
            <StarFilter updateFilter={this.updateStarFilter} />
          </li>
          <li>
            <h5>Trip Advisor Rating</h5>
            <StarFilter updateFilter={this.updateTripAdvisorFilter} />
          </li>
          <li className="hide">
            <h5>Facilities</h5>
            <FacilitiesFilter updateFilter={this.updateFacilitiesFilter} />
          </li>
          <li>
            <h5>Accommodation Type</h5>
            <PropertyCategoryFilter updateFilter={this.updatePropertyCategoryFilter} />
          </li>
        </ul>
      </div>
    );
  }
}

FilterHotels.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  facilityList: PropTypes.array,
  accommodationTypeList: PropTypes.array,
  filterHotels: PropTypes.func
};

export default FilterHotels;

