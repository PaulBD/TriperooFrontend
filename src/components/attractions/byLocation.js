import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

  	changePage(value) {
    	window.scrollTo(0, 0);
    	this.setState({ offset: value, activePage: value });
        this.props.changePage(value);
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
		              <Pagination innerClass={this.props.attractionCount > 24 ? "pagination text-xs-center" : "hide"} activePage={this.state.activePage} itemsCountPerPage={this.state.limit} totalItemsCount={this.props.attractionCount} pageRangeDisplayed={this.state.limit} onChange={this.changePage} />
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
    attractions: [],
    isFetching: false
};

ByLocation.propTypes = {
    attractions: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    attractionCount: PropTypes.number.isRequired,
    categoryFilter: PropTypes.string,
    changePage: PropTypes.func
};

export default ByLocation;