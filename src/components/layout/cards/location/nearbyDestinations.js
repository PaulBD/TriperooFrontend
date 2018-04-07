import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationsActions from '../../../../actions/location/locationsActions';
import LocationList from './locationList';
import Loader from '../../../loaders/contentLoader';
import Toastr from 'toastr';

class NearbyDestinations extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { loadingLocations: false };
  }

  componentWillMount() {
    if (this.props.locationId > 0) {
      this.loadLocations();
    }
  }

  loadLocations() {
    this.setState({loadingLocations: true});
    this.props.locationsActions.loadOtherDestinations(this.props.locationId, 'City', this.props.locationName, this.props.pageSize, 0)
      .then(() => {
        this.setState({loadingLocations: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loadingLocations: false});
      });
  }

  render(){
    if (!this.state.loadingLocations)
    {
      return (
        <div className="col-md-12">
          {this.props.title ? <span><h4>{this.props.title}</h4><hr /></span> : ''}
          <LocationList locations={this.props.locations} cssClass="col-md-3 col-12" />
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

NearbyDestinations.defaultProps = {
  name: '',
  locationId: 0,
  locationName: '',
  pageSize: 8,
  locations: {},
  isFetching: false,
  title: ''
};

NearbyDestinations.propTypes = {
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  locations: PropTypes.object.isRequired,
  locationsActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  title: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locations.isFetching ? state.locations.isFetching : false,
    locations: state.locations.otherDestinations ? state.locations.otherDestinations : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationsActions: bindActionCreators(locationsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NearbyDestinations);
