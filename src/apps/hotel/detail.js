import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as modalActions from '../../actions/common/modalActions';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../actions/location/travelContent/hotelActions';
import * as locationActions from '../../actions/location/locationActions';
import Loader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';
import HotelHeader from '../../components/content/headers/hotelDetail';
import StarRating from '../../components/forms/common/starRating';
import GoogleMaps from '../../components/maps/googleMap';
import HotelPhotos from '../../components/layout/location/hotelImages';
import RoomList from '../../components/layout/cards/hotels/roomList';
import SimilarHotels from '../../components/layout/cards/hotels/similarHotels';
import HotelSubNav from '../../components/layout/location/hotelSubNav';

let titleCase = require('title-case');
let striptags = require('striptags');
let moment = require('moment');


class HotelDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showImage = this.showImage.bind(this);

    let arrivalDate = this.props.arrivalDate == undefined ? moment().add(7, 'days').format('YYYY-MM-DD') : this.props.arrivalDate;
    this.state = {
      isLoadingHotel: true
      , isLoadingLocation: true
      , arrivalDate: arrivalDate
      , nights: this.props.nights
      , rooms: this.props.rooms
      , guests: this.props.guests
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.setState({isLoadingLocation: true});
    this.props.locationActions.loadLocationById(this.props.locationId)
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
        this.setState({
          isLoadingHotel: false
        });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingHotel: false});
      });
  }

  showImage(position) {
    this.props.modalActions.openHotelImage(this.props.hotel.hotelInformationResponse.hotelImages.hotelImage, position, titleCase(this.props.hotel.hotelInformationResponse.hotelSummary.name));
  }

  render() {

    if (!this.state.isLoadingLocation && !this.state.isLoadingHotel) {

      document.title = 'Book to stay in ' + this.props.hotel.hotelInformationResponse.hotelSummary.name;
      let queryString = this.props.queryString;

      return (
        <div>
          <HotelHeader location={this.props.location} hotelName={this.props.hotel.hotelInformationResponse.hotelSummary.name} hotelImage={this.props.hotel.hotelInformationResponse.hotelImages.hotelImage[0].highResolutionUrl} />
          <HotelSubNav />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="booking-item-details">
              <header className="booking-item-header">
                <div className="row">
                  <div className="col-md-8">
                    <p className="lh1em text-small hotelAddress"><i
                      className="fa fa-map-marker"></i> {this.props.hotel.hotelInformationResponse.hotelSummary.address1}, {this.props.hotel.hotelInformationResponse.hotelSummary.city}, {this.props.hotel.hotelInformationResponse.hotelSummary.postalCode}
                    </p>
                    <StarRating
                      starRating={this.props.hotel.hotelInformationResponse.hotelSummary.hotelRating ? this.props.hotel.hotelInformationResponse.hotelSummary.hotelRating : 0}
                      className="icon-list list-inline-block mb0 last-minute-rating" includeReviewCount={false}
                      reviewCount={0}/>
                  </div>
                  <div className="col-md-4">
                    <p className="booking-item-header-price">
                      <a href="#rooms" className="btn btn-primary priceRight">View Rooms</a>
                      <small>rooms from</small>
                      <br />
                      <span className="hotelPrice"><strong>{this.props.hotel.hotelInformationResponse.hotelSummary.lowRate.toFixed(2)} GBP</strong></span>
                      <br />
                      <small>per night</small>
                    </p>
                  </div>
                </div>
              </header>
              <HotelPhotos showImage={this.showImage} hotelImage={this.props.hotel.hotelInformationResponse.hotelImages.hotelImage}/>
              <div className="gap gap-small"></div>
              <div className="row" id="about">
                <div className="col-md-7">
                  <h4>About The Hotel</h4>
                  <hr />
                  <span dangerouslySetInnerHTML={{__html: this.props.hotel.hotelInformationResponse.hotelDetails.propertyDescription}}/>
                </div>
                <div className="col-md-5">
                  <h4>Facilities</h4>
                  <hr />
                  <p>{this.props.hotel.hotelInformationResponse.hotelDetails.amenitiesDescription}</p>
                  <ul className="facilities">
                    {
                      this.props.hotel.hotelInformationResponse.propertyAmenities.propertyAmenity.map(propertyAmenity => {
                        return (
                          <li key={propertyAmenity.amenityId}>{propertyAmenity.amenity}</li>
                        );
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="gap gap-small"></div>
          </div>
          <div className="gap gap-small" id="map"></div>
          <GoogleMaps locationType="Hotel" latitude={this.props.hotel.hotelInformationResponse.hotelSummary.latitude}
                      longitude={this.props.hotel.hotelInformationResponse.hotelSummary.longitude}
                      text={this.props.hotel.hotelInformationResponse.hotelSummary.name} zoom={15}
                      isLoading={this.state.isLoadingHotel}/>
          <div className="gap gap-small"></div>
          <RoomList searchUrl={this.props.searchUrl} guests={this.props.guests} arrivalDate={this.props.arrivalDate} nights={this.props.nights} rooms={this.props.rooms} locationId={this.props.locationId} hotelId={this.props.hotelId} regionNameLong={this.props.location.regionNameLong} hotelName={this.props.hotel.hotelInformationResponse.hotelSummary.name} />
          <div className="gap gap-small"></div>
          <div className="row row-nowrap greyBg hotelInfo" id="policies">
            <div className="gap gap-small" id="info"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h5>Similar Hotels</h5>
                  <hr />
                  <SimilarHotels exclude={this.props.hotelId} locationId={this.props.locationId} currencyCode="GBP" locale="en_en" arrivalDate={this.state.arrivalDate} nights={this.state.nights} rooms={this.state.rooms} guests={this.state.guests} radius={10} pageSize={4} latitude={this.props.hotel.hotelInformationResponse.hotelSummary.latitude} longitude={this.props.hotel.hotelInformationResponse.hotelSummary.longitude} url={this.props.location.url} queryString={queryString} />
                </div>
                <div className="col-md-6">
                  <h5>Useful Information</h5>
                  <hr />
                  <p><small>{striptags(this.props.hotel.hotelInformationResponse.hotelDetails.checkInInstructions)}</small></p>
                  <p><small>{this.props.hotel.hotelInformationResponse.hotelDetails.propertyInformation}</small></p>
                  <h6>Important</h6>
                  <p><small>{striptags(this.props.hotel.hotelInformationResponse.hotelDetails.knowBeforeYouGoDescription)}</small></p>
                  <small dangerouslySetInnerHTML={{__html: this.props.hotel.hotelInformationResponse.hotelDetails.roomInformation}}/>
                </div>
              </div>
            </div>
            <div className="gap gap-small"></div>
          </div>
        </div>
      );
    }
    else {
      return (<Loader/>);
    }
  }
}

HotelDetail.propTypes = {
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
  queryString: PropTypes.string

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
    searchUrl: ownProps.location.pathname,
    queryString: ownProps.location.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hotelActions: bindActionCreators(hotelActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetail);

