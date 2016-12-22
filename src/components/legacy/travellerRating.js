import React from "react";

export default class TravellerRating extends React.Component {
	render(){
	return (
        <div>
            <h4 className="lh1em">Traveler raiting</h4>
            <ul className="list booking-item-raiting-list">
                <li>
                    <div className="booking-item-raiting-list-title">Exellent</div>
                    <div className="booking-item-raiting-list-bar">
                        <div className="percent91"></div>
                    </div>
                    <div className="booking-item-raiting-list-number">1223</div>
                </li>
                <li>
                    <div className="booking-item-raiting-list-title">Very Good</div>
                    <div className="booking-item-raiting-list-bar">
                        <div className="percent6"></div>
                    </div>
                    <div className="booking-item-raiting-list-number">61</div>
                </li>
                <li>
                    <div className="booking-item-raiting-list-title">Average</div>
                    <div className="booking-item-raiting-list-bar">
                        <div className="percent5"></div>
                    </div>
                    <div className="booking-item-raiting-list-number">40</div>
                </li>
                <li>
                    <div className="booking-item-raiting-list-title">Poor</div>
                    <div className="booking-item-raiting-list-bar">
                        <div className="percent3"></div>
                    </div>
                    <div className="booking-item-raiting-list-number">15</div>
                </li>
                <li>
                    <div className="booking-item-raiting-list-title">Terrible</div>
                    <div className="booking-item-raiting-list-bar">
                        <div className="percent1"></div>
                    </div>
                    <div className="booking-item-raiting-list-number">9</div>
                </li>
            </ul>
        </div>
        );
    }
}