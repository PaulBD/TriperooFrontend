import React from "react";

export default class LastMinuteDeal extends React.Component {
    

	render(){
        var style = {
            backgroundImage: 'url("/static/img/locations/popular-destinations/peninsula.jpg")'
        };

	return (
        <div className="bg-holder">
            <div className="bg-mask"></div>
            <div className="bg-parallax" style={style}></div>
            <div className="bg-content">
                <div className="container">
                    <div className="gap gap-big text-xs-center text-white">
                        <h2 className="text-uc mb20">Last Minute Deal</h2>
                        <ul className="icon-list list-inline-block mb0 last-minute-rating">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                        <h5 className="last-minute-title">The Peninsula - New York</h5>
                        <p className="last-minute-date">Fri 14 Mar - Sun 16 Mar</p>
                        <p className="mb20"><b>£120</b> / person</p><a className="btn btn-lg btn-white btn-ghost" href="#">Book Now <i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
       	);
	}
}