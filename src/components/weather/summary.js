import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';

class Summary extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		this.props.actions.loadCurrentWeather(42.3601, -71.0589, 'en');
	}

	render()
	{
		if ((this.props.weather != undefined) && (this.props.weather.currently != undefined))
		{
			let imageUrl = "/static/img/weather-icons/" + this.props.weather.currently.icon + ".png";

			return (
				<div className="owl-cap-weather">
					<span>{this.props.weather.currently.temperature}</span>
					<img src={imageUrl} width="32" height="32" className="weatherIcon" />
				</div>
			);
		}
		else {
			return false;
		}
	}
}

Summary.propTypes = {
	id: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	weather: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		weather: state.weather
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(weatherActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
