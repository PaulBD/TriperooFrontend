import React from 'react';
import {Link} from 'react-router';
import SocialButtons from "../../components/common/socialButtons";
import FeatureLocations from '../../components/locations/featureLocationssml';
import FacebookSignup from '../../components/common/facebookSignup';
import BulletPoints from '../../components/common/bulletPoints';
import TrustedPartners from '../../components/common/trustedPartners';

// Since this component is simple and static, there's no parent container for it.
export default class SupportPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Support';
  }
  
  render(){
    let style = {
      backgroundImage: 'url(/static/img/north-wales.jpg)'
    };


    return (
      <div>
        <div className="bg-holder full text-xs-center text-white infoPageWrapper">
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
              are handled direclty by LateRooms.com  or SkyScanner.com, providing dedicated, 24/7 service to 
              Triperoo clients.  </p>
              <h5>LateRooms.com Customer Service</h5>
              <p>For questions related to your LateRooms.com booking, please see your confirmation email. You 
              can use the self-service tool provided in the email through the link “Manage your booking online” to 
              cancel your booking. To make changes to your booking, please use the customer service 
              number below. Lines are open 24 hours, 7 days a week.</p>
              <p>0333 0143 701</p>
              <p><a href="http://www.laterooms.com" target="_blank">www.laterooms.com</a></p>
              <h5>SkyScanner.com </h5>
              <p>For any customer support questions related to a flight booking, these will be handled directly with the company 
              you booked your flight with.</p>
              <p><a href="http://www.skyscanner.com" target="_blank">www.skyscanner.com</a></p>
            </div>
            <div className="col-md-5">
              <FeatureLocations />
            </div>
          </div>
        </div>
        <div className="container">
            <hr />
            <div className="gap"></div>
            <BulletPoints />
            <div className="gap gap-small"></div>
            <hr />
            <div className="gap"></div>
            <FacebookSignup />
            <div className="gap"></div>
            <hr />
            <TrustedPartners />
            <div className="gap"></div>
        </div>
      </div>
      );
   }
}