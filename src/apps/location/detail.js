import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as modalActions from '../../actions/common/modalActions';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';
import ReactGA from 'react-ga';

import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import LocationHeader from '../../components/content/headers/locationItem';
import ReviewList from '../../components/layout/cards/reviews/locationReviewList';
import ReviewButton from '../../components/layout/buttons/reviewButton';
import BookmarkButton from '../../components/layout/buttons/bookmarkButton';
import PhotoButton from '../../components/layout/buttons/photoButton';
import RecentQuestions from '../../components/layout/cards/questions/list';
import QuestionButton from '../../components/layout/buttons/questionButton';
import Summary from '../../components/layout/location/summary';
import TriperooGoogleMap from '../../components/maps/googleMap';
import Photos from '../../components/layout/cards/location/photoList';
import TagList from '../../components/forms/common/tagList';
import TrustedPartners from '../../components/content/static/trustedPartners';
import HotelsNearLocation from '../../components/layout/cards/hotels/hotelsNearLocation';
import AttractionsNearLocation from '../../components/layout/cards/location/attractionsNearLocation';
let moment = require('moment');

let titleCase = require('title-case');

class LocationDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoadingLocation: false,
      hasLoaded: false,
      locationId: 0,
      locationNameLong: '',
      locationSubClass: '',
      formattedAddress: [],
      errors:''
    };
    this.trackClick = this.trackClick.bind(this);
    this.openRestaurantModal = this.openRestaurantModal.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  trackClick(e) {
    ReactGA.event({ category: e.currentTarget.getAttribute('data-category'), action: 'Click', label: this.props.location.regionName });

    this.props.modalActions.openBookmark(this.props.location.parentRegionID, this.props.location.parentRegionName, this.props.location.parentRegionNameLong, this.props.location.parentRegionImage, this.props.location.parentUrl, this.props.location.regionID, this.props.location.regionNameLong, this.props.location.regionName, e.currentTarget.getAttribute('data-category'), this.props.location.image, this.props.location.url, '', false, this.props.location.locationCoordinates.latitude, this.props.location.locationCoordinates.longitude, this.props.location.locationDetail.pricing ? this.props.location.locationDetail.pricing.priceGBP : "", this.props.location.locationDetail ? this.props.location.locationDetail.duration : "", this.props.location.locationDetail ? this.props.location.locationDetail.bookingUrl : "");
  }

  openRestaurantModal(e) {
    ReactGA.event({
      category: e.currentTarget.getAttribute('data-category'),
      action: 'Click',
      label: this.props.location.regionName
    });

    this.props.modalActions.openRestaurant(this.props.location.regionID);
  }

  loadLocation() {
    this.setState({ isLoadingLocation: true });
    this.props.locationActions.loadLocationById(this.props.locationId, false)
      .then(() => {
        this.setState({
          isLoadingLocation: false
          , hasLoaded: true
          , locationId: this.props.locationId
          , locationNameLong: this.props.location.regionNameLong
          , locationSubClass: this.props.location.subClass
          , location: this.props.location
        });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  removeLastComma(value){
    let n = value.lastIndexOf(",");
    let a = value.substring(0, n);
    return a;
  }

  render(){
    document.title = 'Visit ' + titleCase(this.props.location.regionName) + ' in ' + titleCase(this.props.location.parentRegionName);
    if (this.state.hasLoaded)
    {
      let address = '';
      let markerArray = [];
      markerArray.push({"url": this.props.location.url, "regionName":this.props.location.regionName,"subClass":this.props.location.subClass,"locationCoordinates":{"latitude":this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0,"longitude":this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0}});

      if (this.props.location.formattedAddress) {

        for (let i = 0; i < this.props.location.formattedAddress.length; i++) {
          if (this.props.location.formattedAddress[i].length > 0) {
            address += this.props.location.formattedAddress[i] + ', ';
          }
        }

        address = this.removeLastComma(address);
      }

      let editUrl = this.props.location.url + '/edit';

      return (
        <div>
          <LocationHeader location={this.props.location} hasLoaded={this.state.hasLoaded} docType={this.props.location.subClass} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="col-md-8 col-12">
                {address ? <p><i className="fa fa-map-marker"></i> {address}</p> : ''}
                {this.props.location.contactDetails ? this.props.location.contactDetails.formattedPhone ? <p><i className="fa fa-phone"></i> {this.props.location.contactDetails.formattedPhone} </p> : '' : ''}
                <p><i className="fa fa-pencil"></i> <a href={editUrl}>Edit Details</a></p>
                <TagList tags={this.props.location.tags} maxTags={5} />
                <div className="row mb-3">
                  <div className="col-lg-3 col-6 mb-2">
                    {this.props.location.regionType == "Restaurant" ? <a href="#" className="btn btn-primary questionBtn"  onClick={this.openRestaurantModal} data-category="Restaurants"><i className="fa fa-calendar"></i> Book Table</a> : ''}
                    {this.props.location.regionType == "Attractions" ? <a href={this.props.location.locationDetail.bookingUrl.replace('/25552/', '/62347/')} className="btn btn-primary questionBtn" target="_blank" onClick={this.trackClick} data-category="Attractions"><i className="fa fa-calendar"></i> Book</a> : ''}
                  </div>
                  <div className="col-lg-3 col-6 mb-2">
                    <ReviewButton name="sidePanel" locationId={this.props.locationId} locationName={this.props.location.regionName} locationNameLong={this.props.location.regionNameLong} locationType={this.props.location.subClass} pageSize={3} pageNumber={0} />
                  </div>
                  <div className="col-lg-3 col-6 mb-0">
                    <PhotoButton name="sidePanel" locationId={this.props.locationId} locationName={this.props.location.regionName} locationNameLong={this.props.location.regionNameLong} locationType="" />
                  </div>
                  <div className="col-lg-3 col-6 mb-0">
                    <BookmarkButton name="sidePanel" locationImage={this.props.location.image} parentLocationId={this.props.location.parentRegionID} parentLocationName={this.props.location.parentRegionName} parentLocationNameLong={this.props.location.parentRegionNameLong} parentLocationImage={this.props.location.parentRegionImage} parentLocationUrl={this.props.location.parentUrl} parentLocationType={this.props.location.regionType} locationId={this.props.locationId} locationName={this.props.location.regionName} locationNameLong={this.props.location.regionNameLong} locationType={this.props.location.subClass} locationUrl={this.props.location.url} locationLength={this.props.location.regionType == "Attractions" ? this.props.location.locationDetail.duration ? this.props.location.locationDetail.duration : "" : ""} latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} price={this.props.location.locationDetail.pricing ? this.props.location.locationDetail.pricing.priceGBP : ''} bookingUrl={this.props.location.locationDetail.bookingUrl} />
                  </div>
                </div>
                <Summary location={this.props.location} showMap={false} showHelp={false}/>
              </div>
              <div className="col-md-4 col-12">
                <Photos photos={this.props.location.photos} basePhoto={this.props.location.image}/>
              </div>
            </div>
          </div>
          <AttractionsNearLocation location={this.props.location} hasLoadedLocation={this.state.hasLoaded} url={this.props.location.parentUrl}/>
          <div className={this.props.location.locationCoordinates.latitude == 0 && this.props.location.locationCoordinates.longitude == 0 ? "hide" : "jumbotron maps"}>
            <TriperooGoogleMap latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={this.props.location.regionName} zoom={13} markerArray={markerArray} isLoading={false} locationType={this.props.location.subClass}/>
          </div>
          <HotelsNearLocation
            locationType={this.props.location.regionType}
            arrivalDate={moment().add(7, 'days').format('YYYY-MM-DD')}
            pageNumber={0}
            currencyCode="GBP"
            exclude={0}
            locale="en_en"
            radius={5}
            rooms1={1}
            nights={1}
            guests={1}
            sortBy="PROMO"
            locationId={this.props.locationId} latitude={this.props.location.latitude} longitude={this.props.location.longitude} pageSize={4} locationName={this.props.location.parentRegionName} url={this.props.location.parentUrl}/>


          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ReviewList hasLoadedLocation={this.state.hasLoaded} locationId={this.props.locationId} locationName={this.props.location.regionName}  locationNameLong={this.props.location.regionNameLong}  locationType="" pageSize={3} pageNumber={0} showTitle={true} title="Reviews" />
              </div>
              <div className="col-md-4">
                <QuestionButton parentLocationId={this.props.location.parentRegionID} locationId={this.props.location.locationId} locationName={this.props.location.regionNameLong} locationNameShort={this.props.location.regionName} locationType={this.props.location.regionType} pageSize={3} pageNumber={0}/>
                <RecentQuestions parentLocationId={this.props.location.parentRegionID} locationId={this.props.location.locationId} locationName={this.state.location.parentRegionName} pageSize={3} pageNumber={0} locationUrl={this.state.location.url} showTitle={true} isSideComponent={true}/>
              </div>
              <hr />
            </div>
          </div>
          <div className="gap gap-small"></div>
          <div className="container">
            <FacebookSignup />
            <TrustedPartners />
            <div className="gap"></div>
          </div>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

LocationDetail.defaultProps = {
  isFetching: false,
  isAuthenticated: false
};

LocationDetail.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticationActions: bindActionCreators(authenticationActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
