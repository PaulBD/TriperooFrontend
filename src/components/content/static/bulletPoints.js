import React from "react";

const BulletPoints = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <a href="#" data-toggle="modal" data-target="#signupModel">
          <div className="mb30 thumb"><i
            className="fa fa-users box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
            <div className="thumb-caption">
              <h4 className="thumb-title">Ask Questions</h4>
              <p className="thumb-desc">Get travel advisor from people who've been there!</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-md-3">
        <a href="/hotels">
          <div className="mb30 thumb"><i
            className="fa fa-bed box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
            <div className="thumb-caption">
              <h4 className="thumb-title">500,000 Hotels</h4>
              <p className="thumb-desc">Search from our huge selection of hotels worldwide</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-md-3">
        <a href="/flights">
          <div className="mb30 thumb"><i
            className="fa fa-plane box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
            <div className="thumb-caption">
              <h4 className="thumb-title">Low Cost Flights</h4>
              <p className="thumb-desc">The cheapest flights to get you to your destination</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-md-3">
        <a href="/travel-extras/car-hire">
          <div className="mb30 thumb"><i
            className="fa fa-car box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
            <div className="thumb-caption">
              <h4 className="thumb-title">Best Car Hire</h4>
              <p className="thumb-desc">Thousands of destinations to get the best car hire</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BulletPoints;
