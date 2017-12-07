import React from 'react';
import SocialButtons from "../../components/content/static/socialButtons";
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

const AboutPage = () => {

    window.scrollTo(0, 0);
    document.title = 'About Triperoo';

    let style = {
      backgroundImage: 'url(/static/img/about6.jpg)',
      backgroundPosition: 'bottom'
    };

    return (

      <div>
        <div className="bg-holder full text-center text-white infoPageWrapper">
            <div className="bg-mask"></div>
            <div style={style} className="bg-img infoImg" ></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">About Us</h1>
                </div>
            </div>
        </div>
      <div className="container">
        <div className="row row-wrap">
            <div className="gap gap-small"></div>
            <div className="col-md-12 text-center">
              <h2 className="title">Triperoo's mission is to help travellers explore the world.</h2>

              <p>We believe that
              being able to plan and book your trip without any stress is important. We have partnered with many travel companies
                to do the hard work for you and using our unique technology, we try and recommend useful products that you may
                need during your trip. On top of that, before you
              get to your destination and whilst your there, we help you plan activities to help you get the best
              out of your vacation.</p>
              <p className="text-center"><SocialButtons /></p>
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

export default AboutPage;

