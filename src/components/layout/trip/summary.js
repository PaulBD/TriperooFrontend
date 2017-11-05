import React, {PropTypes} from 'react';
import Summary from '../../layout/location/summary';
import TagList from '../../forms/common/tagList';
var changeCase = require('change-case');

const TripSummary = ({location, trip}) => {

  let highlightA = '';
  let highlightB = '';
  let highlightC = '';
  let highlightD = '';
  let activitiesBlock = '';


  let attractionsUrl = trip.tripDetails.regionUrl + '/attractions';
  let hotelUrl = trip.tripDetails.regionUrl + '/hotels';
  let foodUrl = trip.tripDetails.regionUrl + '/restaurants';

  if (trip.days.length > 0)
  {
    highlightA = (
      <div className="col-md-3">
        <a className="hover-img activityBg" href={trip.days[0].url}>
          <img src={trip.days[0].image} />
          <div className="hover-inner">
            <h5>{trip.days[0].regionName}</h5>
            <p>{changeCase.upperCaseFirst(trip.days[0].type)}</p>
          </div>
        </a>
      </div>
    );
  }

  if (trip.days.length > 1)
  {
    highlightB = (
      <div className="col-md-3">
        <a className="hover-img activityBg" href={trip.days[1].url}>
          <img src={trip.days[1].image} />
          <div className="hover-inner">
            <h5>{trip.days[1].regionName}</h5>
            <p>{changeCase.upperCaseFirst(trip.days[1].type)}</p>
          </div>
        </a>
      </div>
    );
  }

  if (trip.days.length > 2)
  {
    highlightC = (
      <div className="col-md-3">
        <a className="hover-img activityBg" href={trip.days[2].url}>
          <img src={trip.days[2].image} />
          <div className="hover-inner">
            <h5>{trip.days[2].regionName}</h5>
            <p>{changeCase.upperCaseFirst(trip.days[2].type)}</p>
          </div>
        </a>
      </div>
    );
  }

  if (trip.days.length > 3)
  {
    highlightD = (
      <div className="col-md-3">
        <a className="hover-img activityBg" href={trip.days[3].url}>
          <img src={trip.days[3].image} />
          <div className="hover-inner">
            <h5>{trip.days[3].regionName}</h5>
            <p>{changeCase.upperCaseFirst(trip.days[3].type)}</p>
          </div>
        </a>
      </div>
    );
  }

  if (trip.days.length < 4)
  {
    activitiesBlock = (
      <div className="col-md-3">
        <a href={attractionsUrl}>
          <div className="card card-inverse inverseBg  activityBg">
            <div className="card-block">
              <h4 className="card-title">Add More Attractions</h4>
              <p className="card-text">Discover more things to do in {location.regionName}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <h5 className="mb-2">Overview</h5>
            <hr className="pageTitle"/>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-5">
                <img src={trip.tripDetails.image} />
              </div>
              <div className="col-md-7">
                <Summary location={location} showMap={false} />
                <p className={trip.tripDetails.tags.length > 0 ? "" : "hide"}><strong>Things to do in {location.regionName}</strong><br />
                  <TagList tags={trip.tripDetails.tags} maxTags={5} /></p>
                <div className="row">
                  <div className="col-md-6">
                    <p><strong>Accommodation</strong><br />
                      Get expert advice on where to stay in {location.regionName}.<br />
                      <a href={hotelUrl}>Find places to stay »</a></p>
                  </div>
                  <div className="col-md-6">
                    <p><strong>Where To Eat</strong><br />
                      See where to eat in {location.regionName}.<br />
                      <a href={foodUrl}>Find places to eat »</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className={trip.days ? trip.days.length > 0 ? "row" : "hide" : "hide"}>
              <div className="col-md-12">
                <hr />
                <h5 className="mb-2">Highlights From Your Plan</h5>
                <hr className="pageTitle"/>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      {highlightA}
                      {highlightB}
                      {highlightC}
                      {highlightD}
                      {activitiesBlock}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <hr />
                <a href={attractionsUrl} className="btn btn-primary"><i className="fa fa-plus" /> Add Attractions</a>&nbsp;
                <a href={foodUrl} className="btn btn-primary"><i className="fa fa-plus" /> Add Places to Eat</a>&nbsp;
                <a href={hotelUrl} className="btn btn-primary"><i className="fa fa-plus" /> Add a Place to Stay</a>
              </div>
            </div>
            <div className="gap gap-small"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

TripSummary.propTypes = {
  location: PropTypes.object.isRequired,
  trip: PropTypes.object.isRequired,
  addActivities: PropTypes.func.isRequired
};

export default TripSummary;
