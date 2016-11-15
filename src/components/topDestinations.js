import React from "react";

var TopDestinations = React.createClass({
      render: function() {

        return (
        <div>
            <h3 className="mb20">Our Top Destinations</h3>
            <div className="row row-wrap">
                <div className="col-md-4">
                    <div className="thumb">
                        <a className="hover-img" href="#">
                            <img src="/static/img/locations/popular-destinations/london.png" alt="London" /><i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumb">
                        <a className="hover-img" href="#">
                            <img src="/static/img/locations/popular-destinations/dubai.png" alt="Dubai"/><i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumb">
                        <a className="hover-img" href="#">
                            <img src="/static/img/locations/popular-destinations/newyork.png" alt="New York" /><i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>   
        );
    }
});

export default TopDestinations;