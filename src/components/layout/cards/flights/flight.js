import React, {PropTypes} from 'react';
let moment = require('moment');
require("moment-duration-format");

const Flight = ({route, nights, timeToDestination}) => {
  let image = 'https://images.kiwi.com/airlines/32/' + route.airline + '.png';
  return (
    <div className="row">
      <div className={nights > 0 ? "col-md-3 text-center dottedLineBtm" : "col-md-3 text-center"}>
        <div className="row">
          <div className="col-md-4">
            <img src={image} className="logo rounded mx-auto d-block"/>
          </div>
          <div className="col-md-8 text-left">
            <small>{route.airlineName}</small>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <span className="mb-0 d-block flightTime">
          {route.dTimeFriendly} -  {route.aTimeFriendly}
          <br /><small>{moment.unix(route.dTime, "seconds").format("ddd DD MMM")}</small></span>
        <span className={nights > 0 ? "flightNights" : "hide"}><i>{nights} nights in {route.cityTo}</i></span>
      </div>
      <div className={nights > 0 ? "col-md-5 dottedLineBtm" : "col-md-5"}>
        <span className="mb-0 d-block flightTime">{moment.duration(timeToDestination, "seconds").format("H.mm")} hrs
        <br /><small>{route.cityFrom} ({route.flyFrom}) <i className="fa fa-long-arrow-right"></i> {route.cityTo} ({route.flyTo})</small></span>
      </div>
    </div>
  );
};

Flight.propTypes = {
  route: PropTypes.object.isRequired,
  nights: PropTypes.number.isRequired,
  timeToDestination: PropTypes.number.isRequired
};

export default Flight;
