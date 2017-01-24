import React from 'react';
import Feature from '../../components/common/feature';
import LastMinuteDeal from '../../components/deals/lastMinuteDeal';
import Search from '../../components/search/homePage';
import Deals from '../../components/deals/list';
import FeatureLocations from '../../components/locations/featureLocations';
import RecentReviews from '../../components/reviews/reviews';
import FacebookSignup from '../../components/common/facebookSignup';

const HomePage = () => {

    document.title = 'Explore, Plan, Book - Get the best deals from top travel websites';

    return (
        <div>
            <Feature featureType="homePage" />
            <div className="container">
                <Search searchType="all" />
                <div className="gap"></div>
                <div className="row row-wrap text-xs-center">
                    <FeatureLocations />
                </div>
                <div className="gap gap-small"></div>
                <div className="row row-wrap text-xs-center">
                    <RecentReviews searchType='' searchId={0} limit={3} offset={0} showTitle={1} />
                </div>
                <div className="gap"></div>
            </div>
            <LastMinuteDeal featureType="lastMinute" />
            <div className="container">
                <div className="gap"></div>
                <div className="row">
                    <div className="col-md-4"> 
                        <Deals searchType="trending" title="Trending Now"/>
                    </div>
                    <div className="col-md-4">
                        <Deals searchType="hot" title="Hot Deals" />
                    </div>
                    <div className="col-md-4">
                        <Deals searchType="special" title="Special Deals"/>
                    </div>
                </div>
                <div className="gap gap-small"></div>
                <div className="row">
                    <div className="col-md-3">
                        <a href="/holidays">
                            <div className="mb30 thumb"><i className="fa fa-suitcase box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                                <div className="thumb-caption">
                                    <h4 className="thumb-title">Holidays</h4>
                                    <p className="thumb-desc">Habitant pulvinar nostra himenaeos pulvinar facilisi</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="/hotels">
                            <div className="mb30 thumb"><i className="fa fa-bed box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                                <div className="thumb-caption">
                                    <h4 className="thumb-title">Hotels</h4>
                                    <p className="thumb-desc">Habitant pulvinar nostra himenaeos pulvinar facilisi</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="/flights">
                            <div className="mb30 thumb"><i className="fa fa-plane box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                                <div className="thumb-caption">
                                    <h4 className="thumb-title">Flights</h4>
                                    <p className="thumb-desc">Habitant pulvinar nostra himenaeos pulvinar facilisi</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="/travel-extras/car-hire">
                            <div className="mb30 thumb"><i className="fa fa-car box-icon-left round box-icon-big box-icon-border animate-icon-top-to-bottom"></i>
                                <div className="thumb-caption">
                                    <h4 className="thumb-title">Car Hire</h4>
                                    <p className="thumb-desc">Habitant pulvinar nostra himenaeos pulvinar facilisi</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="gap gap-small"></div>
                <hr />
                <div className="gap"></div>
                <FacebookSignup />
                <div className="gap"></div>
            </div>
        </div>
    );
};

export default HomePage;
