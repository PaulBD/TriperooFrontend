import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as attractionActions from '../../actions/location/travelContent/attractionActions';
import FacebookSignup from '../../components/customer/authentication/facebookSignup';
import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';

import SubPageHeader from '../../components/locations/subPageHeader';
import AttractionCategories from '../../components/locations/common/categorySideBar';
import Attractions from '../../components/locations/locationListWrapper';

let titleCase = require('title-case');

class AttractionContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeAttraction = this.changeAttraction.bind(this);
    this.changePage = this.changePage.bind(this);
    this.state = { isLoadingLocation: false, isLoadingAttractionList: false, attractionType: '', attractionFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.setState({isLoadingLocation: true});
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => this.loadAttractions(this.props.locationId, this.state.attractionType, this.state.pageSize, this.state.pageNumber))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  changeAttraction(value, friendlyName) {
    this.setState({ attractionType: value, attractionFriendlyName: friendlyName  });
    this.loadAttractions(this.props.locationId, value, this.state.pageSize, this.state.pageNumber);
  }

  changePage(value){
    this.loadAttractions(this.props.locationId, this.state.attractionType, this.state.pageSize, value - 1);
  }

  loadAttractions(locationId, attractionType, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingAttractionList: true });
    this.props.attractionActions.loadAttractionsByParentLocationId(locationId, attractionType, pageSize, pageNumber)
      .then(() => this.setState({isLoadingAttractionList: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingAttractionList: false});
      });
  }

  render(){
    document.title = this.state.attractionType == '' ? titleCase(this.props.location.regionName) + ' Attractions' : titleCase(this.state.attractionFriendlyName) + ' in ' + titleCase(this.props.location.regionName);

    if (! this.state.isLoadingLocation)
    {
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="attractions" />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <AttractionCategories changeCategory={this.changeAttraction} contentType="attractions"  />
                  </div>
                  <div className="col-md-9">
                    <div className={this.state.isLoadingAttractionList ? "hide" : "nav-drop booking-sort"}>
                      {this.props.attractionCount} Results {this.state.attractionType != '' ? ' - filtered by ' + titleCase(this.state.attractionFriendlyName) : ''}
                    </div>
                    <Attractions locationId={this.props.locationId} locations={this.props.attractions} locationCount={this.props.attractionCount} changePage={this.changePage} isFetching={this.state.isLoadingAttractionList}/>
                  </div>
                </div>
              </div>
              <div className="gap gap-small"></div>
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
