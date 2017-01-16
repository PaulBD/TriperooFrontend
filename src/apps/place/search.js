import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as placeActions from '../../actions/placeActions';
import * as hotelActions from '../../actions/hotelActions';

import PlaceSubHeader from '../../components/places/subHeader';
import Loader from '../../components/common/loadingDots';
import SearchList from '../../components/places/searchList';

import FacebookSignup from '../../components/common/facebookSignup';
import HotelSearch from '../../components/hotels/searchForm';
import CityMap from '../../components/places/map';
import Sort from '../../components/places/sort';

import QuestionButton from '../../components/questions/askButton';
import RecentQuestions from '../../components/questions/questions';

let titleCase = require('title-case');

class PlaceSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: 1, id: 0, type: '', name: '', searchValue: '', formattedStartDate: '', formattedEndDate: '', rooms: '', guests: '', sortBy: 'recommended', currency: 'gbp' };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    
    let id = this.props.cityId != 0 ? this.props.cityId : this.props.countryId;
    let type = this.props.cityId != 0 ? "city" : "country";
    let name = this.props.cityId != 0 ? this.props.city : this.props.country;

    this.props.placeActions.loadPlace(id, type);

    this.props.hotelActions.loadHotels(id, type, 'recommended', "gbp");

    this.state = { isLoading: 0, id: id, type: type, name: name };

    document.title = 'Explore ' + this.props.type + ' in ' + titleCase(name);
  }

  handleFormSubmit(searchValue, formattedStartDate, formattedEndDate, rooms, guests) {
    this.state = { searchValue, formattedStartDate, formattedEndDate, rooms, guests };
    this.props.hotelActions.searchHotels(searchValue, formattedStartDate, formattedEndDate, rooms, guests, this.state.sortBy, this.state.currency);
  }

  handleSort(sortBy, currency) {
    this.state = { sortBy, currency };
    this.props.hotelActions.searchHotels(this.state.searchValue, this.state.formattedStartDate, this.state.formattedEndDate, this.state.rooms, this.state.guests, sortBy, currency);
  }
  
  render(){
    let lng = 0;
    let lat = 0;

    if (this.props.place.latitude !== undefined && this.props.place.latitude !== '') {
      lat = parseFloat(this.props.place.latitude);
    }

    if (this.props.place.longitude !== undefined && this.props.place.longitude !== '') {
      lng = parseFloat(this.props.place.longitude);
    }

    return (
      <div>
          <PlaceSubHeader pageType={this.props.type} place={this.props.place} city={this.props.city} country={this.props.country} />

          <div className="gap gap-small"></div>
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                    <HotelSearch {...this.props} city={this.props.city} handleFormSubmit={this.handleFormSubmit} useFunction={1} />
                  </div>
                  <div className="col-md-8">
                    <Sort handleSort={this.handleSort}/>
                    <div className="gap gap-small"></div>
                    <SearchList places={this.props.hotels} pageType={this.props.type} place={this.props.city} />
                    <Loader showLoader={this.state.isLoading} />
                  </div>
                  <div className="col-md-4">
                    <div className="gap gap-small"></div>
                    <CityMap center={[lat, lng]} places={this.props.hotels} />
                    <div className="gap-small"></div>
                    <QuestionButton id={this.state.id} type={this.state.type} name={this.state.name} />
                    <div className="gap-small"></div>
                    <RecentQuestions searchId={this.state.id} searchType={this.state.type} limit={3} offset={0} />
                  </div>
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

PlaceSearch.propTypes = {
    countryId: PropTypes.number,
    country: PropTypes.string,
    cityId: PropTypes.number,
    city: PropTypes.string,
    type: PropTypes.string,
    place: PropTypes.object.isRequired,
    hotels: PropTypes.object.isRequired,
    placeActions: PropTypes.object.isRequired,
    hotelActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    place: state.place,
    hotels: state.hotels,
    countryId: ownProps.params.countryId ? parseInt(ownProps.params.countryId) : 0,
    country: ownProps.params.country,
    cityId: ownProps.params.cityId ? parseInt(ownProps.params.cityId) : 0,
    city: ownProps.params.city,    
    type: ownProps.params.type
  };
}

function mapDispatchToProps(dispatch) {
  return {
    placeActions: bindActionCreators(placeActions, dispatch),
    hotelActions: bindActionCreators(hotelActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSearch);