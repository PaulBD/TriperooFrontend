import React from "react";

const AirportHotelBulletPoints = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h4>Airport hotels from only £37, or £67.50 including 8 days parking</h4>
        <p>Book one of our airport hotels and you can forget the rushing, the
          traffic jams and the time-keeping stresses. Enjoy a leisurely journey
          the day before your flight, then relax in the evening before a peaceful
          night's sleep. Save up to 40% with Holiday Extras and wake up knowing
          you're only minutes from the terminal, then take your time to enjoy a
          hearty breakfast before you make your way to the airport.</p>

        <p>A whopping 1.2 million travellers have booked a hotel with us in the past two years. Our
          airport hotels received an average rating of 88% from 264,031 customer reviews.</p>
        <p><a href="/travel-extras">Back to Travel Extras</a></p>
      </div>
      <div className="col-md-6">
        <div className="col-md-12">
          <div className="mb30 thumb"><i className="fa fa-question box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
            <div className="thumb-caption">
              <h4 className="thumb-title">Why Book With Us?</h4>
              <p className="thumb-desc">Compare hotel offers in 27 UK hotels  to save upto 45% off standard room prices. No matter what the budget we will have the right hotel for you. </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb30 thumb"><i className="fa fa-money box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
            <div className="thumb-caption">
              <h4 className="thumb-title">Up-To-Date Pricing & Availability</h4>
              <p className="thumb-desc">We compare 27 UK airports to get you the best hotel deal working with big-name
                intermediaries and partners such as AA, British Airways, Saga Holidays and easyJet. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportHotelBulletPoints;
