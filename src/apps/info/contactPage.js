import React from 'react';
import {Link} from 'react-router';
import SocialButtons from "../../components/content/static/socialButtons";
import TopDestinations from '../../components/content/dynamic/topDestinations';
import FacebookSignup from '../../components/authentication/facebookSignup';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

// Since this component is simple and static, there's no parent container for it.
export default class ContactPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Contact Triperoo';
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
                    <h1 className="owl-cap-title fittext">Contact Us</h1>
                    <div className="owl-cap-price">
                      <small>feedback@triperoo.co.uk</small>
                    </div>
                </div>
            </div>
        </div>
      <div className="container">
        <div className="row row-wrap">
            <div className="gap gap-small"></div>
            <div className="col-md-7">
              <h2 className="title">Travel Inspires Us</h2>
              <p>Triperoo is based in the beautiful location of North Wales, just on the boarder of Chester. It is 
              an inspiring place to work if ever there was one.</p>

              <p>We have listed most questions you may have in our <Link to="faqs">FAQs</Link>.</p>
              <p>For any additional questions you can contact us directly at <a href="mailto:feedback@triperoo.co.uk">feedback@triperoo.co.uk</a>.</p>

              <p>Or contact us through our social networks:</p>
              <p><SocialButtons /></p>
            </div>
            <div className="col-md-5">
              <TopDestinations destinationCount={9}  />
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