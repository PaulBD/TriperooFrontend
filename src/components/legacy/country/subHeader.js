import React from "react";

export default class SubHeader extends React.Component {
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
                              <li className="breadcrumb-item"><a href="/place/united-kingdom">United Kingdom</a></li>
                              <li className="breadcrumb-item active">Hotels</li>
                            </ol>
                            <h1>United Kingdom</h1>
                        </div>
                        <div className="col-md-4 col-xs-5">
                        <ul className="list text-right list-inline countryNav">
                                <li>
                                    <a href="/place/united-kingdom/all/hotels" title="Book a hotel" className="active">
                                        <i className="fa fa-bed user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/place/united-kingdom/all/flights" title="Book a Flight">
                                        <i className="fa fa-plane user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/place/united-kingdom/all/attractions" title="Visit an Attraction">
                                        <i className="fa fa-ticket user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/place/united-kingdom/all/reviews" title="Read Reviews">
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