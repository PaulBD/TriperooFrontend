import React from "react";

var CarHireFeature = React.createClass({
      render: function() {

        return (
        <div className="bg-holder full text-xs-center text-white holidayPage">
            <div className="bg-mask"></div>
            <div className="bg-img carHire"></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">Cheap Car Hire Deals</h1>
                    <div className="owl-cap-price">
                    <small>Car rental rental from just £3.20* a day</small>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});

export default CarHireFeature;