import React, {PropTypes} from 'react';

class WeatherFull extends React.Component {
  render(){
    return (
        <div className="sidebar-widget weather">
            <h4>5 Day Forecast</h4>
            <hr />
            <div className="row">
	            <div className="col-md-2 text-xs-center">
	            	<i className="im im-rain weatherSml"></i>
	            </div>
	            <div className="col-md-4">
					Partly Cloudly
	            </div>
	            <div className="col-md-2 text-xs-center">
					Mon
	            </div>
	            <div className="col-md-2 text-xs-center units">
					<small>High</small><br />
					56
	            </div>
	            <div className="col-md-2 text-xs-center units">
					<small>Low</small><br />
					56
	            </div>
            </div>
            <hr />
            <div className="row">
	            <div className="col-md-2 text-xs-center">
	            	<i className="im im-rain weatherSml"></i>
	            </div>
	            <div className="col-md-4">
					Partly Cloudly
	            </div>
	            <div className="col-md-2 text-xs-center">
					Tue
	            </div>
	            <div className="col-md-2 text-xs-center units">
					<small>High</small><br />
					56
	            </div>
	            <div className="col-md-2 text-xs-center units">
					<small>Low</small><br />
					56
	            </div>
            </div>
            <hr />
            <div className="row">
	            <div className="col-md-2 text-xs-center">
	            	<i className="im im-rain weatherSml"></i>
	            </div>
	            <div className="col-md-4">
					Rain
	            </div>
	            <div className="col-md-2 text-xs-center">
					Wed
	            </div>
	            <div className="col-md-2 text-xs-center units">
					<small>High</small><br />
					56
	            </div>
	            <div className="col-md-2 text-xs-center units">
					<small>Low</small><br />
					56
	            </div>
            </div>
            <hr />
            <div className="row">
	            <div className="col-md-2 text-xs-center">
	            	<i className="im im-rain weatherSml"></i>
	            </div>
	            <div className="col-md-4">
					Partly Cloudly
	            </div>
	            <div className="col-md-2 text-xs-center">
					Thu
	            </div>
	            <div className="col-md-2 text-xs-center units">
					<small>High</small><br />
					56
	            </div>
	            <div className="col-md-2 text-xs-center units">
					<small>Low</small><br />
					56
	            </div>
            </div>
            <hr />
            <div className="row">
	            <div className="col-md-2 text-xs-center">
	            	<i className="im im-rain weatherSml"></i>
	            </div>
	            <div className="col-md-4">
					Partly Cloudly
	            </div>
	            <div className="col-md-2 text-xs-center">
					Fri
	            </div>
	            <div className="col-md-2 text-xs-center units">
					<small>High</small><br />
					56
	            </div>
	            <div className="col-md-2 text-xs-center units">
					<small>Low</small><br />
					56
	            </div>
            </div>
            <hr />
      </div>
    );
  }
}

export default WeatherFull;
