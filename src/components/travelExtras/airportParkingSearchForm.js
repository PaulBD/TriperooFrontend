import React, {PropTypes} from 'react';
let DatePicker = require('react-datepicker');
let moment = require('moment');

class AirportParkingSearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { dropOffDate: moment().add(1, 'days'), pickUpDate: moment().add(5, 'days'), formattedDropOffDate: moment().add(1, 'days').format('YYYY-MM-DD'), formattedPickUpDate: moment().add(5, 'days').format('YYYY-MM-DD'), airport: 'LGW', dropOffTime: '00:00', pickUpTime: '00:00' };
    this.handleDropOffChange = this.handleDropOffChange.bind(this);
    this.handlePickUpChange = this.handlePickUpChange.bind(this);
    this.handleDropOffTimeChange = this.handleDropOffTimeChange.bind(this);
    this.handlePickUpTimeChange = this.handlePickUpTimeChange.bind(this);
    this.handleAirportChange = this.handleAirportChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.setState({ airport: 'LGW' });
  }

  handleDropOffChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({
      formattedDropOffDate: sDate,
      dropOffDate: date
    });
  }

  handlePickUpChange(date) {
    let sDate = date.format('YYYY-MM-DD');
    this.setState({
      formattedPickUpDate: sDate,
      pickUpDate: date
    });
  }

  handleDropOffTimeChange(event) {
    event.preventDefault();
    this.setState({
      dropOffTime: event.target.value
    });
  }

  handlePickUpTimeChange(event) {
    event.preventDefault();
    this.setState({
      pickUpTime: event.target.value
    });
  }

  handleAirportChange(event) {
    event.preventDefault();
    this.setState({
      airport: event.target.value
    });
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
            <div className="col-md-4">
              <div className="input-daterange" data-date-format="MM d, D">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                      <label>Airport</label>
                    <select className="form-control searchSelect" ref="dropOffTime" name="dropOffTime" selected={this.state.airport} onChange={this.handleAirportChange}>
                        <option value="LGW">Gatwick</option>
                        <option value="GLA">Glasgow International</option>
                        <option value="ABZ">Aberdeen</option>
                    </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                  <div className="col-md-2">
                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                      <label>Drop off Date</label>
                      <DatePicker name="dropOffDate" dateFormat="DD/MM/YYYY"  selected={this.state.dropOffDate} onChange={this.handleDropOffDateChange} className="form-control" />
                    </div>
                   </div>
                  <div className="col-md-2">
                    <div className="form-group form-group- form-group-select-plus">
                    <label>Drop off time</label>
                    <select className="form-control searchSelect" ref="dropOffTime" name="dropOffTime" selected={this.state.dropOffTime} onChange={this.handleDropOffTimeChange}>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:20</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                    </select>
                    </div>
                  </div>
                <div className="col-md-2">
                  <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                      <label>Pick up Date</label>
                      <DatePicker name="pickUpDate" dateFormat="DD/MM/YYYY"  selected={this.state.pickUpDate} onChange={this.handlePickUpDateChange} className="form-control" />
                    </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group form-group-select-plus">
                      <label>Pick up Time</label>
                      <select className="form-control searchSelect"  ref="pickUpTime" name="pickUpTime" selected={this.state.pickUpTime} onChange={this.handlePickUpTimeChange}>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:20</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                      </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary btn-lg formBtn" type="submit">
                    <i className="fa fa-search"></i>Search Parking
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
};

AirportParkingSearchForm.propTypes = {
  handleFormSubmit: PropTypes.func
};

export default AirportParkingSearchForm;