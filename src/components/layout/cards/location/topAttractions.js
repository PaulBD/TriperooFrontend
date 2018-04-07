import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as attractionActions from '../../../../actions/location/travelContent/attractionActions';
import LocationList from './locationList';
import Loader from '../../../loaders/contentLoader';
import Toastr from 'toastr';

class TopAttractions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingAttractionList: true };
  }

  componentWillMount() {
    if (this.props.locationId > 0) {
      this.loadAttractions(this.props.locationId, '', '', this.props.pageSize, 0);
    }
  }

  loadAttractions(locationId, attractionType, attractionName, pageSize, pageNumber) {
    this.setState({isLoadingAttractionList: true});

    this.props.attractionsActions.loadAttractionsByParentLocationId(locationId, attractionType, attractionName, pageSize, pageNumber)
      .then(() => this.setState({isLoadingAttractionList: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({attractionsList: false});
      });
  }

  render(){
    if (!this.state.isLoadingAttractionList)
    {
      if (this.props.attractions.locations.length > 0) {
        return (
          <div className="col-md-12">
            {this.props.title ? <h4 className="locationTitle">{this.props.title}
              <small className="float-right"><a href={this.props.url}>See all attractions</a></small>
            </h4> : ''}
            <LocationList locations={this.props.attractions} cssClass="col-md-3 col-12"/>
          </div>
        );
      }
      else {
        return null;
      }
    }
    else {
      return (
        <div className="col-md-12">
          <Loader showLoader={true}/>
        </div>
      );
    }
  }
}

TopAttractions.defaultProps = {
  name: '',
  locationId: 0,
  locationName: '',
  pageSize: 8,
  locations: {},
  isFetching: false,
  title: ''
};

TopAttractions.propTypes = {
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  attractions: PropTypes.object.isRequired,
  attractionsActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locations.isFetching ? state.locations.isFetching : false,
    attractions: state.attractions.attractionsList ? state.attractions.attractionsList : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attractionsActions: bindActionCreators(attractionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopAttractions);
