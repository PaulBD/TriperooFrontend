import React from "react";
import {browserHistory} from 'react-router';
let DatePicker = require('react-datepicker');
let moment = require('moment');
import AutoComplete from '../common/autocomplete';

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {adults: 2, children: 0, showPassengerPopup: false, error: '', fromCode: '', toCode: '', fromFriendly: '', toFriendly: '', passengers: 2, fromDate: moment(), toDate: moment().add(7, 'days'), formattedFromDate: moment().format('YYYY-MM-DD'), formattedToDate: moment().add(1, 'days').format('YYYY-MM-DD'), journeyType: 'round'};
    this.changeForm = this.changeForm.bind(this);
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onChangeFromAirport = this.onChangeFromAirport.bind(this);
    this.onChangeToAirport = this.onChangeToAirport.bind(this);
    this.showPassengerPopup = this.showPassengerPopup.bind(this);
    this.changeAdult = this.changeAdult.bind(this);
    this.changeChild = this.changeChild.bind(this);
  }

  changeForm(e) {
    this.setState({journeyType: e.target.getAttribute('data-type')});
  }

  handleFromDateChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({formattedFromDate: sDate, fromDate: date});
  }

  handleToDateChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({formattedToDate: sDate, toDate: date});
  }

  changeAdult(e) {
    e.preventDefault();
    var childCount = this.state.children;
    var adultCount = this.state.adults;
    var type = e.target.getAttribute('data-type');

    if (adultCount > 1) {
      if (type == 'subtract')
      {
        adultCount -= 1;
      }
    }

    if (adultCount < 9) {
      if (type == 'add') {
        adultCount += 1;
      }
    }

    this.setState({adults: adultCount, passengers: adultCount + childCount});

  }

  changeChild(e){
    e.preventDefault();
    var childCount = this.state.children;
    var adultCount = this.state.adults;
    var type = e.target.getAttribute('data-type');

    if (childCount > 0) {
      if (type == 'subtract')
      {
        childCount -= 1;
      }
    }

    if (childCount < 9) {
      if (type == 'add') {
        childCount += 1;
      }
    }

    this.setState({children: childCount, passengers: adultCount + childCount});

  }

  submitForm(e) {
    e.preventDefault();
    this.setState({error: ''});
    if (this.state.fromCode.length == 0) {
      this.setState({error: 'Please set a from destination'});
      return;
    }

    if (this.state.toCode.length == 0 && this.state.journeyType == 'round') {
      this.setState({error: 'Please set a to destination'});
      return;
    }

    if (this.state.fromDate.length == 0) {
      this.setState({error: 'Please set a from date'});
      return;
    }

    if (this.state.toDate.length == 0 && this.state.journeyType == 'round') {
      this.setState({error: 'Please set a to date'});
      return;
    }

    browserHistory.push('/flights/searchForms-results?from=' + this.state.fromCode + '&to=' + this.state.toCode  + '&fromDate=' + this.state.formattedFromDate  + '&toDate=' + this.state.formattedToDate  + '&passengers=' + this.state.passengers);
  }

  onChangeFromAirport(city, cityId, cityUrl, dataType) {
    this.setState({fromCode: city, fromFriendly: city});
  }

  onChangeToAirport(city, cityId, cityUrl, dataType) {
    this.setState({toCode: city, toFriendly: city});
  }

  showPassengerPopup(e) {
    e.preventDefault();

    if (this.state.showPassengerPopup) {
      this.setState({showPassengerPopup: false});
    }
    else {
      this.setState({showPassengerPopup: true});
    }
  }

  render(){

    let passengerLabel = '';

    switch (this.state.passengers)
    {
      case 1:
        passengerLabel = '1 Adult';
        break;
      case 2:
        passengerLabel = '2 Adults';
        break;
      default:
        passengerLabel = this.state.passengers + ' Passengers';
        break;
    }

    return (


      <form onSubmit={this.submitForm}>
        <div className="tabbable">
          <div className="row">
            <div className="col-md-9">
              <ul className="nav nav-pills nav-sm nav-no-br mb10" id="flightChooseTab">
                <li className={this.state.journeyType == 'round' ? "active" : ""}><a href="#" onClick={this.changeForm} data-toggle="tab" data-type="round">Round Trip</a></li>
                <li className={this.state.journeyType == 'single' ? "active" : ""}><a href="#" onClick={this.changeForm} data-toggle="tab" data-type="single">One Way</a> </li>
              </ul>
            </div>
            <div className="col-md-3 text-right">
              <a href="#" onClick={this.showPassengerPopup}><i className="fa fa-group"></i> {passengerLabel} {this.state.showPassengerPopup ? <i className="fa fa-arrow-up"></i> : <i className="fa fa-arrow-down"></i>}</a>
              <div className={this.state.showPassengerPopup ? "passengerPopup" : "passengerPopup hide"}>

                <div className="row mb-2">
                  <div className="col-md-2 text-center passengerCounter">
                    <a href="#" onClick={this.changeAdult} data-type="subtract">-</a>
                  </div>
                  <div className="col-md-4 text-center">
                    Adults:
                  </div>
                  <div className="col-md-4 text-center">
                    {this.state.adults}
                  </div>
                  <div className="col-md-2 text-center passengerCounter">
                    <a href="#" onClick={this.changeAdult} data-type="add">+</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 text-center passengerCounter">
                    <a href="#" onClick={this.changeChild} data-type="subtract">-</a>
                  </div>
                  <div className="col-md-4 text-center">
                    Children:
                  </div>
                  <div className="col-md-4 text-center">
                    {this.state.children}
                  </div>
                  <div className="col-md-2 text-center passengerCounter">
                    <a href="#" onClick={this.changeChild} data-type="add">+</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane active">
              <div className="row">
                <div className={this.state.error.length > 0 ? "col-md-12" : "hide"}>
                  {this.state.error}
                </div>

                <div className="col-md-3">
                  <div className="form-group form-group-icon-left">
                    <label>From</label>
                    <AutoComplete onChangeAutoComplete={this.onChangeFromAirport} searchType="city" placeholder="Enter Destination" cssClass="typeahead form-control" searchValue={this.state.fromFriendly} />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                    <label>Departing</label>
                    <DatePicker name="from" dateFormat="DD/MM/YYYY"  selected={this.state.fromDate} onChange={this.handleFromDateChange} className="form-control" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group form-group-icon-left">
                    <label>To</label>
                    <AutoComplete onChangeAutoComplete={this.onChangeToAirport} searchType="city" placeholder="To Destination" cssClass={this.state.journeyType == 'single' ? "typeahead form-control disabled" : "typeahead form-control"} searchValue={this.state.toFriendly} disabled={this.state.journeyType == 'single' ? true : false} />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                    <label>Returning</label>
                    <DatePicker name="to" dateFormat="DD/MM/YYYY"  selected={this.state.toDate} onChange={this.handleToDateChange} className={this.state.journeyType == 'single' ? "form-control disabled" : "form-control"} disabled={this.state.journeyType == 'single' ? true : false} />
                  </div>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary btn-lg formBtn" type="submit">
                    <i className="fa fa-search"></i>Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}


export default Search;