import React from "react";
import { Link } from "react-router";

export default class HotelThumb extends React.Component {
	render(){
	return (
        <Link to="hotel">
        <div className="thumb">
            <a className="hover-img" href="#">
                <img src="/static/img/800x600.png" alt="Image Alternative text" title="Gaviota en el Top" />
                <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                    <div className="text-small">
                        <h5>New York City Hotels</h5>
                        <p>65329 reviews</p>
                        <p className="mb0">724 offers from $72</p>
                    </div>
                </div>
            </a>
        </div>
        </Link>
/*
        <div className="col-md-3">
                    <div className="thumb">
                        <header className="thumb-header">
                            <a className="hover-img" href="#">
                                <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel 1" />
                                <h5 className="hover-title-center">Book Now</h5>
                            </a>
                        </header>
                        <div className="thumb-caption">
                            <ul className="icon-group text-tiny text-color">
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
                            <h5 className="thumb-title"><a className="text-darken" href="#">InterContinental New York B...</a></h5>
                            <p className="mb0"><small><i className="fa fa-map-marker"></i> Bronx (Bronx)</small>
                            </p>
                            <p className="mb0 text-darken"><span className="text-lg lh1em text-color">$165</span><small> avg/night</small>
                            </p>
                        </div>
                    </div>
                    */
        );
	}
}