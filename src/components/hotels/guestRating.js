import React from "react";

export default class GuestRating extends React.Component {
	render(){
	return (
        <div className="booking-item-meta">
            <h2 className="lh1em mt40">Exeptional!</h2>
            <h3>97% <small >of guests recommend</small></h3>
            <div className="booking-item-rating">
                <ul className="icon-list icon-group booking-item-rating-stars">
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
                </ul><span className="booking-item-rating-number"><b >4.7</b> of 5 <small className="text-smaller">guest rating</small></span>
                <p><a className="text-default" href="#">based on 1535 reviews</a>
                </p>
            </div>
        </div>
        );
    }
}