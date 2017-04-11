import React, {PropTypes} from 'react';
let DatePicker = require('react-datepicker');
let moment = require('moment');
import TimeDropDownList from '../../common/timeDropDownList';
import AirportList from '../../common/airportList';

class AirportParkingSearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { dropOffDate: moment().add(1, 'days'), pickUpDate: moment().add(7, 'days'), formattedDropOffDate: moment().add(1, 'days').format('YYYY-MM-DD'), formattedPickUpDate: moment().add(7, 'days').format('YYYY-MM-DD'), airport: 'LGW', dropOffTime: '00:30', pickUpTime: '22:00' };
    this.handleDropOffDateChange = this.handleDropOffDateChange.bind(this);
    this.handlePickUpDateChange = this.handlePickUpDateChange.bind(this);
    this.handleDropOffTimeChange = this.handleDropOffTimeChange.bind(this);
    this.handlePickUpTimeChange = this.handlePickUpTimeChange.bind(this);
    this.handleAirportChange = this.handleAirportChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.setState({ airport: this.props.airport });

    let dropOffDate = moment().add(1, 'Days');
    let pickUpDate = moment().add(7, 'days');

    if (this.props.dDate !== undefined) {
        dropOffDate = new moment(this.props.dDate);
    }

    if (this.props.pDate !== undefined) {
        pickUpDate = new moment(this.props.pDate);
    }

    this.setState({ pickUpDate: pickUpDate, dropOffDate: dropOffDate });
  }

  handleDropOffDateChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({ formattedDropOffDate: sDate, dropOffDate: date });
  }

  handlePickUpDateChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({ formattedPickUpDate: sDate, pickUpDate: date });
  }

  handleDropOffTimeChange(value) {
    this.setState({ dropOffTime: value });
  }

  handlePickUpTimeChange(value) {
    this.setState({ pickUpTime: value });
  }

  handleAirportChange(value) {
    this.setState({ airport: value });
  }

  submitForm(event) {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.airport, this.state.formattedDropOffDate, this.state.dropOffTime, this.state.formattedPickUpDate, this.state.pickUpTime);
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
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                            <label>Drop off Date</label>
                            <DatePicker name="dropOffDate" dateFormat="DD/MM/YYYY"  selected={this.state.dropOffDate} onChange={this.handleDropOffDateChange} className="form-control" />
                          </div>
                         </div>
                        <div className="col-md-5">
                          <div className="form-group form-group-select-plus">
                            <label>Drop off time</label>
                            <TimeDropDownList cssClass="form-control searchSelect" name="dropOffTime" value={this.state.dropOffTime} changeValue={this.handleDropOffTimeChange} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                              <label>Pick up Date</label>
                              <DatePicker name="pickUpDate" dateFormat="DD/MM/YYYY"  selected={this.state.pickUpDate} onChange={this.handlePickUpDateChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group form-group-select-plus">
                            <label>Pick up Time</label>
                            <TimeDropDownList cssClass="form-control searchSelect" name="pickUpTime" value={this.state.pickUpTime} changeValue={this.handlePickUpTimeChange} />
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

AirportParkingSearchForm.defaultProps = {
  dDate: moment().add(1, 'days'), 
  pDate: moment().add(7, 'days'),
  airport: ''
};

AirportParkingSearchForm.propTypes = {
  dDate:  PropTypes.string.isRequired,
  pDate: PropTypes.string.isRequired,
  airport: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func
};

export default AirportParkingSearchForm;