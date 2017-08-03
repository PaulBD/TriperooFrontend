import React from 'react';
import Feature from '../../components/content/headers/travelExtras';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

export default class TravelExtras extends React.Component {
      componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Travel Extras - Make huge savings on all of your holiday must-haves';

      }
      render(){
        return (
          <div>
            <Feature />
            <div className="gap gap-small"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="thumb">
                            <a className="hover-img" href="/travel-extras/airport-parking">
                                <img src="/static/img/airportParking.jpg" alt="Airport Parking" />
                                <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                                    <div className="text-small">
                                        <h5>Airport Parking</h5>
                                        <p>Pre-book your airport parking and save up to 60%.</p>
                                        <p className="mb0 btn btn-primary btn-sm">View Deals &raquo;</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumb">
                            <a className="hover-img" href="/travel-extras/airport-hotels">
                                <img src="/static/img/airportHotels.jpg" alt="Airport Hotels" />
                                <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                                    <div className="text-small">
                                        <h5>Airport Hotels</h5>
                                        <p>Park up, stay overnight and let the shuttle bus drop you off</p>
                                        <p className="mb0 btn btn-primary btn-sm">View Deals &raquo;</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumb">
                            <a className="hover-img" href="/travel-extras/airport-lounges">
                                <img src="/static/img/airportLoungeV2.jpg" alt="Airport Lounges" />
                                <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                                    <div className="text-small">
                                        <h5>Airport Lounges</h5>
                                        <p>Start your holiday stress free and escape the airport hustle</p>
                                        <p className="mb0 btn btn-primary btn-sm">View Deals &raquo;</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="gap gap-small hide"></div>
                <div className="row hide">
                    <div className="col-md-4">
                        <div className="thumb">
                            <a className="hover-img" href="/travel-extras/rail-travel">
                                <img src="/static/img/railTravel.jpg" alt="Rail Travel" />
                                <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                                    <div className="text-small">
                                        <h5>Rail Travel</h5>
                                        <p>Great deals on train tickets with no booking or card fees</p>
                                        <p className="mb0 btn btn-primary btn-sm">View Deals &raquo;</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumb">
                            <a className="hover-img" href="/travel-extras/airport-transfers">
                                <img src="/static/img/airportTransfer.jpg" alt="Airport Transfers" />
                                <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                                    <div className="text-small">
                                        <h5>Airport Transfers</h5>
                                        <p>Search the best airport and resort transfer deals</p>
                                        <p className="mb0 btn btn-primary btn-sm">View Deals &raquo;</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumb">
                            <a className="hover-img" href="/travel-extras/car-hire">
                                <img src="/static/img/carHire.jpg" alt="Car Hire" />
                                <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                                    <div className="text-small">
                                        <h5>Car Hire</h5>
                                        <p>Find great car hire deals from under £10 a day</p>
                                        <p className="mb0 btn btn-primary btn-sm">View Deals &raquo;</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="gap gap-small hide"></div>
                <div className="row hide">
                    <div className="col-md-4">
                        <div className="thumb">
                            <a className="hover-img" href="/travel-extras/cruises">
                                <img src="/static/img/cruises.jpg" alt="Cruises" />
                                <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                                    <div className="text-small">
                                        <h5>Cruises</h5>
                                        <p>Sail round multiple destinations. Compare cruises on Triperoo</p>
                                        <p className="mb0 btn btn-primary btn-sm">View Deals &raquo;</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumb">
                            <a className="hover-img" href="/travel-extras/cottages">
                                <img src="/static/img/cottage.jpg" alt="Cottages" />
                                <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                                    <div className="text-small">
                                        <h5>Cottages</h5>
                                        <p>Rent a cottage in the UK and escape for some piece and quiet</p>
                                        <p className="mb0 btn btn-primary btn-sm">View Deals &raquo;</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumb">
                            <a className="hover-img" href="/travel-extras/villas">
                                <img src="/static/img/villa.jpg" alt="Villas" />
                                <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                                    <div className="text-small">
                                        <h5>Villas</h5>
                                        <p>Excellent alternative from a package holiday</p>
                                        <p className="mb0 btn btn-primary btn-sm">View Deals &raquo;</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap gap-small"></div>
            <LastMinuteDeal locationId={2114} />
            <div className="container">
                <div className="gap"></div>
                <BulletPoints />
                <div className="gap gap-mini"></div>
                <FacebookSignup />
                <TrustedPartners />
                <div className="gap"></div>
            </div>
        </div>
      );
   }
}
