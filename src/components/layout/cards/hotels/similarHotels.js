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
    this.getHotels();
  }

  getHotels() {
    this.setState({isLoading: true});
    this.props.hotelActions.loadHotelsByProximty(this.props.locationId, this.props.latitude, this.props.longitude, this.props.radius, this.props.locale, this.props.currencyCode, this.props.pageSize, this.props.pageNumber)
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
          <div className="row greyBg detailSubHeader">
            <div className="gap gap-mini"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    {
                      this.props.hotels.hotelListResponse.hotelList.hotelSummary.map((hotel, index) => {
                        if (index < this.props.pageSize) {
                          return (
                            <HotelThumb hotel={hotel} hotelUrl={this.props.url} key={hotel.hotelId} cssClass="col-md-6 mb-4" nameLength={20}/>
                          );
                        }
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="gap"></div>
          </div>
        );
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

SimilarHotels.defaultProps = {
  hotelDeals: {},
  pageSize: 3,
  pageNumber: 0
};

SimilarHotels.propTypes = {
  locationId: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  locale: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
  hotels: PropTypes.object.isRequired,
  hotelActions: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
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

