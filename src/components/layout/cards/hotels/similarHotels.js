import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../../../actions/location/travelContent/hotelActions';
import Loader from '../../../loaders/contentLoader';

import HotelThumb from './thumb';

class SimilarHotels extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: false };
  }

  componentWillMount() {
    this.loadHotels();
  }

  loadHotels() {
    this.setState({isLoading: true});
    this.props.hotelActions.loadHotelsByProximty(this.props.locationId, this.props.latitude, this.props.longitude, this.props.radius, this.props.arrivalDate, this.props.nights, this.props.locale, this.props.currencyCode, this.props.rooms1, this.props.rooms2, this.props.rooms3, this.props.locationName, this.props.filters, this.props.sortBy, this.props.pageSize, this.props.pageNumber, this.props.exclude, true)
      .then(() => this.setState({isLoading: false}))
      .catch(error => {
        this.setState({isLoading: false});
      });
  }

  render()
  {
    if (!this.state.isLoading) {
      if (this.props.hotels.hotelListResponse.hotelList.size > 0)
      {
        return (
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {
                  this.props.hotels.hotelListResponse.hotelList.hotelSummary.map((hotel, index) => {
                    if (index < this.props.pageSize) {
                      return (
                        <HotelThumb hotel={hotel} hotelUrl={this.props.url} queryString={this.props.queryString} key={hotel.hotelId} cssClass="col-md-4 mb-4" nameLength={20}/>
                      );
                    }
                  })
                }
              </div>
            </div>
          </div>
        );
      }
      else {
        return null;
      }
    }
    else {
      return (
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <Loader showLoader={true}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

SimilarHotels.defaultProps = {
  exclude: 0,
  hotelDeals: {},
  pageSize: 3,
  pageNumber: 0,
  nights: 1,
  rooms1: 1,
  rooms2: 0,
  rooms3: 0,
  guests: 1,
  filters: {}
};

SimilarHotels.propTypes = {
  exclude: PropTypes.number.isRequired,
  locationId: PropTypes.number.isRequired,
  locationName: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  locale: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
  hotels: PropTypes.object.isRequired,
  hotelActions: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  arrivalDate: PropTypes.string.isRequired,
  nights: PropTypes.number,
  rooms1: PropTypes.number,
  rooms2: PropTypes.number,
  rooms3: PropTypes.number,
  sortBy: PropTypes.string,
  filters: PropTypes.object,
  queryString: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    hotels: state.hotels.hotels ? state.hotels.hotels : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hotelActions: bindActionCreators(hotelActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimilarHotels);

