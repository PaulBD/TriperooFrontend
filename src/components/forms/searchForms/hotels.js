import React, {PropTypes} from 'react';
import AutoComplete from '../common/autocomplete';

let titleCase = require('title-case');

let DatePicker = require('react-datepicker');
let moment = require('moment');

class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleArrivalDateChange = this.handleArrivalDateChange.bind(this);
    this.handleNightChange = this.handleNightChange.bind(this);
    this.handleGuestChange = this.handleGuestChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);
  }

  componentWillMount() {
    let searchValue = '';
    let searchUrl = '';
    let arrivalDate = moment().add(7, 'days');

    if (this.props.searchValue !== undefined) {
      searchValue = this.props.searchValue;
    }

    if (this.props.arrivalDate !== undefined) {
      arrivalDate = new moment(this.props.arrivalDate);
    }

    if (searchValue == '')
    {
      searchValue = this.props.city;
    }

    searchUrl = this.props.searchUrl;

    this.state = { searchValue: searchValue, searchUrl: searchUrl, arrivalDate: arrivalDate, formattedArrivalDate: arrivalDate.format('YYYY-MM-DD'), nights: this.props.nights, guests: this.props.guests, rooms: this.props.rooms  };
  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType) {
    this.setState({ searchUrl: cityUrl, searchId: cityId, searchValue: city});
  }

  handleArrivalDateChange(date) {
    let arrivalDate = date.format('YYYY-MM-DD');
    this.setState({ formattedArrivalDate: arrivalDate, arrivalDate: date });
  }

  handleNightChange(event) {
    event.preventDefault();
    this.setState({ nights: parseInt(event.target.value) });
  }

  handleGuestChange(event) {
    event.preventDefault();
    this.setState({ guests: parseInt(event.target.value) });
  }

  handleRoomChange(event) {
    event.preventDefault();
    this.setState({ rooms: parseInt(event.target.value) });
  }

  submitForm(event) {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.searchUrl, this.state.searchId,  this.state.formattedArrivalDate, this.state.nights, this.state.rooms, this.state.guests);
  }

  render(){
    let searchValue = this.props.searchValue !== undefined && this.props.searchValue != '' ? titleCase(this.props.searchValue) : this.props.city;
    return (
      <form className="hotelSearch" onSubmit={this.submitForm}>
        <div className="row">
          <div className={this.props.isSideBar ? "col-md-12" : "col-md-5"}>
            <div className="input-daterange" data-date-format="MM d, D">
              <div className="row">
                <div className={this.props.isSideBar ? "col-md-12" : "col-md-8"}>
                  <div className="form-group form-group-icon-left">
                    <label>Destination</label>
                    <AutoComplete disabled={this.props.lockLocation} onChangeAutoComplete={this.onChangeAutoComplete} searchType="city" placeholder="Enter Destination" cssClass="typeahead form-control" searchValue={searchValue} />
                  </div>
                </div>
                <div className={this.props.isSideBar ? "col-md-6" : "col-md-4"}>
                  <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                    <label>Check in</label>
                    <DatePicker name="start" dateFormat="DD/MM/YYYY"  selected={this.state.arrivalDate} onChange={this.handleArrivalDateChange} className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={this.props.isSideBar ? "col-md-12" : "col-md-7"}>
            <div className="row">
              <div className={this.props.isSideBar ? "col-md-6" : "col-md-2"}>
                <div className="form-group form-group-icon-left">
                  <label>Nights</label>
                  <select className="form-control searchSelect" value={this.state.nights} onChange={this.handleNightChange} ref="nights" name="nights">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                  </select></div>
              </div>

              <div className={this.props.isSideBar ? "col-md-6" : "col-md-2"}>
                <div className="form-group form-group-select-plus">
                  <label>Rooms</label>
                  <select className="form-control searchSelect" value={this.state.rooms} onChange={this.handleRoomChange} ref="rooms" name="rooms">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                  </select>
                </div>
              </div>
              <div className={this.props.isSideBar ? "col-md-6" : "col-md-2"}>
                <div className="form-group form-group- form-group-select-plus">
                  <label>Guests</label>
                  <select className="form-control searchSelect" value={this.state.guests} onChange={this.handleGuestChange} ref="guests" name="guests">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                  </select>
                </div>
              </div>
              <div className={this.props.isSideBar ? "col-md-12" : "col-md-6"}>
                <button className="btn btn-primary btn-lg formBtn" type="submit">
                  <i className="fa fa-search"></i>{this.props.buttonName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

SearchForm.defaultProps = {
  searchValue: '',
  searchUrl: '',
  useFunction: false,
  isSideBar: false,
  lockLocation: false,
  buttonName: 'Search Hotels'
};

SearchForm.propTypes = {
  doSearch: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  searchValue: PropTypes.string,
  arrivalDate: PropTypes.string.isRequired,
  nights: PropTypes.number.isRequired,
  rooms: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  city: PropTypes.string,
  searchUrl: PropTypes.string,
  useFunction: PropTypes.bool,
  isSideBar: PropTypes.bool,
  lockLocation: PropTypes.bool,
  buttonName: PropTypes.string
};

export default SearchForm;
