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
                        <h1 className="owl-cap-title fittext">United Kingdom</h1>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}