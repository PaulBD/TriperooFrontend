import React from "react";

var TrendingNow = React.createClass({
      render: function() {

        return (
            <div>
                <h3>Trending Now <small ><a href="#">view all</a></small></h3>
                <ul className="booking-list">
                    <li>
                        <div className="booking-item booking-item-small">
                            <div className="row">
                                <div className="col-xs-4">
                                    <img src="/static/img/hotel.jpg" alt="Image Alternative text" title="hotel PORTO BAY LIBERDADE" />
                                </div>
                                <div className="col-xs-5">
                                    <h5 className="booking-item-title">Holiday Inn Express Kennedy</h5>
                                    <ul className="icon-group booking-item-rating-stars">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-o"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">£387</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="booking-item booking-item-small">
                            <div className="row">
                                <div className="col-xs-4">
                                    <img src="/static/img/hotel1.jpg" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO lobby" />
                                </div>
                                <div className="col-xs-5">
                                    <h5 className="booking-item-title">JFK Inn</h5>
                                    <ul className="icon-group booking-item-rating-stars">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-half-empty"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">£467</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="booking-item booking-item-small">
                            <div className="row">
                                <div className="col-xs-4">
                                    <img src="/static/img/hotel2.jpg" alt="Image Alternative text" title="hotel EDEN MAR suite" />
                                </div>
                                <div className="col-xs-5">
                                    <h5 className="booking-item-title">Club Quarters Grand Central</h5>
                                    <ul className="icon-group booking-item-rating-stars">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-o"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">£465</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>  
            </div>    
        );
    }
});

export default TrendingNow;