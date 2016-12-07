import React from "react";

export default class Recommendations extends React.Component {
    render(){
    return (
        <div>
            <h3>Special for You <small ><a href="#">view all</a></small></h3>
                    <ul className="booking-list">
                        <li>
                            <div className="booking-item booking-item-small">
                                <div className="row">
                                    <div className="col-xs-4">
                                        <img src="/static/img/hotel1.jpg" alt="Image Alternative text" title="hotel PORTO BAY RIO INTERNACIONAL rooftop pool" />
                                    </div>
                                    <div className="col-xs-5">
                                        <h5 className="booking-item-title">Warwick New York Hotel</h5>
                                        <ul className="icon-group booking-item-rating-stars">
                                            <li><i className="fa fa-star"></i>
                                            </li>
                                            <li><i className="fa fa-star"></i>
                                            </li>
                                            <li><i className="fa fa-star"></i>
                                            </li>
                                            <li><i className="fa fa-star"></i>
                                            </li>
                                            <li><i className="fa fa-star"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">£418</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="booking-item booking-item-small">
                                <div className="row">
                                    <div className="col-xs-4">
                                        <img src="/static/img/hotel2.jpg" alt="Image Alternative text" title="hotel PORTO BAY RIO INTERNACIONAL de luxe" />
                                    </div>
                                    <div className="col-xs-5">
                                        <h5 className="booking-item-title">The London NYC</h5>
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
                                    <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">£316</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="booking-item booking-item-small">
                                <div className="row">
                                    <div className="col-xs-4">
                                        <img src="/static/img/hotel.jpg" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF suite2" />
                                    </div>
                                    <div className="col-xs-5">
                                        <h5 className="booking-item-title">Affinia Shelburne</h5>
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
                                    <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">£350</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>    
        );
    }
}