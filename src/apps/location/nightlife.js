import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as nightlifeActions from '../../actions/location/travelContent/nightlifeActions';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';

import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';

import SubPageHeader from '../../components/content/headers/locationCategory';
import Nightlife from '../../components/layout/cards/location/locationListWrapper';
import MapSideBar from '../../components/maps/mapSideBar';
import FilterNightlife from '../../components/forms/searchForms/filterNightlife';

let titleCase = require('title-case');

class NightlifeContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.filterNightlife = this.filterNightlife.bind(this);
    this.changeNightlife = this.changeNightlife.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSearchNightlife = this.onSearchNightlife.bind(this);
    this.filterCategories = this.filterCategories.bind(this);
    this.state = { nightlife: [], searchValue: '', isLoadingLocation: false, isLoadingNightlifeList: false, nightlifeType: '', nightlifeFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.setState({isLoadingLocation: true});
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => this.loadNightlife(this.props.locationId, this.state.nightlifeType, this.state.pageSize, this.state.pageNumber))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  changeNightlife(value, friendlyName) {
    this.setState({ nightlifeType: value, nightlifeFriendlyName: friendlyName });
    this.loadNightlife(this.props.locationId, value, this.state.pageSize, this.state.pageNumber);
  }

  changePage(value){
    this.loadNightlife(this.props.locationId, this.state.nightlifeType, this.state.pageSize, value - 1);
  }

  loadNightlife(locationId, nightlifeType, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingNightlifeList: true });
    this.props.nightlifeActions.loadNightlifeByParentLocationId(locationId, nightlifeType, pageSize, pageNumber)
      .then(() => this.setState({isLoadingNightlifeList: false, nightlife: this.props.nightlife}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingNightlifeList: false});
      });
  }

  filterNightlife(nightlifeCategory) {
    this.setState({ nightlifeType: nightlifeCategory, nightlifeFriendlyName: nightlifeCategory });
    this.loadNightlife(this.props.locationId, nightlifeCategory, this.state.pageSize, this.state.pageNumber);
  }

  onSearchNightlife(searchValue) {
    this.setState({searchValue: searchValue});
    this.loadNightlife(this.props.locationId, this.state.nightlifeType, searchValue, this.state.pageSize, this.state.pageNumber);
  }

  render(){
    let title = 'Places to go out in ' + titleCase(this.props.location.regionName);

    document.title = title;

    if (! this.state.isLoadingLocation)
    {
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="nightlife" title={title} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 sideBar">
                    <MapSideBar latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={title} zoom={13} markerArray={this.props.mapNightlife} isLoading={this.state.isLoadingNightlifeList} locationType={this.props.location.subClass} />
                    <FilterNightlife categories={this.props.nightlifeCategories} filterNightife={this.filterNightlife} isFetching={this.state.isLoadingNightlifeList}/>
                  </div>
                  <div className="col-md-9 restaurantList">
                    <Nightlife useMinHeight={false} locationId={this.props.locationId} locations={this.props.nightlife} locationCount={this.props.nightlifeCount} changePage={this.changePage} isFetching={this.state.isLoadingNightlifeList}/>
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

NightlifeContent.defaultProps = {
  nightlifeType: '',
  mapNightlife: [],
  nightlifeCategories: []
};

NightlifeContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  nightlifeActions: PropTypes.object.isRequired,
  nightlifeCount: PropTypes.number.isRequired,
  nightlife: PropTypes.object.isRequired,
  mapNightlife: PropTypes.array.isRequired,
  nightlifeCategories: PropTypes.array.isRequired,
  nightlifeType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    nightlife: state.nightlife.nightlifeList ? state.nightlife.nightlifeList : {},
    mapNightlife: state.nightlife.nightlifeList ? state.nightlife.nightlifeList.mapLocations : [],
    nightlifeCategories: state.nightlife.nightlifeList ? state.nightlife.nightlifeList.categories : [],
    nightlifeCount:  state.nightlife.nightlifeList ? state.nightlife.nightlifeList.locationCount : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    nightlifeActions: bindActionCreators(nightlifeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NightlifeContent);
