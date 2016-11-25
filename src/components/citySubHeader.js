import React from "react";

export default class CityHeader extends React.Component {
	render(){
	return (
        <div className="top-area show-onload infoPage">
            <div className="bg-holder full text-white">
                <div className="bg-mask"></div>
                <div className="bg-img chester"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xs-7">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><a href="/">Home</a></li>
                              <li className="breadcrumb-item"><a href="/city">Chester</a></li>
                              <li className="breadcrumb-item active">Hotels</li>
                            </ol>
                            <h1>Chester</h1>
                        </div>
                        <div className="col-md-4 col-xs-5">
                        <ul className="list text-xs-right list-inline cityNav">
                                <li>
                                    <a href="/city/hotels" title="Book a hotel" className="active">
                                        <i className="fa fa-bed user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/city/restaurants" title="Book a Restaurant">
                                        <i className="fa fa-cutlery user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/city/pubs" title="Visit a Bar">
                                        <i className="fa fa-glass user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/city/attractions" title="Visit an Attraction">
                                        <i className="fa fa-ticket user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/city/reviews" title="Read Reviews">
                                        <i className="fa fa-comment user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Post Questions">
                                        <i className="fa fa-question user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       	);
	}
}