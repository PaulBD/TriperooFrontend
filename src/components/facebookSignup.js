import React from "react";

var FacebookSignup = React.createClass({
      render: function() {

        return (
            <div className="row">
                <div className="col-md-6 text-xs-right">
                    <h5 className="signupText">Join Now to get started</h5>
                </div>
                <div className="col-md-6 text-xs-left">
                    <img src="/static/img/fbsignup.png" className="facebookBtn" />
                </div>
            </div>  
        );
    }
});

export default FacebookSignup;