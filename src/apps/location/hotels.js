import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';

import FacebookSignup from '../../components/authentication/facebookSignup';
import Header from '../../components/locations/subPageHeader';
import Loader from '../../components/common/loadingDots';

import Hotels from '../../components/hotels/byLocation';
import LocationStats from '../../components/locations/stats';
import WeatherForcast from '../../components/weather/forecast';

let titleCase = require('title-case');

class LocationContent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.locationActions.loadLocationById(this.props.locationId);
    }
      
    render(){
        document.title = 'Hotels in ' + titleCase(this.props.location.regionName);

        let content = ''


        if (this.props.location.regionName != undefined)
        {
            return (
            <div>
                <Header id={this.props.locationId} location={this.props.location} contentType="hotels" />
                <div className="container">
                    <div className="row"> 
                        <Hotels />
                    </div>
                </div>
                <FacebookSignup />
            </div>
            );
        } 
        else {
            return (<Loader showLoader={this.props.isFetching} />);
        }
  }
}

LocationContent.defaultProps = {
    isFetching: false
};

LocationContent.propTypes = {
    locationId: PropTypes.number,
    location: PropTypes.object,
    locationActions: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    contentType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
     return {
        isFetching: state.location.isFetching ? state.location.isFetching : false,
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
export default connect(mapStateToProps, mapDispatchToProps)(LocationContent);