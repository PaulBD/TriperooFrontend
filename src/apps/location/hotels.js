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
    let arrivalDate = this.props.arrivalDate == undefined ? moment().add(7, 'days').format('YYYY-MM-DD') : new moment(this.props.arrivalDate).format('YYYY-MM-DD');
    let leaveDate = new moment(arrivalDate).add(this.props.nights, 'days').format('YYYY-MM-DD');

    this.state = {
      formData: {
        cityCode: this.props.cityCode,
        rooms: [{
          adults: this.props.adults,
          children:  this.props.children
        }],
        nights: this.props.nights,
        arrivalDate: arrivalDate,
        leaveDate: leaveDate,
        nationality: 'GB',
        currency: 'GBP',
        minRate: 0,
        maxRate: 500,
        starRating: ['1','2','3','4','5'],
        sortBy: 'PROMO',
        sortByFriendly: 'Recommended'
      }
      , isLoadingLocation: true
      , isFilteringData: false
      , isLoadingHotelList: true };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation(this.props.locationId);
  }

  loadLocation(locationId) {
    this.props.locationActions.loadLocationById(locationId, false)
      .then(() => {
        let cityCode = this.state.formData.cityCode;

        if (cityCode == '') {
          cityCode = 'LON';
        }
        this.loadHotels(cityCode, this.state.formData.rooms, this.state.formData.arrivalDate, this.state.formData.leaveDate, this.state.formData.nationality, this.state.formData.currency, this.state.formData.minRate, this.state.formData.maxRate, this.state.formData.starRating, this.state.formData.sortBy);

      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false, isLoadingHotelList: false });
      });
  }

  handleFormSubmit(searchUrl, searchId, arrivalDate, nights, adults, children) {

    if (searchUrl == '')
    {
      searchUrl = this.props.location.url;
    }

    if (searchId == undefined)
    {
      searchId = this.props.location.regionID;
    }

    //TODO:


    this.setState({isLoadingLocation: true, isLoadingHotelList: true });
    browserHistory.push(searchUrl.replace('/hotels', '') + '/hotels?arrivalDate=' + arrivalDate + '&nights=' + nights + '&adults=' + adults + '&children=' + children + '&cityCode=' + this.state.formData.cityCode);
    this.loadLocation(searchId);
  }

  loadHotels(cityCode, rooms, arrivalDate, leaveDate, nationality, currency, minRate, maxRate, starRating, sortBy) {
    this.setState({isLoadingLocation: false});
      this.props.hotelActions.loadHotelsByLocation(cityCode, rooms, arrivalDate, leaveDate, nationality, currency, minRate, maxRate, starRating, sortBy)
        .then(() => this.setState({isLoadingLocation: false, isLoadingHotelList: false, isFilteringData: false}))
        .catch(error => {
          this.setState({isLoadingLocation: false, isLoadingHotelList: false, isFilteringData: false});
        });

  }

  filterHotels(minRate, maxRate, starRating) {
    let formData = this.state.formData;
    formData.minRate = parseFloat(minRate);
    formData.maxRate = parseFloat(maxRate);
    formData.starRating = starRating;
    this.setState({formData: formData, isFilteringData: true});
    this.loadHotels(this.state.formData.cityCode, this.state.formData.rooms, this.state.formData.arrivalDate, this.state.formData.leaveDate, this.state.formData.nationality, this.state.formData.currency, this.state.formData.minRate, this.state.formData.maxRate, this.state.formData.starRating, this.state.formData.sortBy);
  }

  updateSortBy(sortBy, sortByFriendly) {
    this.setState({sortBy: sortBy, sortByFriendly: sortByFriendly, openSortBy: false, isFilteringData: true});
    this.loadHotels(this.state.formData.cityCode, this.state.formData.rooms, this.state.formData.arrivalDate, this.state.formData.leaveDate, this.state.formData.nationality, this.state.formData.currency, this.state.formData.minRate, this.state.formData.maxRate, this.state.formData.starRating, sortBy);
  }

  render() {
    document.title = 'Loading Hotels...';
    if (!this.state.isLoadingLocation) {

      let queryString = '?arrivalDate=' + this.state.formData.arrivalDate + '&nights=' + this.state.formData.nights + '&adults=' + this.state.formData.adults + '&children=' + this.state.formData.children + '&cityCode=' + this.state.formData.cityCode;

      let title = 'Hotels in ' + titleCase(this.props.location.regionName);
      document.title = title;

      if (!this.state.isLoadingHotelList) {
          return (
            <div>
              <SubPageHeader location={this.props.location} contentType="hotels" title={title}/>
              <div className="jumbotron hotelSearch">
                <div className="container">
                  <div className="row ">
                    <div className="gap gap-mini"></div>
                    <div className="col-md-12">
                      <SearchForm searchUrl={this.props.searchUrl} arrivalDate={this.state.formData.arrivalDate}
                                  nights={parseInt(this.state.formData.nights)}
                                  adults={parseInt(this.state.formData.rooms[0].adults)} children={parseInt(this.state.formData.rooms[0].children)} useFunction={false}
                                  handleFormSubmit={this.handleFormSubmit} isSideBar={false}
                                  city={this.props.location.regionNameLong} buttonName="Search"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap gap-mini"></div>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-3 sideBar">
                    <MapSideBar
                      latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0}
                      longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0}
                      text={title} zoom={13} markerArray={this.props.mapHotels}
                      isLoading={this.state.isLoadingHotelList && this.state.isFilteringData}
                      locationType={this.props.location.subClass}/>
                    <FilterHotels minPrice={this.state.formData.minRate} maxPrice={this.state.formData.maxRate} filterHotels={this.filterHotels}/>
                  </div>
                  <div className="col-12 col-md-9">
                    <div className={this.state.isLoadingHotelList || this.state.isFilteringData ? "hide" : "row"}>
                      <div className="col-md-8">
                        <p className="text-left">Showing {this.props.hotels ? this.props.hotels.hotelCount : 0} Hotels in {this.props.location.regionName} on {new moment(this.state.formData.arrivalDate).format('LL')} for {this.state.formData.nights} {this.state.formData.nights == 1 ? 'night' : 'nights'}</p>
                      </div>
                      <div className="col-md-4">
                        <div className="text-right">
                          <SortBy updateSortBy={this.updateSortBy} value={this.state.formData.sortBy} valueFriendly={this.state.formData.sortByFriendly}/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {
                        !this.state.isLoadingHotelList && !this.state.isFilteringData ? this.props.hotels.hotelCount > 0 ? this.props.hotels.hotelResultSet.map(function (hotel, i) {
                          return (<HotelThumb hotel={hotel} hotelUrl={this.props.location.url} queryString={queryString}
                                              key={hotel.hotelId} cssClass="col-md-4 mb-4" nameLength={40}/>);
                        }, this) : (<div className="col-md-12"><strong>Oops.</strong> We cannot find any hotels matching your criteria.</div>) : (
                          <div className="col-md-12"><Loader showLoader={true}/></div>)
                      }
                    </div>
                  </div>
                </div>
                <div className="gap gap-mini"></div>
              </div>
              <LastMinuteDeal locationId={this.props.locationId}/>
              <div className="container">
                <div className="gap gap-mini"></div>
                <FacebookSignup showLines={false}/>
                <TrustedPartners />
                <div className="gap gap-mini"></div>
              </div>
            </div>
          );
      }
      else {
        return (
          <div>
            <SubPageHeader location={this.props.location} contentType="hotels" title={title}/>
            <div className="jumbotron hotelSearch">
              <div className="container">
                <div className="row ">
                  <div className="gap gap-mini"></div>
                  <div className="col-md-12">
                    <SearchForm searchUrl={this.props.searchUrl} arrivalDate={this.state.formData.arrivalDate}
                                nights={parseInt(this.state.formData.nights)}
                                adults={parseInt(this.state.formData.rooms[0].adults)} children={parseInt(this.state.formData.rooms[0].children)} useFunction={false}
                                handleFormSubmit={this.handleFormSubmit} isSideBar={false}
                                city={this.props.location.regionNameLong} buttonName="Search"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap gap-mini"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 loadingHotels"><Loader showLoader={true}/></div>
              </div>
              <div className="gap gap-mini"></div>
            </div>
            <LastMinuteDeal locationId={this.props.locationId}/>
            <div className="container">
              <div className="gap gap-mini"></div>
              <FacebookSignup showLines={false}/>
              <TrustedPartners />
              <div className="gap gap-mini"></div>
            </div>
          </div>
        );
      }
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
  adults: 1,
  children: 0
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
  adults: PropTypes.number,
  children: PropTypes.number,
  arrivalDate: PropTypes.string,
  searchUrl: PropTypes.string,
  queryString: PropTypes.string,
  cityCode: PropTypes.string,
  mapHotels: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    arrivalDate: ownProps.location !== undefined ? ownProps.location.query.arrivalDate : moment().add(7, 'days').format('YYYY-MM-DD'),
    rooms: ownProps.location.query.guests !== undefined ? parseInt(ownProps.location.query.guests) : 1,
    adults: ownProps.location.query.adults !== undefined ? parseInt(ownProps.location.query.adults) : 1,
    children: ownProps.location.query.children !== undefined ? parseInt(ownProps.location.query.children) : 0,
    nights: ownProps.location.query.nights !== undefined ? parseInt(ownProps.location.query.nights) : 1,
    cityCode: ownProps.location.query.cityCode !== undefined ? ownProps.location.query.cityCode : '',
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
