import React, {PropTypes} from 'react';
import LocationList from './locationList';
import Loader from '../../../loaders/contentLoader';
import Pagination from "react-js-pagination";

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
    if (!this.props.isFetching) {
      return (
        <div className={this.props.useMinHeight ? "listHeight" : ""}>
          <LocationList location={this.props.location} locations={this.props.locations} cssClass={this.props.contentType == 'attractions' || this.props.contentType == 'restaurants' ? "col-12 col-md-4" : "col-6 col-md-4"} />
          <div className="row justify-content-center">
            <Pagination innerClass={this.props.locationCount > 24 ? "pagination justify-content-center" : "hide"} activePage={this.state.activePage} itemsCountPerPage={this.state.limit} totalItemsCount={this.props.locationCount} pageRangeDisplayed={5} onChange={this.changePage} />
          </div>
        </div>
      );
    }
    else {
      return (<Loader showLoader={this.props.isFetching} />);
    }
  }
}

ByLocation.defaultProps = {
  locations: {},
  isFetching: false,
  useMinHeight: true
};

ByLocation.propTypes = {
  location: PropTypes.object.isRequired,
  locations: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  useMinHeight: PropTypes.bool,
  locationCount: PropTypes.number.isRequired,
  categoryFilter: PropTypes.string,
  changePage: PropTypes.func,
  contentType: PropTypes.string,
};

export default ByLocation;
