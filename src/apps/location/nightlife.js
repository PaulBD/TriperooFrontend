import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';
import * as nightlifeActions from '../../actions/nightlifeActions';
import FacebookSignup from '../../components/authentication/facebookSignup';;
import Loader from '../../components/common/loadingDots';

import SubPageHeader from '../../components/locations/subPageHeader'
import NightlifeCategories from '../../components/locations/categorySideBar';
import Nightlife from '../../components/locations/locationListWrapper';

let titleCase = require('title-case');

class NightlifeContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.changeNightlife = this.changeNightlife.bind(this);
        this.changePage = this.changePage.bind(this);
        this.state = { nightlifeType: '', nightlifeFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.locationActions.loadLocationById(this.props.locationId);
        this.props.nightlifeActions.loadNightlifeByParentLocationId(this.props.locationId, this.state.nightlifeType, this.state.pageSize, this.state.pageNumber);
    }

    changeNightlife(value, friendlyName) {
        this.setState({ nightlifeType: value, nightlifeFriendlyName: friendlyName });
        this.props.nightlifeActions.loadNightlifeByParentLocationId(this.props.locationId, value, this.state.pageSize, this.state.pageNumber - 1);
    }

    changePage(value){
        this.props.nightlifeActions.loadNightlifeByParentLocationId(this.props.locationId, this.state.nightlifeType, this.state.pageSize, value);
    }
      
    render(){
        document.title = this.state.nightlifeType == '' ? titleCase(this.props.location.regionName) + ' Nightlife' : titleCase(this.state.nightlifeFriendlyName) + ' in ' + titleCase(this.props.location.regionName);

        if (this.props.location.regionName != undefined)
        {
            return (
            <div>
                <SubPageHeader location={this.props.location} contentType="nightlife" />
                <div className="container">
                    <div className="row row-wrap">
                        <div className="gap gap-small"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className={this.props.isFetchingNightlife ? "hide" : "nav-drop booking-sort"}>
                                        {this.props.nightlifeCount} Results {this.state.nightlifeType != '' ? ' - filtered by ' + titleCase(this.state.nightlifeFriendlyName) : ''}
                                    </div>
                                    <Nightlife locationId={this.props.locationId} locations={this.props.nightlife} locationCount={this.props.nightlifeCount} changePage={this.changePage} isFetching={this.props.isFetchingNightlife}/>
                                </div>
                                <div className="col-md-3">
                                    <NightlifeCategories changeCategory={this.changeNightlife} contentType="nightlife"  />
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

NightlifeContent.defaultProps = {
    isFetching: false,
    nightlifeType: ''
};

NightlifeContent.propTypes = {
    locationId: PropTypes.number,
    location: PropTypes.object,
    locationActions: PropTypes.object.isRequired,
    nightlifeActions: PropTypes.object.isRequired,
    nightlifeCount: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isFetchingNightlife: PropTypes.bool.isRequired,
    nightlife: PropTypes.array.isRequired,
    nightlifeType: PropTypes.string
};
 
function mapStateToProps(state, ownProps) {
     return {
        isFetching: state.location.isFetching ? state.location.isFetching : false,
        isFetchingNightlife: state.nightlifeList.isFetching ? state.nightlifeList.isFetching : false,
        location: state.location.location ? state.location.location : {},
        locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
        nightlife: state.nightlifeList.nightlifeList ? state.nightlifeList.nightlifeList.locations : [],
        nightlifeCount:  state.nightlifeList.nightlifeList ? state.nightlifeList.nightlifeList.locationCount : 0
    };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    nightlifeActions: bindActionCreators(nightlifeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NightlifeContent);