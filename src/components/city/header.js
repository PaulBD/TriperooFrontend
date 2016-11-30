import React from "react";

export default class Header extends React.Component {
	render(){
	return (
        <div className="top-area show-onload cityPage">
            <div className="bg-holder full text-xs-center text-white">
                <div className="bg-mask"></div>
                <div className="bg-img chester"></div>
                <div className="bg-front full-center">
                    <div className="owl-cap">
                            <div className="owl-cap-weather">
                                <span>+28</span><i className="im im-sun"></i>
                            </div>
                        <h1 className="owl-cap-title fittext">Chester</h1>
                        <div className="owl-cap-price">
                            <small>United Kingdom / Cheshire</small>
                        </div>
                        <div className="gap gap"></div>
                    </div>
                </div>
            </div>
        </div>
       	);
	}
}