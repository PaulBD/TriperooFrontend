import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';

import FacebookSignup from '../../components/authentication/facebookSignup';
import ReviewList from '../../components/reviews/textList';
import RecentQuestions from '../../components/questions/questions';
import QuestionButton from '../../components/questions/askButton';
import TopLocations from '../../components/locations/topLocations';
import NavigationWrapper from '../../components/locations/navigation/navigationWrapper';
import Summary from '../../components/locations/summary';
import Header from '../../components/locations/header';
import LocationStats from '../../components/locations/stats';
import WeatherForcast from '../../components/weather/forecast';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import Loader from '../../components/common/loadingDots';
import Events from '../../components/events/byLocation';

import Deals from '../../components/legacy/deals/list';

let titleCase = require('title-case');

class LocationHome extends React.Component {
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
                <div className="container">
                    <NavigationWrapper name={this.props.location.regionName} location={this.props.location} />
                    <div className="gap gap-small"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <TopLocations locationId={this.props.locationId} name={this.props.location.regionName} locationType={this.props.location.regionType} {...this.props} />
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
                <div className="gap"></div>
                <LastMinuteDeal location={this.props.location.regionName} /> 
                <div className="gap"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ReviewList locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" limit={3} offset={0} showTitle={false} />
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="btn btn-info questionBtn" data-toggle="modal" data-target="#reviewModel" >
                                <i className="fa fa-comments"></i>
                                Write a Review
                            </a>
                            <div className="gap gap-small"></div>
                            <LocationStats likeCount={this.props.location.likeCount} reviewCount={this.props.location.reviewCount} averageReviewScore={this.props.location.averageReviewScore} />
                            <div className="gap gap-small"></div>
                            <WeatherForcast locationId={this.props.locationId} />
                        </div>
                    </div>
                </div>
                <div className="gap"></div>
                <Events locationId={this.props.locationId} locationName={this.props.location.regionName} baseUrl={this.props.location.url}/>
                <FacebookSignup />
            </div>
        );
    } 
    else {
        return (<Loader showLoader={this.props.isFetching} />);
    }
  }
}

LocationHome.defaultProps = {
    isFetching: false
};

LocationHome.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(LocationHome);