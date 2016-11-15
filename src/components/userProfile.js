import React from "react";

export default class UserProfile extends React.Component {
	render(){
	return (
		<aside className="user-profile-sidebar">
			<div className="user-profile-avatar text-center">
				<img src="img/300x300.png" alt="Image Alternative text" title="AMaze" />
				<h5>John Doe</h5>
				<p>Member Since May 2012</p>
			</div>
			<ul className="list user-profile-nav">
				<li><a href="user-profile.html"><i className="fa fa-user"></i>Overview</a></li>
				<li><a href="user-profile-settings.html"><i className="fa fa-cog"></i>Settings</a></li>
				<li><a href="user-profile-photos.html"><i className="fa fa-camera"></i>My Travel Photos</a></li>
				<li><a href="user-profile-booking-history.html"><i className="fa fa-clock-o"></i>Booking History</a></li>
				<li><a href="user-profile-cards.html"><i className="fa fa-credit-card"></i>Credit/Debit Cards</a></li>
				<li><a href="user-profile-wishlist.html"><i className="fa fa-heart-o"></i>Wishlist</a></li>
			</ul>
		</aside>
		);
	}
}