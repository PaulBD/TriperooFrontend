import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as attractionActions from '../../actions/location/travelContent/attractionActions';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import TriperooLoader from '../../components/loaders/globalLoader';
import MapSideBar from '../../components/maps/mapSideBar';
import FilterAttractions from '../../components/forms/searchForms/filterAttractions';
import Toastr from 'toastr';

import SubPageHeader from '../../components/content/headers/locationCategory';
import Attractions from '../../components/layout/cards/location/locationListWrapper';

let titleCase = require('title-case');

class AttractionContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeAttraction = this.changeAttraction.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSearchAttraction = this.onSearchAttraction.bind(this);
    this.filterAttractions = this.filterAttractions.bind(this);
    this.state = { searchValue: '', isLoadingCategoryList: false, isLoadingLocation: true, isLoadingAttractionList: false, attractionType: '', attractionFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => {
        this.setState({isLoadingCategoryList: true});
        this.loadAttractions(this.props.locationId, this.state.attractionType, '', this.state.pageSize, this.state.pageNumber);

      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  changeAttraction(value, friendlyName) {
    this.setState({ attractionType: value, attractionFriendlyName: friendlyName, searchValue: ''  });
    this.loadAttractions(this.props.locationId, value, '', this.state.pageSize, this.state.pageNumber);
  }

  changePage(value){
    this.loadAttractions(this.props.locationId, this.state.attractionType, '', this.state.pageSize, value - 1);
  }

  loadAttractions(locationId, attractionType, attractionName, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingAttractionList: true});

    this.props.attractionActions.loadAttractionsByParentLocationId(locationId, attractionType, attractionName, pageSize, pageNumber)
      .then(() => this.setState({isLoadingAttractionList: false, isLoadingCategoryList:false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingAttractionList: false});
      });
  }

  filterAttractions(attractionCategory) {
    this.setState({ attractionType: attractionCategory, attractionFriendlyName: attractionCategory });
    this.loadAttractions(this.props.locationId, attractionCategory, '', this.state.pageSize, this.state.pageNumber);
  }

  onSearchAttraction(searchValue) {
    this.setState({searchValue: searchValue});
      this.loadAttractions(this.props.locationId, this.state.attractionType, searchValue, this.state.pageSize, this.state.pageNumber);
  }

  render(){
    let title = 'Things to do in ' + titleCase(this.props.location.regionName);

    document.title = title;

    if (! this.state.isLoadingLocation)
    {
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="attractions" title={title} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 sideBar">
                    <MapSideBar latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={title} zoom={13} markerArray={this.props.mapAttractions} isLoading={this.state.isLoadingCategoryList} locationType={this.props.location.subClass} />
                    <FilterAttractions categories={this.props.attractionCategories} filterAttractions={this.filterAttractions} isFetching={this.state.isLoadingCategoryList}/>
                  </div>
                  <div className="col-md-9 restaurantList">
                    <Attractions useMinHeight={false} locationId={this.props.locationId} locations={this.props.attractions} locationCount={this.props.attractionCount} changePage={this.changePage} isFetching={this.state.isLoadingAttractionList}/>
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

AttractionContent.defaultProps = {
  attractionType: '',
  mapAttractions: [],
  attractionCategories: []
};

AttractionContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  attractionActions: PropTypes.object.isRequired,
  attractionCount: PropTypes.number.isRequired,
  mapAttractions: PropTypes.array.isRequired,
  attractionCategories: PropTypes.array.isRequired,
  attractions: PropTypes.array.isRequired,
  attractionType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    attractions: state.attractions.attractionsList ? state.attractions.attractionsList.locations : [],
    mapAttractions: state.attractions.attractionsList ? state.attractions.attractionsList.mapLocations : [],
    attractionCategories: state.attractions.attractionsList ? state.attractions.attractionsList.categories : [],
    attractionCount:  state.attractions.attractionsList ? state.attractions.attractionsList.locationCount : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    attractionActions: bindActionCreators(attractionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AttractionContent);
