import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';

import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import Header from '../../components/content/headers/locationCategory';

import QuestionList from '../../components/layout/cards/questions/list';
import LocationStats from '../../components/layout/location/stats';
import LocationOverview from '../../components/layout/location/locationDescription';
import TriperooLoader from '../../components/loaders/globalLoader';
import QuestionButton from '../../components/layout/buttons/questionButton';
import Toastr from 'toastr';
let _ = require('lodash');

let titleCase = require('title-case');

class QuestionsByLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingLocation: true, isUpdatingLike: false, location: {}, showLike: true };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.setState({ isLoadingLocation: true });
    this.props.locationActions.loadLocationById(this.props.locationId, true)
      .then(() => {
        this.setState({
          isLoadingLocation: false,
          location: _.cloneDeep(this.props.location)
        });

      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  render(){
    document.title = titleCase(this.props.location.regionName) + ' questions';

    if (! this.state.isLoadingLocation)
    {
      return (
        <div>
          <Header location={this.props.location} contentType="questions" title="questions"/>
          <div className="container">
            <div className="row row-wrap">
              <div className="gap gap-small"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h4>Recent questions about {this.state.location.regionName}...</h4>
                    <hr/>
                  </div>
                  <div className="col-md-8">
                    <QuestionList locationId={this.props.locationId} parentLocationId={this.props.location.parentRegionID} locationName={this.state.location.regionName} locationType={this.state.location.subClass} pageSize={5} pageNumber={0} showTitle={false} isSideComponent={false} />
                  </div>
                  <div className="col-md-4">
                    <QuestionButton locationId={this.props.locationId} parentLocationId={this.props.location.parentRegionID} locationName={this.state.location.regionName} locationNameLong={this.state.location.regionNameLong} locationType={this.state.location.regionType} pageSize={15} pageNumber={0} />
                    <div className="gap gap-small"></div>
                    <LocationOverview location={this.props.location} />
                    <LocationStats locationId={this.props.locationId} stats={this.props.location.stats} locationUrl={this.props.location.url} locationName={this.props.location.regionName}  />
                  </div>
                </div>
              </div>
              <div className="gap"></div>
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

QuestionsByLocation.defaultProps = {
  isFetching: false
};

QuestionsByLocation.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsByLocation);
