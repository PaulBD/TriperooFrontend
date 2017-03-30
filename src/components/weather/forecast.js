import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';
const Timestamp = require('react-timestamp');

class Forecast extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		this.props.actions.loadCurrentWeather(42.3601, -71.0589, 'en');
	}

	render()
	{
		let content = "";
		if ((this.props.weather != undefined) && (this.props.weather.daily != undefined)&& (this.props.weather.daily.data.length > 0))
		{
			let tmp = [];

			for (let i = 1; i < 6; i++) {
				tmp.push(this.props.weather.daily.data[i]);
			}

			content = (
				tmp.map(weather => {
				let imgUrl = '/static/img/weather-icons/' + weather.icon +'-black.png';

				return (
					<tbody key={weather.time}>
						<tr>
							<td colSpan="2">
								<Timestamp time={weather.time} format="date" includeDay/>
							</td>
							<td className="text-xs-center"><small>Min</small></td>
							<td className="text-xs-center"><small>Max</small></td>
						</tr>
						<tr>
							<td><img src={imgUrl} className="weatherIconSml" /></td>
							<td>{weather.summary}</td>
							<td className="text-xs-center">{weather.temperatureMin}ºC</td>
							<td className="text-xs-center">{weather.temperatureMax}ºC</td>
						</tr>
					</tbody>
				);
				})
			);
		}

			return (
				<div className="sidebar-widget weather">
					<h4>5 Day Forecast</h4>
					<table className="table weatherTbl">
						{content}
					</table>
					<p className="text-xs-right"><small>Powered by DarkSky</small></p>
				</div>
			);

	}
}

Forecast.defaultProps = {
  weather: {}
};

Forecast.propTypes = {
	locationId: PropTypes.number.isRequired,
	weather: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		isFetching: state.weather.isFetching ? state.weather.isFetching : false,
		weather: state.weather.weather ? state.weather.weather : {}
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(weatherActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);