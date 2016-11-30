import React from "react";

var Navigation = React.createClass({
      render: function() {

        return (
            <div className="search-tabs search-tabs-bg search-tabs-to-top">
                <div className="tabbable">
                    <div className="tab-content">
                        <div className="tab-pane fade in active text-xs-center" id="tab-1">
                            <h2 className="text-xs-center">Explore, Plan &amp; Book Your Visit to United Kingdom</h2>
                            <div className="gap gap-small"></div>
                            <ul className="list text-xs-center list-inline user-profile-statictics mb30 l90">
                                <li>
                                    <a href="/place/united-kingdom/all/hotels" title="Book a hotel">
                                        <i className="fa fa-bed user-profile-statictics-icon"></i>
                                        <p>Hotels</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/place/united-kingdom/all/flights" title="Book a Flight">
                                        <i className="fa fa-plane user-profile-statictics-icon"></i>
                                        <p>Flights</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/place/united-kingdom/all/attractions" title="Visit an Attraction">
                                        <i className="fa fa-ticket user-profile-statictics-icon"></i>
                                        <p>Attractions</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/place/united-kingdom/all/reviews" title="Read Reviews">
                                        <i className="fa fa-comment user-profile-statictics-icon"></i>
                                        <p>Reviews</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Post Questions">
                                        <i className="fa fa-question user-profile-statictics-icon"></i>
                                        <p>Questions</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
});

export default Navigation;