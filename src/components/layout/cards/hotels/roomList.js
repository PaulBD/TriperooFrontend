import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as modalActions from '../../../../actions/common/modalActions';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../../../actions/location/travelContent/hotelActions';
import Loader from '../../..//loaders/contentLoader';
import Toastr from 'toastr';
import SearchForm from '../../../forms/searchForms/hotels';
import ReactGA from 'react-ga';
let moment = require('moment');
let titleCase = require('title-case');

class RoomList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.cancellationPolicyClick = this.cancellationPolicyClick.bind(this);
    this.state = { isLoadingHotelRooms: true, arrivalDate: this.props.arrivalDate, formattedArrivalDate: new moment(this.props.arrivalDate).format('LL'), nights: this.props.nights, guests: this.props.guests, rooms: this.props.rooms };
    this.trackClick = this.trackClick.bind(this);
  }

  componentWillMount() {
    this.loadHotelRooms(this.props.locationId, this.props.hotelId, this.state.arrivalDate, this.state.nights);
  }

  trackClick() {
    ReactGA.event({ category: 'Hotels', action: 'Click', label: this.props.hotelName });
  }

  handleFormSubmit(searchUrl, searchId, arrivalDate, nights, rooms, guests) {
    this.setState({arrivalDate: arrivalDate,formattedArrivalDate: new moment(arrivalDate).format('LL'), nights: nights, rooms: rooms, guests: guests});
    this.setState({isLoadingLocation: true, isLoadingHotelList: true });
    browserHistory.push(searchUrl + '?arrivalDate=' + arrivalDate + '&nights=' + nights + '&rooms=' + rooms + '&guests=' + guests);
    this.loadHotelRooms(this.props.locationId, this.props.hotelId, arrivalDate, nights, rooms, guests);
  }

  loadHotelRooms(locationId, hotelId, arrivalDate, nights, rooms, guests) {
    this.setState({isLoadingHotelRooms: true});
    this.props.hotelActions.loadHotelRoomsById(locationId, hotelId, arrivalDate, nights, rooms, guests, 'en_en', 'GBP')
      .then(() => {
        this.setState({
          isLoadingHotelRooms: false
        });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingHotelRooms: false});
      });
  }

  cancellationPolicyClick(e) {
    e.preventDefault();
    let policy = e.target.getAttribute('data-policy');
    this.props.modalActions.openCancellationPolicy(policy);
  }

  render() {
    if (!this.state.isLoadingHotelRooms) {
      console.log(this.props.searchUrl);
      if (this.props.hotelRooms.hotelRoomAvailabilityResponse.size > 0) {
        return (
          <div className="container" id="rooms">
            <div className="row">
              <div className="col-md-12" id="rooms">
                <h2>Room Availability</h2>
                <p>Showing rooms available <strong>{this.state.formattedArrivalDate}</strong> for <strong>{this.state.nights}</strong> {this.state.nights == 1 ? 'night' : 'nights'}</p>
                <SearchForm searchUrl={this.props.searchUrl} buttonName="Search Rooms" rooms={this.state.rooms} nights={this.state.nights} arrivalDate={this.state.arrivalDate} guests={this.state.guests} useFunction={true} handleFormSubmit={this.handleFormSubmit} isSideBar={false} city={this.props.hotelName} lockLocation={true}/>
                <div className="row">
                  {
                    this.props.hotelRooms.hotelRoomAvailabilityResponse.hotelRoomResponse.map((hotelRoom, index) => {

                      let roomOccupancy = <i className="fa fa-user"></i>;

                      switch (hotelRoom.rateOccupancyPerRoom) {
                        case 1:
                          roomOccupancy = <i className="fa fa-user"></i>;
                          break;
                        case 2:
                          roomOccupancy = <span><i className="fa fa-user"></i> <i className="fa fa-user"></i></span>;
                          break;
                        case 3:
                          roomOccupancy = <span><i className="fa fa-user"></i> <i className="fa fa-user"></i> <i
                            className="fa fa-user"></i></span>;
                          break;
                        case 4:
                          roomOccupancy = <span><i className="fa fa-user"></i> <i className="fa fa-user"></i> <i
                            className="fa fa-user"></i> <i className="fa fa-user"></i></span>;
                          break;
                      }

                      let style = {
                        backgroundImage: 'url(' + hotelRoom.roomImages.roomImage[0].highResolutionUrl + ')'
                      };

                      if (hotelRoom.roomImages.roomImage[0].highResolutionUrl == undefined)
                      {
                        style.backgroundImage = 'url(' + hotelRoom.roomImages.roomImage[0].url + ')';
                      }
                      return (
                        <div className="col-md-4 mb-4" key={index}>
                          <div className="card text-xs-left">
                            <div className="cardBg hotelRoomImageBg" style={style}>
                              <div className={hotelRoom.rateInfos.rateInfo[0].promo ? "card-img-overlay promotion" : "hide"}>
                                <h4 className="card-title ">{hotelRoom.rateInfos.rateInfo[0].promoDescription}</h4>
                              </div>
                            </div>
                            <div className="card-block">
                              <h4 className="card-title mb-2">{titleCase(hotelRoom.roomTypeDescription)}</h4>

                              <div className="row">
                                <div className="col-md-12">
                                    <ul className="nav card-text mb-2">
                                      <li className="nav-item bedType">Sleeps: {roomOccupancy}</li>
                                    </ul>
                                  <ul className="nav card-text mb-2">
                                      {
                                        hotelRoom.bedTypes.bedType.map((bedType, bedIndex) => {
                                          return (
                                            <li className="nav-item bedType" key={bedIndex}>{bedType.description} <i className="fa fa-bed"></i></li>
                                          );
                                        })
                                      }
                                    </ul>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h5
                                    className="hotelPrice mb-1">{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total} {hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.currencyCode}</h5>

                                </div>
                                <div className="col-md-6">
                                  <a href={hotelRoom.deepLink} className="btn btn-primary priceRight" target="_blank">Book Room</a>
                                </div>
                                <div className="col-md-12">
                                  <p className="card-subtitle mb-1 text-muted cardAddress">
                                    <a href="#" onClick={this.cancellationPolicyClick} data-policy={hotelRoom.rateInfos.rateInfo[0].cancellationPolicy}>
                                      {hotelRoom.rateInfos.rateInfo[0].nonRefundable ? <span><i className="fa fa-info"></i> Non-Refundable - Read Cancellation Policy</span> : <span><i className="fa fa-info"></i> Read Cancellation Policy</span>}
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        );
      }
      else {
        return (
          <div className="container" id="rooms">
            <div className="row">
              <div className="col-md-12" id="rooms">
                <h2>Room Availability</h2>
                <p>Showing rooms available between <strong>{this.state.formattedArrivalDate}</strong> and <strong>{this.state.formattedDepartureDate}</strong></p>
                <SearchForm searchUrl={this.props.searchUrl} buttonName="Search Rooms" rooms={this.state.rooms} nights={this.state.nights} arrivalDate={this.state.arrivalDate} guests={this.state.guests} useFunction={true} handleFormSubmit={this.handleFormSubmit} isSideBar={false} city={this.props.hotelName} lockLocation={true}/>
                <div className="row">
                  <div className="col-md-12">
                    <div className="alert alert-danger" role="alert">
                      There are no rooms available for your selected dates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    else {
      return (
        <div className="container" id="rooms">
          <div className="row">
            <div className="col-md-12" id="rooms">
              <h2>Room Availability</h2>
              <p>Showing rooms available between <strong>{this.state.formattedArrivalDate}</strong> and <strong>{this.state.formattedDepartureDate}</strong></p>
              <SearchForm searchUrl={this.props.searchUrl} buttonName="Search Rooms" rooms={this.state.rooms} nights={this.state.nights} arrivalDate={this.state.arrivalDate} guests={this.state.guests} useFunction={true} handleFormSubmit={this.handleFormSubmit} isSideBar={false} city={this.props.hotelName} lockLocation={true}/>
              <div className="row">
                <Loader showLoader={true} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
SearchForm.defaultProps = {
  arrivalDate: moment().add(7, 'days').format('YYYY-MM-DD'),
  rooms: 1,
  guests: 1,
  nights: 1
};

RoomList.propTypes = {
  locationId: PropTypes.number.isRequired,
  hotelId: PropTypes.number.isRequired,
  regionNameLong: PropTypes.string.isRequired,
  hotelActions: PropTypes.object.isRequired,
  hotelRooms: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  modalActions: PropTypes.object.isRequired,
  hotelName: PropTypes.string.isRequired,
  nights: PropTypes.number,
  rooms: PropTypes.number,
  guests: PropTypes.number,
  arrivalDate: PropTypes.string,
  searchUrl: PropTypes.string

};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    hotelRooms: state.hotels.hotelRooms ? state.hotels.hotelRooms : {},
    searchUrl: ownProps.searchUrl
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hotelActions: bindActionCreators(hotelActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);

