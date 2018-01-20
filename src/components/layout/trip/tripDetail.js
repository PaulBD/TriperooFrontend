import React, {PropTypes} from 'react';
let changeCase = require('change-case');
let moment = require('moment');

const TripDetail = ({tripId, day, openMap, removeActivity}) => {

  let activityList = '';
  if ((day.activitiesCount > 0 || day.restaurantCount > 0) && day.activities.length > 0)
  {
    activityList = day.activities.map((day, index)=> {

      let leftAlign = index % 2 ? false : true;

      let newDay = null;

      if (index == 0)
      {
        newDay = (
          <div className="col-md-12">
            <a name={moment(day.date).format("YYYY-MM-DD")}></a>
            <h4>{moment(day.date).format("MMMM Do YYYY")}</h4>
          </div>
        );
      }

      return (
        <article key={index}>
          <div className={newDay ? "row timelineTitle" : "hide"}>
            {newDay}
          </div>
          <div className={leftAlign ? "timeline-entry left-aligned " : "timeline-entry"}>
            <div className="timeline-entry-inner">
              <time className="timeline-time"><span>{changeCase.sentenceCase(day.regionType)}</span>
                <span>{moment(day.date).format("MMMM Do YYYY")}</span></time>
              <div className="timeline-icon">
                <small>{changeCase.upperCase(day.startTimePeriod)}</small>
              </div>
              <div className="timeline-label">
                <div className="row">
                  <div className={leftAlign ? "col-md-5" : "hide"}>
                    <img src={day.image}/>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12">
                        <h2><span className="float-right"><a href="#" onClick={removeActivity} data-tripId={tripId} data-activityId={day.regionID}>
                          <i className="fa fa-trash" data-tripId={tripId} data-activityId={day.regionID}/></a></span><a href={day.url}>{day.regionName}</a></h2>
                        <h4 class="mb-2">{day.activityType == 'Point of Interest Shadow' ? 'Activity' : day.activityType == 'Attractions' ? 'Attraction' : day.activityType} : {changeCase.sentenceCase(day.regionType)}</h4>
                        <p className={day.latitude == 0 && day.longitude == 0 ? "hide" : ""}><i className="fa fa-map-marker"/> {day.address} &nbsp;
                          <a href="#" onClick={openMap} data-longitude={day.longitude} data-name={day.regionName}
                             data-subclass={day.type} data-url={day.url} data-image={day.image}
                             data-latitude={day.latitude}
                             className={day.latitude == 0 && day.longitude == 0 ? "hide" : ""}>View Map</a></p>
                      </div>
                    </div>
                    <div className="gap gap-mini"></div>
                    <div className="row">
                      <div className={day.price ? 'col-6 col-md-6 mb-3' : 'hide'}>
                        <p ><strong>Price:</strong><br />{day.price} GBP</p>
                      </div>
                      <div className={day.length ? 'col-6   col-md-6 mb-3' : 'hide'}>
                        <p><strong>Length:</strong><br />{day.length} minutes</p>
                      </div>
                    </div>
                  </div>
                  <div className={leftAlign ? "hide" : "col-md-5"}>
                    <img src={day.image}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    });
  }
  else {
    activityList = null;
  }

  return (<div>{activityList}</div>);
};

TripDetail.propTypes = {
  tripId: PropTypes.number.isRequired,
  day: PropTypes.object.isRequired,
  openMap: PropTypes.func.isRequired,
  removeActivity: PropTypes.func.isRequired
};

export default TripDetail;
