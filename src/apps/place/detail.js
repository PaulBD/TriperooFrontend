import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';
import * as placeActions from '../../actions/placeActions';

import PlaceSubHeader from '../../components/places/common/subHeader';


import Breadcrumb from '../../components/legacy/breadcrumb';
import ImageGallery from '../../components/hotels/imageGallery';
import GuestRating from '../../components/hotels/guestRating';
import TravellerRating from '../../components/legacy/travellerRating';
import HotelSummaryIcons from '../../components/hotels/summaryIcons';
import AvailableRooms from '../../components/hotels/availableRooms';
import AboutHotel from '../../components/hotels/hotelFeatures';
import Reviews from '../../components/legacy/reviews';
import HotelsNearBy from '../../components/hotels/otherHotelsNearBy';

let titleCase = require('title-case');

class Place extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {
    window.scrollTo(0, 0); 
    
    let id = this.props.cityId;
    let locationType = this.props.cityId != 0 ? "city" : "country";
    let locationName = this.props.cityId != 0 ? this.props.city : this.props.country;

    this.props.locationActions.loadLocation(id, locationType);
    this.props.placeActions.loadPlace(this.props.placeId, this.props.type);

    document.title = titleCase(this.props.placeName) + ' in ' + titleCase(locationName);
  }
  
  render(){
    console.log(this.props.place);
      return (
        <div>
        <PlaceSubHeader {...this.props}  pageType={this.props.type} locationName={this.props.place.name} area={this.props.area} city={this.props.city} country={this.props.country} />

        <div className="container">
            <div className="booking-item-details">
                <header className="booking-item-header">
                    <div className="row">
                        <div className="col-md-9">
                            <p className="lh1em text-small"><i className="fa fa-map-marker"></i> {this.props.place.address}</p>
                            <ul className="list list-inline text-small">
                                <li><a href="#"><i className="fa fa-envelope"></i> Hotel E-mail</a></li>
                                <li><a href="#"><i className="fa fa-home"></i> Hotel Website</a></li>
                                <li><i className="fa fa-phone"></i> +1 (163) 493-1463</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <p className="booking-item-header-price"><small>price from</small>  <span className="text-lg">$350</span>/night</p>
                        </div>
                    </div>
                </header>
                <div className="row">
                    <div className="col-md-6">
                        <div className="tabbable booking-details-tabbable">
                            <ul className="nav nav-tabs" id="myTab">
                                <li className="active"><a href="#tab-1" data-toggle="tab"><i className="fa fa-camera"></i>Photos</a>
                                </li>
                                <li><a href="#google-map-tab" data-toggle="tab"><i className="fa fa-map-marker"></i>On the Map</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade in active" id="tab-1">
                                    <ImageGallery />
                                </div>
                                <div className="tab-pane fade" id="google-map-tab">
                                    <div id="map-canvas map"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <GuestRating />
                        <div className="row">
                            <div className="col-md-8">
                                <TravellerRating />
                            </div>
                            <div className="col-md-4">
                                <HotelSummaryIcons />
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary">Write a Review</a>
                    </div>
                </div>
                <div className="gap"></div>
                <h3>Available Rooms</h3>                
                <div className="row">
                    <div className="col-md-9">
                        <AvailableRooms />
                    </div>
                    <div className="col-md-3">
                        <AboutHotel />
                    </div>
                </div>
                <h3 className="mb20">Hotel Reviews</h3>
                <div className="row row-wrap">
                    <div className="col-md-8">
                        <Reviews />
                    </div>
                    <div className="col-md-4">
                        <HotelsNearBy />
                    </div>
                </div>
            </div>        </div>
        </div>
      );
   }
}

Place.propTypes = {
    country: PropTypes.string,
    cityId: PropTypes.number,
    city: PropTypes.string,
    type: PropTypes.string,
    placeId: PropTypes.number,
    placeName: PropTypes.string,
    area: PropTypes.object.isRequired,
    locationActions: PropTypes.object.isRequired,
    place: PropTypes.object.isRequired,
    placeActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

    console.log(ownProps);

  return {
    area: state.area,
    place: state.place,
    placeName: ownProps.params.placeName,
    placeId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    country: ownProps.params.country,
    cityId: ownProps.params.cityId ? parseInt(ownProps.params.cityId) : 0,
    city: ownProps.params.city,    
    type: ownProps.params.type
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    placeActions: bindActionCreators(placeActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Place);