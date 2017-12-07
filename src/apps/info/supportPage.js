import React from 'react';
import Destinations from '../../components/content/dynamic/destinations';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

const SupportPage = () => {

    window.scrollTo(0, 0);
    document.title = 'Support';

    let style = {
      backgroundImage: 'url(/static/img/contact-us.jpg)'
    };

    return (
      <div>
        <div className="bg-holder full text-center text-white infoPageWrapper">
            <div className="bg-mask"></div>
            <div style={style} className="bg-img infoImg" ></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">Support</h1>
                </div>
            </div>
        </div>
      <div className="container">
        <div className="row row-wrap">
            <div className="gap gap-small"></div>
            <div className="col-md-7">
              <p>For any customer support questions related to your booking, these
              are handled direclty by Expedia.com, Kiwi.com or HolidayExtras.  </p>
              <h5>Expedia.com Customer Service</h5>
              <p>For questions related to your Expedia.com booking, please see your confirmation email. You
              can use the self-service tool provided in the email through the link “Manage your booking online” to
              cancel your booking. To make changes to your booking, please use the customer service
              number below. Lines are open 24 hours, 7 days a week.</p>
              <p>+44 20 3024 8211</p>
              <p><a href="http://www.expedia.com" target="_blank">www.expedia.com</a></p>
              <h5>Kiwi.com </h5>
              <p>For any customer support questions related to a flight booking, these will be handled directly with the company
              you booked your flight with.</p>
              <p>+44 20 3808 5910</p>
              <p><a href="http://www.kiwi.com" target="_blank">www.kiwi.com</a></p>
              <h5>HolidayExtras.com </h5>
              <p>For any customer support questions related to a airport transfers, airport lounge or airport hotels, please use the customer service number below.</p>
              <p>0871 360 1051</p>
              <p><a href="http://www.holidayextras.com" target="_blank">www.holidayextras.com</a></p>
            </div>
            <div className="col-md-5">
              <Destinations locationCount={6} cssClass="col-md-6"  />
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="gap gap-mini"></div>
          <BulletPoints />
          <div className="gap gap-mini"></div>
          <FacebookSignup />
          <TrustedPartners />
          <div className="gap gap-mini"></div>
        </div>
      </div>
    );
  };

  export default SupportPage;
