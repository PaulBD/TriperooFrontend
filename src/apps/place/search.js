import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as placeActions from '../../actions/placeActions';

import PlaceSubHeader from '../../components/places/subHeader';

import FacebookSignup from '../../components/common/facebookSignup';
import HotelSearch from '../../components/hotel/searchForm';
import Hotels from '../../components/hotel/hotels';
import HotelThumb from '../../components/hotel/thumb';
import CityMap from '../../components/city/map';

import QuestionButton from '../../components/questions/askButton';
import RecentQuestions from '../../components/questions/questions';

let titleCase = require('title-case');

class PlaceSearch extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isLoading: 1, id: 0, type: '', name: '' };
    }

    componentDidMount() {
        let id = this.props.cityId != 0 ? this.props.cityId : this.props.countryId;
        let type = this.props.cityId != 0 ? "city" : "country";
        let name = this.props.cityId != 0 ? this.props.city : this.props.country;

        this.props.actions.loadPlace(id, type);

        this.state = { isLoading: 0, id: id, type: type, name: name };

        document.title = 'Explore ' + this.props.type + ' in ' + titleCase(name);
    }
  
  render(){
    return (
      <div>
          <PlaceSubHeader pageType={this.props.type} place={this.props.place} city={this.props.city} country={this.props.country} />

          <div className="gap gap-small"></div>
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                    <HotelSearch {...this.props} city={this.props.city} />
                  </div>
                  <div className="col-md-8">
                    <div className="gap gap-small"></div>
                    <Hotels {...this.props} city={this.props.city} />
                  </div>
                  <div className="col-md-4">
                    <div className="gap gap-small"></div>
                    <CityMap />
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
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    place: state.place,
    countryId: ownProps.params.countryId ? parseInt(ownProps.params.countryId) : 0,
    country: ownProps.params.country,
    cityId: ownProps.params.cityId ? parseInt(ownProps.params.cityId) : 0,
    city: ownProps.params.city,    
    type: ownProps.params.type
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(placeActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSearch);