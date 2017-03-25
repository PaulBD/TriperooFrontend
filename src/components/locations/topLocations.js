import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationsActions from '../../actions/locationsActions';
import LocationList from './locationList';
import Loader from '../common/loadingDots';
let titleCase = require('title-case');

class TopLocations extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.loadLocationsByParentLocationId(this.props.locationId, this.props.locationType, 6, 0);
    }

    render(){
        if ((this.props.locations != null) && (this.props.locations.length > 0))
        {
            return (
                <div>
                    <h3>Popular In {titleCase(this.props.name)}...</h3>
                    <LocationList locations={this.props.locations} />
                    <Loader showLoader={this.props.isFetching} />
                </div>
            );
        }
        else {
            return null;
        }
    }
}

TopLocations.defaultProps = {
    name: '',
    searchType: '',
    locationId: 0,
    locations: [],
    isFetching: false
};

TopLocations.propTypes = {
    locationId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    locationType: PropTypes.string.isRequired,
    locations: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locationsList.isFetching ? state.locationsList.isFetching : false,
    locations: state.locationsList.locationsList ? state.locationsList.locationsList : [],
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(locationsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopLocations);