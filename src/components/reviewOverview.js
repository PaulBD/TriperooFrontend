import React from "react";

export default class ReviewOverview extends React.Component {
    render(){
    return (
            <div className="row greyBg commentOverview">
                <div className="col-md-6">
                    <ul className="icon-group">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star-o"></i></li>
                    </ul>
                </div>
                <div className="col-md-6">
                23 Reviews<br/>
                33,567 have visited Chester
                </div>
            </div>
        );
    }
}