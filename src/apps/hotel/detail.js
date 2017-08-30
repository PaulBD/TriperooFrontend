import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../actions/location/travelContent/hotelActions';
import * as locationActions from '../../actions/location/locationActions';
import Loader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';
let titleCase = require('title-case');
import Item from '../../components/layout/common/locationNavItem';
import StarRating from '../../components/forms/common/starRating';
import GoogleMaps from '../../components/maps/googleMap';
import SearchForm from '../../components/forms/searchForms/hotels';
let striptags = require('striptags');


class HotelDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingHotel: true, isLoadingLocation: true, lightboxIsOpen: false };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevLightboxImage = this.gotoPrevLightboxImage.bind(this);

  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  closeLightbox() {

  }

  gotoPrevLightboxImage() {

  }

  loadLocation() {
    this.setState({ isLoadingLocation: true });
    console.log(this.props.locationId);
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => {
        this.setState({ isLoadingLocation: false });
        this.loadHotel();
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  loadHotel() {
    this.setState({ isLoadingHotel: true });
    this.props.hotelActions.loadHotelById(0, this.props.hotelId, 'en_en', 'GBP')
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

  render(){
    if (!this.state.isLoadingLocation && !this.state.isLoadingHotel )
    {
      console.log(this.props.hotel);

      let hotelUrl = this.props.location.url + '/hotels';
      document.title = 'Book to stay in ' + this.props.hotel.hotelInformationResponse.hotelSummary.name;

      const LIGHTBOX_IMAGE_SET = [
        {
          src: 'http://example.com/example/img1.jpg',
          srcset: [
            'http://example.com/example/img1_1024.jpg 1024w',
            'http://example.com/example/img1_800.jpg 800w',
            'http://example.com/example/img1_500.jpg 500w',
            'http://example.com/example/img1_320.jpg 320w'
          ]
        },
        {
          src: 'http://example.com/example/img2.jpg',
          srcset: [
            'http://example.com/example/img2_1024.jpg 1024w',
            'http://example.com/example/img2_800.jpg 800w',
            'http://example.com/example/img2_500.jpg 500w',
            'http://example.com/example/img2_320.jpg 320w'
          ]
        }
      ];

      return (
        <div>
          <div className="top-area show-onload infoPage">
            <div className="bg-holder full text-white">
              <div className="bg-mask"></div>
              <div className="bg-img"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-xs-7">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item"><a href={this.props.location.url}>{this.props.location.regionNameLong}</a></li>
                      <li className="breadcrumb-item"><a href={hotelUrl}>Hotels In {this.props.location.regionName}</a></li>
                      <li className="breadcrumb-item active">{titleCase(this.props.hotel.hotelInformationResponse.hotelSummary.name)}</li>
                    </ol>
                    <h1>{titleCase(this.props.hotel.hotelInformationResponse.hotelSummary.name)}</h1>
                  </div>
                  <div className="col-md-4 col-xs-5">
                    <ul className="list text-right list-inline cityNav">
                      <Item item="Hotels" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'hotels' ? true : false} cssClass="fa fa-bed user-profile-statictics-icon" />
                      <Item item="Attractions" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'attractions' ? true : false} cssClass="fa fa-ticket user-profile-statictics-icon" />
                      <Item item="Restaurants" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'restaurants' ? true : false} cssClass="fa fa-cutlery user-profile-statictics-icon" />
                      <Item item="Nightlife" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'nightlife' ? true : false} cssClass="fa fa-glass user-profile-statictics-icon" />
                      <Item item="Events" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'events' ? true : false} cssClass="fa fa-calendar-o user-profile-statictics-icon" />
                      <Item item="Reviews" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'reviews' ? true : false} cssClass="fa fa-comment user-profile-statictics-icon" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row greyBg">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <span>Jump To:</span>
                  <a href="#photos">Photos</a> &bull;
                  <a href="#rooms">Room Availability</a> &bull;
                  <a href="#amenities">Facilities</a> &bull;
                  <a href="#reviews">Reviews</a> &bull;
                  <a href="#policies">Useful Info</a>
                </div>
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="booking-item-details">
              <header className="booking-item-header">
                <div className="row">
                  <div className="col-md-9">
                    <p className="lh1em text-small hotelAddress"><i className="fa fa-map-marker"></i> {this.props.hotel.hotelInformationResponse.hotelSummary.address1}, {this.props.hotel.hotelInformationResponse.hotelSummary.city}, {this.props.hotel.hotelInformationResponse.hotelSummary.postalCode}</p>
                    <StarRating starRating={this.props.hotel.hotelInformationResponse.hotelSummary.hotelRating ? this.props.hotel.hotelInformationResponse.hotelSummary.hotelRating : 0}  className="icon-list list-inline-block mb0 last-minute-rating" includeReviewCount={false} reviewCount={0}/>
                  </div>
                  <div className="col-md-3">
                    <p className="booking-item-header-price">
                      <a href="#rooms" className="btn btn-primary priceRight">View Rooms</a>
                      <small>prices from</small><br />
                      <span className="hotelPrice"><strong>{this.props.hotel.hotelInformationResponse.hotelSummary.lowRate.toFixed(2)} GBP</strong></span>
                    </p>
                  </div>
                </div>
              </header>
              <div className="row">
                <div className="col-md-12">
                  Images
                </div>
              </div>
              <div className="gap gap-small"></div>
              <div className="row">
                <div className="col-md-7">
                  <h4>About The Hotel</h4>
                  <hr />
                  <span dangerouslySetInnerHTML={{__html: this.props.hotel.hotelInformationResponse.hotelDetails.propertyDescription}} />
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
          <div className="gap gap-small"></div>
          <div className="row greyBg detailSubHeader">
            <GoogleMaps locationType="Hotel" latitude={this.props.hotel.hotelInformationResponse.hotelSummary.latitude} longitude={this.props.hotel.hotelInformationResponse.hotelSummary.longitude} text={this.props.hotel.hotelInformationResponse.hotelSummary.name} zoom={15} isLoading={this.state.isLoadingHotel} />
          </div>
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12" id="rooms">
                <h2>Room Availability</h2>
                <p>Showing <strong>Monday 21 August 2017</strong> to <strong>Tuesday 22 August 2017</strong></p>
                <SearchForm useFunction={false} isSideBar={false} city={this.props.location.regionNameLong} />
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
          <div className="row greyBg" id="policies">
            <div className="gap gap-small"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h4>Useful Info</h4>
                  <hr />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6"><p><strong>Check In:</strong> {this.props.hotel.hotelInformationResponse.hotelDetails.checkInTime}</p></div>
                    <div className="col-md-6"><p><strong>Check Out:</strong> {this.props.hotel.hotelInformationResponse.hotelDetails.checkOutTime}</p></div>
                    <div className="col-md-6"><p><strong>Check In End Time:</strong> {this.props.hotel.hotelInformationResponse.hotelDetails.checkInEndTime}</p></div>
                    <div className="col-md-6"><p><strong>Check In Min Age:</strong> {this.props.hotel.hotelInformationResponse.hotelDetails.checkInMinAge}</p></div>
                  </div>
                  <p>{striptags(this.props.hotel.hotelInformationResponse.hotelDetails.checkInInstructions)}</p>
                  <p>{this.props.hotel.hotelInformationResponse.hotelDetails.propertyInformation}</p>
                  <h5>Important information</h5>
                  <p>{striptags(this.props.hotel.hotelInformationResponse.hotelDetails.knowBeforeYouGoDescription)}</p>
                </div>
                <div className="col-md-6">
                  <span dangerouslySetInnerHTML={{__html: this.props.hotel.hotelInformationResponse.hotelDetails.roomInformation}} />
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
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    hotel: state.hotels.hotel ? state.hotels.hotel : {},
    hotelId: ownProps.params.hotelId ? parseInt(ownProps.params.hotelId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hotelActions: bindActionCreators(hotelActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetail);
