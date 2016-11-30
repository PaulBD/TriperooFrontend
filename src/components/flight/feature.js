import React from "react";
import { Link } from "react-router";

var Feature = React.createClass({
      render: function() {

        return (
        <div className="bg-holder full text-xs-center text-white holidayPage">
            <div className="bg-mask"></div>
            <div className="bg-img flight"></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">Bangkok Return Flight</h1>
                    <div className="owl-cap-price">
                    <small>perect christmas gift</small>
                        <h5>£499 per person</h5>
                    </div><Link to="city" className="btn btn-white btn-ghost"><i className="fa fa-angle-right"></i> Explore</Link>
                </div>
            </div>
        </div>
        );
    }
});

export default Feature;