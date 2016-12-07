import React from "react";

export default class FacebookSignup extends React.Component {
    render(){
    return (
            <div className="row">
                <div className="col-md-6 text-xs-right">
                    <h5 className="signupText">Join Now to get started</h5>
                </div>
                <div className="col-md-6 text-xs-left">
                    <a href="#">
                    <img src="/static/img/fbsignup.png" className="facebookBtn" />
                    </a>
                </div>
            </div>  
        );
    }
}