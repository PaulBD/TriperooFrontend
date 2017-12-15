import React, {PropTypes} from 'react';
let moment = require('moment');
require("moment-duration-format");

const Flight = ({routeList, nights, timeToDestination, fromLocation, fromCode, toLocation, toCode}) => {

  if (routeList != null && routeList != undefined) {
    let airlines = routeList.map((route, index) => {
      return route.airlineName;
    });

    let time = moment.duration(timeToDestination, "seconds").format("H.mm").toString();


    return (
      <div className="row">
        <div
          className={nights > 0 ? routeList.length == 1 ? "col-md-3 text-center dottedLineBtm" : "col-md-3 text-center dottedLineBtm sml" : "col-md-3 text-center"}>
          <div className="row">
            <div className="col-md-12 text-left">
              {
                routeList.map((route, index) => {
                  let img = 'https://images.kiwi.com/airlines/32/' + route.airline + '.png';
                  return (<img src={img} className="logo sml rounded mx-auto d-block" key={index}/>);
                })
              }
            </div>
            <div className="col-md-12 text-left">
              <small>{routeList.length == 1 ? airlines.toString() : airlines.toString().substring(0, 20) + '...'}</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <span className="mb-0 d-block flightTime">
          {moment.unix(routeList[0].dTime, "seconds").format("HH.mm")} - {moment.unix(routeList[routeList.length - 1].aTime, "seconds").format("HH.mm")}
          <br /><small>{moment.unix(routeList[0].dTime, "seconds").format("ddd DD MMM")}</small></span>
          <span className={nights > 0 ? "flightNights" : "hide"}><i>{nights} nights in {toLocation}</i></span>
        </div>
        <div className={nights > 0 ? "col-md-5 dottedLineBtm" : "col-md-5"}>
        <span className="mb-0 d-block flightTime">{time.split(".")[0]}h {time.split(".")[1]}m
        <br /><small>{fromLocation} ({fromCode}) {routeList.length == 1 ? <i className="fa fa-long-arrow-right"></i> :
            <span><i className="fa fa-long-arrow-right"></i> <i
              className="fa fa-long-arrow-right"></i></span>} {toLocation} ({toCode})</small></span>
        </div>
      </div>
    );
  }
  else {
    return null;
  }
};

Flight.propTypes = {
  routeList: PropTypes.array.isRequired,
  toLocation: PropTypes.string.isRequired,
  fromLocation: PropTypes.string.isRequired,
  toCode: PropTypes.string.isRequired,
  fromCode: PropTypes.string.isRequired,
  nights: PropTypes.number.isRequired,
  timeToDestination: PropTypes.number.isRequired
};

export default Flight;
