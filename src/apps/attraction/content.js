import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';
import * as attractionsActions from '../../actions/attractionsActions';

import FacebookSignup from '../../components/authentication/facebookSignup';
import Header from '../../components/locations/subHeader';
import Loader from '../../components/common/loadingDots';
import AttractionCategories from '../../components/attractions/attractionCategories';

import Attractions from '../../components/attractions/byLocation';

let titleCase = require('title-case');

class AttractionContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.changeAttraction = this.changeAttraction.bind(this);
        this.changePage = this.changePage.bind(this);
        this.state = { attractionType: '', attractionFriendlyName: '', limit: 24, offset: 0, activePage: 1 };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.locationActions.loadLocationById(this.props.locationId);
        this.props.attractionActions.loadAttractionsByParentLocationId(this.props.locationId, this.state.attractionType, this.state.limit, this.state.offset);
    }

    changeAttraction(value, friendlyName) {
        this.setState({ attractionType: value, attractionFriendlyName: friendlyName });
        this.props.attractionActions.loadAttractionsByParentLocationId(this.props.locationId, value, this.state.limit, this.state.offset);
    }

    changePage(value){
        this.props.attractionActions.loadAttractionsByParentLocationId(this.props.locationId, this.state.attractionType, this.state.limit, value - 1);
    }
      
    render(){
        document.title = this.state.attractionType == '' ? titleCase(this.props.location.regionName) + ' Attractions' : titleCase(this.state.attractionFriendlyName) + ' in ' + titleCase(this.props.location.regionName);

        if (this.props.location.regionName != undefined)
        {
            return (
            <div>
                <Header id={this.props.locationId} location={this.props.location} contentType="attractions" />
                <div className="container">
                    <div className="row"> 
                        <div>
                            <div className="gap"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9">
                                    <div className="nav-drop booking-sort">
                                        {this.props.attractionCount} Results {this.state.attractionType != '' ? ' - filtered by ' + titleCase(this.state.attractionFriendlyName) : ''}
                                    </div>
                                        <Attractions locationId={this.props.locationId} attractions={this.props.attractions} attractionCount={this.props.attractionCount} changePage={this.changePage} />
                                    </div>
                                    <div className="col-md-3">
                                        <AttractionCategories changeCategory={this.changeAttraction} />
                                    </div>
                                </div>
                            </div>
                        </div>
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

AttractionContent.defaultProps = {
    isFetching: false,
    attractionType: ''
};

AttractionContent.propTypes = {
    locationId: PropTypes.number,
    location: PropTypes.object,
    locationActions: PropTypes.object.isRequired,
    attractionActions: PropTypes.object.isRequired,
    attractionCount: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    attractions: PropTypes.array.isRequired,
    attractionType: PropTypes.string
};
 
function mapStateToProps(state, ownProps) {
     return {
        isFetching: state.location.isFetching ? state.location.isFetching : false,
        location: state.location.location ? state.location.location : {},
        locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
        attractions: state.attractionsList.attractionsList ? state.attractionsList.attractionsList.locations : [],
        attractionCount:  state.attractionsList.attractionsList ? state.attractionsList.attractionsList.locationCount : 0
    };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    attractionActions: bindActionCreators(attractionsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AttractionContent);