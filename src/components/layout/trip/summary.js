import React, {PropTypes} from 'react';
import Summary from '../../layout/location/summary';
import TagList from '../../forms/common/tagList';
var changeCase = require('change-case')

const TripSummary = ({location, trip}) => {

  let highlightA = '';
  let highlightB = '';
  let highlightC = '';
  let activitiesBlock = '';


  let attractionsUrl = trip.tripDetails.regionUrl + '/attractions';
  let hotelUrl = trip.tripDetails.regionUrl + '/hotels';
  let foodUrl = trip.tripDetails.regionUrl + '/restaurants';

  if (trip.days.length > 0)
  {
    let styleA = {
      backgroundImage: 'url(' + trip.days[0].image + ')'
    };

    highlightA = (
      <div className="col-md-4">
        <div className="card card-inverse inverseBg activityBg" style={styleA}>
          <div className="card-block">
            <h4 className="card-title">{trip.days[0].regionName}</h4>
            <p className="card-text">{changeCase.upperCaseFirst(trip.days[0].type)}</p>
            <a href={trip.days[0].url} className="btn btn-primary">View</a>
          </div>
        </div>
      </div>
    );
  }

  if (trip.days.length > 1)
  {
    console.log(trip.days[1]);

    let styleB = {
      backgroundImage: 'url(' + trip.days[1].image + ')'
    };

    highlightB = (
      <div className="col-md-4">
        <div className="card card-inverse inverseBg activityBg" style={styleB}>
          <div className="card-block">
            <h4 className="card-title">{trip.days[1].regionName}</h4>
            <p className="card-text">{changeCase.upperCaseFirst(trip.days[1].type)}</p>
            <a href={trip.days[1].url} className="btn btn-primary">View</a>
          </div>
        </div>
      </div>
    );
  }

  if (trip.days.length > 2)
  {
    let styleC = {
      backgroundImage: 'url(' + trip.days[2].image + ')'
    };
    highlightC = (
      <div className="col-md-4">
        <div className="card card-inverse inverseBg activityBg" style={styleC}>
          <div className="card-block">
            <h4 className="card-title">{trip.days[2].regionName}</h4>
            <p className="card-text">{changeCase.upperCaseFirst(trip.days[2].type)}</p>
            <a href={trip.days[2].url} className="btn btn-primary">View</a>
          </div>
        </div>
      </div>
    );
  }

  if (trip.days.length < 3)
  {
    activitiesBlock = (
      <div className="col-md-4">
        <div className="card card-inverse inverseBg">
          <div className="card-block">
            <h4 className="card-title">Add More Attractions</h4>
            <p className="card-text">Discover more things to do in {location.regionName}</p>
            <a href={attractionsUrl} className="btn btn-primary">View</a>
          </div>
        </div>
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
                      {activitiesBlock}
                    </div>
                  </div>
                </div>
                <div className="gap gap-small"></div>
              </div>
            </div>
            <div className={trip.days ? trip.days.length == 0 ? "row" : "hide" : "hide"}>
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
