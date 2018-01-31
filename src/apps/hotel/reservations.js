import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as modalActions from '../../actions/common/modalActions';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../actions/location/travelContent/hotelActions';
import * as locationActions from '../../actions/location/locationActions';
import HotelBookingHeader from '../../components/content/headers/hotelBooking';
import HotelOverview from '../../components/layout/cards/hotels/hotelOverview';
import CardTypeDownList from '../../components/forms/common/cardTypeDropDownList';
import MonthDropDownList from '../../components/forms/common/monthDropDownList';
import YearDropDownList from '../../components/forms/common/yearDropDownList';
import CountryDropDownList from '../../components/forms/common/countryDropDownList';
import Loader from '../../components/loaders/globalLoader';
import GoogleMaps from '../../components/maps/googleMap';
import AttractionsNearLocation from '../../components/layout/cards/location/attractionsNearLocation';

import Toastr from 'toastr';
let moment = require('moment');
let titleCase = require('title-case');

class HotelReservation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isBookingRoom: false
      , bookingError: false
      , showConfirmation: false
      , isLoadingHotel: true
      , isLoadingLocation: true
      , isLoadingRoom: true
      , arrivalDate: this.props.arrivalDate
      , formattedArrivalDate: new moment(this.props.arrivalDate).format('LL')
      , formattedDepartDate: new moment(this.props.arrivalDate).add(this.props.nights, 'days').format('LL')
      , nights: this.props.nights
      , guests: this.props.guests
      , rooms: this.props.rooms
      , booking: {
        firstName: 'test'
        ,lastName:  'tester'
        , emailAddress:  'test@travelnow.com'
        , addressLine1:  'travelnow'
        , addressCity:  'Seattle'
        , addressState:  'WA'
        , addressCountry:  'US'
        , addressPostcode:  '98004'
        , cardType:  'CA'
        , cardName:  'Test Booking'
        , cardNumber:  '5401999999999999'
        , expirationDateMonth:  '11'
        , expirationDateYear:  '2020'
        , securityCode:  '123'
        , specialInstructions: ''
      }
      , error: ''
    };
    this.bookHotel = this.bookHotel.bind(this);
    this.changeField = this.changeField.bind(this);
    if (process.env.NODE_ENV === 'production') {
      let booking = this.state.booking;
      booking.firstName = '';
      booking.lastName = '';
      booking.emailAddress = '';
      booking.addressLine1 = '';
      booking.addressCity = '';
      booking.addressState = '';
      booking.addressCountry = '';
      booking.addressPostcode = '';
      booking.cardType = '';
      booking.cardName = '';
      booking.cardNumber = '';
      booking.expirationDateMonth = '';
      booking.expirationDateYear = '';
      booking.securityCode = '';

    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();

    if (typeof window !== 'undefined' && window.location && window.location.protocol === 'http:' && !this.isLocalHost(window.location.hostname)) {
      window.location.href = window.location.href.replace(/^http(?!s)/, 'https');
    }
  }

  isLocalHost(hostname) {
    return !!(hostname === 'localhost' ||
    hostname === '[::1]' ||
    hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
  }

  loadLocation() {
    this.setState({isLoadingLocation: true});
    this.props.locationActions.loadLocationById(this.props.locationId, true)
      .then(() => {
        this.setState({isLoadingLocation: false});
        this.loadHotel();
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  loadHotel() {
    this.setState({isLoadingHotel: true});
    this.props.hotelActions.loadHotelById(this.props.locationId, this.props.hotelId, 'en_en', 'GBP')
      .then(() => {
        this.setState({ isLoadingHotel: false });
        this.loadRoom();
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingHotel: false});
      });
  }

  loadRoom() {
    this.setState({isLoadingRoom: true});
    this.props.hotelActions.loadHotelRoomByRoomCode(this.props.locationId, this.props.hotelId, this.props.arrivalDate, this.props.nights, this.props.rooms, this.props.guests, 'en_en', 'GBP', this.props.roomTypeCode)
      .then(() => {
        this.setState({ isLoadingRoom: false });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingRoom: false});
      });
  }

  changeField(event) {
    const field = event.target.name;
    let booking = this.state.booking;
    booking[field] = event.target.value;
    this.setState({booking: booking});
  }

  bookHotel(e) {
    e.preventDefault();
    this.setState({error: ''});
    this.validateForm();

    this.setState({isBookingRoom: true, bookingError: false });

    this.props.hotelActions.bookHotelRoom(this.props.locationId, this.props.hotelId, this.props.arrivalDate, this.props.nights, this.props.hotelRoom.supplierType, this.props.hotelRoom.rateInfos.rateInfo[0].roomGroup.room.rateKey, this.props.hotelRoom.roomTypeCode, this.props.hotelRoom.rateCode, this.props.hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total, this.props.guests, this.state.booking.firstName, this.state.booking.lastName, this.props.hotelRoom.bedTypes.bedType[0].id, 0, '', '', 0,  0, '', '', 0, this.state.booking.emailAddress, this.state.booking.firstName, this.state.booking.lastName, this.state.booking.homePhone, this.state.booking.workPhone, this.state.booking.cardType, this.state.booking.cardNumber, this.state.booking.securityCode, this.state.booking.expirationDateMonth, this.state.booking.expirationDateYear, this.state.booking.addressLine1, this.state.booking.addressCity, this.state.booking.addressState, this.state.booking.addressCountry, this.state.booking.addressPostcode, this.state.booking.specialInstructions)
      .then(() => {
        if (this.props.reservation.hotelRoomReservationResponse.eanWsError)
        {
          this.setState({error: this.props.reservation.hotelRoomReservationResponse.eanWsError.presentationMessage});
          this.setState({isBookingRoom: false, bookingError: true});
        }
        else {
          if (this.props.reservation.hotelRoomReservationResponse.confirmationNumbers > 0) {
            this.setState({isBookingRoom: false, bookingError: false, showConfirmation: true});
          }
          else {
            this.setState({isBookingRoom: false, bookingError: false});
          }
        }
      })
      .catch(error => {
        this.setState({error: error});
        this.setState({isBookingRoom: false, bookingError: true});
      });
  }

  validateForm() {
    if (this.state.booking.firstName == '') {
      this.setState({error: 'Please enter your first name'});
      return;
    }
    if (this.state.booking.lastName == '') {
      this.setState({error: 'Please enter your last name'});
      return;
    }
    if (this.state.booking.emailAddress == '') {
      this.setState({error: 'Please enter your email address'});
      return;
    } else {
      let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegEx.test(this.state.booking.emailAddress.toLowerCase())) {
        this.setState({error: 'Please enter a valid email address'});
        return;
      }
    }
    if (this.state.booking.addressLine1 == '') {
      this.setState({error: 'Please enter the first line of your address'});
      return;
    }
    if (this.state.booking.addressCity == '') {
      this.setState({error: 'Please enter your town/city'});
      return;
    }
    if (this.state.booking.addressCountry == '') {
      this.setState({error: 'Please select your country'});
      return;
    }

    if (this.state.booking.cardName == '') {
      this.setState({error: 'Please enter the name on your debit/credit card'});
      return;
    }
    if (this.state.booking.cardNumber == '') {
      this.setState({error: 'Please enter the long 16 digit number on your debit/credit card'});
      return;
    }
    else {
      let cardRegex = /^[0-9]{16}$/;
      if (!cardRegex.test(this.state.booking.cardNumber.toLowerCase())) {
        this.setState({error: 'Please enter a valid debit/credit card number'});
        return;
      }
    }
    if (this.state.booking.expirationDateMonth == '' || this.state.booking.expirationDateYear == '') {
      this.setState({error: 'Please select your debit/credit card expiry date'});
      return;
    }
    if (this.state.booking.securityCode == '') {
      this.setState({error: 'Please enter the 3 digit security number on the back of your card'});
      return;
    }
  }

  render() {

    if (!this.state.isLoadingLocation && !this.state.isLoadingHotel && !this.state.isLoadingRoom) {
      document.title = 'Book to stay in ' + this.props.hotel.hotelInformationResponse.hotelSummary.name;

      let currency = '£';

      if (this.props.hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.currencyCode == 'GBP') {
        currency = '£';
      }
      let bookNowText = 'Book now for ' + currency + this.props.hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total;

      let markerArray = [];
      markerArray.push({
        "url": "",
        "regionName": this.props.hotel.hotelInformationResponse.hotelSummary.name,
        "subClass": "Hotel",
        "locationCoordinates": {
          "latitude": this.props.hotel.hotelInformationResponse.hotelSummary.latitude,
          "longitude": this.props.hotel.hotelInformationResponse.hotelSummary.longitude
        }
      });

      if (!this.state.showConfirmation) {
        return (
          <div>
            <HotelBookingHeader guests={this.props.guests} nights={this.props.nights}
                                arrivalDate={this.props.arrivalDate} contentType="hotels" hotelId={this.props.hotelId}
                                location={this.props.location}
                                hotelName={this.props.hotel.hotelInformationResponse.hotelSummary.name}
                                hotelImage={this.props.hotel.hotelInformationResponse.hotelImages.hotelImage[0].highResolutionUrl}
                                title={"Book " + titleCase(this.props.hotel.hotelInformationResponse.hotelSummary.name)}
                                showSubTitle={true}

            />
            <div className="gap gap-small"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <form>
                    <div className="row">
                      <div className={this.state.error.length > 0 ? "alert alert-danger col-md-12" : "hide"}
                           role="alert">
                        <strong>Oops!</strong><br />{this.state.error}
                      </div>
                      <div className="col-md-12">
                        <h5><i className="fa fa-user"/> Your Email Address</h5>
                        <p>Please add your email address below so we can process your booking and email you your confirmation.</p>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group">
                          <label htmlFor="emailAddress">Email address (*)</label>
                          <input type="email" className="form-control" id="emailAddress" name="emailAddress"
                                 placeholder="" aria-describedby="emailHelp" onChange={this.changeField} maxLength={50}
                                 value={this.state.booking.emailAddress}/>
                          <small id="emailHelp" className="form-text text-muted">Please enter the email address where
                            you would like to receive your confirmation.
                          </small>
                        </div>
                      </div>
                      <div className="col-md-12 hide">
                        <hr />
                      </div>
                      <div className="col-md-6 hide">
                        <div className="form-group">
                          <label htmlFor="addressState">County / State / Province</label>
                          <input type="text" className="form-control" id="addressState" name="addressState"
                                 placeholder="County / State / Provincety" onChange={this.changeField} maxLength={10}
                                 value={this.state.booking.addressState}/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="addressCountry">Country (*)</label>
                          <CountryDropDownList value={this.state.booking.addressCountry} cssClass="form-control" name="addressCountry" changeValue={this.changeField} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <hr />
                        <h5><i className="fa fa-credit-card"/> Payment Information</h5>
                        <p>Please complete your payment details below. <strong>We never store your payment details for added
                          security.</strong></p>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="firstName">Cardholder first name (*)</label>
                          <input type="text" className="form-control" id="firstName" name="firstName"
                                 placeholder="First name" onChange={this.changeField} maxLength={20}
                                 value={this.state.booking.firstName}/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="lastName">Cardholder last name (*)</label>
                          <input type="text" className="form-control" id="lastName" name="lastName"
                                 placeholder="Last name" onChange={this.changeField} maxLength={20}
                                 value={this.state.booking.lastName}/>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="addressLine1">Billing address line 1 (*)</label>
                              <input type="text" className="form-control" id="addressLine1" name="addressLine1"
                                     placeholder="Address line 1" onChange={this.changeField} maxLength={20}
                                     value={this.state.booking.addressLine1}/>
                            </div>
                          </div>

                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="addressCity">Billing city (*)</label>
                              <input type="text" className="form-control" id="addressCity" name="addressCity"
                                     placeholder="City" onChange={this.changeField} maxLength={20}
                                     value={this.state.booking.addressCity}/>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="addressPostcode">Billing Zip/Post code</label>
                              <input type="text" className="form-control" id="addressPostcode" name="addressPostcode"
                                     placeholder="Zip/Post code" onChange={this.changeField} maxLength={10}
                                     value={this.state.booking.addressPostcode}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="expirationDateMonth">Credit card type (*)</label>
                          <CardTypeDownList value={this.state.booking.cardType} cssClass="form-control" name="cardType" changeValue={this.changeField} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="cardNumber">Debit/Credit card number (*)</label>
                          <input type="number" className="form-control" id="cardNumber" name="cardNumber" placeholder=""
                                 onChange={this.changeField} maxLength={16} value={this.state.booking.cardNumber}/>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-6">
                            <div className="form-group">
                              <label htmlFor="expirationDateMonth">Expiration date (*)</label>
                              <MonthDropDownList value={this.state.booking.expirationDateMonth} cssClass="form-control" name="expirationDateMonth" changeValue={this.changeField} />
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="form-group">
                              <label htmlFor="expirationDateYear">&nbsp;</label>
                              <YearDropDownList value={this.state.booking.expirationDateYear} cssClass="form-control" name="expirationDateYear" changeValue={this.changeField} />
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Security code (*)</label>
                              <input type="password" className="form-control" id="securityCode" name="securityCode"
                                     placeholder="" aria-describedby="securityCodeHelp" onChange={this.changeField}
                                     maxLength={3} value={this.state.booking.securityCode}/>
                              <small id="securityCodeHelp" className="form-text text-muted">Enter the last 3 digits on
                                the back of the card
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <hr />
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="lastName">Special instructions</label>
                          <textarea type="text" className="form-control" id="specialInstructions" name="specialInstructions"
                                 placeholder="Enter any special instructions that you'd like to tell the hotel" onChange={this.changeField} maxLength={200} rowSpan={10}
                                 value={this.state.booking.specialInstructions}/>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <hr />
                        <p><strong>Important information about your booking</strong></p>
                        <p>{this.props.hotelRoom.rateInfos.rateInfo[0].cancellationPolicy}</p>
                        <p>By selecting to complete this booking I acknowledge that I have read and accept
                          the Rules & Restrictions, Terms of Use Opens, Privacy Policy. and Travel Advice.</p>
                      </div>
                      <div className="col-md-12">
                        <hr />
                      </div>
                      <div className="col-md-8">
                        <div className={this.state.error.length > 0 ? "alert bookingForm alert-danger col-md-12 mb-0" : "hide"} role="alert">
                          <small>There's a problem with your details, please scroll to the top of the page for more
                            details.
                          </small>
                        </div>
                      </div>
                      <div className="col-md-4 text-right">
                        <input type="submit" className="btn btn-primary" value={bookNowText} onClick={this.bookHotel} disabled={this.state.isBookingRoom}/>
                      </div>
                      <div className="col-md-12 mb-3">
                        <hr />
                      </div>
                      <div className="col-md-12">
                        <p>
                          <small>We use secure transmission and encrypted storage to protect your personal
                            information. We pass your details through to Expedia to complete the booking. This payment
                            will be processed in Spain. This does not apply when the
                            travel provider (airline/hotel/rail, etc.) processes your payment.
                          </small>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-4">
                  <HotelOverview loadingHotels={this.state.isLoadingHotel && this.state.isBookingRoom} currency={currency} hotel={this.props.hotel} hotelRoom={this.props.hotelRoom}
                                 guests={this.state.guests} arrivalDate={this.state.formattedArrivalDate} nights={this.state.nights} departureDate={this.state.formattedDepartDate}
                  />
                </div>
              </div>
            </div>
            <div className="gap gap-small"></div>
          </div>
        );
      }
      else {
        return (
          <div>
            <HotelBookingHeader guests={this.props.guests} nights={this.props.nights}
                                arrivalDate={this.props.arrivalDate} contentType="hotels" hotelId={this.props.hotelId}
                                location={this.props.location}
                                hotelName={this.props.hotel.hotelInformationResponse.hotelSummary.name}
                                hotelImage={this.props.hotel.hotelInformationResponse.hotelImages.hotelImage[0].highResolutionUrl}
                                title={"Booking Confirmed"}
                                showSubTitle={false}

            />
            <div className="gap gap-small"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h4>You're going to {this.props.reservation.hotelRoomReservationResponse.hotelCity}!!</h4>
                  <p>
                    <strong>Confirmation Number:</strong> {this.props.reservation.hotelRoomReservationResponse.confirmationNumbers}<br />
                    <strong>Itinerary Number:</strong> {this.props.reservation.hotelRoomReservationResponse.itineraryId}
                  </p>
                  <p><strong>Address:</strong> {this.props.reservation.hotelRoomReservationResponse.hotelName} {this.props.reservation.hotelRoomReservationResponse.hotelAddress}, {this.props.reservation.hotelRoomReservationResponse.hotelCity} {this.props.reservation.hotelRoomReservationResponse.hotelPostalCode != 0 ? this.props.reservation.hotelRoomReservationResponse.hotelPostalCode : ''}</p>

                  <p><strong>Check-in Instructions:</strong><br />
                    <span dangerouslySetInnerHTML={{__html: this.props.reservation.hotelRoomReservationResponse.checkInInstructions}} className="checkIn"></span></p>

                  <p className={this.props.reservation.hotelRoomReservationResponse.rateInfos.rateInfo.cancellationPolicy ? '' : 'hide'}><strong>Cancellation Policy:</strong><br />
                    <span dangerouslySetInnerHTML={{__html: this.props.reservation.hotelRoomReservationResponse.rateInfos.rateInfo.cancellationPolicy}} className="checkIn"></span></p>

                  <GoogleMaps locationType="Hotel" latitude={this.props.hotel.hotelInformationResponse.hotelSummary.latitude}
                              longitude={this.props.hotel.hotelInformationResponse.hotelSummary.longitude}
                              text={this.props.hotel.hotelInformationResponse.hotelSummary.name} zoom={15}
                              isLoading={this.state.isLoadingHotel} markerArray={markerArray}/>


                  <div className="gap gap-small"></div>
                  <p className={this.props.reservation.hotelRoomReservationResponse.drivingDirections ? '' : 'hide'}><strong>Directions:</strong><br />
                    <span dangerouslySetInnerHTML={{__html: this.props.reservation.hotelRoomReservationResponse.drivingDirections}} className="checkIn"></span></p>


                </div>
                <div className="col-md-4">
                  <HotelOverview loadingHotels={this.state.isLoadingHotel && this.state.isBookingRoom} currency={currency} hotel={this.props.hotel} hotelRoom={this.props.hotelRoom}
                                 guests={this.state.guests} arrivalDate={this.state.formattedArrivalDate} nights={this.state.nights} departureDate={this.state.formattedDepartDate}
                  />
                </div>
              </div>

            </div>
            <div className="gap gap-small"></div>

            <AttractionsNearLocation useParent={false} location={this.props.location} hasLoadedLocation={!this.state.isLoadingLocation} url={this.props.location.parentUrl}/>
          </div>
        );
      }
    }
    else {
      return (<Loader/>);
    }
  }
}

HotelReservation.propTypes = {
  hotelId: PropTypes.number,
  hotelActions: PropTypes.object.isRequired,
  hotel: PropTypes.object,
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  modalActions: PropTypes.object.isRequired,
  nights: PropTypes.number,
  rooms: PropTypes.number,
  guests: PropTypes.number,
  arrivalDate: PropTypes.string,
  searchUrl: PropTypes.string,
  queryString: PropTypes.string,
  propId: PropTypes.string,
  rateCode: PropTypes.string,
  roomTypeCode: PropTypes.string,
  hotelRoom: PropTypes.object,
  reservation: PropTypes.object,
  supplierType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    hotel: state.hotels.hotel ? state.hotels.hotel : {},
    hotelId: ownProps.params.hotelId ? parseInt(ownProps.params.hotelId) : 0,
    arrivalDate: ownProps.location.query.arrivalDate !== undefined ? ownProps.location.query.arrivalDate : moment().add(7, 'days').format('YYYY-MM-DD'),
    rooms: ownProps.location.query.rooms !== undefined ? parseInt(ownProps.location.query.rooms) : 1,
    guests: ownProps.location.query.guests !== undefined ? parseInt(ownProps.location.query.guests) : 1,
    nights: ownProps.location.query.nights !== undefined ? parseInt(ownProps.location.query.nights) : 1,
    propId: ownProps.location.query.propId !== undefined ? ownProps.location.query.propId : '',
    supplierType: ownProps.location.query.supplierType !== undefined ? ownProps.location.query.supplierType : '',
    rateCode: ownProps.location.query.rateCode !== undefined ? ownProps.location.query.rateCode : '',
    roomTypeCode: ownProps.location.query.roomTypeCode !== undefined ? ownProps.location.query.roomTypeCode : '',
    searchUrl: ownProps.location.pathname,
    queryString: ownProps.location.search,
    hotelRoom: state.hotels.hotelRoom ? state.hotels.hotelRoom : {},
    reservation: state.hotels.reservation ? state.hotels.reservation : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hotelActions: bindActionCreators(hotelActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelReservation);
