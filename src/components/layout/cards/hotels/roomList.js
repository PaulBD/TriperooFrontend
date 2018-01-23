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
    this.state = {
      isLoadingHotelRooms: true
      , arrivalDate: this.props.arrivalDate
      , formattedArrivalDate: new moment(this.props.arrivalDate).format('LL')
      , nights: this.props.nights
      , guests: this.props.guests
      , rooms: this.props.rooms
    };
    this.trackClick = this.trackClick.bind(this);
  }

  componentWillMount() {
    this.loadHotelRooms(this.props.locationId, this.props.hotelId, this.state.arrivalDate, this.state.nights, this.state.rooms, this.state.guests);
  }

  trackClick() {
    ReactGA.event({ category: 'Hotels', action: 'Click', label: this.props.hotelName });
    //this.props.modalActions.openBookmark(this.props.parentLocationId, this.props.parentLocationName, this.props.parentLocationNameLong, this.props.parentLocationImage, this.props.parentLocationUrl, this.props.parentLocationType, this.props.locationId, this.props.regionNameLong, this.props.regionName, "hotel", this.props.regionNameImage, this.props.regionUrl, '', false, this.props.latitude, this.props.longitude);
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
    let policy = e.currentTarget.getAttribute('data-policy');
    this.props.modalActions.openCancellationPolicy(policy);
  }

  render() {
    if (!this.state.isLoadingHotelRooms) {
      if (this.props.hotelRooms.hotelRoomAvailabilityResponse.size > 0) {

        return (
          <div className="row">
            <div className="col-md-12" id="rooms">
              <h4>Room Availability</h4>
              <hr />
              <p>Showing rooms available <strong>{this.state.formattedArrivalDate}</strong> for <strong>{this.state.nights}</strong> {this.state.nights == 1 ? 'night' : 'nights'}</p>
              <SearchForm searchUrl={this.props.searchUrl} buttonName="Search Rooms" rooms={this.state.rooms} nights={this.state.nights} arrivalDate={this.state.arrivalDate} guests={this.state.guests} useFunction={true} handleFormSubmit={this.handleFormSubmit} isSideBar={false} city={this.props.hotelName} lockLocation={true}/>

              <ul className="booking-list">
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
                        roomOccupancy = <span><i className="fa fa-user"></i> <i className="fa fa-user"></i> <i className="fa fa-user"></i></span>;
                        break;
                      case 4:
                        roomOccupancy = <span><i className="fa fa-user"></i> <i className="fa fa-user"></i> <i className="fa fa-user"></i> <i className="fa fa-user"></i></span>;
                        break;
                    }

                    let url = '/static/img/placeholder.png';

                    if (hotelRoom.roomImages != undefined) {
                      if (hotelRoom.roomImages.roomImage != undefined) {

                        url = hotelRoom.roomImages.roomImage[0].url;

                        if (hotelRoom.roomImages) {
                          if (hotelRoom.roomImages.roomImage[0].highResolutionUrl != undefined) {
                            url = hotelRoom.roomImages.roomImage[0].highResolutionUrl;
                          }
                        }
                      }
                    }

                    let roomCount = "";

                    if (hotelRoom.rateInfos.rateInfo[0].currentAllotment != undefined)
                    {
                      if (hotelRoom.rateInfos.rateInfo[0].currentAllotment == 0)
                      {
                        roomCount = 'Sold out';
                      }
                      else {
                        if (hotelRoom.rateInfos.rateInfo[0].currentAllotment < 5)
                        {
                          if (hotelRoom.rateInfos.rateInfo[0].currentAllotment == 1) {
                            roomCount = 'Less than ' + hotelRoom.rateInfos.rateInfo[0].currentAllotment + ' room left!';
                          }
                          else {
                            roomCount = 'Less than ' + hotelRoom.rateInfos.rateInfo[0].currentAllotment + ' rooms left!';
                          }
                        }
                      }
                    }

                    let currency = '£';

                    if (hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.currencyCode == 'GBP')
                    {
                      currency = '£';
                    }

                    let reservationsLink = this.props.searchUrl + '/hotel-checkout?arrivalDate=' + this.props.arrivalDate + '&nights=' + this.props.nights + '&rooms=' + this.props.rooms + '&guests=' + this.props.guests + '&propId=' + hotelRoom.propertyId + '&rateCode=' + hotelRoom.rateCode + '&roomTypeCode=' + hotelRoom.roomTypeCode + '&supplierType=' + hotelRoom.supplierType;

                    return (
                      <li>
                        <a className="booking-item">
                          <div className="row">
                            <div className="col-md-3 mb-3">
                              <img src={url}/>
                            </div>
                            <div className="col-md-6">
                              <h5 className="booking-item-title">{titleCase(hotelRoom.roomTypeDescription)}</h5>
                              <p className={hotelRoom.rateInfos.rateInfo[0].promo ? "text-small sale" : "hide"}>
                                {hotelRoom.rateInfos.rateInfo[0].promoDescription}
                              </p>

                              <div className="row hidden-sm-down">
                                <div className="col-md-4">
                                  <ul className="nav card-text mb-2">
                                    <li className="nav-item bedType">Sleeps: {roomOccupancy}</li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul className="nav card-text mb-2">
                                    {
                                      hotelRoom.bedTypes.bedType.map((bedType, bedIndex) => {
                                        return (
                                          <li className="nav-item bedType" key={bedIndex}><i className="fa fa-bed"></i> {bedType.description}</li>
                                        );
                                      })
                                    }
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  {roomCount}
                                </div>
                              </div>
                              <p className={hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.nonRefundable ? 'mb-3' : 'hide'}>Non-Refundable</p>
                              <p className="text-small">Cancellation Policy:<br />{hotelRoom.rateInfos.rateInfo[0].cancellationPolicy}</p>

                            </div>
                            <div className="col-md-3 hidden-sm-down">
                              <h5 className="hotelPrice mb-1 priceRight">{currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total} </h5>
                              <br /><br />
                              <a href={reservationsLink} className="btn btn-primary mb-1 priceRight" onClick={this.trackClick}>Book Room</a>
                              <br />
                              <small className="priceBreakdown priceRight">
                                <span><strong>Breakdown:</strong></span>
                                <span>Nightly Rate: {currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.nightlyRateTotal}</span>
                                <span>Tax & Service Fees: {currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.surchargeTotal}</span>
                                <span className="mb-3"><strong>Total: {currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total}</strong></span>
                                <span className={hotelRoom.rateInfos.rateInfo[0].hotelFees != null && hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee != null? '' : 'hide'}>Due at Hotel (City/local Tax): {currency}{hotelRoom.rateInfos.rateInfo[0].hotelFees != null ? hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee != null ? hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee[0].amount : '' : ''}</span>
                              </small>
                            </div>

                            <div className="col-md-12 hidden-sm-up">
                              <div className="row">
                                <div className="col-6">
                                  <ul className="nav card-text mb-2">
                                    <li className="nav-item bedType">Sleeps: {roomOccupancy}</li>
                                  </ul>

                                  <ul className="nav card-text mb-2">
                                    {
                                      hotelRoom.bedTypes.bedType.map((bedType, bedIndex) => {
                                        return (
                                          <li className="nav-item bedType" key={bedIndex}><i className="fa fa-bed"></i> {bedType.description}</li>
                                        );
                                      })
                                    }
                                  </ul>

                                  {roomCount}
                                </div>
                                <div className="col-6">
                                  <h5 className="hotelPrice mb-1 priceRight">{currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total} </h5>
                                  <br />
                                  <a href={reservationsLink} className="btn btn-primary mb-1 priceRight" onClick={this.trackClick}>Book Room</a>
                                </div>
                                <div className="col-12">
                                  <small className="priceBreakdownMobile">
                                      <span><strong>Breakdown:</strong><br />
                                        Nightly Rate: {currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.nightlyRateTotal}  &bull;
                                        Tax Recovery Charges: {currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.surchargeTotal}</span>
                                    <span className="mb-3"><strong>Total: {currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total}</strong></span>
                                    <span className={hotelRoom.rateInfos.rateInfo[0].hotelFees != null && hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee != null ? '' : 'hide'}>Due at Hotel (City/local Tax): {currency}{hotelRoom.rateInfos.rateInfo[0].hotelFees != null ? hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee != null ? hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee[0].amount : '' : ''}</span>

                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        );
      }
      else {
        return (
          <div className="row">
            <div className="col-md-12" id="rooms">
              <div className="gap gap-small"></div>
              <h4>Room Availability</h4>
              <hr />
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
        );
      }
    }
    else {
      return (
        <div className="row">
          <div className="col-md-12" id="rooms">
            <h4>Room Availability</h4>
            <hr />
            <p>Showing rooms available between <strong>{this.state.formattedArrivalDate}</strong> and <strong>{this.state.formattedDepartureDate}</strong></p>
            <SearchForm searchUrl={this.props.searchUrl} buttonName="Search Rooms" rooms={this.state.rooms} nights={this.state.nights} arrivalDate={this.state.arrivalDate} guests={this.state.guests} useFunction={true} handleFormSubmit={this.handleFormSubmit} isSideBar={false} city={this.props.hotelName} lockLocation={true}/>
            <div className="row">
              <Loader showLoader={true} />
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
  parentLocationId: PropTypes.number.isRequired,
  parentLocationName: PropTypes.string.isRequired,
  parentLocationNameLong: PropTypes.string.isRequired,
  parentLocationImage: PropTypes.string.isRequired,
  parentLocationUrl: PropTypes.string.isRequired,
  parentLocationType: PropTypes.string.isRequired,
  locationId: PropTypes.number.isRequired,
  hotelId: PropTypes.number.isRequired,
  regionName: PropTypes.string.isRequired,
  regionNameLong: PropTypes.string.isRequired,
  regionNameImage: PropTypes.string.isRequired,
  regionUrl: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
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

