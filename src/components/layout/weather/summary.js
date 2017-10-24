import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../../actions/location/common/weatherActions';

class Summary extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		this.props.actions.loadCurrentWeather(this.props.locationId, 'en');
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
			return (<div className="owl-cap-weather">&nbsp;</div>);
		}
	}
}


Summary.defaultProps = {
	weather: {},
	isFetching: false
};

Summary.propTypes = {
	locationId: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	weather: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
	isFetching: PropTypes.bool.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
