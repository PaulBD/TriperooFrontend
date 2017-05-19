import React from 'react';
import {Link} from 'react-router';
import SocialButtons from "../../components/content/static/socialButtons";
import Destinations from '../../components/content/dynamic/destinations';
import FacebookSignup from '../../components/customer/authentication/facebookSignup';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

// Since this component is simple and static, there's no parent container for it.
export default class AboutPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'About Triperoo';
  }

  render(){
    let style = {
      backgroundImage: 'url(/static/img/about.jpg)'
    };


    return (
      <div>
        <div className="bg-holder full text-xs-center text-white infoPageWrapper">
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
            <div className="col-md-6">
              <h2 className="title">Triperoo's mission is to help people explore, plan and book vacation's.</h2>
              <p>We want to distrupt the travel space by helping our customers explore the world
              and using that knowledge to earn commission by recommending other users on where to visit.</p>

              <p>We also believe that
              being able to plan and book your trip without any stress is important as using our unique technology so
              we try and recommend useful products that you may need during your trip. On top of that, before you
              get to your destination and whilst your there, we help you plan activities to help you get the best
              out of your trip.</p>
              <p><SocialButtons /></p>
            </div>
            <div className="col-md-6">
              <Destinations destinationCount={9}  />
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
