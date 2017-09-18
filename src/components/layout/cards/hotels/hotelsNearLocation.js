import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../../../actions/location/travelContent/hotelActions';
import Loader from '../../../loaders/contentLoader';
let moment = require('moment');

import HotelThumb from './thumb';

class HotelsNearLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: false };
  }

  componentWillMount() {
    this.loadHotels(this.props.locationId, this.props.latitude, this.props.longitude, 10, 'en_en', 'GBP', this.props.pageSize, 0);
  }

  loadHotels(locationId, latitude, longitude, radius, locale, currencyCode, pageSize, pageNumber) {
    this.setState({isLoading: true});
    if (latitude == 0 && longitude == 0)
    {
      this.props.hotelActions.loadHotelsByLocation(locationId, moment().add(1, 'days').format('YYYY-MM-DD'), 1, locale, currencyCode, 1, this.props.locationName, 1, {}, '', pageSize, pageNumber, 0)
        .then(() => this.setState({isLoading: false}))
        .catch(error => {
          this.setState({isLoading: false});
        });
    }
    else {
      this.props.hotelActions.loadHotelsByProximty(locationId, latitude, longitude, radius, locale, currencyCode, moment().add(1, 'days').format('YYYY-MM-DD'), 1, 1, 1, {}, '', pageSize, pageNumber, 0)
        .then(() => this.setState({isLoading: false}))
        .catch(error => {
          this.setState({isLoading: false});
        });
    }
  }

  render()
  {
    let searchHotels = this.props.url + '/hotels';
    let title = "Top Hotels";

    if (this.props.locationType != 'Country') {
      title = "Top Hotels Near " + this.props.locationName;
    }

    if (!this.state.isLoading) {
      if (this.props.hotels.hotelListResponse != undefined) {
        if (this.props.hotels.hotelListResponse.hotelList.size > 0) {
          return (
            <div className="row greyBg detailSubHeader">
              <div className="gap gap-small"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <h4>{title}</h4>
                  </div>
                  <div className="col-md-4 text-right">
                    <p><a href={searchHotels}>Find more hotels in {this.props.locationName}</a></p>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      {
                        this.props.hotels.hotelListResponse.hotelList.hotelSummary.map((hotel, index) => {
                          if (index < this.props.pageSize) {
                            return (
                              <HotelThumb hotel={hotel} hotelUrl={this.props.url} key={hotel.hotelId} cssClass="col-md-3 mb-0" nameLength={20}/>
                            );
                          }
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap gap-small"></div>
            </div>
          );
        }
        else {
          return null;
        }
      }
      else {
        return null;
      }
    }
    else {
      return (
        <div className="row greyBg detailSubHeader">
          <div className="gap"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h4>{title}</h4>
              </div>
              <div className="col-md-4 text-right">
                <p><a href={searchHotels}>Find more hotels in {this.props.locationName}</a></p>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <Loader showLoader={true}/>
                </div>
              </div>
            </div>
          </div>
          <div className="gap"></div>
        </div>
      );
    }
  }
}

HotelsNearLocation.defaultProps = {
  hotels: {}
};

HotelsNearLocation.propTypes = {
  locationId: PropTypes.number,
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  pageSize: PropTypes.number,
  locationName: PropTypes.string,
  url: PropTypes.string,
  hotels: PropTypes.object.isRequired,
  hotelActions: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(HotelsNearLocation);

