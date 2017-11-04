import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as attractionActions from '../../actions/location/travelContent/attractionActions';
import * as modalActions from '../../actions/common/modalActions';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';
import FilterAttractions from '../../components/forms/searchForms/filterAttractions';

import SubPageHeader from '../../components/content/headers/locationCategory';
import Attractions from '../../components/layout/cards/location/locationListWrapper';

let titleCase = require('title-case');

class AttractionContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changePage = this.changePage.bind(this);
    this.filterAttractions = this.filterAttractions.bind(this);
    this.state = {
      searchValue: ''
      , isLoadingCategoryList: false
      , isLoadingLocation: true
      , isLoadingAttractionList: false
      , attractionType: ''
      , attractionFriendlyName: ''
      , attractionSearch: ''
      , pageSize: 9
      , pageNumber: 0
      , activePage: 1 };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => {
        this.setState({isLoadingAttractionList: true, isLoadingCategoryList: true});
        this.loadAttractions(this.props.locationId, this.state.attractionType, this.state.attractionSearch, this.state.pageSize, this.state.pageNumber);

      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  loadAttractions(locationId, attractionType, attractionName, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false});

    this.props.attractionsActions.loadAttractionsByParentLocationId(locationId, attractionType, attractionName, pageSize, pageNumber)
      .then(() => this.setState({isLoadingAttractionList: false, isLoadingCategoryList: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({attractionsList: false});
      });
  }

  filterAttractions(attractionCategory, filteredName) {
    this.setState({ attractionType: attractionCategory, attractionFriendlyName: attractionCategory, isLoadingAttractionList: true, attractionSearch: filteredName });
    this.loadAttractions(this.props.locationId, attractionCategory, filteredName, this.state.pageSize, this.state.pageNumber);
  }

  changePage(value){
    this.loadAttractions(this.props.locationId, this.state.attractionType, this.state.attractionSearch, this.state.pageSize, value - 1);
  }

  render(){
    let title = 'Attractions in ' + titleCase(this.props.location.regionName);

    document.title = title;
    if (! this.state.isLoadingLocation && (!this.state.attractionsList))
    {
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="attractions" title={title} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 sideBar">
                    <FilterAttractions categories={this.props.attractionsCategories} searchName="" locationId={this.props.locationId} pageSize={this.state.pageSize} pageNumber={this.state.pageNumber} filterAttractions={this.filterAttractions} isFetching={this.state.isLoadingCategoryList}/>

                  </div>
                  <div className="col-md-9 restaurantList">
                    <Attractions useMinHeight={false} locationId={this.props.locationId} locations={this.props.attractions} locationCount={this.props.attractionsCount} changePage={this.changePage} isFetching={this.props.isFetching}/>

                  </div>
                </div>
                <div className="gap gap-small"></div>
              </div>
            </div>
          </div>
          <FacebookSignup showLines={false}/>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

AttractionContent.defaultProps = {
  attractionType: '',
  mapAttractions: [],
  attractionCategories: [],
  selectedCategories: [],
  isFetching: false
};

AttractionContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  attractionsActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  attractionsCount: PropTypes.number.isRequired,
  attractionsCategories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  attractions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  attractionType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    isFetching: state.attractions.isFetching,
    attractions: state.attractions.attractionsList ? state.attractions.attractionsList : {},
    attractionsCategories: state.attractions.attractionsList ? state.attractions.attractionsList.categories : [],
    attractionsCount:  state.attractions.attractionsList ? state.attractions.attractionsList.locationCount : 0,
    selectedCategories: state.modal.modalContent ? state.modal.modalContent.selectedCategories : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    attractionsActions: bindActionCreators(attractionActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AttractionContent);
