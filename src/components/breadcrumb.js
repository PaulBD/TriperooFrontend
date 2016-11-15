import React from "react";

export default class Breadcrumb extends React.Component {
	render(){
	return (
            <ul className="breadcrumb">
                <li><a href="/">Home</a>
                </li>
                <li><a href="#">United States</a>
                </li>
                <li><a href="#">New York (NY)</a>
                </li>
                <li><a href="#">New York City</a>
                </li>
                <li><a href="#">New York City Hotels</a>
                </li>
                <li className="active">InterContinental New York Barclay</li>
            </ul>
       	);
	}
}