import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as attractionActions from '../../actions/location/travelContent/attractionActions';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import TriperooLoader from '../../components/loaders/globalLoader';
import GoogleMaps from '../../components/maps/googleMap';
import Toastr from 'toastr';

import SubPageHeader from '../../components/content/headers/locationCategory';
import AttractionCategories from '../../components/filters/locations';
import Attractions from '../../components/layout/cards/location/locationListWrapper';
import PageTitle from '../../components/layout/location/pageTitle';

let titleCase = require('title-case');

class AttractionContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeAttraction = this.changeAttraction.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSearchAttraction = this.onSearchAttraction.bind(this);
    this.state = { searchValue: '', isLoadingLocation: true, isLoadingAttractionList: false, attractionType: '', attractionFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => this.loadAttractions(this.props.locationId, this.state.attractionType, '', this.state.pageSize, this.state.pageNumber))
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
      .then(() => this.setState({isLoadingAttractionList: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingAttractionList: false});
      });
  }

  onSearchAttraction(searchValue) {
    this.setState({searchValue: searchValue});
      this.loadAttractions(this.props.locationId, this.state.attractionType, searchValue, this.state.pageSize, this.state.pageNumber);
  }

  render(){
    document.title = this.state.attractionType == '' ? titleCase(this.props.location.regionName) + ' Attractions' : titleCase(this.state.attractionFriendlyName) + ' in ' + titleCase(this.props.location.regionName);

    if (! this.state.isLoadingLocation)
    {
      let title = 'Things to do in' + titleCase(this.props.location.regionName);
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="attractions" title={title} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <PageTitle defaultTitle="Top Things To Do" locationName={this.props.location.regionName} name={this.state.attractionFriendlyName} type={this.state.attractionType} searchValue={this.state.searchValue} onSearch={this.onSearchAttraction} />
                    <div className="gap gap-small"></div>
                    <div className="col-md-12">
                      <div className="row">
                        <Attractions locationId={this.props.locationId} locations={this.props.attractions} locationCount={this.props.attractionCount} changePage={this.changePage} isFetching={this.state.isLoadingAttractionList}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <AttractionCategories changeCategory={this.changeAttraction} contentType="attractions"   />
                    <div className="gap gap-small"></div>
                  </div>
                </div>
              </div>
              <div className="gap gap-small"></div>
            </div>
          </div>

          <div className="gap gap-small"></div>
          <div className="row greyBg detailSubHeader">
            <GoogleMaps latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={this.props.location.regionName} zoom={10} markerArray={this.state.attractions} isLoading={this.state.isLoadingAttractionList} locationType={this.props.location.subClass} />
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
  attractionType: ''
};

AttractionContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  attractionActions: PropTypes.object.isRequired,
  attractionCount: PropTypes.number.isRequired,
  attractions: PropTypes.array.isRequired,
  attractionType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    attractions: state.attractions.attractionsList ? state.attractions.attractionsList.locations : [],
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
