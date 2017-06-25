import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';

import FacebookSignup from '../../components/customer/authentication/facebookSignup';
import Header from '../../components/locations/subPageHeader';

import QuestionList from '../../components/questions/list';
import LocationStats from '../../components/locations/stats';
import LocationOverview from '../../components/locations/overview';
import TriperooLoader from '../../components/common/triperooLoader';
import QuestionButton from '../../components/questions/questionButton';
import Toastr from 'toastr';

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
    this.props.locationActions.loadLocationById(this.props.locationId)
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
          <Header location={this.props.location} contentType="questions" />
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
                    <QuestionList locationId={this.props.locationId} locationName={this.state.location.regionName} locationType={this.state.location.subClass} pageSize={5} pageNumber={0} showTitle={false} isSideComponent={false} />
                  </div>
                  <div className="col-md-4">
                    <QuestionButton locationId={this.props.locationId} locationName={this.state.location.regionName} locationNameLong={this.state.location.regionNameLong} locationType={this.state.location.regionType} />
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
