import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pointOfInterestActions from '../../../../actions/location/travelContent/pointofinterestActions';
import LocationList from './locationList';
import Loader from '../../../loaders/contentLoader';
import Toastr from 'toastr';

class TopPointOfInterest extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingPointOfInterestList: true };
  }

  componentWillMount() {
    if (this.props.locationId > 0) {
      this.loadPointOfInterests(this.props.locationId, '', '', this.props.pageSize, 0);
    }
  }

  loadPointOfInterests(locationId, pointOfInterestType, pointOfInterestName, pageSize, pageNumber) {
    this.setState({isLoadingPointOfInterestList: true});

    this.props.pointOfInterestActions.loadPointOfInterestsByParentLocationId(locationId, pointOfInterestType, pointOfInterestName, pageSize, pageNumber)
      .then(() => this.setState({isLoadingPointOfInterestList: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingPointOfInterestList: false});
      });
  }

  render(){
    if (!this.state.isLoadingPointOfInterestList)
    {
      return (
        <div className="col-md-12">
          {this.props.title ? <h4 className="locationTitle">{this.props.title} <small className="float-right"><a href={this.props.url} >See all things to do</a></small></h4> : ''}
          <LocationList locations={this.props.pointOfInterests} cssClass="col-md-3 col-12" />
        </div>
      );
    }
    else {
      return (
        <div className="col-md-12">
          <Loader showLoader={true}/>
        </div>
      );
    }
  }
}

TopPointOfInterest.defaultProps = {
  name: '',
  locationId: 0,
  locationName: '',
  pageSize: 8,
  pointOfInterests: {},
  isFetching: false,
  title: ''
};

TopPointOfInterest.propTypes = {
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  pointOfInterests: PropTypes.object.isRequired,
  pointOfInterestActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locations.isFetching ? state.locations.isFetching : false,
    pointOfInterests: state.pointOfInterests.pointOfInterestsList ? state.pointOfInterests.pointOfInterestsList : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pointOfInterestActions: bindActionCreators(pointOfInterestActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPointOfInterest);
