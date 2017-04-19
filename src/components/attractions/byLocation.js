import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as attractionsActions from '../../actions/attractionsActions';
import LocationList from '../locations/locationList';
import Loader from '../common/loadingDots';
import Pagination from "react-js-pagination";
let titleCase = require('title-case');

class ByLocation extends React.Component {
    constructor(props, context) {
        super(props, context);
    this.changePage = this.changePage.bind(this);
    	this.state = { limit: 24, offset: 0, activePage: 1 };
    }

    componentDidMount() {
        this.props.actions.loadAttractionsByParentLocationId(this.props.locationId, this.state.limit, this.state.offset);
    }

  	changePage(value) {
    	window.scrollTo(0, 0);
    	this.setState({ offset: value, activePage: value });
     	this.props.actions.loadAttractionsByParentLocationId(this.props.locationId, this.state.limit, value);
    }

    render(){
        if ((this.props.attractions != null) && (this.props.attractions.length > 0))
        {
            return (
                <div>
                    <LocationList locations={this.props.attractions} cssClass="col-md-4" />
                    <Loader showLoader={this.props.isFetching} />

		            <div className="gap gap-small"></div>
		            <div className="row text-xs-center">
		              <Pagination innerClass="pagination text-xs-center" activePage={this.state.activePage} itemsCountPerPage={this.state.limit} totalItemsCount={this.props.attractionCount} pageRangeDisplayed={this.state.limit} onChange={this.changePage} />
		            </div>
		            <div className="gap gap-small"></div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

ByLocation.defaultProps = {
    locationId: 0,
    attractions: [],
    isFetching: false
};

ByLocation.propTypes = {
    locationId: PropTypes.number.isRequired,
    attractions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    attractionCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {

	console.log(state.attractionsList);
  return {
    isFetching: state.attractionsList.isFetching ? state.attractionsList.isFetching : false,
    attractions: state.attractionsList.attractionsList ? state.attractionsList.attractionsList.locations : [],
    attractionCount:  state.attractionsList.attractionsList ? state.attractionsList.attractionsList.locationCount : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(attractionsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ByLocation);