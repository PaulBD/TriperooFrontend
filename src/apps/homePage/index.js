import React from 'react';
import Feature from '../../components/common/feature';
import LocalExpert from '../../components/common/localExpert';
import LastMinuteDeal from '../../components/deals/lastMinuteDeal';
import Search from '../../components/search/homePage';
import Deals from '../../components/deals/list';
import FeatureLocations from '../../components/locations/featureLocations';
import RecentReviews from '../../components/reviews/reviews';
import FacebookSignup from '../../components/common/facebookSignup';
import BulletPoints from '../../components/common/bulletPoints';
import TrustedPartners from '../../components/common/trustedPartners';

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
                <LocalExpert />
                <div className="gap"></div>
            </div>
            <LastMinuteDeal featureType="lastMinute" />
            <div className="container">
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
};

export default HomePage;
