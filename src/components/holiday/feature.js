import React from "react";
import { Link } from "react-router";

export default class Feature extends React.Component {
    render(){
    return (
        <div className="bg-holder full text-xs-center text-white holidayPage">
            <div className="bg-mask"></div>
            <div className="bg-img winterSun"></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">Cancun, Carribean Coast</h1>
                    <div className="owl-cap-price">
                    <small>travel <strong>5 star</strong> from</small>
                        <h5>£599pp</h5>
                    </div><Link to="city" className="btn btn-white btn-ghost"><i className="fa fa-angle-right"></i> Explore</Link>
                </div>
            </div>
        </div>
        );
    }
}