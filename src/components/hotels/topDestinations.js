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
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="/places/united-kingdom/chester/hotels/mauris-euismod-nascetur">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="/place/middle-east/dubai">
                        <img src="/static/img/locations/popular-destinations/dubai.png" alt="Dubai"/>
                    </a>
                </div>
            </div>
            <div className="gap gap-small"></div>
            <div className="row">
                <div className="col-md-4">
                    <a className="hover-img" href="/united-states/new-york">
                        <img src="/static/img/locations/popular-destinations/newyork.png" alt="New York" />
                    </a>
                </div>
                <div className="col-md-4">
                    <a className="hover-img" href="/places/united-kingdom/chester/hotels/mauris-euismod-nascetur">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>
                <div className="col-md-4">
                    <a className="hover-img" href="/places/united-kingdom/chester/hotels/mauris-euismod-nascetur">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>
            </div>
          </div>
        );
	}
}