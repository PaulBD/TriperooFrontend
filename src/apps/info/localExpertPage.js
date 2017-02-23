import React from 'react';
import {Link} from 'react-router';
import SocialButtons from "../../components/common/socialButtons";

export default class LocalExpertPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Become a Local Expert';
  }
  
  render(){
    let style = {
      backgroundImage: 'url(/static/img/community.jpg)'
    };

    return (
      <div>
        <div className="bg-holder full text-xs-center text-white infoPageWrapper">
          <div className="bg-mask"></div>
          <div style={style} className="bg-img infoImg" ></div>
          <div className="bg-front full-center">
            <div className="owl-cap">
                <h1 className="owl-cap-title fittext">Become a Local Expert</h1>
                <div className="owl-cap-price">
                  <small>Earn money and respect from your travel recommendations</small>
                </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-wrap">
            <div className="gap gap-small"></div>
            <div className="col-md-7">
              <h4>Become A Local Expert!</h4>
              <p><strong>STEP 1</strong><br />
              Sign up as a Triperoo Agent and earn a commission by booking hotels and flights for friends and family, just like a travel agent.</p>
              <p><strong>STEP 2</strong><br />
              Qualify as a Local Expert and help fellow travelers from across the globe with your local recommendations.</p>
            
              <h4>What You Can Earn As a Travel Agent</h4>
              <p>Some examples of what you can earn as a Triperoo Agent.</p>
              <div className="row row-wrap">
                  <div className="col-md-6">
                      <div className="thumb">
                          <a className="hover-img" href="/place/united-kingdom/london">
                              <img src="/static/img/locations/popular-destinations/london.png" alt="London" />
                              <i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                              <h5 className="hover-title hover-hold exampleTrip">
                                Weekend Break to London<br />3 nights - 2 people
                                <span className="price">£50.00</span>
                              </h5>
                          </a>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="thumb">
                          <a className="hover-img" href="/place/middle-east/dubai">
                              <img src="/static/img/locations/popular-destinations/dubai.png" alt="Dubai" />
                              <i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                              <h5 className="hover-title hover-hold exampleTrip">
                                Short Break to Dubai<br />5 nights - 2 people
                                <span className="price">£120.00</span>
                              </h5>
                          </a>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="thumb">
                          <a className="hover-img" href="/united-states/new-york">
                              <img src="/static/img/locations/popular-destinations/london.png" alt="Maldives" />
                              <i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                              <h5 className="hover-title hover-hold exampleTrip">
                                Long Haul to Maldives<br />14 nights - 2 people
                                <span className="price">£200.00</span>
                              </h5>
                          </a>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="thumb">
                          <a className="hover-img" href="/united-states/new-york">
                              <img src="/static/img/locations/popular-destinations/london.png" alt="Paris" />
                              <i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                              <h5 className="hover-title hover-hold exampleTrip">
                                Business Trip to Paris<br />2 nights - 1 person
                                <span className="price">£20.00</span>
                              </h5>
                          </a>>
                      </div>
                  </div>
              </div>
            </div> 

            <div className="col-md-5">
              <h4>Benefits of being a Triperoo Agent</h4>

              <p>Your personalized recommendations will help other travelers find the ideal hotel in the best 
              neighborhood. They save huge amounts of time and end up with a better trip, you earn a 
              commission. You both share a great experience.</p>
              <div className="gap gap-small"></div>
              <div className="row row-wrap">
                <div className="col-md-2">
                  <i className="fa fa-credit-card box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                </div>
                <div className="col-md-8">
                  <h5>EXTRA INCOME</h5>
                  <p>As a Triperoo Agent you will have access to Triperoo's inventory of 1.4 million hotels. You 
                  can recommend, share, publish and book hotels for others and even for yourself and 
                  earn a commission per booking. Just like a travel agent.</p>
                </div>
              </div>
              <div className="row row-wrap">
                <div className="col-md-2">
                  <i className="fa fa-whatsapp box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                </div>
                <div className="col-md-8">
                  <h5>FLEXIBILITY</h5>
                  <p>You can create and share travel recommendations whenever you want, wherever you are. When 
                  you qualify as a Local Expert, you will receive questions from other travelers on your 
                  mobile phone, adding even more flexibility.</p>
                </div>
              </div>
              <div className="row row-wrap">
                <div className="col-md-2">
                  <i className="fa fa-suitcase box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                </div>
                <div className="col-md-8">
                  <h5>POWER TO THE TRAVELER!</h5>
                  <p>You will be helping friends and fellow travelers from across the world by matching them to 
                  their ideal hotel, based on their wishes, budget and taste. You will take the stress out 
                  of travel research and put the fun back in.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
   }
}