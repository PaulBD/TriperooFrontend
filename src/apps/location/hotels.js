import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';

import FacebookSignup from '../../components/customer/authentication/facebookSignup';
import SubPageHeader from '../../components/locations/subPageHeader';
import PageTitle from '../../components/locations/pageTitle';
import GoogleMaps from '../../components/locations/common/googleMap';
import Hotels from '../../components/hotels/byLocation';
import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';
import Thumb from '../../components/hotels/thumb';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import SearchForm from '../../components/hotels/searchForm';

let titleCase = require('title-case');

class LocationContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { hotels:[], isLoadingLocation: true, isLoadingHotelList: false };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => this.loadHotels(this.props.locationId, this.state.pageSize, this.state.pageNumber))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  loadHotels(locationId, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingHotelList: true});
  }


  render() {
    document.title = 'Hotels';

    if (!this.state.isLoadingLocation) {
      let title = 'Hotels in ' + titleCase(this.props.location.regionName);
      document.title = title;

      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="hotels" title={title}/>
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <h4>Title</h4>
                    <hr />
                    <div className="gap gap-small"></div>
                      <div className="row">
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                        <div className="col-md-4">
                          <Thumb />
                        </div>
                      </div>
                  </div>
                  <div className="col-md-4 sidebar">
                    <h5>Search For Hotels</h5>
                    <SearchForm useFunction={true} isSideBar={true} city={this.props.location.regionNameLong} />
                    <div className="gap gap-small"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
          <div className="row greyBg detailSubHeader">
            <GoogleMaps latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={this.props.location.regionName} zoom={12} markerArray={this.state.hotels} isLoading={this.state.isLoadingHotelList} locationType={this.props.location.subClass} />
          </div>
          <FacebookSignup showLines={false}/>
          <LastMinuteDeal locationId={this.props.locationId} />
          <FacebookSignup showLines={false}/>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

LocationContent.defaultProps = {
  isFetching: false
};

LocationContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationContent);
