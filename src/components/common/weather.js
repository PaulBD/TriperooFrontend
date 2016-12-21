import React, {PropTypes} from "react";

class Weather extends React.Component {
  render(){
    return (
      <div className="owl-cap-weather">
        <span>+28</span><i className="im im-sun"></i>
      </div>
    );
  }
}

Weather.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default Weather;
