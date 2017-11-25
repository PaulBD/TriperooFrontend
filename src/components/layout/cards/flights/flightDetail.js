import React, {PropTypes} from 'react';
let moment = require('moment');
require("moment-duration-format");

const FlightDetail = ({route, duration, title}) => {
  let image = 'https://images.kiwi.com/airlines/32/' + route.airline + '.png';

  return (
          <div className="col-md-6">
            <h5>{title} <small>{moment.unix(duration, "seconds").format("H.mm")} hrs</small></h5>
            <div className="row">
              <div className="col-md-1">
                <i className="fa fa-circle"></i>
              </div>
              <div className="col-md-5 flightDetailLineBtm">
                <span className="text-small"><strong>{route.dTimeFriendly} </strong>{moment.unix(route.dTime, "seconds").format("ddd DD MMM")}</span>
              </div>
              <div className="col-md-6 flightDetailLineBtm text-right">
                <span className="text-small">{route.cityFrom} ({route.flyFrom})</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <span className="Part"></span>
              </div>
              <div className="col-md-10">
                <small>
                  {moment.unix(duration, "seconds").format("H.mm")} hrs<br />
                  <img src={image} className="smallFlightLogo"/>
                  {route.airlineName ? route.airlineName : route.airline} <br />
                  <i className="fa fa-info-circle"></i> Flight Number: {route.flight_no}
                </small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <i className="fa fa-circle"></i>
              </div>
              <div className="col-md-5 flightDetailLineTop">
                <span className="text-small"><strong>{route.aTimeFriendly} </strong>{route.aTime == route.dTime ? moment.unix(route.aTime, "seconds").format("ddd DD MMM") : <span className="red">{moment.unix(route.aTime, "seconds").format("ddd DD MMM")}</span>}</span>
              </div>
              <div className="col-md-6 flightDetailLineTop text-right">
                <span className="text-small">{route.cityTo} ({route.flyTo})</span>
              </div>
            </div>
          </div>
  );
};

FlightDetail.propTypes = {
  route: PropTypes.object.isRequired,
  duration: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default FlightDetail;
