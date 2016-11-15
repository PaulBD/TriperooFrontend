import React from "react";

export default class WriteReview extends React.Component {
    render(){
    return (
        <div>
           <h3>Write a Review</h3>
            <form>
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <label>Review Title</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Review Text</label>
                            <textarea className="form-control" rows="6"></textarea>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <ul className="list booking-item-raiting-summary-list stats-list-select">
                            <li>
                                <div className="booking-item-raiting-list-title">Sleep</div>
                                <ul className="icon-group booking-item-rating-stars">
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="booking-item-raiting-list-title">Location</div>
                                <ul className="icon-group booking-item-rating-stars">
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="booking-item-raiting-list-title">Service</div>
                                <ul className="icon-group booking-item-rating-stars">
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="booking-item-raiting-list-title">Clearness</div>
                                <ul className="icon-group booking-item-rating-stars">
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="booking-item-raiting-list-title">Rooms</div>
                                <ul className="icon-group booking-item-rating-stars">
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                    <li><i className="fa fa-smile-o"></i>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <input className="btn btn-primary" type="submit" value="Leave a Review" />
                    </div>
                </div>
            </form>
        </div>
        );
    }
}