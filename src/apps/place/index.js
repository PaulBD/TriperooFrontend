import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as placeActions from '../../actions/placeActions';

import FacebookSignup from '../../components/common/facebookSignup';

import RecentQuestions from '../../components/recentQuestions';
import ReviewButton from '../../components/reviewButton';

import Deals from '../../components/deals/list';

import TopPlaces from '../../components/places/topPlaces';
import PlaceOverview from '../../components/places/overview';
import Navigation from '../../components/places/navigation';
import Reviews from '../../components/country/reviews';
import Header from '../../components/places/header';

class PlaceHome extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isLoading: true, id: 0, type: '', name: '' };
    }

    componentDidMount() {
        let id = this.props.cityId != 0 ? this.props.cityId : this.props.countryId;
        let type = this.props.cityId != 0 ? "city" : "country";
        let name = this.props.cityId != 0 ? this.props.city : this.props.country;

        this.props.actions.loadPlace(id, type);
        this.state = { isLoading: false, id: id, type: type, name: name };
    }
      
    render(){

    let overview = ''; 
    let url = '';

    if (this.props.place !== undefined && this.props.place.overview !== undefined) {
        overview = this.props.place.overview;
        url = this.props.place.imageUrl;
    }

    let style = {
        backgroundImage: 'url(' + url + ')'
    };
    
    return (
        <div>
            <Header id={this.state.id} type={this.state.type} place={this.props.place}  />
            <div className="container">
                <Navigation name={this.state.name} place={this.props.place} />
                <div className="gap gap-small"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <TopPlaces name={this.state.name} {...this.props} />
                    </div>
                    <div className="col-md-4">
                        <ReviewButton id={this.state.id} type={this.state.type} name={this.state.name} />
                        <div className="gap-small"></div>
                        <PlaceOverview id={this.state.id} type={this.state.type} name={this.state.name} overview={overview} />
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
                <div className="row">
                    <RecentQuestions />
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

PlaceHome.propTypes = {
    countryId: PropTypes.number,
    country: PropTypes.string,
    cityId: PropTypes.number,
    city: PropTypes.string,
    place: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    place: state.place,
    countryId: ownProps.params.countryId ? parseInt(ownProps.params.countryId) : 0,
    country: ownProps.params.country,
    cityId: ownProps.params.cityId ? parseInt(ownProps.params.cityId) : 0,
    city: ownProps.params.city
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(placeActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaceHome);