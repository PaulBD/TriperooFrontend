import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import AutoComplete from '../common/autocomplete';

var DatePicker = require('react-datepicker');
var moment = require('moment');
 

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { searches: [], startDate: moment(), endDate: moment().add(1, 'days'), guests: 1, rooms: 1, searchValue: '' };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleGuestChange = this.handleGuestChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.onSubmitRedirect = this.onSubmitRedirect.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);

  }

  handleSearchClick(value) {
    this.setState({
      searchValue: value
    });
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    });
  }

   handleEndDateChange(date) {
    this.setState({
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



  onSubmitRedirect(event) {
    event.preventDefault();

    let val = event.target.value;

    alert(val);

  }


  render(){

    return (
       <div className="search-tabs search-tabs-bg search-tabs-to-top">
            <div className="tabbable">
              <div className="tab-content">
                  <div className="tab-pane fade in active" id="tab-1">
                      <h2 className="text-xs-center">Compare & Save on Hotels</h2>
                      <p className="text-xs-center">Great deals from a selection of hotel companies only a click away</p>
                      <p>&nbsp;</p>
                        <form className="hotelSearch" onSubmit={this.onSubmitRedirect}>
                          <div className="row">
                            <div className="col-md-8">
                              <div className="input-daterange" data-date-format="MM d, D">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                                      <label>Destination</label>
                                      <AutoComplete changeValue={this.handleSearchClick} searchType="all" placeholder="Enter Destination" cssClass="typeahead form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                      <label>Check in</label>
                                      <DatePicker name="start" dateFormat="DD/MM/YYYY"  selected={this.state.startDate} onChange={this.handleStartDateChange} className="form-control" />
                                    </div>
                                   </div>
                                  <div className="col-md-3">
                                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                      <label>Check out</label>
                                      <DatePicker name="end" dateFormat="DD/MM/YYYY"  selected={this.state.endDate} onChange={this.handleEndDateChange} className="form-control" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <div className="col-md-6">
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
                                <div className="col-md-6">
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
                              </div>

                            </div>
                            <div className="col-md-12 text-xs-center">
                              <button className="btn btn-primary btn-lg" type="submit">
                                <i className="fa fa-search"></i>Search Hotels
                              </button>
                            </div>
                          </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Search;