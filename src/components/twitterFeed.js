import React from "react";

export default class TwitterFeed extends React.Component {
	render(){
	return (
        <div className="sidebar-widget">
            <h4>Twitter Feed</h4>
            <div className="twitter" id="twitter"></div>
        </div>
       	);
	}
}