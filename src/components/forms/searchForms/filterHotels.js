import React, {PropTypes} from 'react';
import StarFilter from '../../../components/forms/common/starFilter';
import FacilitiesFilter from '../../../components/forms/common/facilitiesFilter';
import AccommodationTypeFilter from '../../../components/forms/common/accommodationTypeFilter';

class FilterHotels extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice,
      starFilterList: [],
      tripAdvisorFilterList: [],
      facilityList: [],
      accommodationType: []
    };
    this.updateStarFilter = this.updateStarFilter.bind(this);
    this.updateTripAdvisorFilter = this.updateTripAdvisorFilter.bind(this);
    this.changeMinprice = this.changeMinprice.bind(this);
    this.changeMaxprice = this.changeMaxprice.bind(this);
    this.updateFacilitiesFilter = this.updateFacilitiesFilter.bind(this);
    this.updateAcommodationTypeFilter = this.updateAcommodationTypeFilter.bind(this);
  }

  componentWillMount() {
  }

  updateStarFilter(filter) {
    this.setState({starFilterList: filter });
    this.applyFilter(this.state.minPrice, this.state.maxPrice, filter, this.state.tripAdvisorFilterList, this.state.facilityList, this.state.accommodationType);
  }

  updateTripAdvisorFilter(filter) {
    this.setState({tripAdvisorFilterList: filter });
    this.applyFilter(this.state.minPrice, this.state.maxPrice, this.state.starFilterList, filter, this.state.facilityList, this.state.accommodationType);
  }

  changeMinprice(event) {
    event.preventDefault();
    this.setState({minPrice: event.target.value });
    this.applyFilter(event.target.value, this.state.maxPrice, this.state.starFilterList, this.state.tripAdvisorFilterList, this.state.facilityList, this.state.accommodationType);
  }

  changeMaxprice(event) {
    event.preventDefault();
    this.setState({maxPrice: event.target.value });
    this.applyFilter(this.state.minPrice, event.target.value, this.state.starFilterList, this.state.tripAdvisorFilterList, this.state.facilityList, this.state.accommodationType);
  }

  updateFacilitiesFilter(filter) {
    this.setState({facilityList: filter });
    this.applyFilter(this.state.minPrice, this.state.maxPrice, this.state.starFilterList, this.state.starFilterList, filter, this.state.accommodationType);
  }

  updateAcommodationTypeFilter(filter) {
    this.setState({accommodationType: filter });
    this.applyFilter(this.state.minPrice, this.state.maxPrice, this.state.starFilterList, this.state.starFilterList, this.state.facilityList, filter);
  }

  applyFilter(minPrice, maxPrice, starRatingList, tripAdvisorRatingList, facilityList, accommodationType) {
    this.props.filterHotels(minPrice, maxPrice, starRatingList, tripAdvisorRatingList, facilityList, accommodationType);
  }

  render(){
    return (
      <aside className="booking-filters booking-filters-white">
        <h3>Filter By:</h3>
        <ul className="list booking-filters-list">
          <li>
            <h5 className="booking-filters-title">Price Range</h5>
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
            <h5 className="booking-filters-title">Star Rating</h5>
            <StarFilter updateFilter={this.updateStarFilter} />
          </li>
          <li>
            <h5 className="booking-filters-title">Trip Advisor Rating</h5>
            <StarFilter updateFilter={this.updateTripAdvisorFilter} />
          </li>

          <li>
            <h5 className="booking-filters-title">Facilities</h5>
            <FacilitiesFilter updateFilter={this.updateFacilitiesFilter} />
          </li>
          <li>
            <h5 className="booking-filters-title">Accommodation Type</h5>
            <AccommodationTypeFilter updateFilter={this.updateAcommodationTypeFilter} />
          </li>
        </ul>
      </aside>
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

