import React from "react";

export default class SideNavigation extends React.Component {
	render(){
	return (
		<div className="sidebar-widget">
            <h4>Categories</h4>
            <ul className="icon-list list-category">
                <li><a href="#"><i className="fa fa-angle-right"></i>Photos <small >(74)</small></a>
                </li>
                <li><a href="#"><i className="fa fa-angle-right"></i>Vacation <small >(98)</small></a>
                </li>
                <li><a href="#"><i className="fa fa-angle-right"></i>Flights <small >(56)</small></a>
                </li>
                <li><a href="#"><i className="fa fa-angle-right"></i>Travel Advices <small >(73)</small></a>
                </li>
                <li><a href="#"><i className="fa fa-angle-right"></i>Trending Now <small >(83)</small></a>
                </li>
                <li><a href="#"><i className="fa fa-angle-right"></i>Hotels <small >(91)</small></a>
                </li>
                <li><a href="#"><i className="fa fa-angle-right"></i>Places to Go <small >(71)</small></a>
                </li>
                <li><a href="#"><i className="fa fa-angle-right"></i>Travel Stories <small >(90)</small></a>
                </li>
            </ul>
        </div>            
	    );
	}
}