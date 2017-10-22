import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as attractionActions from '../../actions/location/travelContent/attractionActions';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';

import SubPageHeader from '../../components/content/headers/locationCategory';

let titleCase = require('title-case');

class AttractionContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { searchValue: '', isLoadingCategoryList: false, isLoadingLocation: true, isLoadingAttractionList: false, attractionType: '', attractionFriendlyName: '', pageSize: 9, pageNumber: 0, activePage: 1 };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => {
        this.setState({isLoadingCategoryList: true});
        this.loadAttractions(this.props.locationId, this.state.attractionType, '', this.state.pageSize, this.state.pageNumber);

      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  loadAttractions(locationId, attractionType, attractionName, pageSize, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingAttractionList: true});

    this.props.attractionsActions.loadAttractionsByParentLocationId(locationId, attractionType, attractionName, pageSize, pageNumber)
      .then(() => this.setState({isLoadingAttractionList: false, isLoadingCategoryList:false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({attractionsList: false});
      });
  }


  render(){
    let title = 'Attractions in ' + titleCase(this.props.location.regionName);

    document.title = title;

    if (! this.state.isLoadingLocation && (!this.state.attractionsList))
    {
      console.log(this.props.attractions);
      console.log(this.props.attractionsCategories);
      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="attractions" title={title} />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 sideBar">

                  </div>
                  <div className="col-md-9 restaurantList">

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
  attractionCategories: []
};

AttractionContent.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  attractionsActions: PropTypes.object.isRequired,
  attractionsCount: PropTypes.number.isRequired,
  attractionsCategories: PropTypes.array.isRequired,
  attractions: PropTypes.array.isRequired,
  attractionType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    attractions: state.attractions.attractionsList ? state.attractions.attractionsList.attractions : [],
    attractionsCategories: state.attractions.attractionsList ? state.attractions.attractionsList.categories : [],
    attractionsCount:  state.attractions.attractionsList ? state.attractions.attractionsList.locationCount : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    attractionsActions: bindActionCreators(attractionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AttractionContent);
