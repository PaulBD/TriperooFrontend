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
        this.state = { isLoading: true };
    }

    componentDidMount() {
        this.props.actions.loadLocations(this.props.placeId, this.props.searchType, 7, 0);
        this.setState({ isLoading: false });
    }

    render(){
    return (
            <div>
                <h3>Our Top Places In {titleCase(this.props.name)}</h3>
                <LocationList locations={this.props.locations} />
                <Loader showLoader={this.state.isLoading} />
            </div>
        );
    }
}

TopLocations.defaultProps = {
    name: '',
    searchType: '',
    placeId: 0,
    locations: []
};

TopLocations.propTypes = {
    placeId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    searchType: PropTypes.string.isRequired,
    locations: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    locations: state.locations,
    placeId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(locationsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopLocations);