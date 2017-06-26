import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as nightlifeActions from '../../actions/location/travelContent/nightlifeActions';
import FacebookSignup from '../../components/customer/authentication/facebookSignup';
import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';

import SubPageHeader from '../../components/locations/subPageHeader';
import NightlifeCategories from '../../components/locations/common/categorySideBar';
import Nightlife from '../../components/locations/locationListWrapper';

let titleCase = require('title-case');

class NightlifeContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeNightlifeVenue = this.changeNightlifeVenue.bind(this);
    this.changePage = this.changePage.bind(this);
    this.state = { isLoadingLocation: false, isLoadingNightlifeList: false, nightlifeType: '', nightlifeFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.setState({isLoadingLocation: true});
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => this.loadNightlifVenues(this.props.locationId, this.state.nightlifeType, this.state.pageSize, this.state.pageNumber))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  changeNightlifeVenue(value, friendlyName) {
    this.setState({ nightlifeType: value, nightlifeFriendlyName: friendlyName });
    this.loadNightlifVenues(this.props.locationId, value, this.state.pageSize, this.state.pageNumber - 1);
  }

  changePage(value){
    this.loadNightlifVenues(this.props.locationId, this.state.nightlifeType, this.state.pageSize, value);
  }

  loadNightlifVenues(locationId, nightlifeType, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingNightlifeList: true });
    this.props.nightlifeActions.loadNightlifeByParentLocationId(locationId, nightlifeType, pageSize, pageNumber)
      .then(() => this.setState({isLoadingNightlifeList: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingNightlifeList: false});
      });
  }

  render(){
    document.title = this.state.nightlifeType == '' ? titleCase(this.props.location.regionName) + ' Nightlife' : titleCase(this.state.nightlifeFriendlyName) + ' in ' + titleCase(this.props.location.regionName);

    if (! this.state.isLoadingLocation)
    {
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="nightlife" />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <NightlifeCategories changeCategory={this.changeNightlifeVenue} contentType="nightlife"  />
                  </div>
                  <div className="col-md-9">
                    <div className={this.state.isLoadingNightlifeList ? "hide" : "nav-drop booking-sort"}>
                      {this.props.nightlifeCount} Results {this.state.nightlifeType != '' ? ' - filtered by ' + titleCase(this.state.nightlifeFriendlyName) : ''}
                    </div>
                    <Nightlife locationId={this.props.locationId} locations={this.props.nightlife} locationCount={this.props.nightlifeCount} changePage={this.changePage} isFetching={this.state.isLoadingNightlifeList}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FacebookSignup />
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
