import React from "react";

var ReviewButton = React.createClass({
      render: function() {

        return (
                  <a href="#" className="btn btn-info questionBtn">
                        <i className="fa fa-question-circle"></i>
                        Ask a question about Chester
                    </a>
        );
    }
});

export default ReviewButton;