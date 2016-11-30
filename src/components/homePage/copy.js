import React from "react";

export default class Copy extends React.Component {
	render(){
	return (
        <div className="row">
            <div className="col-md-3">
                <a href="/holidays">
                    <div className="mb30 thumb"><i className="fa fa-suitcase box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                        <div className="thumb-caption">
                            <h4 className="thumb-title">Holidays</h4>
                            <p className="thumb-desc">Habitant pulvinar nostra himenaeos pulvinar facilisi</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-3">
                <a href="/hotels">
                    <div className="mb30 thumb"><i className="fa fa-bed box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                        <div className="thumb-caption">
                            <h4 className="thumb-title">Hotels</h4>
                            <p className="thumb-desc">Habitant pulvinar nostra himenaeos pulvinar facilisi</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-3">
                <a href="/flights">
                    <div className="mb30 thumb"><i className="fa fa-plane box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                        <div className="thumb-caption">
                            <h4 className="thumb-title">Flights</h4>
                            <p className="thumb-desc">Habitant pulvinar nostra himenaeos pulvinar facilisi</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-3">
                <a href="/travel-extras/car-hire">
                    <div className="mb30 thumb"><i className="fa fa-car box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                        <div className="thumb-caption">
                            <h4 className="thumb-title">Car Hire</h4>
                            <p className="thumb-desc">Habitant pulvinar nostra himenaeos pulvinar facilisi</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
       	);
	}
}