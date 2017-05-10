import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';

import FacebookSignup from '../../components/authentication/facebookSignup';
import LocationHeader from '../../components/locations/locationHeader';
import Loader from '../../components/common/loadingDots';
import ReviewList from '../../components/reviews/textList';
import ReviewButton from '../../components/reviews/reviewbutton';


import RecentQuestions from '../../components/questions/questions';
import QuestionButton from '../../components/questions/askButton';
import Summary from '../../components/locations/summary';

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
                <LocationHeader location={this.props.location}  />
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
                                    <p className="mb0"><a href="#" className="btn btn-default btn-sm editBtn">Edit Info</a></p>
                                </div>
                                <div className="col-md-7">
                                    <div className="gap gap-small"></div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <ReviewButton locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" />
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="btn btn-info questionBtn"><i className="fa fa-picture-o"></i> Add Photo</a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="btn btn-info questionBtn"><i className="fa fa-bookmark"></i> Bookmark</a>
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
                            <ReviewList locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" limit={10} offset={0} showTitle={true} />
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