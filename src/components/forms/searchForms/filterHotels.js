import React, {PropTypes} from 'react';

class FilterHotels extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      minPrice: 1,
      maxPrice: 100,
      starRatingList: [],
      tripAdvisorRatingList: [1,2,3,4,5],
      facilityList: ['test']
    };
    this.updateStarRating = this.updateStarRating.bind(this);
    this.changeMinprice = this.changeMinprice.bind(this);
    this.changeMaxprice = this.changeMaxprice.bind(this);
  }

  componentWillMount() {
  }

  updateStarRating(e) {
    e.preventDefault();
    let starRatingList = this.state.starRatingList;
    let isAlreadyInList = false;
    let newTag = e.currentTarget.getAttribute('data-type');

    for (let i = 0; i < starRatingList.length; i++) {
      if (starRatingList[i] == newTag)
      {
        isAlreadyInList = true;
        starRatingList.splice(i, 1);
      }
    }

    if (!isAlreadyInList)
    {
      starRatingList.push(newTag);
    }

    this.setState({starRatingList: starRatingList});

    this.applyFilter(this.state.minPrice, this.state.maxPrice, starRatingList, this.state.tripAdvisorRatingList, this.state.facilityList);
  }

  changeMinprice(event) {
    event.preventDefault();
    this.setState({minPrice: event.target.value });
    this.applyFilter(event.target.value, this.state.maxPrice, this.state.starRatingList, this.state.tripAdvisorRatingList, this.state.facilityList);
  }

  changeMaxprice(event) {
    event.preventDefault();
    this.setState({maxPrice: event.target.value });
    this.applyFilter(this.state.minPrice, event.target.value, this.state.starRatingList, this.state.tripAdvisorRatingList, this.state.facilityList);
  }

  applyFilter(minPrice, maxPrice, starRatingList, tripAdvisorRatingList, facilityList) {
    this.props.filterHotels(minPrice, maxPrice, starRatingList, tripAdvisorRatingList, facilityList);
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

            <a href="#" onClick={this.updateStarRating} data-type="1">
              <span className={this.state.starRatingList.includes(1) ? "fa-stack hotelStarWrapper fa-2x orange" : "fa-stack hotelStarWrapper fa-2x" }>
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">1</span>
              </span>
            </a>
            <a href="#" onClick={this.updateStarRating} data-type="2">
              <span className={this.state.starRatingList.includes(2) ? "fa-stack hotelStarWrapper fa-2x orange" : "fa-stack hotelStarWrapper fa-2x" }>
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">2</span>
              </span>
            </a>
            <a href="#" onClick={this.updateStarRating} data-type="3">
             <span className={this.state.starRatingList.includes(3) ? "fa-stack hotelStarWrapper fa-2x orange" : "fa-stack hotelStarWrapper fa-2x" }>
                 <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">3</span>
              </span>
            </a>
            <a href="#" onClick={this.updateStarRating} data-type="4">
             <span className={this.state.starRatingList.includes(4) ? "fa-stack hotelStarWrapper fa-2x orange" : "fa-stack hotelStarWrapper fa-2x" }>
                 <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">4</span>
              </span>
            </a>
            <a href="#" onClick={this.updateStarRating} data-type="5">
              <span className={this.state.starRatingList.includes(5) ? "fa-stack hotelStarWrapper fa-2x orange" : "fa-stack hotelStarWrapper fa-2x" }>
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">5</span>
              </span>
            </a>

          </li>
          <li>
            <h5 className="booking-filters-title">Trip Advisor Rating</h5>

            <a href="#">
              <span className="fa-stack hotelStarWrapper fa-2x">
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">1</span>
              </span>
            </a>
            <a href="#">
              <span className="fa-stack hotelStarWrapper fa-2x">
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">2</span>
              </span>
            </a>
            <a href="#">
              <span className="fa-stack hotelStarWrapper fa-2x">
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">3</span>
              </span>
            </a>
            <a href="#">
              <span className="fa-stack hotelStarWrapper fa-2x">
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">4</span>
              </span>
            </a>
            <a href="#">
              <span className="fa-stack hotelStarWrapper fa-2x">
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">5</span>
              </span>
            </a>
          </li>

          <li>
            <h5 className="booking-filters-title">Facilities</h5>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Wi-Fi (55)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Parking (264)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Airport Shuttle (137)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Fitness Center (15)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Non-Smoking Rooms (20)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Indoor Pool (20)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Spa (20)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Family Rooms (20)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Pet Friendly (20)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Restaurant (20)</label>
            </div>
          </li>
          <li>
            <h5 className="booking-filters-title">Accommodation Type</h5>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Hotel</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Suite</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Resort</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Vacation Rental</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Bed & Breakfast</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />All Inclusive</label>
            </div>
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
