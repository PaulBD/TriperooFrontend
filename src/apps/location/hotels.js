import React, {PropTypes} from 'react';
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
import HotelResults from '../../components/layout/cards/hotels/hotelResults';
let moment = require('moment');
import Toastr from 'toastr';

let titleCase = require('title-case');

class LocationContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = { pageSize: 20, pageNumber: 0, arrivalDate: moment().add(7, 'days').format('YYYY-MM-DD'), formattedArrivalDate: moment().add(7, 'days').format('LL'), departureDate: moment().add(8, 'days').format('YYYY-MM-DD'), formattedDepartureDate: moment().add(8, 'days').format('LL'), nights: 1, isLoadingLocation: true, isLoadingHotelList: true };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => this.loadHotels(this.props.locationId, this.state.arrivalDate, this.state.nights, this.state.pageSize, this.state.pageNumber))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false, isLoadingHotelList: false });
      });
  }

  handleFormSubmit(searchValue, startDate, formattedStartDate, endDate, formattedEndDate, rooms, guests) {
    this.setState({isLoadingLocation: false, isLoadingHotelList: false});
    var nights = endDate.diff(startDate, 'days');
    this.setState({  arrivalDate: startDate.format('YYYY-MM-DD'), formattedArrivalDate: startDate.format('LL'), departureDate: endDate.format('YYYY-MM-DD'), formattedDepartureDate: endDate.format('LL'), nights: nights });
    this.loadHotels(this.props.locationId, startDate.format('YYYY-MM-DD'), nights, this.state.pageSize, this.state.pageNumber);
  }

  loadHotels(locationId, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingHotelList: true});
    this.props.hotelActions.loadHotelsByLocation(locationId, pageSize, pageNumber)
      .then(() => this.setState({isLoadingLocation: false, isLoadingHotelList: false}))
      .catch(error => {
        this.setState({isLoadingLocation: false, isLoadingHotelList: false});
      });
  }


  render() {
    document.title = 'Loading Hotels...';
    if (!this.state.isLoadingLocation) {
      document.title = 'Hotels in ' + titleCase(this.props.location.regionName);
      let title = 'Hotels in ' + titleCase(this.props.location.regionName);
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="hotels" title={title}/>
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h5>Search For Hotels</h5>
                    <SearchForm sDate={this.state.arrivalDate} useFunction={true} handleFormSubmit={this.handleFormSubmit} isSideBar={false} city={this.props.location.regionNameLong} />
                    <div className="gap gap-small"></div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <HotelResults hotels={this.props.hotels.hotelListResponse} url={this.props.location.url} loadingHotels={this.state.isLoadingHotelList} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
          <div className="row greyBg detailSubHeader">
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
  hotels: {}
};

LocationContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  hotelActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  hotels: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    hotels: state.hotels.hotels ? state.hotels.hotels : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    hotelActions: bindActionCreators(hotelActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationContent);
