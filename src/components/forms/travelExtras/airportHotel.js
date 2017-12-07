import React, {PropTypes} from 'react';
let DatePicker = require('react-datepicker');
let moment = require('moment');
import RoomDropDownList from '../common/roomDropDownList';
import AirportList from '../common/airportList';

class AirportHotelSearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { includeSecondRoom: 'No', includeParking: 'Yes', checkInDate: moment().add(1, 'days'), checkOutDate: moment().add(2, 'days'), nights: calculateDays(moment().add(1, 'days'), moment().add(7, 'days')), formattedCheckInDate: moment().add(1, 'days').format('YYYY-MM-DD'), formattedCheckOutDate: moment().add(2, 'days').format('YYYY-MM-DD'), airport: 'LGW', collectCarDate: moment().add(8, 'days'), formattedCollectCarDate: moment().add(8, 'days').format('YYYY-MM-DD'), dropOffCarDate: moment().add(1, 'days'), formattedDropOffCarDate: moment().add(1, 'days').format('YYYY-MM-DD'), roomType: 'T20', secondRoomType: '', parkingDays: calculateDays(moment().add(2, 'days'), moment().add(8, 'days')) };
    this.handleCheckInDateChange = this.handleCheckInDateChange.bind(this);
    this.handleCheckOutDateChange = this.handleCheckOutDateChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleSecondRoomChange = this.handleSecondRoomChange.bind(this);
    this.addSecondRoom = this.addSecondRoom.bind(this);
    this.removeSecondRoom = this.removeSecondRoom.bind(this);
    this.handleCollectCarChange = this.handleCollectCarChange.bind(this);
    this.handleDropOffCarChange = this.handleDropOffCarChange.bind(this);
    this.handleAirportChange = this.handleAirportChange.bind(this);
    this.handleHideCollectCar = this.handleHideCollectCar.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleCheckInDateChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({ formattedCheckInDate: sDate, checkInDate: date });
  }

  handleCheckOutDateChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({ formattedCheckOutDate: sDate, checkOutDate: date });
  }

  handleCollectCarChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({ formattedCollectCarDate: sDate, collectCarDate: date, parkingDays: calculateDays(this.state.collectCarDate, date) });
  }

  handleDropOffCarChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({ formattedDropOffCarDate: sDate, dropOffCarDate: date, parkingDays: calculateDays(this.state.dropOffCarDate, date) });
  }

  handleRoomChange(value) {
    this.setState({ roomType: value });
  }

  handleSecondRoomChange(value) {
    this.setState({ secondRoomType: value });
  }

  addSecondRoom(e) {
    e.preventDefault();
    this.setState({ includeSecondRoom: 'Yes', secondRoomType: 'T20' });
  }

  removeSecondRoom(e) {
    e.preventDefault();
    this.setState({ includeSecondRoom: 'No', secondRoomType: '' });
  }

  handleAirportChange(value) {
    this.setState({ airport: value });
  }

  handleHideCollectCar(e) {
    this.setState({ includeParking: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    let collectCarDate = this.state.formattedCollectCarDate;
    let dropOffCarDate = this.state.formattedDropOffCarDate;
    let parkingDays = this.state.parkingDays;

    if (this.state.includeParking == 'No') {
      collectCarDate = null;
      dropOffCarDate = null;
      parkingDays = 0;
    }

    this.props.handleFormSubmit(this.state.airport, this.state.formattedCheckInDate, this.state.formattedCheckOutDate, dropOffCarDate, collectCarDate, this.state.nights, this.state.roomType, this.state.secondRoomType, parkingDays);
  }

  render(){
    let style = {
      backgroundImage: 'url(/static/img/' + this.props.contentType + '.jpg'
    };
    return (
      <div>
        <div className="bg-holder full text-center text-white travelExtras">
          <div className="bg-mask"></div>
          <div className="bg-img" style={style}></div>
          <div className="bg-front full-center">
            <div className="owl-cap">
              <h1 className="owl-cap-title fittext">{this.props.headerTitle}</h1>
              <div className="owl-cap-price">
                <small>{this.props.subHeaderTitle}</small>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="search-tabs search-tabs-bg search-tabs-to-top">
            <div className="tabbable">
              <div className="tab-content">
                <div className="tab-pane active" id="tab-1">
                  <form onSubmit={this.submitForm} className="searchForm">
                    <div className="row">
                      <div className="col-lg-3 col-md-12">
                        <div className="row">
                          <div className="col-lg-12 col-md-6">
                            <div className="form-group form-group-icon-left"><i className="fa fa-map-marker input-icon hidden-lg-up"></i>
                              <label>Flying From?</label>
                              <AirportList cssClass="form-control searchSelect" name="airport" selectedValue={this.state.airport} changeValue={this.handleAirportChange} />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-6">
                            <div className="form-group form-group-icon-left"><i className="fa fa-car input-icon input-icon-hightlight hidden-lg-up"></i>
                              <label>Include Parking?</label>
                              <select defaultValue="Yes" className="form-control" onChange={this.handleHideCollectCar}>
                                <option key="Yes">Yes</option>
                                <option key="No">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="row">
                              <div className="col-md-7">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                      <label>Hotel Check In</label>
                                      <DatePicker name="dropOffDate" dateFormat="DD/MM/YYYY"  selected={this.state.checkInDate} onChange={this.handleCheckInDateChange} className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                      <label>Hotel Check Out</label>
                                      <DatePicker name="pickUpDate" dateFormat="DD/MM/YYYY"  selected={this.state.checkOutDate} onChange={this.handleCheckOutDateChange} className="form-control" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group form-group-select-plus">
                                      <label>Room Type</label>
                                      <RoomDropDownList cssClass="form-control searchSelect" name="pickUpTime" value={this.state.roomType} changeValue={this.handleRoomChange} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-7">
                                <div className="row">
                                  <div className={this.state.includeParking == 'Yes' ? "col-md-6" : "col-md-6 hide"}>
                                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                      <label>Drop Off Car</label>
                                      <DatePicker name="dropOffCar" dateFormat="DD/MM/YYYY"  selected={this.state.dropOffCarDate} onChange={this.handleDropOffCarChange} className="form-control" />
                                    </div>
                                  </div>
                                  <div className={this.state.includeParking == 'Yes' ? "col-md-6" : "col-md-6 hide"}>
                                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                      <label>Collect Car</label>
                                      <DatePicker name="collectCar" dateFormat="DD/MM/YYYY"  selected={this.state.collectCarDate} onChange={this.handleCollectCarChange} className="form-control" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className={this.state.includeSecondRoom == 'No' ? "form-group form-group-select-plus" : "form-group form-group-select-plus hide"}>
                                      <p><a href="#" onClick={this.addSecondRoom}>Add second room?</a></p>
                                    </div>
                                    <div className={this.state.includeSecondRoom == 'Yes' ? "form-group form-group-select-plus" : "form-group form-group-select-plus hide"}>
                                      <label>Second Room Type <a href="#" onClick={this.removeSecondRoom}>Remove?</a></label>
                                      <RoomDropDownList cssClass="form-control searchSelect" name="pickUpTime" value={this.state.secondRoomType} changeValue={this.handleSecondRoomChange} />
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
              </div>
            </div>
          </div>
        </div>
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
  airport: ''
};

AirportHotelSearchForm.propTypes = {
  airport: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func,
  headerTitle:  PropTypes.string.isRequired,
  subHeaderTitle:  PropTypes.string.isRequired,
  contentType:  PropTypes.string.isRequired
};

export default AirportHotelSearchForm;
