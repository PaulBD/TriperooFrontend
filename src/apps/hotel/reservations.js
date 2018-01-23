import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as modalActions from '../../actions/common/modalActions';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../actions/location/travelContent/hotelActions';
import * as locationActions from '../../actions/location/locationActions';
import HotelBookingHeader from '../../components/content/headers/hotelBooking';
import Loader from '../../components/loaders/globalLoader';

import Toastr from 'toastr';
let moment = require('moment');

class HotelReservation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isBookingRoom: false
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
        ,lastName: 'tester'
        , emailAddress: 'test@travelnow.com'
        , addressLine1: 'travelnow'
        , addressCity: 'Seattle'
        , addressState: 'WA'
        , addressCountry: 'US'
        , addressPostcode: '98004'
        , cardName: 'Test Booking'
        , cardNumber: '5401999999999999'
        , expirationDateMonth: '11'
        , expirationDateYear: '2020'
        , securityCode: '123'
      }
      , error: ''
    };
    this.bookHotel = this.bookHotel.bind(this);
    this.changeField = this.changeField.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
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

    this.setState({isBookingRoom: true});

    this.props.hotelActions.bookHotelRoom(this.props.locationId, this.props.hotelId, this.props.arrivalDate, this.props.nights, this.props.hotelRoom.supplierType, this.props.hotelRoom.rateInfos.rateInfo[0].roomGroup.room.rateKey, this.props.hotelRoom.roomTypeCode, this.props.hotelRoom.rateCode, this.props.hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total, this.props.guests, this.state.booking.firstName, this.state.booking.lastName, this.props.hotelRoom.bedTypes.bedType[0].id, 0, '', '', 0,  0, '', '', 0, this.state.booking.emailAddress, this.state.booking.firstName, this.state.booking.lastName, this.state.booking.homePhone, this.state.booking.workPhone, 'CA', this.state.booking.cardNumber, this.state.booking.securityCode, this.state.booking.expirationDateMonth, this.state.booking.expirationDateYear, this.state.booking.addressLine1, this.state.booking.addressCity, this.state.booking.addressState, this.state.booking.addressCountry, this.state.booking.addressPostcode)
      .then(() => {
        this.setState({ isBookingRoom: false });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isBookingRoom: false});
      });

    console.log(this.state.booking);
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
      var cardRegex = /^[0-9]{16}$/;
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

      console.log(this.props.hotelRoom);
      console.log(this.props.hotel);

      document.title = 'Book to stay in ' + this.props.hotel.hotelInformationResponse.hotelSummary.name;

      let currency = '£';

      if (this.props.hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.currencyCode == 'GBP')
      {
        currency = '£';
      }
      let bookNowText = 'Book now for ' + currency + this.props.hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total;

      return (
        <div>
          <HotelBookingHeader guests={this.props.guests} nights={this.props.nights} arrivalDate={this.props.arrivalDate} contentType='hotels' hotelId={this.props.hotelId}
                              location={this.props.location}
                              hotelName={this.props.hotel.hotelInformationResponse.hotelSummary.name}
                              hotelImage={this.props.hotel.hotelInformationResponse.hotelImages.hotelImage[0].highResolutionUrl}

          />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <form>
                  <div className="row">
                    <div className={this.state.error.length > 0 ? "alert alert-danger col-md-12" : "hide"} role="alert">
                      <strong>Oops!</strong><br />{this.state.error}
                    </div>
                    <div className="col-md-12">
                      <h5><i className="fa fa-user" /> Your Details</h5>
                      <p>Please complete your details below so we can process your booking.</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="firstName">First name (*)</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First name" onChange={this.changeField} maxLength={20} value={this.state.booking.firstName}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="lastName">Last name (*)</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last name" onChange={this.changeField} maxLength={20} value={this.state.booking.lastName}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="emailAddress">Email address (*)</label>
                        <input type="email" className="form-control" id="emailAddress" name="emailAddress" placeholder="" aria-describedby="emailHelp" onChange={this.changeField} maxLength={50} value={this.state.booking.emailAddress}/>
                        <small id="emailHelp" className="form-text text-muted">Please enter the email address where you would like to receive your confirmation.</small>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <hr />
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="addressLine1">Address line 1 (*)</label>
                        <input type="text" className="form-control" id="addressLine1" name="addressLine1" placeholder="Address line 1" onChange={this.changeField} maxLength={20}  value={this.state.booking.addressLine1}/>
                      </div>
                      <div className="form-group">
                        <label for="addressCity">City (*)</label>
                        <input type="text" className="form-control" id="addressCity" name="addressCity" placeholder="City" onChange={this.changeField} maxLength={20} value={this.state.booking.addressCity}/>
                      </div>
                      <div className="form-group">
                        <label for="addressPostcode">Zip/Post code</label>
                        <input type="text" className="form-control" id="addressPostcode" name="addressPostcode" placeholder="Zip/Post code" onChange={this.changeField} maxLength={10} value={this.state.booking.addressPostcode}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group addressEmpty">
                      </div>
                      <div className="form-group">
                        <label for="addressState">County / State / Province</label>
                        <input type="text" className="form-control" id="addressState" name="addressState" placeholder="County / State / Provincety" onChange={this.changeField} maxLength={10} value={this.state.booking.addressState}/>
                      </div>
                      <div className="form-group">
                        <label for="addressCountry">Country (*)</label>
                        <select className="form-control" id="addressCountry" name="addressCountry" defaultValue="" onChange={this.changeField} value={this.state.booking.addressCountry}>
                          <option value="" >Please Select</option>
                          <option  value="AFG">Afghanistan</option>
                          <option  value="ALB">Albania</option>
                          <option  value="DZA">Algeria</option>
                          <option  value="ASM">American Samoa</option>
                          <option  value="AND">Andorra</option>
                          <option  value="AGO">Angola</option>
                          <option  value="AIA">Anguilla</option>
                          <option  value="ATA">Antarctica</option>
                          <option  value="ATG">Antigua And Barbuda</option>
                          <option  value="ARG">Argentina</option>
                          <option  value="ARM">Armenia</option>
                          <option  value="ABW">Aruba</option>
                          <option  value="AUS">Australia</option>
                          <option  value="AUT">Austria</option>
                          <option  value="AZE">Azerbaijan</option>
                          <option  value="BHS">Bahamas</option>
                          <option  value="BHR">Bahrain</option>
                          <option  value="BGD">Bangladesh</option>
                          <option  value="BRB">Barbados</option>
                          <option  value="BLR">Belarus</option>
                          <option  value="BEL">Belgium</option>
                          <option  value="BLZ">Belize</option>
                          <option  value="BEN">Benin</option>
                          <option  value="BMU">Bermuda</option>
                          <option  value="BTN">Bhutan</option>
                          <option  value="BOL">Bolivia, Plurinational State Of</option>
                          <option  value="BES">Bonaire, Saint Eustatius And Saba</option>
                          <option  value="BIH">Bosnia &amp; Herzegovina</option>
                          <option  value="BWA">Botswana</option>
                          <option  value="BVT">Bouvet Island</option>
                          <option  value="BRA">Brazil</option>
                          <option  value="ATB">British Antarctic Territory</option>
                          <option  value="IOT">British Indian Ocean Territory</option>
                          <option  value="BRN">Brunei Darussalam</option>
                          <option  value="BGR">Bulgaria</option>
                          <option  value="BFA">Burkina Faso</option>
                          <option  value="BUR">Burma</option>
                          <option  value="BDI">Burundi</option>
                          <option  value="BYS">Byelorussian SSR</option>
                          <option  value="CPV">Cabo Verde</option>
                          <option  value="KHM">Cambodia</option>
                          <option  value="CMR">Cameroon</option>
                          <option  value="CAN">Canada</option>
                          <option  value="CTE">Canton and Enderbury Islands</option>
                          <option  value="CYM">Cayman Islands</option>
                          <option  value="CAF">Central African Republic</option>
                          <option  value="TCD">Chad</option>
                          <option  value="CHL">Chile</option>
                          <option  value="CHN">China</option>
                          <option  value="CXR">Christmas Island</option>
                          <option  value="CCK">Cocos (Keeling) Islands</option>
                          <option  value="COL">Colombia</option>
                          <option  value="COM">Comoros</option>
                          <option  value="COK">Cook Islands</option>
                          <option  value="CRI">Costa Rica</option>
                          <option  value="HRV">Croatia</option>
                          <option  value="CUB">Cuba</option>
                          <option  value="CUW">Curacao</option>
                          <option  value="CYP">Cyprus</option>
                          <option  value="CZE">Czech Republic</option>
                          <option  value="CSK">Czechoslovakia</option>
                          <option  value="CIV">Côte d&#x27;Ivoire</option>
                          <option  value="DHY">Dahomey</option>
                          <option  value="COD">Democratic Republic Of Congo</option>
                          <option  value="DNK">Denmark</option>
                          <option  value="DJI">Djibouti</option>
                          <option  value="DMA">Dominica</option>
                          <option  value="DOM">Dominican Republic</option>
                          <option  value="ATN">Dronning Maud Land</option>
                          <option  value="TMP">East Timor</option>
                          <option  value="ECU">Ecuador</option>
                          <option  value="EGY">Egypt</option>
                          <option  value="SLV">El Salvador</option>
                          <option  value="GNQ">Equatorial Guinea</option>
                          <option  value="ERI">Eritrea</option>
                          <option  value="EST">Estonia</option>
                          <option  value="ETH">Ethiopia</option>
                          <option  value="FLK">Falkland Islands</option>
                          <option  value="FRO">Faroe Islands</option>
                          <option  value="FJI">Fiji</option>
                          <option  value="FIN">Finland</option>
                          <option  value="FRA">France</option>
                          <option  value="AFI">French Afar and Issas</option>
                          <option  value="GUF">French Guiana</option>
                          <option  value="PYF">French Polynesia</option>
                          <option  value="ATF">French Southern Territories</option>
                          <option  value="ATF">French Southern and Antarctic Territories</option>
                          <option  value="GAB">Gabon</option>
                          <option  value="GMB">Gambia</option>
                          <option  value="GEO">Georgia</option>
                          <option  value="DDR">German Democratic Republic</option>
                          <option  value="DEU">Germany</option>
                          <option  value="GHA">Ghana</option>
                          <option  value="GIB">Gibraltar</option>
                          <option  value="GEL">Gilbert and Ellice Islands</option>
                          <option  value="GRC">Greece</option>
                          <option  value="GRL">Greenland</option>
                          <option  value="GRD">Grenada</option>
                          <option  value="GLP">Guadeloupe</option>
                          <option  value="GUM">Guam</option>
                          <option  value="GTM">Guatemala</option>
                          <option  value="GGY">Guernsey</option>
                          <option  value="GIN">Guinea</option>
                          <option  value="GNB">Guinea-bissau</option>
                          <option  value="GUY">Guyana</option>
                          <option  value="HTI">Haiti</option>
                          <option  value="HMD">Heard Island And McDonald Islands</option>
                          <option  value="HND">Honduras</option>
                          <option  value="HKG">Hong Kong</option>
                          <option  value="HUN">Hungary</option>
                          <option  value="ISL">Iceland</option>
                          <option  value="IND">India</option>
                          <option  value="IDN">Indonesia</option>
                          <option  value="IRN">Iran, Islamic Republic Of</option>
                          <option  value="IRQ">Iraq</option>
                          <option  value="IRL">Ireland</option>
                          <option  value="IMN">Isle Of Man</option>
                          <option  value="ISR">Israel</option>
                          <option  value="ITA">Italy</option>
                          <option  value="JAM">Jamaica</option>
                          <option  value="JPN">Japan</option>
                          <option  value="JEY">Jersey</option>
                          <option  value="JTN">Johnston Island</option>
                          <option  value="JOR">Jordan</option>
                          <option  value="KAZ">Kazakhstan</option>
                          <option  value="KEN">Kenya</option>
                          <option  value="KIR">Kiribati</option>
                          <option  value="PRK">Korea, Democratic People&#x27;s Republic Of</option>
                          <option  value="KOR">Korea, Republic Of</option>
                          <option  value="KWT">Kuwait</option>
                          <option  value="KGZ">Kyrgyzstan</option>
                          <option  value="LAO">Lao People&#x27;s Democratic Republic</option>
                          <option  value="LVA">Latvia</option>
                          <option  value="LBN">Lebanon</option>
                          <option  value="LSO">Lesotho</option>
                          <option  value="LBR">Liberia</option>
                          <option  value="LBY">Libya</option>
                          <option  value="LIE">Liechtenstein</option>
                          <option  value="LTU">Lithuania</option>
                          <option  value="LUX">Luxembourg</option>
                          <option  value="MAC">Macao</option>
                          <option  value="MKD">Macedonia, The Former Yugoslav Republic Of</option>
                          <option  value="MDG">Madagascar</option>
                          <option  value="MWI">Malawi</option>
                          <option  value="MYS">Malaysia</option>
                          <option  value="MDV">Maldives</option>
                          <option  value="MLI">Mali</option>
                          <option  value="MLT">Malta</option>
                          <option  value="MHL">Marshall Islands</option>
                          <option  value="MTQ">Martinique</option>
                          <option  value="MRT">Mauritania</option>
                          <option  value="MUS">Mauritius</option>
                          <option  value="MYT">Mayotte</option>
                          <option  value="MEX">Mexico</option>
                          <option  value="FSM">Micronesia, Federated States Of</option>
                          <option  value="MID">Midway Islands</option>
                          <option  value="MDA">Moldova</option>
                          <option  value="MCO">Monaco</option>
                          <option  value="MNG">Mongolia</option>
                          <option  value="MNE">Montenegro</option>
                          <option  value="MSR">Montserrat</option>
                          <option  value="MAR">Morocco</option>
                          <option  value="MOZ">Mozambique</option>
                          <option  value="MMR">Myanmar</option>
                          <option  value="NAM">Namibia</option>
                          <option  value="NRU">Nauru</option>
                          <option  value="NPL">Nepal</option>
                          <option  value="NLD">Netherlands</option>
                          <option  value="ANT">Netherlands Antilles</option>
                          <option  value="NTZ">Neutral Zone</option>
                          <option  value="NCL">New Caledonia</option>
                          <option  value="NHB">New Hebrides</option>
                          <option  value="NZL">New Zealand</option>
                          <option  value="NIC">Nicaragua</option>
                          <option  value="NER">Niger</option>
                          <option  value="NGA">Nigeria</option>
                          <option  value="NIU">Niue</option>
                          <option  value="NFK">Norfolk Island</option>
                          <option  value="MNP">Northern Mariana Islands</option>
                          <option  value="NOR">Norway</option>
                          <option  value="OMN">Oman</option>
                          <option  value="PCI">Pacific Islands, Trust Territory of the</option>
                          <option  value="PAK">Pakistan</option>
                          <option  value="PLW">Palau</option>
                          <option  value="PSE">Palestinian Territory, Occupied</option>
                          <option  value="PAN">Panama</option>
                          <option  value="PCZ">Panama Canal Zone</option>
                          <option  value="PNG">Papua New Guinea</option>
                          <option  value="PRY">Paraguay</option>
                          <option  value="PER">Peru</option>
                          <option  value="PHL">Philippines</option>
                          <option  value="PCN">Pitcairn</option>
                          <option  value="POL">Poland</option>
                          <option  value="PRT">Portugal</option>
                          <option  value="PRI">Puerto Rico</option>
                          <option  value="QAT">Qatar</option>
                          <option  value="COG">Republic Of Congo</option>
                          <option  value="REU">Reunion</option>
                          <option  value="ROU">Romania</option>
                          <option  value="RUS">Russian Federation</option>
                          <option  value="RWA">Rwanda</option>
                          <option  value="BLM">Saint Barthélemy</option>
                          <option  value="SHN">Saint Helena, Ascension And Tristan Da Cunha</option>
                          <option  value="KNA">Saint Kitts And Nevis</option>
                          <option  value="LCA">Saint Lucia</option>
                          <option  value="MAF">Saint Martin</option>
                          <option  value="SPM">Saint Pierre And Miquelon</option>
                          <option  value="VCT">Saint Vincent And The Grenadines</option>
                          <option  value="WSM">Samoa</option>
                          <option  value="SMR">San Marino</option>
                          <option  value="STP">Sao Tome and Principe</option>
                          <option  value="SAU">Saudi Arabia</option>
                          <option  value="SEN">Senegal</option>
                          <option  value="SRB">Serbia</option>
                          <option  value="SCG">Serbia and Montenegro</option>
                          <option  value="SYC">Seychelles</option>
                          <option  value="SLE">Sierra Leone</option>
                          <option  value="SKM">Sikkim</option>
                          <option  value="SGP">Singapore</option>
                          <option  value="SXM">Sint Maarten</option>
                          <option  value="SVK">Slovakia</option>
                          <option  value="SVN">Slovenia</option>
                          <option  value="SLB">Solomon Islands</option>
                          <option  value="SOM">Somalia</option>
                          <option  value="ZAF">South Africa</option>
                          <option  value="SGS">South Georgia And The South Sandwich Islands</option>
                          <option  value="SSD">South Sudan</option>
                          <option  value="RHO">Southern Rhodesia</option>
                          <option  value="ESP">Spain</option>
                          <option  value="LKA">Sri Lanka</option>
                          <option  value="SDN">Sudan</option>
                          <option  value="SUR">Suriname</option>
                          <option  value="SJM">Svalbard And Jan Mayen</option>
                          <option  value="SWZ">Swaziland</option>
                          <option  value="SWE">Sweden</option>
                          <option  value="CHE">Switzerland</option>
                          <option  value="SYR">Syrian Arab Republic</option>
                          <option  value="TWN">Taiwan</option>
                          <option  value="TJK">Tajikistan</option>
                          <option  value="TZA">Tanzania, United Republic Of</option>
                          <option  value="THA">Thailand</option>
                          <option  value="TLS">Timor-Leste, Democratic Republic of</option>
                          <option  value="TGO">Togo</option>
                          <option  value="TKL">Tokelau</option>
                          <option  value="TON">Tonga</option>
                          <option  value="TTO">Trinidad And Tobago</option>
                          <option  value="TUN">Tunisia</option>
                          <option  value="TUR">Turkey</option>
                          <option  value="TKM">Turkmenistan</option>
                          <option  value="TCA">Turks And Caicos Islands</option>
                          <option  value="TUV">Tuvalu</option>
                          <option  value="PUS">U.S. Miscellaneous Pacific Islands</option>
                          <option  value="UGA">Uganda</option>
                          <option  value="UKR">Ukraine</option>
                          <option  value="ARE">United Arab Emirates</option>
                          <option  value="GBR">United Kingdom</option>
                          <option  value="USA">United States</option>
                          <option  value="UMI">United States Minor Outlying Islands</option>
                          <option  value="HVO">Upper Volta</option>
                          <option  value="URY">Uruguay</option>
                          <option  value="UZB">Uzbekistan</option>
                          <option  value="VUT">Vanuatu</option>
                          <option  value="VAT">Vatican City State</option>
                          <option  value="VEN">Venezuela, Bolivarian Republic Of</option>
                          <option  value="VNM">Viet Nam</option>
                          <option  value="VDR">Viet-Nam, Democratic Republic of</option>
                          <option  value="VGB">Virgin Islands (British)</option>
                          <option  value="VIR">Virgin Islands (US)</option>
                          <option  value="WAK">Wake Island</option>
                          <option  value="WLF">Wallis And Futuna</option>
                          <option  value="ESH">Western Sahara</option>
                          <option  value="YEM">Yemen</option>
                          <option  value="YMD">Yemen, Democratic</option>
                          <option  value="YUG">Yugoslavia</option>
                          <option  value="ZAR">Zaire</option>
                          <option  value="ZMB">Zambia</option>
                          <option  value="ZWE">Zimbabwe</option>
                          <option  value="ALA">Åland Islands</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <hr />
                      <h5><i className="fa fa-credit-card" /> Payment Information</h5>
                      <p>Please complete your payment details below. We never store your payment details for added security.</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="cardName">Cardholder name (*)</label>
                        <input type="text" className="form-control" id="cardName" name="cardName" placeholder="" onChange={this.changeField} maxLength={30} value={this.state.booking.cardName}/>
                      </div>
                      <div className="form-group">
                        <label for="cardNumber">Debit/Credit card number (*)</label>
                        <input type="number" className="form-control" id="cardNumber" name="cardNumber" placeholder="" onChange={this.changeField} maxLength={16}  value={this.state.booking.cardNumber} />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="expirationDateMonth">Expiration date (*)</label>
                            <select className="form-control" id="expirationDateMonth" name="expirationDateMonth" defaultValue="" onChange={this.changeField} value={this.state.booking.expirationDateMonth}>
                              <option value="" >Please Select</option>
                              <option value="01">January</option>
                              <option value="02">February</option>
                              <option value="03">March</option>
                              <option value="04">April</option>
                              <option value="05">Map</option>
                              <option value="06">June</option>
                              <option value="07">July</option>
                              <option value="08">August</option>
                              <option value="09">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="expirationDateYear">&nbsp;</label>
                            <select className="form-control" id="expirationDateYear" name="expirationDateYear" defaultValue="" onChange={this.changeField} value={this.state.booking.expirationDateYear}>
                              <option value="" >Please Select</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              <option value="2021">2021</option>
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                              <option value="2025">2025</option>
                              <option value="2026">2026</option>
                              <option value="2027">2027</option>
                              <option value="2028">2028</option>
                              <option value="2029">2029</option>
                              <option value="2030">2030</option>
                              <option value="2031">2031</option>
                              <option value="2032">2032</option>
                              <option value="2033">2033</option>
                              <option value="2034">2034</option>
                              <option value="2035">2035</option>
                              <option value="2036">2036</option>
                              <option value="2037">2037</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="exampleInputEmail1">Security code (*)</label>
                            <input type="password" className="form-control" id="securityCode" name="securityCode" placeholder="" aria-describedby="securityCodeHelp" onChange={this.changeField} maxLength={3} value={this.state.booking.securityCode}/>
                            <small id="securityCodeHelp" className="form-text text-muted">Enter the last 3 digits on the back of the card</small>
                          </div>
                        </div>
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
                        <small>There's a problem with your details, please scroll to the top of the page for more details.</small>
                      </div>
                    </div>
                    <div className="col-md-4 text-right">
                      <input type="submit" className="btn btn-primary" value={bookNowText} onClick={this.bookHotel}/>
                    </div>
                    <div className="col-md-12 mb-3">
                      <hr />
                    </div>
                    <div className="col-md-12">
                      <p><small>We use secure transmission and encrypted storage to protect your personal
                        information. We pass your details through to Expedia to complete the booking. This payment will be processed in Spain. This does not apply when the
                        travel provider (airline/hotel/rail, etc.) processes your payment.</small></p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img className="card-img-top" src={this.props.hotel.hotelInformationResponse.hotelImages.hotelImage[0].highResolutionUrl} />
                    <div className="card-block">
                      <h4 className="card-title">{this.props.hotel.hotelInformationResponse.hotelSummary.name}</h4>
                      <p className="card-text mb-0"><strong>1 Room:</strong><span className="float-right">{this.props.hotelRoom.rateDescription}</span></p>
                      <p className="card-text mb-0"><strong>Check-in:</strong><span className="float-right">{this.state.formattedArrivalDate}</span></p>
                      <p className="card-text mb-0"><strong>Check-out:</strong><span className="float-right">{this.state.formattedDepartDate}</span></p>
                      <p className="card-text mb-3"><strong>Nights:</strong><span className="float-right">{this.state.nights}</span></p>
                      <p className={this.props.hotelRoom.rateInfos.rateInfo && this.props.hotelRoom.rateInfos.rateInfo[0].promoDescription ? "card-text mb-3" : "hide"}><strong>{this.props.hotelRoom.rateInfos.rateInfo[0].promoDescription}</strong></p>
                      <hr />
                      <p className="card-text mb-3"><strong>Room 1:</strong><span className="float-right">{this.props.guests  == 1 ? '1 Adult' : this.props.guests + ' Adults'} </span></p>
                      <p className="card-text mb-0"><strong>Nightly Rate:</strong><span className="float-right">{currency}{this.props.hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.nightlyRateTotal}</span></p>
                      <p className="card-text mb-0"><strong>Tax & Service Fees:</strong><span className="float-right">{currency}{this.props.hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.surchargeTotal}</span></p>
                      <hr />
                      <p className="card-text mb-3"><strong>Total:<span className="float-right"> {currency}{this.props.hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total}</span></strong></p>
                      <hr />

                      <span className={this.props.hotelRoom.rateInfos.rateInfo[0].hotelFees != null && this.props.hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee != null  ? '' : 'hide'}>
                        Due at Hotel (City/local Tax): <span className="float-right">{currency}{this.props.hotelRoom.rateInfos.rateInfo[0].hotelFees != null ? this.props.hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee != null ? this.props.hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee[0].amount : '' : ''}</span>
                        <hr />
                      </span>

                      <p className="card-text text-center"><small>Rates are quoted in <strong>British pounds sterling</strong>.</small></p>
                      <hr />
                      <p className="card-text text-center">Customer Support Number: (800) 279 8034</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
        </div>
      );
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
    hotelRoom: state.hotels.hotelRoom ? state.hotels.hotelRoom : {}
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
