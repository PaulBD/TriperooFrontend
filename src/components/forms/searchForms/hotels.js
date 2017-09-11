import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import AutoComplete from '../common/autocomplete';

let titleCase = require('title-case');

let DatePicker = require('react-datepicker');
let moment = require('moment');

class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { startDate: moment().add(7, 'days'), endDate: moment().add(8, 'days'), formattedStartDate: moment().add(7, 'days').format('YYYY-MM-DD'), formattedEndDate: moment().add(8, 'days').format('YYYY-MM-DD'), guests: '1', rooms: '1', searchValue: '', searchUrl: '' };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleGuestChange = this.handleGuestChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);
  }

  componentWillMount() {

    let searchValue = '';
    let searchUrl = '';
    let guests = '1';
    let rooms = '1';
    let startDate = moment().add(7, 'days');
    let endDate = moment().add(8, 'days');

    if (this.props.searchValue !== undefined) {
        searchValue = this.props.searchValue;
    }

    if (this.props.sDate !== undefined) {
        startDate = new moment(this.props.sDate);
    }

    if (this.props.eDate !== undefined) {
        endDate = new moment(this.props.eDate);
    }

    if (this.props.rooms !== undefined) {
        rooms = this.props.rooms;
    }

    if (this.props.guests !== undefined) {
        guests = this.props.guests;
    }

    if (searchValue == '')
    {
      searchValue = this.props.city;
    }

    if (searchUrl == '')
    {
      searchUrl = this.props.searchUrl;
    }
    this.state = { searchValue: searchValue, searchUrl: searchUrl, startDate: startDate, endDate: endDate, formattedStartDate: startDate.format('YYYY-MM-DD'), formattedEndDate: endDate.format('YYYY-MM-DD'), guests: guests, rooms: rooms  };
  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType) {
    this.setState({ searchUrl: cityUrl, searchValue: city});
  }

  handleStartDateChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({
        formattedStartDate: sDate,
        startDate: date
    });
  }

   handleEndDateChange(date) {
    let eDate = date.format('YYYY-MM-DD');
    this.setState({
        formattedEndDate: eDate,
        endDate: date
    });
  }

  handleGuestChange(event) {
    event.preventDefault();
    this.setState({
      guests: event.target.value
    });
  }

  handleRoomChange(event) {
    event.preventDefault();
    this.setState({
      rooms: event.target.value
    });
  }

  submitForm(event) {
    event.preventDefault();

    if (this.props.useFunction) {
      this.props.handleFormSubmit(this.state.searchValue, this.state.startDate, this.state.formattedStartDate, this.state.endDate, this.state.formattedEndDate, this.state.rooms, this.state.guests);
    }
    else {
      if (this.state.searchValue.length > 0) {
        let url = '?q=' + this.state.searchValue + '&sDate=' + this.state.formattedStartDate + '&eDate=' + this.state.formattedEndDate + '&rooms=' + this.state.rooms + '&guests=' + this.state.guests;

        if (this.state.searchUrl.length > 0) {

          if (this.state.searchUrl.includes('hotels')) {
            browserHistory.push(this.state.searchUrl + url);
          }
          else {
            browserHistory.push(this.state.searchUrl + '/hotels' + url);
          }
        }
        else {
          browserHistory.push('/searchForms-results/hotels' + url);
        }
      }
    }
  }

  render(){
    return (
        <form className="hotelSearch" onSubmit={this.submitForm}>
          <div className="row">
            <div className={this.props.isSideBar ? "col-md-12" : "col-md-7"}>
              <div className="input-daterange" data-date-format="MM d, D">
                <div className="row">
                  <div className={this.props.isSideBar ? "col-md-12" : "col-md-6"}>
                    <div className="form-group form-group-icon-left">
                      <label>Destination</label>
                      <AutoComplete disabled={this.props.lockLocation} onChangeAutoComplete={this.onChangeAutoComplete} searchType="city" placeholder="Enter Destination" cssClass="typeahead form-control" searchValue={this.props.searchValue !== undefined && this.props.searchValue != '' ? titleCase(this.props.searchValue) : titleCase(this.props.city)} />
                    </div>
                  </div>
                  <div className={this.props.isSideBar ? "col-md-6" : "col-md-3"}>
                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                      <label>Check in</label>
                      <DatePicker name="start" dateFormat="DD/MM/YYYY"  selected={this.state.startDate} onChange={this.handleStartDateChange} className="form-control" />
                    </div>
                   </div>
                  <div className={this.props.isSideBar ? "col-md-6" : "col-md-3"}>
                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                      <label>Check out</label>
                      <DatePicker name="end" dateFormat="DD/MM/YYYY"  selected={this.state.endDate} onChange={this.handleEndDateChange} className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={this.props.isSideBar ? "col-md-12" : "col-md-5"}>
              <div className="row">
                <div className={this.props.isSideBar ? "col-md-6" : "col-md-3"}>
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
                <div className={this.props.isSideBar ? "col-md-6" : "col-md-3"}>
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
                    <i className="fa fa-search"></i>Search Hotels
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
  sDate: moment().add(7, 'days'),
  eDate: moment().add(8, 'days'),
  rooms: '1',
  guests: '1',
  searchUrl: '',
  useFunction: false,
  isSideBar: false,
  lockLocation: false
};

SearchForm.propTypes = {
  doSearch: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  searchValue: PropTypes.string,
  sDate:  PropTypes.object,
  eDate: PropTypes.object,
  rooms: PropTypes.string,
  guests: PropTypes.string,
  city: PropTypes.string,
  searchUrl: PropTypes.string,
  useFunction: PropTypes.bool,
  isSideBar: PropTypes.bool,
  lockLocation: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    searchValue: ownProps.location !== undefined ? ownProps.location.query.q : '',
    sDate: ownProps.location !== undefined ? ownProps.location.query.sDate : moment().add(7, 'days'),
    eDate: ownProps.location !== undefined ? ownProps.location.query.eDate : moment().add(8, 'days'),
    rooms: ownProps.location !== undefined ? ownProps.location.query.rooms : '1',
    guests: ownProps.location !== undefined ? ownProps.location.query.guests : '1',
    searchUrl: ownProps.location !== undefined ? ownProps.location.pathname : ''
  };
}

export default connect(mapStateToProps)(SearchForm);
