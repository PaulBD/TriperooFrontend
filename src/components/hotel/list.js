import React from "react";
import { Link } from "react-router";

export default class HotelList extends React.Component {
	render(){
	return (
        <Link to="hotel">
        <div className="booking-item booking-item-small">
            <div className="row">
                <div className="col-xs-4">
                    <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF living room" />
                </div>
                <div className="col-xs-5">
                    <h5 className="booking-item-title">Waldorf Astoria New York</h5>
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
                <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">$345</span>
                </div>
            </div>
        </div>
        </Link>
        );
    }
}