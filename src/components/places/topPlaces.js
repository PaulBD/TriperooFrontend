import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as placesActions from '../../actions/placesActions';
import PlaceList from './placeList';
import Loader from '../common/loadingDots';
let titleCase = require('title-case');

class TopPlaces extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isLoading: true, places: [] };
    }

    componentDidMount() {
        let id = this.props.cityId != 0 ? this.props.cityId : this.props.countryId;
        let type = this.props.cityId != 0 ? "city" : "country";
        let name = this.props.cityId != 0 ? this.props.city : this.props.country;
        this.props.actions.loadTopPlaces(id, type);
        this.state = { isLoading: false };
    }

    render(){
    const {places} = this.props;

    return (
            <div>
                <h3>Our Top Places In {titleCase(this.props.name)}</h3>
                <PlaceList places={places} />
                <Loader showLoader={this.state.isLoading} />
            </div>
        );
    }
}

TopPlaces.propTypes = {
    countryId: PropTypes.number,
    country: PropTypes.string,
    cityId: PropTypes.number,
    city: PropTypes.string,
    name: PropTypes.string.isRequired,
    places: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    places: state.places,
    countryId: ownProps.params.countryId ? parseInt(ownProps.params.countryId) : 0,
    country: ownProps.params.country,
    cityId: ownProps.params.cityId ? parseInt(ownProps.params.cityId) : 0,
    city: ownProps.params.city
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(placesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPlaces);