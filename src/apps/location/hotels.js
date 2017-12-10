import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as hotelActions from '../../actions/location/travelContent/hotelActions';

import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import TrustedPartners from '../../components/content/static/trustedPartners';
import SubPageHeader from '../../components/content/headers/locationCategory';
import TriperooLoader from '../../components/loaders/globalLoader';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import SearchForm from '../../components/forms/searchForms/hotels';
import FilterHotels from '../../components/forms/searchForms/filterHotels';
import SortBy from '../../components/forms/common/sortBy';
import HotelThumb from '../../components/layout/cards/hotels/thumb';
import Loader from '../../components/loaders/contentLoader';
import MapSideBar from '../../components/maps/mapSideBar';
let moment = require('moment');
import Toastr from 'toastr';

let titleCase = require('title-case');

class LocationContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.filterHotels = this.filterHotels.bind(this);
    this.updateSortBy = this.updateSortBy.bind(this);
    let arrivalDate = this.props.arrivalDate == undefined ? moment().add(7, 'days').format('YYYY-MM-DD') : this.props.arrivalDate;
    this.state = {
      filters: {
        minRate: 1
        , maxRate: 300
        , minStarRating: 1
        , maxStarRating: 5
        , minTripAdvisorRating: 0
        , maxTripAdvisorRating: 0
        , facilityList: []
        , propertyCategory: []
      }
      , openSortBy: false
      , showFilters: false
      , pageSize: 24
      , pageNumber: 0
      , radius: 5
      , arrivalDate: arrivalDate
      , formattedArrivalDate: new moment(arrivalDate).format('LL')
      , nights: this.props.nights
      , rooms1: this.props.rooms
      , rooms2: 0
      , rooms3: 0
      , guests: 2
      , sortBy: 'PROMO'
      , sortByFriendly: 'Recommended'
      , isLoadingLocation: true
      , isLoadingHotelList: true };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation(this.props.locationId);
  }

  loadLocation(locationId) {
    this.props.locationActions.loadLocationById(locationId, false)
      .then(() => this.loadHotels(
        locationId
        , this.props.location.locationCoordinates.latitude
        , this.props.location.locationCoordinates.longitude
        , this.state.radius
        , this.props.location.regionNameLong
        , this.state.arrivalDate
        , this.state.nights
        , this.state.rooms1
        , this.state.rooms2
        , this.state.rooms3
        , 'en_en'
        , 'GBP'
        , this.state.filters
        , this.state.sortBy
        , this.state.pageSize
        , this.state.pageNumber
        , 0))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false, isLoadingHotelList: false });
      });
  }

  handleFormSubmit(searchUrl, searchId, arrivalDate, nights, rooms1, guests) {

    if (searchUrl == '')
    {
      searchUrl = this.props.location.url;
    }

    if (searchId == undefined)
    {
      searchId = this.props.location.regionID;
    }

    this.setState({arrivalDate: arrivalDate, formattedArrivalDate: new moment(arrivalDate).format('LL'), nights: nights, rooms1: rooms1, guests: guests});
    this.setState({isLoadingLocation: true, isLoadingHotelList: true });
    browserHistory.push(searchUrl + '/hotels?arrivalDate=' + arrivalDate + '&nights=' + nights + '&rooms1=' + rooms1 + '&guests=' + guests);
    this.loadLocation(searchId);
  }

  loadHotels(locationId, latitude, longitude, radius, location, arrivalDate, nights, rooms1, rooms2, rooms3, locale, currencyCode, filters, sortBy, pageSize, pageNumber, exclude) {
    this.setState({isLoadingLocation: false, isLoadingHotelList: true});
    if (latitude == 0 && longitude == 0)
    {
      this.props.hotelActions.loadHotelsByLocation(locationId, arrivalDate, nights, locale, currencyCode, rooms1, rooms2, rooms3, location, filters, sortBy, pageSize, pageNumber, exclude, true)
        .then(() => this.setState({isLoadingLocation: false, isLoadingHotelList: false}))
        .catch(error => {
          this.setState({isLoadingLocation: false, isLoadingHotelList: false});
        });
    }
    else {
      this.props.hotelActions.loadHotelsByProximty(locationId, latitude, longitude, radius, arrivalDate, nights, locale, currencyCode, rooms1, rooms2, rooms3, location, filters, sortBy, pageSize, pageNumber, exclude, true)
        .then(() => this.setState({isLoadingLocation: false, isLoadingHotelList: false}))
        .catch(error => {
          this.setState({isLoadingLocation: false, isLoadingHotelList: false});
        });
    }
  }

  filterHotels(minRate, maxRate, minStarRating, maxStarRating, minTripAdvisorRating, maxTripAdvisorRating, facilityList, propertyCategory) {

    let filters = this.state.filters;
    filters.minRate = parseFloat(minRate);
    filters.maxRate = parseFloat(maxRate);
    filters.minStarRating = minStarRating;
    filters.maxStarRating = maxStarRating;
    filters.minTripAdvisorRating = minTripAdvisorRating;
    filters.maxTripAdvisorRating = maxTripAdvisorRating;
    filters.facilityList = facilityList;
    filters.propertyCategory = propertyCategory;

    this.setState({filters: filters, isLoadingHotelList: true});

    this.loadHotels(this.props.locationId
      , this.props.location.locationCoordinates.latitude
      , this.props.location.locationCoordinates.longitude
      , this.state.radius
      , this.props.location.regionNameLong
      , this.state.arrivalDate
      , this.state.nights
      , this.state.rooms1
      , this.state.rooms2
      , this.state.rooms3
      , 'en_en'
      , 'GBP'
      , this.state.filters
      , this.state.sortBy
      , this.state.pageSize
      , this.state.pageNumber
      , 0);

  }

  updateSortBy(sortBy, sortByFriendly) {
    this.setState({sortBy: sortBy, sortByFriendly: sortByFriendly, openSortBy: false});

    this.loadHotels(this.props.locationId
      , this.props.location.locationCoordinates.latitude
      , this.props.location.locationCoordinates.longitude
      , this.state.radius
      , this.props.location.regionNameLong
      , this.state.arrivalDate
      , this.state.nights
      , this.state.rooms1
      , this.state.rooms2
      , this.state.rooms3
      , 'en_en'
      , 'GBP'
      , this.state.filters
      , sortBy
      , this.state.pageSize
      , this.state.pageNumber
      , 0);
  }

  render() {
    document.title = 'Loading Hotels...';
    if (!this.state.isLoadingLocation) {

      console.log(this.props.mapHotels);

      let queryString = '?arrivalDate=' + this.state.arrivalDate + '&nights=' + this.state.nights + '&rooms=' + this.state.rooms1 + '&guests=' + this.state.guests;

      let title = 'Hotels in ' + titleCase(this.props.location.regionName);
      document.title = title;
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="hotels" title={title}/>
          <div className="jumbotron hotelSearch">
            <div className="container">
              <div className="row ">
                <div className="gap gap-mini"></div>
                <div className="col-md-12">
                  <SearchForm searchUrl={this.props.searchUrl} arrivalDate={this.state.arrivalDate} nights={parseInt(this.state.nights)} rooms={parseInt(this.state.rooms1)} guests={parseInt(this.state.guests)} useFunction={false} handleFormSubmit={this.handleFormSubmit} isSideBar={false} city={this.props.location.regionNameLong} buttonName="Search" />
                </div>
              </div>
            </div>
          </div>
          <div className="gap gap-mini"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 sideBar">
                    <MapSideBar latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={title} zoom={13} markerArray={this.props.mapHotels} isLoading={this.state.isLoadingRestaurantList} locationType={this.props.location.subClass} />
                    <FilterHotels minPrice={0} maxPrice={300} facilityList={[]} accommodationTypeList={[]} filterHotels={this.filterHotels} />
                  </div>
                  <div className="col-md-9">
                    <div className={this.state.isLoadingHotelList ? "hide" : "row"}>
                      <div className="col-md-8">
                        <p className="text-left">
                          Showing  {this.props.hotels.hotelListResponse ? this.props.hotels.hotelListResponse.hotelList.size : 0} Hotels in {this.props.location.regionName} on  {this.state.formattedArrivalDate} for {this.state.nights} {this.state.nights == 1 ? 'night' : 'nights'}</p>
                      </div>
                      <div className="col-md-4">
                        <div className="text-right">
                          <SortBy updateSortBy={this.updateSortBy} value={this.state.sortBy} valueFriendly={this.state.sortByFriendly}/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {
                        !this.state.isLoadingHotelList ? this.props.hotels.hotelListResponse ? this.props.hotels.hotelListResponse.hotelList.hotelSummary.map(function (hotel, i) {
                          return(<HotelThumb hotel={hotel} hotelUrl={this.props.location.url} queryString={queryString} key={hotel.hotelId} cssClass="col-md-4 mb-4" nameLength={40}/>);
                        }, this) : (<Loader showLoader={true}/>) : (<Loader showLoader={true}/>)
                      }
                    </div>
                  </div>
                </div>
                <div className="gap gap-mini"></div>
              </div>
            </div>
          </div>
          <LastMinuteDeal locationId={this.props.locationId} />
          <div className="container">
              <div className="gap gap-mini"></div>
              <FacebookSignup showLines={false} />
              <TrustedPartners />
              <div className="gap gap-mini"></div>
          </div>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

LocationContent.defaultProps = {
  isFetching: false,
  hotels: {},
  nights: 1,
  rooms: 1,
  guests: 1
};

LocationContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  hotelActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  hotels: PropTypes.object.isRequired,
  nights: PropTypes.number,
  rooms: PropTypes.number,
  guests: PropTypes.number,
  arrivalDate: PropTypes.string,
  searchUrl: PropTypes.string,
  queryString: PropTypes.string,
  mapHotels: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {

  console.log(state.hotels);

  return {
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    arrivalDate: ownProps.location !== undefined ? ownProps.location.query.arrivalDate : moment().add(7, 'days').format('YYYY-MM-DD'),
    rooms: ownProps.location.query.rooms !== undefined ? parseInt(ownProps.location.query.rooms) : 1,
    guests: ownProps.location.query.guests !== undefined ? parseInt(ownProps.location.query.guests) : 1,
    nights: ownProps.location.query.nights !== undefined ? parseInt(ownProps.location.query.nights) : 1,
    hotels: state.hotels.hotels ? state.hotels.hotels : {},
    searchUrl: ownProps.location.pathname,
    queryString: ownProps.location.search,
    mapHotels: state.hotels.hotels ? state.hotels.hotels.mapLocations : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    hotelActions: bindActionCreators(hotelActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationContent);
