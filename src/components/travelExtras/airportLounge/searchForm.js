import React, {PropTypes} from 'react';
let DatePicker = require('react-datepicker');
let moment = require('moment');
import TimeDropDownList from '../../common/timeDropDownList';
import AirportList from '../../common/airportList';
import QuantityList from '../../common/quantityDropDownList';

class AirportLoungeSearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { arrivalDate: moment().add(1, 'days'), formattedArrivalDate: moment().add(1, 'days').format('YYYY-MM-DD'), airport: 'LGW', arrivalTime: '09:00', flightTime: '12:00', adultCount: 2, childCount: 0, infantCount: 0 };
    this.handleArrivalDateChange = this.handleArrivalDateChange.bind(this);
    this.handleArrivalTimeChange = this.handleArrivalTimeChange.bind(this);
    this.handleFlightTimeChange = this.handleFlightTimeChange.bind(this);
    this.handleAirportChange = this.handleAirportChange.bind(this);
    this.handleAdultCountChange = this.handleAdultCountChange.bind(this);
    this.handleChildCountChange = this.handleChildCountChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleArrivalDateChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({ formattedArrivalDate: sDate, arrivalDate: date });
  }

  handleArrivalTimeChange(value) {
    this.setState({ arrivalTime: value });
  }

  handleFlightTimeChange(value) {
    this.setState({ flightTime: value });
  }

  handleAirportChange(value) {
    this.setState({ airport: value });
  }

  handleAdultCountChange(value) {
    this.setState({ adultCount: value });
  }

  handleChildCountChange(value) {
    this.setState({ childCount: value });
  }

  submitForm(event) {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.airport, this.state.formattedArrivalDate, this.state.arrivalTime, this.state.flightTime, this.state.adultCount, this.state.childCount, this.state.infantCount);
  }

  render(){
    let style = {
        backgroundImage: 'url(/static/img/' + this.props.contentType + '.jpg'
    };
      return (
      <div>
        <div className="bg-holder full text-center text-white holidayPage">
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
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                            <label>Flying from?</label>
                              <AirportList cssClass="form-control searchSelect" name="airport" selectedValue={this.state.airport} changeValue={this.handleAirportChange} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-9">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-7">
                                  <div className="form-group form-group-icon-left">
                                    <i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                    <label>Arrival Date</label>
                                    <DatePicker name="arrivalDate" dateFormat="DD/MM/YYYY"  selected={this.state.arrivalDate} onChange={this.handleArrivalDateChange} className="form-control" />
                                  </div>
                                 </div>
                                <div className="col-md-5">
                                  <div className="form-group form-group-select-plus">
                                    <label>Arrival Time</label>
                                    <TimeDropDownList cssClass="form-control searchSelect" name="arrivalTime" value={this.state.arrivalTime} changeValue={this.handleArrivalTimeChange} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-5">
                                  <div className="form-group form-group-select-plus">
                                      <label>Flight Time</label>
                                      <TimeDropDownList cssClass="form-control searchSelect" name="flightTime" value={this.state.flightTime} changeValue={this.handleFlightTimeChange} />
                                  </div>
                                </div>
                                <div className="col-md-7">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group form-group-select-plus">
                                        <label>Adults</label>
                                        <QuantityList cssClass="form-control searchSelect" name="adults" value={this.state.adultCount.toString()} changeValue={this.handleAdultCountChange} />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group form-group-select-plus">
                                        <label>Children</label>
                                        <QuantityList cssClass="form-control searchSelect" name="child" value={this.state.childCount.toString()} changeValue={this.handleChildCountChange} />
                                      </div>
                                    </div>
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

AirportLoungeSearchForm.defaultProps = {
  airport: ''
};

AirportLoungeSearchForm.propTypes = {
  airport: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func,
  headerTitle:  PropTypes.string.isRequired,
  subHeaderTitle:  PropTypes.string.isRequired,
  contentType:  PropTypes.string.isRequired
};

export default AirportLoungeSearchForm;
