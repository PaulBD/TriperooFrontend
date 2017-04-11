import React, {PropTypes} from 'react';
let DatePicker = require('react-datepicker');
let moment = require('moment');
import TimeDropDownList from '../../common/timeDropDownList';
import RoomDropDownList from '../../common/roomDropDownList';
import AirportList from '../../common/airportList';

class AirportHotelSearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { checkInDate: moment().add(1, 'days'), checkOutDate: moment().add(2, 'days'), nights: calculateDays(moment().add(1, 'days'), moment().add(2, 'days')), formattedCheckInDate: moment().add(1, 'days').format('YYYY-MM-DD'), formattedCheckOutDate: moment().add(2, 'days').format('YYYY-MM-DD'), airport: 'LGW', flightDate: moment().add(8, 'days'), formattedFlightDate: moment().add(8, 'days').format('YYYY-MM-DD'), roomType: 'T20', secondRoomType: '', parkingDays: calculateDays(moment().add(2, 'days'), moment().add(8, 'days')) };
    this.handleCheckInDateChange = this.handleCheckInDateChange.bind(this);
    this.handleCheckOutDateChange = this.handleCheckOutDateChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleCollectCarChange = this.handleCollectCarChange.bind(this);
    this.handleAirportChange = this.handleAirportChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleCheckInDateChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({ formattedCheckInDate: sDate, checkInDate: date, nights: calculateDays(date, this.state.checkOutDate) });
  }

  handleCheckOutDateChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({ formattedCheckOutDate: sDate, checkOutDate: date, nights: calculateDays(this.state.checkInDate, date) });
  }

  handleCollectCarChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({ formattedFlightDate: sDate, flightDate: date, parkingDays: calculateDays(this.state.checkOutDate, date) });
  }

  handleRoomChange(value) {
    this.setState({ roomType: value });
  }

  handleAirportChange(value) {
    this.setState({ airport: value });
  }

  submitForm(event) {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.airport, this.state.formattedCheckInDate, this.state.formattedCheckOutDate, this.state.formattedFlightDate, this.state.nights, this.state.roomType, this.state.secondRoomType, this.state.parkingDays);
  }

  render(){
      return (
      <div className="col-md-12">
        <form className="airportSearch" onSubmit={this.submitForm}>
          <div className="row">
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                    <label>Airport</label>
                      <AirportList cssClass="form-control searchSelect" name="airport" selectedValue={this.state.airport} changeValue={this.handleAirportChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                            <label>Check In</label>
                            <DatePicker name="dropOffDate" dateFormat="DD/MM/YYYY"  selected={this.state.checkInDate} onChange={this.handleCheckInDateChange} className="form-control" />
                          </div>
                         </div>
                        <div className="col-md-6">
                          <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                              <label>Check Out</label>
                              <DatePicker name="pickUpDate" dateFormat="DD/MM/YYYY"  selected={this.state.checkOutDate} onChange={this.handleCheckOutDateChange} className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="form-group form-group-select-plus">
                            <label>Room Type</label>
                            <RoomDropDownList cssClass="form-control searchSelect" name="pickUpTime" value={this.state.pickUpTime} changeValue={this.handleRoomChange} />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                              <label>Collect car</label>
                              <DatePicker name="collectCar" dateFormat="DD/MM/YYYY"  selected={this.state.flightDate} onChange={this.handleCollectCarChange} className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-primary btn-lg formBtn" type="submit">
                    <i className="fa fa-search"></i>Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export function calculateDays(date1, date2) {
  let duration = moment.duration(date2.diff(date1));
  let days = duration.asDays();
  return Math.round(days);
}

AirportHotelSearchForm.defaultProps = {
  dDate: moment().add(1, 'days'), 
  pDate: moment().add(2, 'days'),
  airport: ''
};

AirportHotelSearchForm.propTypes = {
  dDate:  PropTypes.string.isRequired,
  pDate: PropTypes.string.isRequired,
  airport: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func
};

export default AirportHotelSearchForm;