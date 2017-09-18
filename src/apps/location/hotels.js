import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as hotelActions from '../../actions/location/travelContent/hotelActions';

import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import SubPageHeader from '../../components/content/headers/locationCategory';
import GoogleMaps from '../../components/maps/googleMap';
import TriperooLoader from '../../components/loaders/globalLoader';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import SearchForm from '../../components/forms/searchForms/hotels';
import FilterHotels from '../../components/forms/searchForms/filterHotels';
import HotelThumb from '../../components/layout/cards/hotels/thumb';
import Loader from '../../components/loaders/contentLoader';
let moment = require('moment');
import Toastr from 'toastr';

let titleCase = require('title-case');

class LocationContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.filterHotels = this.filterHotels.bind(this);
    let arrivalDate = this.props.arrivalDate == undefined ? moment().add(7, 'days').format('YYYY-MM-DD') : this.props.arrivalDate;
    this.state = {
      filters: {
        minPrice: 1
        , maxPrice: 99
        , starRatingList: []
        , tripAdvisorRatingList : []
        , facilityList: []
        , accommodationType: []
      }
      , showFilters: false
      , pageSize: 20
      , pageNumber: 0
      , radius: 5
      , arrivalDate: arrivalDate
      , formattedArrivalDate: new moment(arrivalDate).format('LL')
      , nights: this.props.nights
      , rooms: this.props.rooms
      , guests: this.props.guests
      , isLoadingLocation: true
      , isLoadingHotelList: true };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation(this.props.locationId);
  }

  loadLocation(locationId) {
    this.props.locationActions.loadLocationById(locationId)
      .then(() => this.loadHotels(
        locationId
        , this.props.location.locationCoordinates.latitude
        , this.props.location.locationCoordinates.longitude
        , this.state.radius
        , this.props.location.regionName
        , this.state.arrivalDate
        , this.state.nights
        , this.state.rooms
        , this.state.guests
        , 'en_en'
        , 'GBP'
        , this.state.filters
        , this.state.pageSize
        , this.state.pageNumber))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false, isLoadingHotelList: false });
      });
  }

  handleFormSubmit(searchUrl, searchId, arrivalDate, nights, rooms, guests) {

    if (searchUrl == '')
    {
      searchUrl = this.props.location.url;
    }

    if (searchId == undefined)
    {
      searchId = this.props.location.regionID;
    }

    this.setState({arrivalDate: arrivalDate, formattedArrivalDate: new moment(arrivalDate).format('LL'), nights: nights, rooms: rooms, guests: guests});
    this.setState({isLoadingLocation: true, isLoadingHotelList: true });
    browserHistory.push(searchUrl + '?arrivalDate=' + arrivalDate + '&nights=' + nights + '&rooms=' + rooms + '&guests=' + guests);
    this.loadLocation(searchId);
  }

  loadHotels(locationId, latitude, longitude, radius, city, arrivalDate, nights, room, guests, locale, currencyCode, filters, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingHotelList: true});
    if (latitude == 0 && longitude == 0)
    {
      this.props.hotelActions.loadHotelsByLocation(locationId, arrivalDate, nights, locale, currencyCode, room, city, guests, filters, pageSize, pageNumber)
        .then(() => this.setState({isLoadingLocation: false, isLoadingHotelList: false}))
        .catch(error => {
          this.setState({isLoadingLocation: false, isLoadingHotelList: false});
        });
    }
    else {
      this.props.hotelActions.loadHotelsByProximty(locationId, latitude, longitude, radius, locale, currencyCode, pageSize, pageNumber)
        .then(() => this.setState({isLoadingLocation: false, isLoadingHotelList: false}))
        .catch(error => {
          this.setState({isLoadingLocation: false, isLoadingHotelList: false});
        });
    }
  }

  filterHotels(priceFrom, priceTo, starRatingList, tripAdvisorRatingList, facilityList, accommodationType) {


  }

  render() {
    document.title = 'Loading Hotels...';
    if (!this.state.isLoadingLocation) {
      document.title = 'Hotels in ' + titleCase(this.props.location.regionName);

      let queryString = '?arrivalDate=' + this.state.arrivalDate + '&nights=' + this.state.nights + '&rooms=' + this.state.rooms + '&guests=' + this.state.guests

      let title = 'Hotels in ' + titleCase(this.props.location.regionName);
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="hotels" title={title}/>
          <div className="row greyBg">
            <div className="container">
              <div className="row ">
                <div className="gap gap-mini"></div>
                <div className="col-md-12">
                  <SearchForm searchUrl={this.props.searchUrl} arrivalDate={this.state.arrivalDate} nights={parseInt(this.state.nights)} rooms={parseInt(this.state.rooms)} guests={parseInt(this.state.guests)} useFunction={false} handleFormSubmit={this.handleFormSubmit} isSideBar={false} city={this.props.location.regionNameLong} />
                </div>
              </div>
            </div>
          </div>
          <div className="gap gap-mini"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <FilterHotels minPrice={0} maxPrice={99} facilityList={[]} accommodationTypeList={[]} filterHotels={this.filterHotels} />
                  </div>
                  <div className="col-md-9">
                    <div className={this.state.isLoadingHotelList ? "hide" : "row"}>
                      <div className="col-md-8">
                        <p className="text-left">
                          Showing  {this.props.hotels.hotelListResponse ? this.props.hotels.hotelListResponse.hotelList.size : 0 } Hotels in {this.props.location.regionName} on  {this.state.formattedArrivalDate} for {this.state.nights} {this.state.nights == 1 ? 'night' : 'nights'}</p>
                      </div>
                      <div className="col-md-4">
                        <p className="text-right"><a href="#googleMaps"><i className="fa fa-map"></i> View Map</a></p>
                      </div>
                    </div>
                    <div className="row">
                      {
                        !this.state.isLoadingHotelList ? this.props.hotels.hotelListResponse ? this.props.hotels.hotelListResponse.hotelList.hotelSummary.map(function (hotel, i) {
                          return(<HotelThumb hotel={hotel} hotelUrl={this.props.location.url} queryString={queryString} key={hotel.hotelId} cssClass="col-md-4 mb-4" nameLength={50}/>);
                        }, this) : (<Loader showLoader={true}/>) : (<Loader showLoader={true}/>)
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
          <div className="row greyBg detailSubHeader" id="googleMaps">
            <GoogleMaps latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={this.props.location.regionName} zoom={12} markerArray={this.state.hotels} isLoading={this.state.isLoadingHotelList} locationType={this.props.location.subClass} />
          </div>
          <FacebookSignup showLines={false}/>
          <LastMinuteDeal locationId={this.props.locationId} />
          <FacebookSignup showLines={false}/>
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
  queryString: PropTypes.string
};

function mapStateToProps(state, ownProps) {
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
    queryString: ownProps.location.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    hotelActions: bindActionCreators(hotelActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationContent);
