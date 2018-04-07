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
import Room from '../../components/layout/cards/hotels/room';
import SimilarHotels from '../../components/layout/cards/hotels/similarHotels';
import HotelSubNav from '../../components/layout/location/hotelSubNav';
import Destinations from '../../components/content/dynamic/destinations';
import RecentQuestions from '../../components/layout/cards/questions/list';
import QuestionButton from '../../components/layout/buttons/questionButton';
import ReviewList from '../../components/layout/cards/reviews/locationReviewList';

let titleCase = require('title-case');
let striptags = require('striptags');
let moment = require('moment');


class HotelDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showImage = this.showImage.bind(this);
    this.showTab = this.showTab.bind(this);

    let arrivalDate = this.props.arrivalDate == undefined ? moment().add(7, 'days').format('YYYY-MM-DD') : this.props.arrivalDate;
    this.state = {
      isLoadingHotel: true
      , isLoadingLocation: true
      , arrivalDate: arrivalDate
      , nights: this.props.nights
      , rooms: this.props.rooms
      , guests: this.props.guests
      , showRooms: true
      , showAbout: false
      , showUseful: false
    };
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
    this.props.hotelActions.loadHotelById(this.props.hotelId, 'en_en', 'GBP')
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

  showTab(e) {
    e.preventDefault();

    let tab = e.target.getAttribute("data-tab");

    switch(tab) {
      case 'room':
        this.setState({ showRooms: true, showAbout: false, showUseful: false });
        break;
      case 'about':
        this.setState({ showRooms: false, showAbout: true, showUseful: false });
        break;
      case 'useful':
        this.setState({ showRooms: false, showAbout: false, showUseful: true });
        break;
    }


  }

  showImage(position) {
    this.props.modalActions.openHotelImage('', position, titleCase(this.props.hotel.hotelDetails.hotelName));
  }

  render() {

    if (!this.state.isLoadingLocation && !this.state.isLoadingHotel) {

      if (this.props.hotel.hotelDetails != undefined && this.props.hotel.hotelDetails.hotelName != undefined) {
        document.title = 'Book to stay in ' + this.props.hotel.hotelDetails.hotelName;
        let queryString = this.props.queryString;

        let markerArray = [];
        markerArray.push({
          "url": this.props.searchUrl,
          "regionName": this.props.hotel.hotelDetails.hotelName,
          "subClass": "Hotel",
          "locationCoordinates": {
            "latitude": 0,
            "longitude": 0
          }
        });

        return (
          <div>
            <HotelHeader location={this.props.location}
                         hotelName={this.props.hotel.hotelDetails.hotelName}
                         hotelImage={this.props.hotel.hotelDetails.photos[0]}
                         contentType="hotels"/>
            <HotelSubNav />
            <div className="gap gap-small"></div>
            <div className="container">
              <div className="booking-item-details">
                <header className="booking-item-header">
                  <div className="row">
                    <div className="col-md-8 col-6">
                      <p className="lh1em text-small hotelAddress"><i
                        className="fa fa-map-marker"></i> {this.props.hotel.hotelDetails.location.address}
                      </p>
                      <StarRating
                        starRating={this.props.hotel.hotelDetails.stars ? this.props.hotel.hotelDetails.stars : 0}
                        className="icon-list list-inline-block mb0 last-minute-rating" includeReviewCount={false}
                        reviewCount={0}/>
                    </div>
                    <div className="col-md-4 col-6">
                      <p className="booking-item-header-price">
                        <a href="#rooms" className="btn btn-primary priceRight">View Rooms</a>
                        <span
                          className={this.props.hotel.hotelDetails.price.minimum == 0 ? 'hide' : 'hide'}>
                      <small>rooms from</small>
                      <br />
                      <span
                        className="hotelPrice hide"><strong>{this.props.hotel.hotelDetails.price.minimum.toFixed(2)}
                        GBP</strong></span>
                      <br />
                      <small>per night</small>
                      </span>
                      </p>
                    </div>
                  </div>
                </header>
                <HotelPhotos showImage={this.showImage}
                             hotelImage={this.props.hotel.hotelDetails.photos}/>
                <div className="gap gap-small"></div>

              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-pills">
                    <li className="nav-item text-center">
                      <a className={this.state.showRooms ? "nav-link active" : "nav-link"} href="#" onClick={this.showTab} data-tab="room">Room Availability</a>
                    </li>
                    <li className="nav-item text-center">
                      <a className={this.state.showAbout ? "nav-link active" : "nav-link"} href="#" onClick={this.showTab} data-tab="about">About the Hotel / Facilities</a>
                    </li>
                    <li className="nav-item text-center">
                      <a className={this.state.showUseful ? "nav-link active" : "nav-link"} href="#"  onClick={this.showTab} data-tab="useful">Useful Information</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={this.state.showAbout ? "about" : "hide"}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12" id="about">
                    <div className="gap gap-small"></div>
                    <div className="row">
                      <div className="col-md-7">
                        <h4>About the Hotel</h4>
                        <hr />
                        <p
                          dangerouslySetInnerHTML={{__html: this.props.hotel.hotelDetails.description}}/>
                      </div>
                      <div className="col-md-5">
                        <h4>Facilities</h4>
                        <hr />
                        <ul>
                          {
                            this.props.hotel.hotelDetails.amenities.map((amenity, index) => {
                                return (
                                  <li>{amenity.name} {amenity.includes}</li>
                                );
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={this.state.showUseful ? "useful" : "hide"}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12"  id="policies">
                    <div className="gap gap-small"></div>
                    <h4>Useful Information</h4>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="gap gap-small"></div>

            <div className={this.state.showRooms ? "rooms" : "hide"}>
              <div className="container" id="rooms">
                <div className="row">
                  <div className="col-md-12" id="rooms">
                    <h4>Room Availability</h4>
                    <hr />
                    <ul className="booking-list">
                      {
                        this.props.hotel.hotelDetails.rooms.map((hotelRoom, index) => {
                          return (
                            <Room hotelRoom={hotelRoom} key={index} />
                          );
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-nowrap greyBg events">
              <div className="container">
                <div className="row">
                  <div className="gap gap-small" id="reviews"></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <ReviewList hasLoadedLocation={this.state.isLoadingHotel} locationId={this.props.hotelId}
                                    locationName={this.props.hotel.hotelDetails.hotelName}
                                    locationNameLong={this.props.hotel.hotelDetails.hotelName}
                                    locationType="hotel" pageSize={3} pageNumber={0} showTitle={true} title="Reviews"/>
                      </div>
                      <div className="col-md-4">
                        <QuestionButton locationId={this.props.hotelId}
                                        locationName={this.props.hotel.hotelDetails.hotelName}
                                        pageSize={3} pageNumber={0}
                                        locationNameLong={this.props.hotel.hotelDetails.hotelName}
                                        locationType="hotel"/>
                        <RecentQuestions locationId={this.props.hotelId}
                                         locationName={this.props.hotel.hotelDetails.hotelName}
                                         pageSize={3} pageNumber={0} locationUrl={this.props.searchUrl} showTitle={true}
                                         isSideComponent={true}/>
                      </div>
                    </div>
                  </div>
                  <div className="gap gap-small" id="map2"></div>
                </div>
              </div>
            </div>
            <GoogleMaps locationType="Hotel" latitude={0}
                        longitude={0}
                        text={this.props.hotel.hotelDetails.hotelName} zoom={15}
                        isLoading={this.state.isLoadingHotel} markerArray={markerArray}/>

            <div className="gap gap-small"></div>

            <div className="row">
              <div className="container">
                <div className="col-md-12">
                  <h5>Other Hotels Close To {this.props.hotel.hotelDetails.hotelName}</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="gap gap-small"></div>
          </div>
        );
      }
      else {
        return (
          <div className="container">
            <div className="row row-wrap">
              <div className="gap gap-small"></div>
              <div className="col-md-12 text-center pageNotFound">
                <h4>We are very sorry for the inconvenience, we cannot find this hotel</h4>
                <p>The Triperoo Tech team have been informed of the issue and will do their best to resolve the problem straight away!</p>

                <div className="gap gap-small"></div>
                <hr />
                <Destinations locationCount={3} title="Our Top Destinations" contentType="homePage" />
              </div>
            </div>
          </div>
        );
      }
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

  console.log(state.hotels.hotel);

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

