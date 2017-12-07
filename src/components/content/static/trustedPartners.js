import React from "react";

const TrustedPartners = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-xs-12 text-sm-left hidden-md-down">
        <h5 className="trustedPartner">Trusted Providers</h5>
        <img src="/static/img/expedia.png" className="partners"/>
        <img src="/static/img/kiwi.png" className="partners"/>
        <img src="/static/img/holidayextras.png" className="partners"/>
        <img src="/static/img/wikipedia.png" className="partners"/>
      </div>
      <div className="col-md-6 text-sm-right hidden-md-down">
        <h5 className="trustedPartner">Secure Payment Providers</h5>
        <img src="/static/img/payment/maestro-straight-64px.png" className="cards"/>
        <img src="/static/img/payment/visa-straight-64px.png" className="cards"/>
        <img src="/static/img/payment/mastercard-straight-64px.png" className="cards"/>
        <img src="/static/img/payment/visa-electron-straight-64px.png" className="cards"/>
        <img src="/static/img/payment/solo-straight-64px.png" className="cards"/>
      </div>

      <div className="col-md-6 col-xs-12 text-sm-center hidden-md-up">
        <h5 className="trustedPartner">Trusted Providers</h5>
        <img src="/static/img/expedia.png" className="partners"/>
        <img src="/static/img/skyscanner.png" className="partners"/>
        <img src="/static/img/holidayextras.png" className="partners"/>
        <img src="/static/img/wikipedia.png" className="partners"/>
      </div>
      <div className="col-md-6 text-sm-center hidden-md-up">
        <div className="gap"></div>
        <h5 className="trustedPartner">Secure Payment Providers</h5>
        <img src="/static/img/payment/maestro-straight-64px.png" className="cardsLast"/>
        <img src="/static/img/payment/visa-straight-64px.png" className="cards"/>
        <img src="/static/img/payment/mastercard-straight-64px.png" className="cards"/>
        <img src="/static/img/payment/visa-electron-straight-64px.png" className="cards"/>
        <img src="/static/img/payment/solo-straight-64px.png" className="cards"/>
      </div>
    </div>
  );
};

export default TrustedPartners;
