import React from 'react';
import Breadcrumb from '../../components/legacy/breadcrumb';
import ImageGallery from '../../components/hotels/imageGallery';
import GuestRating from '../../components/hotels/guestRating';
import TravellerRating from '../../components/legacy/travellerRating';
import HotelSummaryIcons from '../../components/hotels/summaryIcons';
import AvailableRooms from '../../components/hotels/availableRooms';
import AboutHotel from '../../components/hotels/hotelFeatures';
import Reviews from '../../components/legacy/reviews';
import HotelsNearBy from '../../components/hotels/otherHotelsNearBy';

export default class PlaceDetail extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0); 
  }
  
  render(){
      return (
        <div className="container">
            <Breadcrumb />
            <div className="booking-item-details">
                <header className="booking-item-header">
                    <div className="row">
                        <div className="col-md-9">
                            <h2 className="lh1em">InterContinental New York Barclay</h2>
                            <p className="lh1em text-small"><i className="fa fa-map-marker"></i> 6782 Sarasea Circle, Siesta Key, FL 34242</p>
                            <ul className="list list-inline text-small">
                                <li><a href="#"><i className="fa fa-envelope"></i> Hotel E-mail</a>
                                </li>
                                <li><a href="#"><i className="fa fa-home"></i> Hotel Website</a>
                                </li>
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
            </div>
        </div>
      );
   }
}