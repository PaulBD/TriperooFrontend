import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';

import FacebookSignup from '../../components/authentication/facebookSignup';
import Header from '../../components/locations/subHeader';
import Loader from '../../components/common/loadingDots';

import Hotels from '../../components/hotels/byLocation';
import Attractions from '../../components/attractions/byLocation';
import Restaurants from '../../components/restaurants/byLocation';
import Nightlife from '../../components/nightlife/byLocation';
import ReviewList from '../../components/reviews/textList';
import Questions from '../../components/questions/byLocation';


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
        document.title = titleCase(this.props.location.regionName) + ' ' + titleCase(this.props.contentType);

        let content = '';

        switch(this.props.contentType)
        {
            case 'hotels':
                content = <Hotels />;
                break;
            case 'attractions':
                content = (
                <div>
                    <div className="gap"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                            <Attractions locationId={this.props.locationId} />
                            </div>
                            <div className="col-md-4">
Filter
                            </div>

                        </div>
                    </div>
                </div>);
                break;
            case 'nightlife':
                content = <Nightlife />;
                break;
            case 'restaurants':
                content = <Restaurants />;
                break;
            case 'reviews':
                content = (
                <div>
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
                </div>
                    );
                break;
            case 'questions':
                content = <Questions />;
                break;
        }


        if (this.props.location.regionName != undefined)
        {
            return (
            <div>
                <Header id={this.props.locationId} location={this.props.location} contentType={this.props.contentType} />
                <div className="container">
                    <div className="row"> 
                        {content}
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