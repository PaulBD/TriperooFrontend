import React from "react";

export default class TopDestinations extends React.Component {
	render(){
	return (
        <div className="row row-wrap text-xs-center">
            <div className="gap"></div>
            <h3 className="mb20">Our Top Hotel Destinations</h3>
            <div className="row">
                <div className="col-md-4">
                    <a className="hover-img" href="/place/united-kingdom/london">
                        <img src="/static/img/locations/popular-destinations/london.png" alt="London" />
                        <h5 className="hover-title hover-hold">London</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="/place/3858073/spain/barcelona">
                        <img src="/static/img/locations/popular-destinations/barcelona.jpg" alt="Barcelona" />
                        <h5 className="hover-title hover-hold">Barcelona</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="/place/middle-east/dubai">
                        <img src="/static/img/locations/popular-destinations/dubai.png" alt="Dubai"/>
                        <h5 className="hover-title hover-hold">Dubai</h5>
                    </a>
                </div>
                <div className="col-md-4">
                    <a className="hover-img" href="/place/united-states/new-york">
                        <img src="/static/img/locations/popular-destinations/new-york.png" alt="New York" />
                        <h5 className="hover-title hover-hold">New York</h5>
                    </a>
                </div>
                <div className="col-md-4">
                    <a className="hover-img" href="/place/france/paris">
                        <img src="/static/img/locations/popular-destinations/paris.jpg" alt="Paris" />
                        <h5 className="hover-title hover-hold">Paris</h5>
                    </a>
                </div>
                <div className="col-md-4">
                    <a className="hover-img" href="/place/italy/rome">
                        <img src="/static/img/locations/popular-destinations/rome.jpg" alt="Rome" />
                        <h5 className="hover-title hover-hold">Rome</h5>
                    </a>
                </div>
            </div>
          </div>
        );
	}
}