import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';

import FacebookSignup from '../../components/authentication/facebookSignup';
import ReviewList from '../../components/reviews/list';
import RecentQuestions from '../../components/questions/questions';
import QuestionButton from '../../components/questions/askButton';
import TopPlaces from '../../components/locations/topLocations';
import NavigationWrapper from '../../components/locations/navigation/navigationWrapper';
import Overview from '../../components/locations/overview';
import Header from '../../components/locations/header';

import Deals from '../../components/legacy/deals/list';

let titleCase = require('title-case');

class LocationHome extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.locationActions.loadLocation(this.props.placeId);
    }
      
    render(){
    document.title = 'Explore, Plan, Book in ' + titleCase(this.props.location.regionName);
    return (
        <div>
            <Header id={this.props.placeId} location={this.props.location}  />
            <div className="container">
                <NavigationWrapper name={this.props.location.regionName} location={this.props.location} />
                <div className="gap gap-small"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <TopPlaces name={this.props.location.regionName} searchType={this.props.location.regionType} {...this.props} />
                    </div>
                    <div className="col-md-4">
                        <QuestionButton id={this.props.placeId} type={this.props.location.regionType} name={this.props.location.regionNameLong} nameShort={this.props.location.regionName}  />
                        <RecentQuestions id={this.props.placeId} type={this.props.location.regionType} limit={3} offset={0} />
                        <Overview id={this.props.placeId} type={this.props.location.regionType} name={this.props.location.regionName} overview={this.props.location.overview} showMore={true} />
                        <div className="gap-small"></div>
                    </div>
                    <div className="gap"></div>
                </div>
            </div>   
            <div className="container">
                <hr />
                <div className="gap"></div>
                <div className="row">
                    <div className="col-md-4"> 
                        <Deals searchType="topRestaurants" title="Top Restaurants" id={this.props.placeId} {...this.props} />
                    </div>
                    <div className="col-md-4">
                        <Deals searchType="topAttractions" title="Top Attractions" id={this.props.placeId} {...this.props} />
                    </div>
                    <div className="col-md-4">
                        <Deals searchType="topHotels" title="Top Hotels" id={this.props.placeId} {...this.props} />
                    </div>
                </div>
                <div className="gap gap-small"></div>
                <hr />
            </div>     
            <div className="container">
                <div className="gap"></div>
                <div className="row row-wrap text-xs-center">
                    <ReviewList searchId={this.props.placeId} searchType={this.props.location.type} limit={3} offset={0} showTitle={true} />
                </div>
            </div>
            <div className="container">
                <div className="gap gap-small"></div>
                <hr />
                <div className="gap"></div>
                <FacebookSignup />
                <div className="gap"></div>
            </div>
        </div>
    );
  }
}

LocationHome.propTypes = {
    placeId: PropTypes.number,
    location: PropTypes.object,
    locationActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location,
    placeId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationHome);