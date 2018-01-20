import React, {PropTypes} from 'react';
let moment = require('moment');
require("moment-duration-format");

const FlightDetail = ({route, isLast}) => {

  if (route != null && route != undefined) {

    let image = 'https://images.kiwi.com/airlines/32/' + route.airline + '.png';

    return (
      <div className="row">
        <div className="col-12 col-md-12">
          <div className="row">
            <div className="col-2 col-md-1">
              <i className="fa fa-circle"></i>
            </div>
            <div className="col-10 col-md-11 flightDetailLineBtm">
              <span
                className="text-small"><strong>{moment.unix(route.dTime, "seconds").format("ddd DD MMM")}</strong></span>
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-md-1">
              <span className="Part"></span>
            </div>
            <div className="col-10 col-md-10">
              <div className="row">
                <div className="col-6 col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                      <small>
                        <strong>{moment.unix(route.dTime, "seconds").format("HH.mm")}</strong> {route.cityFrom}
                        ({route.flyFrom})
                      </small>
                    </div>
                    <div className="col-md-12">
                      <small>
                        <strong>{moment.unix(route.aTime, "seconds").format("HH.mm")}</strong> {route.cityTo}
                        ({route.flyTo})
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <small>
                    <img src={image} className="smallFlightLogo"/>
                    {route.airlineName ? route.airlineName : route.airline} <br />
                    <i className="fa fa-info-circle"></i> Flight Number: {route.flight_no}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className={isLast ? "row" : "hide"}>
            <div className="col-2 col-md-1">
              <i className="fa fa-circle"></i>
            </div>
            <div className="col-10 col-md-11">&nbsp;</div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return null;
  }
};

FlightDetail.propTypes = {
  route: PropTypes.object.isRequired,
  isLast: PropTypes.bool.isRequired
};

export default FlightDetail;
