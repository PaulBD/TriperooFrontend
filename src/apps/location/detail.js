import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';

import FacebookSignup from '../../components/authentication/facebookSignup';
import Header from '../../components/locations/header';
import Loader from '../../components/common/loadingDots';

let titleCase = require('title-case');

class LocationDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.locationActions.loadLocationById(this.props.locationId);
    }
      
    render(){
        document.title = 'Explore, Plan, Book in ' + titleCase(this.props.location.regionName);
        if (this.props.location.regionName != undefined)
        {
            return (
            <div>
                <Header id={this.props.locationId} location={this.props.location}  />
                
                <FacebookSignup />
            </div>
        );
    } 
    else {
        return (<Loader showLoader={this.props.isFetching} />);
    }
  }
}

LocationDetail.defaultProps = {
    isFetching: false
};

LocationDetail.propTypes = {
    locationId: PropTypes.number,
    location: PropTypes.object,
    locationActions: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
     return {
        isFetching: state.location.isFetching ? state.location.isFetching : false,
        location: state.location.location ? state.location.location : {},
        locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
    };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);