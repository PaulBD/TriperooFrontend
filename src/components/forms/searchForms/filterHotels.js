import React, {PropTypes} from 'react';
import StarFilter from '../../../components/forms/common/starFilter';
import InputRange from 'react-input-range';
let _ = require('lodash');

class FilterHotels extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      minPrice: this.props.minPrice
      , maxPrice: this.props.maxPrice
      , starRating: ['1','2','3','4','5']
      , filterState: 'Show Filters'
      , value: { min: this.props.minPrice, max: this.props.maxPrice }
    };
    this.updateStarFilter = this.updateStarFilter.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.onChangeComplete = this.onChangeComplete.bind(this);
    this.showFilter = this.showFilter.bind(this);
  }

  updateStarFilter(filter) {
    let starRating = _.sortBy(filter);

    this.setState({starRating: starRating });
    this.applyFilter(this.state.minPrice, this.state.maxPrice, starRating);
  }


  changePrice(value) {
    this.setState({ value });
  }

  onChangeComplete(value) {
    this.applyFilter(this.state.value.min, this.state.value.max, this.state.starRating);
  }

  applyFilter(minPrice, maxPrice, starRating) {
    this.props.filterHotels(minPrice, maxPrice, starRating);
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
    return (
      <div className="profile-usermenu">
        <div className="col-md-12 hidden-md-up mb-3 text-center">
          <a onClick={this.showFilter} data-toggle="collapse" href="#flightFilter" aria-expanded="false" aria-controls="flightFilter">{this.state.filterState}</a>
        </div>
        <div className="collapse flightFilter" id="flightFilter">
          <ul className="list booking-filters-list">
            <li className="mb-3">
              <h5 className="mb-2">Your Budget<small className="float-right">Price per night</small></h5>
              <div className="row">
                <div className="col-12 col-md-12">
                  <InputRange maxValue={500} minValue={0} value={this.state.value} onChange={this.changePrice} onChangeComplete={this.onChangeComplete} name="Price per night" formatLabel={value => `£${value}`}/>
                </div>
                <div className="gap gap-mini"></div>
              </div>
            </li>
            <li>
              <h5>Star Rating</h5>
              <StarFilter updateFilter={this.updateStarFilter} />
            </li>
          </ul>
        </div>
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

