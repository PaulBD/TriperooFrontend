import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationsActions from '../../../../actions/location/locationsActions';
import LocationList from './locationList';
import Loader from '../../../loaders/contentLoader';
let titleCase = require('title-case');
import Toastr from 'toastr';

class TopLocations extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { loadingLocations: false };
  }

  componentWillMount() {
    this.loadLocations();
  }

  loadLocations() {
    this.setState({loadingLocations: true});
    this.props.locationsActions.loadLocationsByParentLocationId(this.props.locationId, this.props.locationType, this.props.locationName, this.props.pageSize, 0)
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
          {this.props.showTitle ? <h3>Things to do in {titleCase(this.props.name)}...</h3> : ''}
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

TopLocations.defaultProps = {
  name: '',
  searchType: '',
  locationId: 0,
  locationName: '',
  pageSize: 8,
  locations: {},
  isFetching: false,
  showTitle: true
};

TopLocations.propTypes = {
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  locationType: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  locations: PropTypes.object.isRequired,
  locationsActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locations.isFetching ? state.locations.isFetching : false,
    locations: state.locations.locationsList ? state.locations.locationsList : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationsActions: bindActionCreators(locationsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopLocations);
