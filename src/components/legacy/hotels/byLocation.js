import React from "react";
import Thumb from '../../layout/cards/hotels/thumb';

export default class ByLocation extends React.Component {
	render(){
	return (
        <div><h3 className="mb20">Hotels in Popular Destinations</h3>
          <div className="row row-wrap">
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
            <div className="col-md-3">
              <Thumb />
            </div>
          </div>
        </div>
        );
    }
}
