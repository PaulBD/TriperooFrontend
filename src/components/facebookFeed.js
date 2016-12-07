import React from "react";

export default class FacebookFeed extends React.Component {
	render(){
	return (
        <div className="sidebar-widget">
            <h4>Facebook</h4>
            <div className="fb-like-box" data-href="https://www.facebook.com/FacebookDevelopers" data-colorscheme="light" data-show-faces="1" data-header="1" data-show-border="1" data-width="233"></div>
        </div>
		);
	}
}