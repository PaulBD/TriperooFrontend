import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../../../actions/location/travelContent/hotelActions';
import Loader from '../../../loaders/contentLoader';

import HotelThumb from './thumb';

class HotelsNearLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: false };
  }

  componentWillMount() {
    this.getHotels();
  }

  getHotels() {
    this.setState({isLoading: true});
    console.log(this.props.pageSize);
    this.props.hotelActions.loadHotelsByLocation(this.props.locationId, this.props.pageSize, 0)
      .then(() => this.setState({isLoading: false}))
      .catch(error => {
        this.setState({isLoading: false});
      });
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
                    <p><a href={searchHotels}>Find more hotels in {this.props.parentName}</a></p>
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
                <p><a href={searchHotels}>Find more hotels in {this.props.parentName}</a></p>
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
  pageSize: PropTypes.number,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  parentName: PropTypes.string,
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

