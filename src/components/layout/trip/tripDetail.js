import React, {PropTypes} from 'react';
var changeCase = require('change-case');
let moment = require('moment');

const TripDetail = ({day, leftAlign, openMap}) => {
  console.log(day);
  return (
    <article className={leftAlign ? "timeline-entry left-aligned" : "timeline-entry"}>
      <div className="timeline-entry-inner">
        <a name={moment(day.visitDate).format("YYYY-MM-DD")}></a>
        <time className="timeline-time" datetime="2014-01-10T03:45"><span>{changeCase.upperCase(day.startTimePeriod)}</span> <span>{day.visitDate}</span></time>
        <div className="timeline-icon">
          <i className="entypo-feather"></i>
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
