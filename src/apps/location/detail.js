import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as modalActions from '../../actions/common/modalActions';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';

import FacebookSignup from '../../components/customer/authentication/facebookSignup';
import LocationHeader from '../../components/locations/locationHeader';
import ReviewList from '../../components/reviews/textList';
import ReviewButton from '../../components/reviews/reviewButton';
import BookmarkButton from '../../components/common/bookmarkButton';
import PhotoButton from '../../components/common/photoButton';
import RecentQuestions from '../../components/questions/questions';
import QuestionButton from '../../components/questions/questionButton';
import Summary from '../../components/locations/summary';
import GoogleMaps from '../../components/locations/common/googleMap';
import HotelsNearLocation from '../../components/hotels/hotelsNearLocation';
import EventsByLocation from '../../components/locations/event/eventByLocation';
import Photos from '../../components/locations/common/photos';
import TagList from '../../components/common/tagList';

let titleCase = require('title-case');

class LocationDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.editLocation = this.editLocation.bind(this);
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

  componentDidMount() {
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

  editLocation(e) {
    e.preventDefault();
    this.props.modalActions.openEditLocation(this.state.locationId, this.state.locationNameLong, this.state.locationSubClass, this.state.location);
  }

  removeLastComma(value){
    var n=value.lastIndexOf(",");
    var a=value.substring(0,n)
    return a;
  }

  render(){
    document.title = 'Visit ' + titleCase(this.props.location.regionName) + ' in ' + titleCase(this.props.location.parentRegionName);
    if (this.state.hasLoaded)
    {
      let address = '';

      if (this.props.location.formattedAddress) {

        for (let i = 0; i < this.props.location.formattedAddress.length; i++) {
          address += this.props.location.formattedAddress[i] + ', ';
        }

        address = this.removeLastComma(address);
      }
      return (
        <div>
          <LocationHeader location={this.props.location} hasLoaded={this.state.hasLoaded} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="col-md-8">
                <p><i className="fa fa-map-marker"></i> {address ? address : 'Address unknown'}</p>
                <p><i className="fa fa-phone"></i> {this.props.location.contactDetails.formattedPhone}</p>
                <p><i className="fa fa-pencil"></i> <a href="#" onClick={this.editLocation}>Edit</a></p>
                <TagList tags={this.props.location.tags} maxTags={5} />
                <div className="row">
                <div className="col-md-4">
                  <ReviewButton name="sidePanel" locationId={this.props.locationId} locationName={this.props.location.regionName} locationNameLong={this.props.location.regionNameLong} locationType={this.props.location.subClass} />
                </div>
                <div className="col-md-4">ß
                  <PhotoButton name="sidePanel" locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" />
                </div>
                <div className="col-md-4">
                  <BookmarkButton name="sidePanel" parentLocationId={this.props.location.parentRegionID} parentLocationName={this.props.location.parentRegionName} parentLocationNameLong={this.props.location.parentRegionNameLong} locationId={this.props.locationId} locationName={this.props.location.regionName} locationNameLong={this.props.location.regionNameLong} locationType={this.props.location.subClass} />
                </div>
                </div>
                <Summary locationName={this.props.location.regionName} summary={this.props.location.summary ? this.props.location.summary.en : ''} />
              </div>
              <div className="col-md-4">
                <Photos photos={this.props.location.photos}/>
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
          <div className="row greyBg detailSubHeader">
            <GoogleMaps latitude={this.props.location.locationCoordinates.latitude} longitude={this.props.location.locationCoordinates.longitude} text={this.props.location.regionName} zoom={13} />
          </div>
          <div className="gap gap-small"></div>
          <div className="row">
            <div className="container">
                <div className="col-md-8">
                  <ReviewList hasLoadedLocation={this.state.hasLoaded} locationId={this.props.locationId} locationName={this.props.location.regionName}  locationNameLong={this.props.location.regionNameLong}  locationType="" pageSize={3} pageNumber={0} showTitle={true} />
                </div>
                <div className="col-md-4">
                  <QuestionButton locationId={this.props.locationId} locationName={this.props.location.regionNameLong} locationNameShort={this.props.location.regionName} locationType={this.props.location.regionType}/>
                  <RecentQuestions locationId={this.props.locationId} locationName={this.props.location.regionName} limit={3} offset={0} />
                </div>
                <hr />
            </div>
          </div>
          <div className="gap gap-small"></div>
          <HotelsNearLocation latitude={this.props.location.latitude} longitude={this.props.location.longitude} pageSize={3} locationName={this.props.location.regionName} parentName={this.props.location.parentRegionName} parentUrl={this.props.location.parentUrl}/>
          <div className="gap gap-small"></div>
          <EventsByLocation locationId={this.props.locationId} keyword={this.props.location.regionName} />
          <FacebookSignup />
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
