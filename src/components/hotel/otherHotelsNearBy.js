import React from "react";
import { Link } from "react-router";

import HotelList from './list';

export default class OtherHotelsNearBy extends React.Component {
	render(){
	return (
        <div>
            <h4>Hotels Near InterContinental New York Barclay</h4>
            <ul className="booking-list">
                <li>
                    <HotelList />
                </li>
                <li>
                    <HotelList />
                </li>
                <li>
                    <HotelList />
                </li>
                <li>
                    <HotelList />
                </li>
                <li>
                    <HotelList />
                </li>
                <li>
                    <HotelList />
                </li>
            </ul>
        </div>
       	);
	}
}