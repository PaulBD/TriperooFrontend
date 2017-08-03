import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as nightlifeActions from '../../actions/location/travelContent/nightlifeActions';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';

import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';

import SubPageHeader from '../../components/content/headers/locationCategory';
import NightlifeCategories from '../../components/filters/locations';
import Nightlife from '../../components/layout/cards/location/locationListWrapper';
import PageTitle from '../../components/layout/location/pageTitle';
import GoogleMaps from '../../components/maps/googleMap';

let titleCase = require('title-case');

class NightlifeContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeNightlife = this.changeNightlife.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSearchNightlife = this.onSearchNightlife.bind(this);
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

  onSearchNightlife(searchValue) {
    this.setState({searchValue: searchValue});
    this.loadNightlife(this.props.locationId, this.state.nightlifeType, searchValue, this.state.pageSize, this.state.pageNumber);
  }

  render(){
    document.title = this.state.nightlifeType == '' ? titleCase(this.props.location.regionName) + ' Restaurants' : titleCase(this.state.restaurantFriendlyName) + ' in ' + titleCase(this.props.location.regionName);

    if (! this.state.isLoadingLocation)
    {
      console.log(this.state.nightlife);

      let title = 'Places to go out in ' + titleCase(this.props.location.regionName);
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="nightlife" title={title} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <PageTitle defaultTitle="Top Places To Go Out" locationName={this.props.location.regionName} name={this.state.nightlifeFriendlyName} type={this.state.nightlifeType} searchValue={this.state.searchValue} onSearch={this.onSearchNightlife} />
                    <div className="gap gap-small"></div>
                    <div className="col-md-12">
                      <div className="row">
                        <Nightlife locationId={this.props.locationId} locations={this.props.nightlife} locationCount={this.props.nightlifeCount} changePage={this.changePage} isFetching={this.state.isLoadingNightlifeList}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <NightlifeCategories changeCategory={this.changeNightlife} contentType="nightlife"   />
                    <div className="gap gap-small"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gap gap-small"></div>
          <div className="row greyBg detailSubHeader">
            <GoogleMaps latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={this.props.location.regionName} zoom={13} markerArray={this.state.nightlife} isLoading={this.state.isLoadingNightlifeList} locationType={this.props.location.subClass} />
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
  nightlifeType: ''
};

NightlifeContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  nightlifeActions: PropTypes.object.isRequired,
  nightlifeCount: PropTypes.number.isRequired,
  nightlife: PropTypes.array.isRequired,
  nightlifeType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    nightlife: state.nightlife.nightlifeList ? state.nightlife.nightlifeList.locations : [],
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
