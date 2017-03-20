import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationsActions from '../../actions/locationsActions';
import PlaceList from './placeList';
import Loader from '../common/loadingDots';
let titleCase = require('title-case');

class TopPlaces extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        this.props.actions.loadLocations(this.props.placeId, this.props.searchType, 6, 0);
        this.state = { isLoading: false };
    }

    render(){
    const {locations} = this.props;

        console.log(this.props.locations);
    return (
            <div>
                <h3>Our Top Places In {titleCase(this.props.name)}</h3>
                <PlaceList locations={locations} />
                <Loader showLoader={this.state.isLoading} />
            </div>
        );
    }
}

TopPlaces.defaultProps = {
    name: '',
    searchType: '',
    placeId: 0
};

TopPlaces.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TopPlaces);