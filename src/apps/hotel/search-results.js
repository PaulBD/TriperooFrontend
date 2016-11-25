import React from 'react';
import HotelSearch from '../../components/hotelSearch';
import HotelThumb from '../../components/hotelThumb';

export default class CityPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
  return (
    <div>
  	    <div className="container">
            <h1 className="page-title">Search for Hotels</h1>
        </div>
        <div className="container">
            <HotelSearch />
            <div className="gap gap-small"></div>
            <h3 className="mb20">Hotels in Popular Destinations</h3>
            <div className="row row-wrap">
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
            </div>
            <div className="gap"></div>
            <h3 className="mb20">Top Deals</h3>
            <div className="row row-wrap">
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
                <div className="col-md-3">
                	<HotelThumb />
                </div>
            </div>
            <div className="gap gap-small"></div>
        </div>
    </div>
  )};
};
