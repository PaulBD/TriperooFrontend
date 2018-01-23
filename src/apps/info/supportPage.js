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
              <p>For questions related to your Expedia.com hotel booking, please see your confirmation email. You
              can use the self-service tool provided in the email through the link “Manage your booking online” to
              cancel your booking. To make changes to your booking, please use the customer service
              number below. Lines are open 24 hours, 7 days a week.</p>
              <p><strong>Tel:</strong> +44 20 3024 8211</p>
              <p><a href="http://www.expedia.com" target="_blank">http://www.expedia.com</a><br />
                Click <a href="http://developer.ean.com/terms/en/" target="_blank">here</a> to read Expedia's terms & conditions</p>
              <h5>Kiwi.com </h5>
              <p>For any customer support questions related to a flight booking, these will be handled directly with the company
              you booked your flight with.</p>
              <p><strong>Tel:</strong> +44 20 3808 5910</p>
              <p><a href="http://www.kiwi.com" target="_blank">www.kiwi.com</a><br />
                Click <a href="https://www.kiwi.com/en/pages/content/legal" target="_blank">here</a> to read Kiwi's terms & conditions</p>
              <h5>Viator.com </h5>
              <p>For any customer support questions related to excursions, please use the customer service number below.</p>
              <p><strong>Tel:</strong> 0871 360 1051</p>
              <p><a href="http://www.viator.com" target="_blank">www.viator.com</a><br />
                Click <a href="http://www.holidayextras.co.uk/about-us/terms-and-conditions.html" target="_blank">here</a> to read Viators's terms & conditions</p>

              <h5>BookATable.co.uk </h5>
              <p>For any customer support questions related to restaurant bookings, please use the customer service number below.</p>
              <p><strong>Tel:</strong> 0871 360 1051</p>
              <p><a href="http://www.bookatable.co.uk" target="_blank">www.bookatable.co.uk</a><br />
                Click <a href="https://www.bookatable.co.uk/legal" target="_blank">here</a> to read BookATable's terms & conditions</p>

              <h5>HolidayExtras.com </h5>
              <p>For any customer support questions related to a airport transfers, airport lounge or airport hotels, please use the customer service number below.</p>
              <p><strong>Tel:</strong> 0871 360 1051</p>
              <p><a href="http://www.holidayextras.com" target="_blank">www.holidayextras.com</a><br />
                Click <a href="http://www.holidayextras.co.uk/about-us/terms-and-conditions.html" target="_blank">here</a> to read Holiday Extra's terms & conditions</p>
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
