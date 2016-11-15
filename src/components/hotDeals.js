import React from "react";

var HotDeals = React.createClass({
      render: function() {

        return (
        <div>
            <h3>Hot Deals <small ><a href="#">view all</a></small></h3>
            <ul className="booking-list">
                <li>
                    <div className="booking-item booking-item-small">
                        <div className="row">
                            <div className="col-xs-4">
                                <img src="/static/img/hotel2.jpg" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO luxury suite" />
                            </div>
                            <div className="col-xs-5">
                                <h5 className="booking-item-title">Wyndham Garden Chinatown</h5>
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
                            <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">£170</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="booking-item booking-item-small">
                        <div className="row">
                            <div className="col-xs-4">
                                <img src="/static/img/hotel.jpg" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF suite" />
                            </div>
                            <div className="col-xs-5">
                                <h5 className="booking-item-title">The Kimberly Hotel</h5>
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
                            <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">£190</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="booking-item booking-item-small">
                        <div className="row">
                            <div className="col-xs-4">
                                <img src="/static/img/hotel1.jpg" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO suite lhotel living room" />
                            </div>
                            <div className="col-xs-5">
                                <h5 className="booking-item-title">Bryant Park Hotel</h5>
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
                            <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">£458</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            </div>    
        );
    }
});

export default HotDeals;