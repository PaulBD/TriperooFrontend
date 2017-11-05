import React, {PropTypes} from 'react';
let changeCase = require('change-case');
let moment = require('moment');

const TripDetail = ({day, leftAlign, openMap}) => {
  return (
    <article className={leftAlign ? "timeline-entry left-aligned" : "timeline-entry"}>
      <div className="timeline-entry-inner">
        <a name={moment(day.visitDate).format("YYYY-MM-DD")}></a>
        <time className="timeline-time"><span>{changeCase.upperCase(day.startTimePeriod)}</span> <span>{moment(day.visitDate).format("MMMM Do YYYY")}</span></time>
        <div className="timeline-icon">
         <small>Day {day.day + 1}</small>
        </div>
        <div className="timeline-label">
          <div className="row">
            <div className={leftAlign ? "col-md-5" : "hide"}>
              <img src={day.image} />
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12">
                  <h2><a href={day.url}>{day.regionName}</a></h2>
                  <p><i className="fa fa-map-marker" /> {day.address} &nbsp;
                    <a href="#" onClick={openMap} data-longitude={day.longitude} data-name={day.regionName} data-subclass={day.type} data-url={day.url} data-image={day.image} data-latitude={day.latitude} className={day.latitude == 0 && day.longitude == 0 ? "hide" : ""}>View Map</a></p>
                </div>
              </div>
              <div className="gap gap-mini"></div>
              <div className="row">
                <div className="col-md-6">
                  <p><strong>Price:</strong><br />{day.price}</p>
                </div>
                <div className="col-md-6">
                  <p><strong>Length:</strong><br />{day.length}</p>
                </div>
              </div>
            </div>
            <div className={leftAlign ? "hide" : "col-md-5"}>
              <img src={day.image} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

TripDetail.propTypes = {
  day: PropTypes.object.isRequired,
  leftAlign: PropTypes.bool.isRequired,
  openMap: PropTypes.func.isRequired
};

export default TripDetail;
