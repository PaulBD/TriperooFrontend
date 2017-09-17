import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as modalActions from '../../actions/common/modalActions';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';

import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import LocationHeader from '../../components/content/headers/locationItem';
import ReviewList from '../../components/layout/cards/reviews/locationReviewList';
import ReviewButton from '../../components/layout/buttons/reviewButton';
import BookmarkButton from '../../components/layout/buttons/bookmarkButton';
import PhotoButton from '../../components/layout/buttons/photoButton';
import RecentQuestions from '../../components/layout/cards/questions/list';
import QuestionButton from '../../components/layout/buttons/questionButton';
import Summary from '../../components/layout/location/summary';
import GoogleMaps from '../../components/maps/googleMap';
import HotelsNearLocation from '../../components/layout/cards/hotels/hotelsNearLocation';
import EventsByLocation from '../../components/layout/cards/events/eventByLocation';
import Photos from '../../components/layout/cards/location/photoList';
import TagList from '../../components/forms/common/tagList';
import TrustedPartners from '../../components/content/static/trustedPartners';

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
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.setState({ isLoadingLocation: true });
    this.props.locationActions.loadLocationById(this.props.locationId)
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
                <div className="row">
                <div className="col-md-4 col-6">
                  <ReviewButton name="sidePanel" locationId={this.props.locationId} locationName={this.props.location.regionName} locationNameLong={this.props.location.regionNameLong} locationType={this.props.location.subClass} pageSize={3} pageNumber={0} />
                </div>
                <div className="col-md-4 col-6">
                  <PhotoButton name="sidePanel" locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" />
                </div>
                <div className="col-md-4 col-12">
                  <BookmarkButton name="sidePanel" parentLocationId={this.props.location.parentRegionID} parentLocationName={this.props.location.parentRegionName} parentLocationNameLong={this.props.location.parentRegionNameLong} locationId={this.props.locationId} locationName={this.props.location.regionName} locationNameLong={this.props.location.regionNameLong} locationType={this.props.location.subClass} />
                </div>
                </div>
                <Summary location={this.props.location} showMap={false} showHelp={false}/>
              </div>
              <div className="col-md-4 col-12">
                <Photos photos={this.props.location.photos}/>
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
          <div className="row greyBg detailSubHeader">
            <GoogleMaps locationType={this.props.location.subClass} latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={this.props.location.regionName} zoom={13} isLoading={this.state.isLoadingLocation} />
          </div>
          <div className="gap gap-small"></div>
          <div className="row">
            <div className="container">
            <div className="col-md-12">
          <div className="row">
                <div className="col-md-8">
                  <ReviewList hasLoadedLocation={this.state.hasLoaded} locationId={this.props.locationId} locationName={this.props.location.regionName}  locationNameLong={this.props.location.regionNameLong}  locationType="" pageSize={3} pageNumber={0} showTitle={true} />
                </div>
                <div className="col-md-4">
                  <QuestionButton locationId={this.props.locationId} locationName={this.props.location.regionNameLong} locationNameShort={this.props.location.regionName} locationType={this.props.location.regionType} pageSize={3} pageNumber={0}/>
                  <RecentQuestions locationId={this.props.location.parentRegionID} locationName={this.state.location.parentRegionName} pageSize={3} pageNumber={0} locationUrl={this.state.location.url} showTitle={true} isSideComponent={true}/>
                </div>
                <hr />
            </div>
            </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
          <HotelsNearLocation latitude={this.props.location.latitude} longitude={this.props.location.longitude} pageSize={3} locationName={this.props.location.regionName} parentName={this.props.location.parentRegionName} parentUrl={this.props.location.parentUrl}/>
          <EventsByLocation locationId={this.props.locationId} keyword={this.props.location.regionName} />

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
