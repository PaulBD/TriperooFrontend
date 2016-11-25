import React from "react";

var CityNavigation = React.createClass({
      render: function() {

        return (
            <div className="search-tabs search-tabs-bg search-tabs-to-top">
                <div className="tabbable">
                    <div className="tab-content">
                        <div className="tab-pane fade in active text-xs-center" id="tab-1">
                            <h2 className="text-xs-center">Explore, Plan &amp; Book Your Visit to Chester</h2>
                            <div className="gap gap-small"></div>
                            <ul className="list text-xs-center list-inline user-profile-statictics mb30 l30">
                                <li>
                                    <a href="/city/hotels" title="Book a hotel">
                                        <i className="fa fa-bed user-profile-statictics-icon"></i>
                                        <h5>65</h5>
                                        <p>Hotels</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/city/restaurants" title="Book a Restaurant">
                                        <i className="fa fa-cutlery user-profile-statictics-icon"></i>
                                        <h5>45</h5>
                                        <p>Restaurants</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/city/pubs" title="Visit a Bar">
                                        <i className="fa fa-glass user-profile-statictics-icon"></i>
                                        <h5>15</h5>
                                        <p>Bars</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/city/attractions" title="Visit an Attraction">
                                        <i className="fa fa-ticket user-profile-statictics-icon"></i>
                                        <h5>30</h5>
                                        <p>Attractions</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/city/reviews" title="Read Reviews">
                                        <i className="fa fa-comment user-profile-statictics-icon"></i>
                                        <h5>20</h5>
                                        <p>Reviews</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Post Questions">
                                        <i className="fa fa-question user-profile-statictics-icon"></i>
                                        <h5>20</h5>
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

export default CityNavigation;