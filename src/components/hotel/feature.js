import React from "react";
import { Link } from "react-router";

var HotelPageFeature = React.createClass({
      render: function() {

        return (
        <div className="bg-holder full text-xs-center text-white holidayPage">
            <div className="bg-mask"></div>
            <div className="bg-img hotelRoom"></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">Ritz - London</h1>
                    <div className="owl-cap-price">
                    <small>stay <strong>5 star</strong> from</small>
                        <h5>£99 per night</h5>
                    </div><Link to="city" className="btn btn-white btn-ghost"><i className="fa fa-angle-right"></i> Explore</Link>
                </div>
            </div>
        </div>
        );
    }
});

export default HotelPageFeature;