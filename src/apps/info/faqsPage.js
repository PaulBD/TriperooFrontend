import React from 'react';
import {Link} from 'react-router';
import SocialButtons from "../../components/content/static/socialButtons";
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

// Since this component is simple and static, there's no parent container for it.
export default class FAQsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.state = { item: 'general' };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Frequently Asked Questions';
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ item: e.target.getAttribute('data-name') });
  }

  render(){
    let style = {
      backgroundImage: 'url(/static/img/north-wales.jpg)'
    };

    let answers = "";

    if (this.state.item == "general")
    {
      answers = (
        <div id="general" className="answers">
          <h3>General Answers</h3>
          <h5>What is Triperoo?</h5>
          <p>Triperoo is a platform that allows travellers to explore, plan and book trips worldwide. We want to disrupt the travel industry so we
           allow local experts to earn commission by recommending places to visit giving our travellers a local touch when planning there vacation.</p>
          <h5>What makes Triperoo so great?</h5>
          <p>Triperoo helps you explore, plan and book hotels and flights. At Triperoo you can ask a Local Expert, somebody
          who knows your destination inside out, for a personalized recommendation on where to stay. It is free, fast and fun.
          On top of that, we find you the lowest prices by partnering with LateRooms.com.</p>
          <h5>Is Triperoo free?</h5>
          <p>Yes, Triperoo is 100% free. There are no sign-up fees, no subscription fees, no booking fees, and no administration fees.</p>
          <h5>What's the difference between a Triperoo Agent and a Local Expert?</h5>
          <p>A Triperoo Agent acts as a travel agent for friends and family in their personal network and earns a commission
          on each booking. After being verified by Triperoo, a Triperoo Agent can
          also qualify as a Local Expert and help travelers from across the globe with personalized recommendations.</p>
          <h5>How do I sign up as a Triperoo Agent or Local Expert?</h5>
          <p>You can sign up with your Facebook account or with your email and password. It will only take a few seconds.</p>
        </div>);
    }

    if (this.state.item == "local")
    {
      answers = (
              <div id="local" className="answers">
                <h3>Answers For Local Experts</h3>
                <h5>How do I recommend a hotel to a traveler?</h5>
                <p>Begin by searching for the traveler’s destination, dates, and party size. Browse
                through the hotels in Triperoo's inventory. When you find a hotel that you would like to recommend,
                click the "Share" button and share via social media, email, or copying and pasting the link. You
                can add a personalized note if you wish. If the traveler books the hotel through the link you
                provided, you will receive commission for that booking. Simple as that!</p>

                <h5>How do I qualify as a Local Expert?</h5>
                <p>For more information about how to qualify as a Local Expert, please contact <a href="mailto:localexperts@triperoo.co.uk">localexperts@triperoo.co.uk</a>.</p>
                <h5>How do I complete my profile?</h5>
                <p>Click on your name in the header when logged in, then click "Profile" from the dropdown box. You
                can fill in your personal details, change your photo, and fill in your bank details in
                the "Payouts" section.</p>
                <h5>How can I add hotels to my "Favorites?"</h5>
                <p>You can save your favorite hotels by clicking the heart icon on the
                hotel picture in the search results, or you can click the "Favorite" button on the top right
                of the hotel page. This will save the hotel in your "Favorites" so it is easier to find in the
                future.</p>
                <h5>How does Triperoo process payouts?</h5>
                <p>Triperoo uses direct bank transfers to pay out the Triperoo Agent fee. We may add additional
                payout methods in the future if there is sufficient demand for these.</p>

                <p>In order to receive payment, you must fill in your bank details in the "Payouts" section.</p>
                <h5>When and how often is the Triperoo Agent fee paid?</h5>
                <p>The time that it takes for you to receive your Triperoo Agent fee will depend on the payout
                conditions of the booking service provider. Generally speaking, Triperoo does not receive its marketing
                fee until after travelers have finished their trip. Once Triperoo has received the marketing fee,
                the Triperoo Agent will receive their Triperoo Agent fee soon afterwards.</p>

                <p>To receive your Agent fee, you must fill out your bank details in the "Payouts" section.</p>
                <p>If the accrued Triperoo Agent fee is less than GBP 25 at the time at which payment is normally
                made, Triperoo is entitled to postpone payment until such time as the Triperoo agent fee exceeds this
                amount.</p>
                <p>If you would like to cease operating as a Triperoo Agent and cancel your account with Triperoo, you
                are able to claim any outstanding Triperoo Agent fees on a one-off basis even if the amount is lower
                than GBP 25. If after 12 months your accrued Triperoo Agent fee has not exceeded GBP 25, your
                entitlement to the Triperoo Agent fee will expire.</p>
                <h5>How can my traveler change or cancel their booking?</h5>
                <p>LateRooms.com handle all customer service directly for Triperoo clients. For Booking.com, they
                can use the self-service tool provided in their confirmation email to change or cancel their booking.
                For Hotels.com, they can make cancellations using the self-service tool in the confirmation email.
                If they need to make a change to their booking, please refer to the Support page to find
                the LateRooms.com customer service number to contact.</p>
                <h5>What happens to my commission if my traveler changes their booking?</h5>
                <p>If your traveler changes the dates of their booking, you will still receive commission for the
                booking. However, if the total cost of the booking has changed, your commission amount will
                change accordingly. We will notify you about the final amount at the time of payout. If your
                traveler cancels their booking, you will not receive commission for that booking.</p>
                <h5>Do you have another question not answered in these FAQs?</h5>
                <p>Please contact us at <a href="mailto:localexperts@triperoo.co.uk">localexperts@triperoo.co.uk</a>.</p>
              </div>
        );
    }

    if (this.state.item == "travellers")
    {
      answers = (
              <div id="local" className="answers">
                <h3>Answers For Travellers</h3>
                <h5>What payment methods can I use?</h5>
                <p>As Triperoo does not itself handle payments, possible payment methods are restricted to
                those accepted by the booking service providers. The currently accepted payment methods are
                VISA, MasterCard and American Express. We are
                constantly working with the booking service providers to make additional payment methods possible
                in the future.</p>
                <h5>How can I find my booking confirmation?</h5>
                <p>You will receive an email confirmation with the details of your booking and a self-service tool shortly
                after booking your hotel. This will be sent to the email address that you entered on the checkout page.</p>
                <h5>How can I change or cancel my booking?</h5>
                <p>Thank you for booking through Triperoo! LateRooms.com handle all customer service directly,
                providing a dedicated, 24/7 customer service for Triperoo clients. For flights contact the provider directly.</p>
                <h5>How do I find a Local Expert?</h5>
                <p>As you search on Triperoo for your desired destination, you will see a chat icon on the bottom
                right of your screen. Click on this chat icon to get in touch with a Local Expert who can use their
                local expertise to help you find your ideal hotel in that destination.</p>
                <h5>Do you have another question not answered in these FAQs?</h5>
                <p>Please contact us at <a href="mailto:feedback@triperoo.co.uk">feedback@triperoo.co.uk</a>.</p>
              </div>
        );
    }

    if (this.state.item == "businesses")
    {
      answers = (
              <div id="local" className="answers">
                <h3>Answers For Businesses</h3>
              </div>
        );
    }

    return (
      <div>
        <div className="bg-holder full text-center text-white infoPageWrapper">
            <div className="bg-mask"></div>
            <div style={style} className="bg-img infoImg" ></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">How Can We Help You?</h1>
                    <div className="owl-cap-price">
                      <small>Everything you need to know about Triperoo</small>
                    </div>
                </div>
            </div>
        </div>
      <div className="container">
        <div className="row row-wrap">
            <div className="gap gap-small"></div>
            <div className="col-md-3">
              <ul className="list-group infoList">
                <li className={this.state.item == "general" ? 'list-group-item active' : 'list-group-item'}><a href="#" onClick={this.handleClick} data-name="general">General Answers</a></li>
                <li className={this.state.item == "local" ? 'list-group-item active' : 'list-group-item'}><a href="#" onClick={this.handleClick} data-name="local">Answers For Local Experts</a></li>
                <li className={this.state.item == "travellers" ? 'list-group-item active' : 'list-group-item'}><a href="#" onClick={this.handleClick} data-name="travellers">Answers For Travellers</a></li>
              </ul>
            </div>
            <div className="col-md-9">
              {answers}
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
   }
}
