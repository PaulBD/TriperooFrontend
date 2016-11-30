import React from "react";

export default class HotelFeatures extends React.Component {
	render(){
	return (
        <div>
            <h4>About the Hotel</h4>
                <p className="mb30">Torquent egestas pharetra est cum tellus ultrices aliquam nam gravida hendrerit primis class egestas primis porta egestas non eleifend risus</p>
                <h4>Hotel Facilities</h4>
                <ul className="booking-item-features booking-item-features-expand mb30 clearfix">
                    <li><i className="im im-wi-fi"></i><span className="booking-item-feature-title">Wi-Fi Internet</span>
                    </li>
                    <li><i className="im im-parking"></i><span className="booking-item-feature-title">Parking</span>
                    </li>
                    <li><i className="im im-plane"></i><span className="booking-item-feature-title">Airport Transport</span>
                    </li>
                    <li><i className="im im-bus"></i><span className="booking-item-feature-title">Shuttle Bus Service</span>
                    </li>
                    <li><i className="im im-fitness"></i><span className="booking-item-feature-title">Fitness Center</span>
                    </li>
                    <li><i className="im im-pool"></i><span className="booking-item-feature-title">Pool</span>
                    </li>
                    <li><i className="im im-spa"></i><span className="booking-item-feature-title">SPA</span>
                    </li>
                    <li><i className="im im-restaurant"></i><span className="booking-item-feature-title">Restaurant</span>
                    </li>
                    <li><i className="im im-wheel-chair"></i><span className="booking-item-feature-title">Wheelchair Access</span>
                    </li>
                    <li><i className="im im-business-person"></i><span className="booking-item-feature-title">Business Center</span>
                    </li>
                    <li><i className="im im-children"></i><span className="booking-item-feature-title">Children Activites</span>
                    </li>
                    <li><i className="im im-casino"></i><span className="booking-item-feature-title">Casino & Gambling</span>
                    </li>
                    <li><i className="im im-bar"></i><span className="booking-item-feature-title">Bar/Lounge</span>
                    </li>
                </ul>
            </div>
       	);
	}
}