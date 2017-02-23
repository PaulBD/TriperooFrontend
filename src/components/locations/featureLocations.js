import React from "react";

export default class FeaturePlaces extends React.Component {
    render(){
    return (
            <div className="col-md-12">
            <h3 className="mb20">Our Top Destinations</h3>
            <div className="row row-wrap">
                <div className="col-md-4">
                    <div className="thumb">
                        <a className="hover-img" href="/place/united-kingdom/london">
                            <img src="/static/img/locations/popular-destinations/london.png" alt="London" />
                             <h5 className="hover-title hover-hold">London</h5>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumb">
                        <a className="hover-img" href="/place/middle-east/dubai">
                            <img src="/static/img/locations/popular-destinations/dubai.png" alt="Dubai"/>
                             <h5 className="hover-title hover-hold">Dubai</h5>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumb">
                        <a className="hover-img" href="/united-states/new-york">
                            <img src="/static/img/locations/popular-destinations/new-york.png" alt="New York" />
                             <h5 className="hover-title hover-hold">New York</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>   
        );
    }
}