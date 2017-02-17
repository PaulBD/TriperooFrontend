import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';

import FacebookSignup from '../../components/common/facebookSignup';

import RecentReviews from '../../components/reviews/reviews';

import RecentQuestions from '../../components/questions/questions';
import QuestionButton from '../../components/questions/askButton';

import Deals from '../../components/deals/list';
import TopPlaces from '../../components/places/topPlaces';
import NavigationWrapper from '../../components/places/navigation/navigationWrapper';

import Overview from '../../components/locations/overview';
import Header from '../../components/locations/header';

let titleCase = require('title-case');

class LocationHome extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isLoading: true, id: 0, type: '', name: '' };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        let id = this.props.cityId != 0 ? this.props.cityId : this.props.countryId;
        let type = this.props.cityId != 0 ? "city" : "country";
        let name = this.props.cityId != 0 ? this.props.city : this.props.country;

        this.props.locationActions.loadLocation(id, type);

        this.state = { isLoading: false, id: id, type: type, name: name };

        document.title = 'Explore, Plan, Book in ' + titleCase(name);
    }
      
    render(){

    let overview = ''; 
    let url = '';

    if (this.props.area !== undefined && this.props.area.description !== undefined && this.props.area.description.en !== undefined) {
        overview = this.props.area.description.en;
        url = this.props.area.imageUrl;
    }

    let style = {
        backgroundImage: 'url(' + url + ')'
    }; 
    

    return (
        <div>
            <Header id={this.state.id} type={this.state.type} place={this.props.area}  />
            <div className="container">
                <NavigationWrapper name={this.state.name} place={this.props.area} />
                <div className="gap gap-small"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <TopPlaces name={this.state.name} {...this.props} />
                    </div>
                    <div className="col-md-4">
                        <QuestionButton id={this.state.id} type={this.state.type} name={this.state.name} />
                        <div className="gap-small"></div>
                        <RecentQuestions searchId={this.state.id} searchType={this.state.type} limit={3} offset={0} />
                        <Overview id={this.state.id} type={this.state.type} name={this.state.name} overview={overview} showMore={1} />
                        <div className="gap-small"></div>
                    </div>
                    <div className="gap"></div>
                </div>
            </div>
            <div className="bg-holder cityBg">
                <div className="bg-mask"></div>
                <div className="bg-blur" style={style}></div>
                <div className="bg-content">
                    <div className="container">
                        <div className="gap"></div>
                        <div className="row">
                            <div className="col-md-4"> 
                                <Deals searchType="topRestaurants" title="Top Restaurants" id={this.state.id} {...this.props} />
                            </div>
                            <div className="col-md-4">
                                <Deals searchType="topAttractions" title="Top Attractions" id={this.state.id} {...this.props} />
                            </div>
                            <div className="col-md-4">
                                <Deals searchType="topHotels" title="Top Hotels" id={this.state.id} {...this.props} />
                            </div>
                        </div>
                        <div className="gap"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="gap"></div>
                <div className="row row-wrap text-xs-center">
                    <RecentReviews searchId={this.state.id} searchType={this.state.type} limit={3} offset={0} showTitle={1} />
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
    countryId: PropTypes.number,
    country: PropTypes.string,
    cityId: PropTypes.number,
    city: PropTypes.string,
    area: PropTypes.object.isRequired,
    locationActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    area: state.area,
    countryId: ownProps.params.countryId ? parseInt(ownProps.params.countryId) : 0,
    country: ownProps.params.country,
    cityId: ownProps.params.cityId ? parseInt(ownProps.params.cityId) : 0,
    city: ownProps.params.city
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationHome);