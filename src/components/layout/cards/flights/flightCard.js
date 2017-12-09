import React, {PropTypes} from 'react';
import Flight from './flight';
import FlightDetail from './flightDetail';
let moment = require('moment');
require("moment-duration-format");

const FlightCard = ({quote, currency, position, journeyType}) => {

  let name = 'detail_' + position;
  let hashedName = '#' + name;
  let currencySml = "£";

  if (currency != "GBP")
  {
    currencySml = currency;
  }

  let departureTime = moment.duration(quote.duration.departure, "seconds").format("H.mm").toString();
  let returnTime;

  let returnTrip;
  let returnTripDetail;
  if (journeyType == 'round')
  {
    returnTime = moment.duration(quote.duration.return, "seconds").format("H.mm").toString();
    returnTrip = (<Flight routeList={quote.inboundRoutes} nights={0} fromLocation={quote.cityTo} fromCode={quote.flyTo} toLocation={quote.cityFrom} toCode={quote.flyFrom} timeToDestination={quote.duration.return} />);

    returnTripDetail = (
      <div className="col-md-6">
        <h5>Return <small>{returnTime.split(".")[0]}h {returnTime.split(".")[1]}m</small></h5>
        {
          quote.inboundRoutes.map((route, index) => {
            return (<FlightDetail route={route} isLast={quote.inboundRoutes.length == (index + 1)} key={index} />);
          })
        }
      </div>
    );
  }
  else {
    returnTripDetail = (<div className="col-md-6">&nbsp;</div>);
  }

  return (
    <div className="mb-3" key={quote.id}>
      <div className="col-md-12 flightWrapper">
        <div className="row">
          <div className="col-md-10">
            <div className="row">
              <div className={journeyType == 'round' ? "col-md-2 text-center flightPrice" : "col-md-2 text-center flightPrice single"}>
                {currencySml}{quote.price.toFixed(2)}
              </div>
              <div className="col-md-10">
                <Flight routeList={quote.outboundRoutes} nights={quote.nightsInDest}  toLocation={quote.cityTo} toCode={quote.flyTo} fromLocation={quote.cityFrom} fromCode={quote.flyFrom} timeToDestination={quote.duration.departure}/>
                {returnTrip}
              </div>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <a href={quote.deep_link} target="_blank" className="btn btn-secondary btnSearch"><small>BOOK FOR</small><span>{currencySml}{quote.price.toFixed(2)}</span></a>

            <a href={hashedName} data-toggle="collapse" aria-expanded="false" aria-controls={name}><small>Show Flight Details <i className="fa fa-info-circle"></i></small></a>
          </div>
        </div>
      </div>
      <div className="collapse flightDetails" id={name}>
        <div className="row">
          <div className="col-md-6">
            <h5>Departure <small>Duration: {departureTime.split(".")[0]}h {departureTime.split(".")[1]}m</small></h5>
            {
              quote.outboundRoutes.map((route, index) => {
                return (<FlightDetail route={route} isLast={quote.outboundRoutes.length == (index + 1)} key={index} />);
              })
            }
          </div>
          <div className="col-md-2 hide">
            <span className="flightSeperator"></span>
          </div>
          {returnTripDetail}
        </div>
      </div>
    </div>
  );
};

FlightCard.propTypes = {
  quote: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  journeyType: PropTypes.string.isRequired
};

export default FlightCard;
