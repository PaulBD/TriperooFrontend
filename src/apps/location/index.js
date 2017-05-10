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
import Header from '../../components/locations/homeHeader';
import LocationStats from '../../components/locations/stats';
import WeatherForcast from '../../components/weather/forecast';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import Loader from '../../components/common/loadingDots';
import TopEvents from '../../components/locations/topEvents';
import ReviewButton from '../../components/reviews/reviewButton';

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
                <Header location={this.props.location}  />
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
                <LastMinuteDeal locationId={this.props.locationId} /> 
                <div className="gap"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ReviewList locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" pageSize={10} pageNumber={0} showTitle={true} />
                        </div>
                        <div className="col-md-4">
                            <ReviewButton locationId={this.props.locationId} locationName={this.props.location.regionName} locationType="" />
                            <LocationStats likeCount={this.props.location.likeCount} locationName={this.props.location.regionName} reviewCount={this.props.location.reviewCount} averageReviewScore={this.props.location.averageReviewScore} />
                            <div className="gap gap-small"></div>
                            <WeatherForcast locationId={this.props.locationId} />
                        </div>
                    </div>
                </div>
                <div className="gap"></div>
                <TopEvents locationId={this.props.locationId} locationName={this.props.location.regionName} baseUrl={this.props.location.url}/>
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