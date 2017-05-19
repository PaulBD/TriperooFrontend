import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as modalActions from '../../actions/common/modalActions';
import * as authenticationActions from '../../actions/customer/authenticationActions';

import FacebookSignup from '../../components/customer/authentication/facebookSignup';
import LocationHeader from '../../components/locations/locationHeader';
import Loader from '../../components/common/loadingDots';
import ReviewList from '../../components/reviews/textList';
import ReviewButton from '../../components/reviews/reviewButton';
import BookmarkButton from '../../components/common/bookmarkButton';
import PhotoButton from '../../components/common/photoButton';
import RecentQuestions from '../../components/questions/questions';
import QuestionButton from '../../components/questions/questionButton';
import Summary from '../../components/locations/summary';

let titleCase = require('title-case');

class LocationDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.editLocation = this.editLocation.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.locationActions.loadLocationById(this.props.locationId);
    }

    editLocation(e) {
        e.preventDefault();
        this.props.modalActions.openEditLocation(this.props.locationId, this.props.location.regionNameLong, this.props.location.subClass);
    }

    render(){
        console.log(this.props.location);
        document.title = 'Visit ' + titleCase(this.props.location.regionName) + ' in ' + titleCase(this.props.location.parentRegionName);
        if (this.props.location.regionName != undefined)
        {
            return (
            <div>
                <LocationHeader location={this.props.location} />
                <div className="row greyBg detailSubHeader">
                    <div className="container">
                        <div className="row row-wrap">
                          <div className="gap gap-small"></div>
                          <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-5">
                                    <p><i className="fa fa-map-marker"></i> Russell Square, Camden, London WC1B, UK</p>
                                    <p className="tagCollection">
                                        <span className="tagReadOnly tag-default">Category 1</span>
                                        <span className="tagReadOnly tag-default">Category 2</span>
                                        <span className="tagReadOnly tag-default">Category 3</span>
                                    </p>
                                    <p className={this.props.isAuthenticated ? "mb0" : "hide"}><a href="#" className="btn btn-default btn-sm editBtn" onClick={this.editLocation} >Edit Info</a></p>
                                </div>
                                <div className="col-md-7">
                                    <div className="gap gap-small"></div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <ReviewButton name="sidePanel" locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" />
                                        </div>
                                        <div className="col-md-4">
                                            <PhotoButton name="sidePanel" locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" />
                                        </div>
                                        <div className="col-md-4">
                                            <BookmarkButton name="sidePanel" locationId={this.props.locationId} locationName={this.props.location.regionName} locationNameLong={this.props.location.regionNameLong} locationType={this.props.location.subClass} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="gap gap-small"></div>
                <div className="container">
                    <div className="row row-wrap">
                        <div className="col-md-8">
                            <ReviewList locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" pageSize={10} pageNumber={0} showTitle={true} />
                        </div>
                        <div className="col-md-4">
                            Map<br />
                            Photos <br />
                            Hotels Near <br />

                        </div>

                        <div className="col-md-8">
                            <Summary locationName={this.props.location.regionName} summary={this.props.location.summary} />
                        </div>
                        <div className="col-md-4">
                            <QuestionButton locationId={this.props.locationId} locationName={this.props.location.regionNameLong} locationNameShort={this.props.location.regionName} locationType={this.props.location.regionType}/>
                            <RecentQuestions locationId={this.props.locationId} locationName={this.props.location.regionName} limit={3} offset={0} />
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

LocationDetail.defaultProps = {
    isFetching: false,
    isAuthenticated: false
};

LocationDetail.propTypes = {
    locationId: PropTypes.number,
    location: PropTypes.object,
    locationActions: PropTypes.object.isRequired,
    modalActions: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        isAuthenticated: state.authentication.isAuthenticated,
        isFetching: state.location.isFetching ? state.location.isFetching : false,
        location: state.location.location ? state.location.location : {},
        locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
    };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticationActions: bindActionCreators(authenticationActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
