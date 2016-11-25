import React from "react";

export default class HolidayCopy extends React.Component {
	render(){
	return (
        <div className="row">
            <div className="col-md-3">
                <div className="mb30 thumb"><i className="fa fa-glass box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                    <div className="thumb-caption">
                        <h4 className="thumb-title">All Inclusive</h4>
                        <p className="thumb-desc">See how easy it is to find cheap all-inclusive holidays.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="mb30 thumb"><i className="fa fa-child box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                    <div className="thumb-caption">
                        <h4 className="thumb-title">Family Holidays</h4>
                        <p className="thumb-desc">Planning your next holiday is child's play.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="mb30 thumb"><i className="fa fa-map-o box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                    <div className="thumb-caption">
                        <h4 className="thumb-title">City Breaks</h4>
                        <p className="thumb-desc">City breaks that never go out of fashion!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="mb30 thumb"><i className="fa fa-snowflake-o box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                    <div className="thumb-caption">
                        <h4 className="thumb-title">Ski Holidays</h4>
                        <p className="thumb-desc">Pick the perfect winter sports break.</p>
                    </div>
                </div>
            </div>
        </div>
       	);
	}
}