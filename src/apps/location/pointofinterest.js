import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as pointOfInterestActions from '../../actions/location/travelContent/pointofinterestActions';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import TriperooLoader from '../../components/loaders/globalLoader';
import MapSideBar from '../../components/maps/mapSideBar';
import FilterPointOfInterest from '../../components/forms/searchForms/filterPointOfInterests';
import Toastr from 'toastr';

import SubPageHeader from '../../components/content/headers/locationCategory';
import PointsOfInterest from '../../components/layout/cards/location/locationListWrapper';

let titleCase = require('title-case');

class PointOfInterestContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changePointOfInterest = this.changePointOfInterest.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSearchPointOfInterest = this.onSearchPointOfInterest.bind(this);
    this.filterPointOfInterests = this.filterPointOfInterests.bind(this);
    this.state = { searchValue: '', isLoadingCategoryList: false, isLoadingLocation: true, isLoadingPointOfInterestList: false, pointOfInterestType: '', pointOfInterestFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => {
        this.setState({isLoadingCategoryList: true});
        this.loadPointOfInterests(this.props.locationId, this.state.pointOfInterestType, '', this.state.pageSize, this.state.pageNumber);

      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  changePointOfInterest(value, friendlyName) {
    this.setState({ attractionType: value, pointOfInterestFriendlyName: friendlyName, searchValue: ''  });
    this.loadPointOfInterests(this.props.locationId, value, '', this.state.pageSize, this.state.pageNumber);
  }

  changePage(value){
    this.loadPointOfInterests(this.props.locationId, this.state.pointOfInterestType, '', this.state.pageSize, value - 1);
  }

  loadPointOfInterests(locationId, pointOfInterestType, pointOfInterestName, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingPointOfInterestList: true});

    this.props.pointOfInterestActions.loadPointOfInterestsByParentLocationId(locationId, pointOfInterestType, pointOfInterestName, pageSize, pageNumber)
      .then(() => this.setState({isLoadingPointOfInterestList: false, isLoadingCategoryList:false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingPointOfInterestList: false});
      });
  }

  filterPointOfInterests(pointOfInterestCategory) {
    this.setState({ pointOfInterestType: pointOfInterestCategory, pointOfInterestFriendlyName: pointOfInterestCategory });
    this.loadPointOfInterests(this.props.locationId, pointOfInterestCategory, '', this.state.pageSize, this.state.pageNumber);
  }

  onSearchPointOfInterest(searchValue) {
    this.setState({searchValue: searchValue});
    this.loadPointOfInterests(this.props.locationId, this.state.pointOfInterestType, searchValue, this.state.pageSize, this.state.pageNumber);
  }

  render(){
    let title = 'Points of Interest in ' + titleCase(this.props.location.regionName);

    document.title = title;

    if (! this.state.isLoadingLocation)
    {
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="pointOfInterest" title={title} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 sideBar">
                    <MapSideBar latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={title} zoom={13} markerArray={this.props.mapPointOfInterests} isLoading={this.state.isLoadingCategoryList} locationType={this.props.location.subClass} />
                    <FilterPointOfInterest searchName="" locationId={this.props.locationId} pageSize={this.state.pageSize} pageNumber={this.state.pageNumber} categories={this.props.pointOfInterestsCategories} filterPointOfInterests={this.filterPointOfInterests} isFetching={this.state.isLoadingCategoryList}/>
                  </div>
                  <div className="col-md-9 restaurantList">
                    <PointsOfInterest useMinHeight={false} locationId={this.props.locationId} locations={this.props.pointOfInterests} locationCount={this.props.pointOfInterestsCount} changePage={this.changePage} isFetching={this.props.isFetching}/>
                  </div>
                </div>
                <div className="gap gap-small"></div>
              </div>
            </div>
          </div>
          <FacebookSignup showLines={false}/>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

PointOfInterestContent.defaultProps = {
  attractionType: '',
  mapAttractions: [],
  attractionCategories: []
};

PointOfInterestContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  pointOfInterestActions: PropTypes.object.isRequired,
  pointOfInterestsCount: PropTypes.number.isRequired,
  mapPointOfInterests: PropTypes.array.isRequired,
  pointOfInterestsCategories: PropTypes.array.isRequired,
  pointOfInterests: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  pointOfInterestType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    isFetching: state.pointOfInterests.isFetching,
    pointOfInterests: state.pointOfInterests.pointOfInterestsList ? state.pointOfInterests.pointOfInterestsList : {},
    mapPointOfInterests: state.pointOfInterests.pointOfInterestsList ? state.pointOfInterests.pointOfInterestsList.mapLocations : [],
    pointOfInterestsCategories: state.pointOfInterests.pointOfInterestsList ? state.pointOfInterests.pointOfInterestsList.categories : [],
    pointOfInterestsCount:  state.pointOfInterests.pointOfInterestsList ? state.pointOfInterests.pointOfInterestsList.locationCount : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    pointOfInterestActions: bindActionCreators(pointOfInterestActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PointOfInterestContent);
