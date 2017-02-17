import React from "react";

export default class FeaturePlaces extends React.Component {
    render(){
    return (
            <div className="col-md-12">
            <div className="row row-wrap">
                <div className="col-md-6">
                    <div className="thumb">
                        <a className="hover-img" href="/place/united-kingdom/london">
                            <img src="/static/img/locations/popular-destinations/london.png" alt="London" />
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="thumb">
                        <a className="hover-img" href="/place/middle-east/dubai">
                            <img src="/static/img/locations/popular-destinations/dubai.png" alt="Dubai"/>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="thumb">
                        <a className="hover-img" href="/united-states/new-york">
                            <img src="/static/img/locations/popular-destinations/newyork.png" alt="New York" />
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="thumb">
                        <a className="hover-img" href="/united-states/new-york">
                            <img src="/static/img/locations/popular-destinations/newyork.png" alt="New York" />
                        </a>
                    </div>
                </div>
            </div>
        </div>   
        );
    }
}