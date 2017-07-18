import React from 'react';
import {Link} from 'react-router';
import SocialButtons from "../../components/content/static/socialButtons";

const PrivacyPage = () => {

    window.scrollTo(0, 0);
    document.title = 'Privacy Policy';

    let style = {
      backgroundImage: 'url(/static/img/north-wales.jpg)'
    };


    return (
      <div>
        <div className="bg-holder full text-center text-white infoPageWrapper">
            <div className="bg-mask"></div>
            <div style={style} className="bg-img infoImg" ></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">Privacy Policy</h1>
                </div>
            </div>
        </div>
      <div className="container">
        <div className="row row-wrap">
            <div className="gap gap-small"></div>
            <div className="col-md-12">
              <h2 className="title">We Take Your Security Very Seriously</h2>
              <p>We understand that making purchases online involves your trust. Retaining your trust is a
              responsibility that we take very seriously. We are committed to safeguarding the privacy of our
              website visitors; this policy sets out how we will treat your personal information.</p>

              <p>By disclosing your personal information to us by using our website or over the telephone, you consent to the
              collection, storage and processing of your personal information as stated in this policy.</p>

              <p>The personal information that we collect from you shall be obtained, processed and transmitted in
              compliance with applicable data protection legislation. Since our servers are located in the United Kingdom,
              the personal information that we collect from you shall be obtained, processed and transmitted in
              compliance with European Directives 95/46 and 2002/58, as well as any other such legislation that
              replaces, substitutes, complements and develops it such as the Data Protection Act 1998 from the United Kingdom.</p>

              <p>"Personal Information" means information that relates to a living individual who can be identified
              from that information or from that information together with other information which is held by or
              is likely to be held by us.</p>

              <h5>What we collect</h5>

              <p>We may collect the following information:</p>
              <ul>
                <li>Information that you provide by filling in forms or surveys</li>
                <li>Records of correspondence</li>
                <li>Details of transactions</li>
                <li>Details of your visits (to our websites and Apps)</li>
                <li>Where we collect data that may be shared with third parties, we will explicitly say
              so and provide an opportunity for you to exclude your data from being shared.</li>
              </ul>

              <h5>What we do with the information we gather</h5>

              <p>We require this information to understand your needs and provide you with a better service,
              and in particular for the following reasons:</p>
              <ul>
                <li>Internal record keeping.</li>
                <li>To notify you about changes to our service.</li>
                <li>To carry out our obligations regarding any contracts between you and Triperoo.</li>
                <li>To improve our products and services.</li>
                <li>We may periodically send promotional emails about new products, special offers or other
                information which we think you may find interesting using the email address which you have provided.</li>
                <li>Aggregated information about our users is used to generate reader profiles that help advertisers and
                sponsors to reach their target audiences.</li>
                <li>We may disclose your personal information to third parties to comply with any legal obligation.</li>
                <li>If Triperoo should be acquired, your personal information will be transferred to the acquiring party.</li>
              </ul>
              <h5>Security</h5>
              <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized
              access or disclosure, we have put in place suitable physical, electronic and managerial procedures
              to safeguard and secure the information we collect online.</p>
              <h5>How we use cookies</h5>
              <p>A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once
              you agree, the file is added and the cookie helps analyze web traffic or lets you know when you
              visit a particular site or App. Cookies allow web applications to respond to you as an individual.
              The web application can tailor its operations to your needs, likes and dislikes by gathering and
              remembering information about your preferences.</p>

              <p>We might use traffic log cookies to identify which pages are being used. This helps us
              analyze data about page traffic and improve our websites and Apps in order to tailor it to
              customer needs. We only use this information for statistical analysis purposes and then the
              data is removed from the system.</p>

              <p>Overall, cookies help us provide you with a better websites and Apps, by enabling us to
              monitor which pages you find useful and which you do not. A cookie in no way gives us access to
              your computer or any information about you, other than the data you choose to share with us.</p>

              <p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but
              you can usually modify your browser setting to decline cookies if you prefer.</p>

              <h5>Links to other websites</h5>
              <p>Our websites or Apps may contain links to other websites of interest. However, once you have
              used these links to leave our site, you should note that we do not have any control over that
              other website. Therefore, we cannot be responsible for the protection and privacy of any
              information which you provide whilst visiting such sites and such sites are not governed by
              this privacy statement. You should exercise caution and look at the privacy statement
              applicable to the website in question.</p>

              <h5>Controlling your personal information</h5>
              <p>We will not use your information for direct marketing purposes by third parties. However, you
              might receive information and offers through our newsletter. If you do not want to receive our
              newsletter, you can opt out by emailing us at data@triperoo.co.uk.</p>

              <p>If you have previously agreed to us using your personal information for direct marketing
              purposes, you may change your mind at any time by writing to or emailing us at data@triperoo.co.uk.</p>

              <h5>Access to your information</h5>
              <p>You may request details of personal information which we hold about you under the Data
              Protection Act. A small fee will be payable. If you would like a copy of the information
              held on you please write to Triperoo, 3 Lion Court, Chester CH4 0GN.</p>

              <h5>Contact</h5>

              <p>Questions, comments and requests regarding this privacy policy should be addressed to
              feedback@triperoo.co.uk.</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PrivacyPage;
