import React, {PropTypes} from 'react';
import Flight from './flight';
import FlightDetail from './flightDetail';

const FlightCard = ({quote, currency, position}) => {

  let name = 'detail_' + position;
  let hashedName = '#' + name;

  return (
    <div className="mb-3" key={quote.id}>
      <div className="col-md-12 flightWrapper">
        <div className="row">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-2 text-center flightPrice">
                {currency}{quote.price.toFixed(2)}
              </div>
              <div className="col-md-10">
                <Flight route={quote.route[0]} nights={quote.nightsInDest} timeToDestination={quote.duration.departure} />
                <Flight route={quote.route[1]} nights={0}  timeToDestination={quote.duration.return}/>
              </div>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <a href={quote.deep_link} target="_blank" className="btn btn-secondary btnSearch"><small>BOOK FOR</small><br />{currency}{quote.price.toFixed(2)}</a>
            <br /><br />
            <a href={hashedName} data-toggle="collapse" aria-expanded="false" aria-controls={name}><small>Show Flight Details <i className="fa fa-info-circle"></i></small></a>
          </div>
        </div>
      </div>
      <div className="collapse flightDetails" id={name}>
        <div className="row">
          <FlightDetail route={quote.route[0]} duration={quote.duration.departure} title="Departure" />
          <div className="col-md-2 hide">
            <span className="flightSeperator"></span>
          </div>
          <FlightDetail route={quote.route[1]} duration={quote.duration.return} title="Return" />
        </div>
      </div>
    </div>
  );
};

FlightCard.propTypes = {
  quote: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired
};

export default FlightCard;
