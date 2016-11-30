import React from "react";

var TravelPageFeature = React.createClass({
      render: function() {

        return (
        <div className="bg-holder full text-xs-center text-white travelPage">
            <div className="bg-mask"></div>
            <div className="bg-img airportLounge"></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">Travel Extras</h1>
                    <div className="owl-cap-price">
                    <small>Save money on all those little extras that add up</small>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});

export default TravelPageFeature;