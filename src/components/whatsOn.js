import React from "react";

export default class WhatsOn extends React.Component {
    render(){
    return (
            <div>
                <h4>What's On This Month</h4>
                    <ul className="booking-list">
                    <li>
                        <div className="booking-item booking-item-small">
                            <div className="row">
                                <div className="col-xs-4">
                                    <img src="/static/img/hotel.jpg" alt="Image Alternative text" title="hotel PORTO BAY LIBERDADE" />
                                </div>
                                <div className="col-xs-8">
                                    <h5 className="booking-item-title">Holiday Inn Express Kennedy</h5>
                                    3rd December @ 7pm
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="booking-item booking-item-small">
                            <div className="row">
                                <div className="col-xs-4">
                                    <img src="/static/img/hotel1.jpg" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO lobby" />
                                </div>
                                <div className="col-xs-8">
                                    <h5 className="booking-item-title">JFK Inn</h5>
                                    4th December @ 9pm
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="booking-item booking-item-small">
                            <div className="row">
                                <div className="col-xs-4">
                                    <img src="/static/img/hotel2.jpg" alt="Image Alternative text" title="hotel EDEN MAR suite" />
                                </div>
                                <div className="col-xs-8">
                                    <h5 className="booking-item-title">Club Quarters Grand Central</h5>
                                    24th December @ 3pm
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="booking-item booking-item-small">
                            <div className="row">
                                <div className="col-xs-4">
                                    <img src="/static/img/hotel2.jpg" alt="Image Alternative text" title="hotel EDEN MAR suite" />
                                </div>
                                <div className="col-xs-8">
                                    <h5 className="booking-item-title">Club Quarters Grand Central</h5>
                                    24th December @ 3pm
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}