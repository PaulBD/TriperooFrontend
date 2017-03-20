import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';

class Weather extends React.Component {
	constructor(props, context) {
    	super(props, context);
	}

	componentDidMount() {
	    this.props.actions.loadCurrentWeather(this.props.id);

	}

  render(){

  	if ((this.props.weather != undefined) && (this.props.weather.currently != undefined))
  	{
	  	let cssClass = "im im-" + this.props.weather.currently.icon;
	    return (
	      <div className="owl-cap-weather">
	        <span>{this.props.weather.currently.temperature}</span><i className={cssClass}></i>
	      </div>
	    );
	}
	else {
		return false;
	}
  }
}

Weather.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
