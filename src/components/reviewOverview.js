import React from "react";

var ReviewOverview = React.createClass({
      render: function() {

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
});

export default ReviewOverview;