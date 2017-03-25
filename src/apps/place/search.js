import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';
import * as placesActions from '../../actions/legacy/placesActions';

import PlaceSubHeader from '../../components/places/common/subHeader';
import Loader from '../../components/common/loadingDots';
import SearchList from '../../components/places/searchList';

import FacebookSignup from '../../components/authentication/facebookSignup';
import HotelSearch from '../../components/hotels/searchForm';
import Map from '../../components/places/map/mapWrapper';
import Sort from '../../components/places/sortPlaces';

import QuestionButton from '../../components/questions/askButton';
import RecentQuestions from '../../components/questions/questions';

let titleCase = require('title-case');

class PlaceSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: 1, id: 0, type: '', name: '', searchValue: '', formattedStartDate: '', formattedEndDate: '', rooms: '', guests: '', sortBy: 'recommended', currency: 'gbp' };
    this.handleHotelFormSubmit = this.handleHotelFormSubmit.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    
    let id = this.props.cityId != 0 ? this.props.cityId : this.props.countryId;
    let locationType = this.props.cityId != 0 ? "city" : "country";
    let locationName = this.props.cityId != 0 ? this.props.city : this.props.country;

    this.props.locationActions.loadLocationById(id, locationType);

    this.props.placesActions.loadPlaces(id, locationName, locationType, this.props.type, 'recommended', "gbp");

    this.state = { isLoading: 0, id: id, type: locationType, name: locationName };

    document.title = 'Explore ' + titleCase(this.props.type) + ' in ' + titleCase(locationName);
  }

  handleHotelFormSubmit(searchValue, formattedStartDate, formattedEndDate, rooms, guests) {
    this.state = { searchValue, formattedStartDate, formattedEndDate, rooms, guests };
    this.props.placesActions.searchHotels(searchValue, formattedStartDate, formattedEndDate, rooms, guests, this.state.sortBy, this.state.currency);
  }

  handleSort(sortBy, currency) {
    this.state = { sortBy, currency };

    if (this.props.type == 'hotels') {
      this.props.placesActions.searchHotels(this.state.searchValue, this.state.formattedStartDate, this.state.formattedEndDate, this.state.rooms, this.state.guests, sortBy, currency);
    }
  }
  
  render(){
    let lng = 0;
    let lat = 0;
    let search = '';

    if (this.props.area.latitude !== undefined && this.props.area.latitude !== '') {
      lat = parseFloat(this.props.area.latitude);
    }

    if (this.props.area.longitude !== undefined && this.props.area.longitude !== '') {
      lng = parseFloat(this.props.area.longitude);
    }

    if (this.props.type == 'hotels') {
      search = (
        <HotelSearch {...this.props} city={this.props.city} handleFormSubmit={this.handleHotelFormSubmit} useFunction={1} />
      );
    }

    return (
      <div>
          <PlaceSubHeader {...this.props} pageType={this.props.type} area={this.props.area} locationName={this.props.type} />

          <div className="gap gap-small"></div>
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                  {search}
                  </div>
                  <div className="col-md-8">
                    <Sort handleSort={this.handleSort} pageType={this.props.type} />
                    <div className="gap gap-small"></div>
                    <SearchList places={this.props.places} pageType={this.props.type} area={this.props.city} />
                    <Loader showLoader={this.state.isLoading} />
                  </div>
                  <div className="col-md-4">
                    <div className="gap gap-small"></div>
                    <Map center={[lat, lng]} places={this.props.places} />
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
    area: PropTypes.object.isRequired,
    locationActions: PropTypes.object.isRequired,
    places: PropTypes.object.isRequired,
    placesActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    area: state.area,
    places: state.places,
    countryId: ownProps.params.countryId ? parseInt(ownProps.params.countryId) : 0,
    country: ownProps.params.country,
    cityId: ownProps.params.cityId ? parseInt(ownProps.params.cityId) : 0,
    city: ownProps.params.city,    
    type: ownProps.params.type
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    placesActions: bindActionCreators(placesActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSearch);