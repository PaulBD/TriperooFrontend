import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';

import FacebookSignup from '../../components/customer/authentication/facebookSignup';
import Header from '../../components/locations/subPageHeader';

import ReviewList from '../../components/reviews/textList';
import LocationStats from '../../components/locations/stats';
import WeatherForcast from '../../components/locations/weather/forecast';
import ReviewButton from '../../components/reviews/reviewButton';
import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';

let titleCase = require('title-case');

class ReviewsByLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingLocation: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({isLoadingLocation: true});
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => this.DoSomething())
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  DoSomething() {
    this.setState({isLoadingLocation: false});
  }

  render(){
    document.title = titleCase(this.props.location.regionName) + ' reviews';

    if (! this.state.isLoadingLocation)
    {
      return (
        <div>
          <Header location={this.props.location} contentType="reviews" />
          <div className="container">
            <div className="row row-wrap">
              <div className="gap gap-small"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <ReviewList locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" pageSize={3} pageNumber={0} showTitle={false} />
                  </div>
                  <div className="col-md-4">
                    <ReviewButton />
                    <LocationStats likeCount={this.props.location.likeCount} reviewCount={this.props.location.reviewCount} averageReviewScore={this.props.location.averageReviewScore} />
                    <div className="gap gap-small"></div>
                    <WeatherForcast locationId={this.props.locationId} />
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

ReviewsByLocation.defaultProps = {
  isFetching: false
};

ReviewsByLocation.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  contentType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    contentType: ownProps.params.contentType
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsByLocation);
