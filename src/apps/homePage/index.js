import React from 'react';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import LocalExpert from '../../components/content/static/localExpert';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import Search from '../../components/search/homePage';
import TopDestinations from '../../components/content/dynamic/topDestinations';
import ReviewList from '../../components/reviews/list';
import FacebookSignup from '../../components/authentication/facebookSignup';

const HomePage = () => {

    document.title = 'Explore, Plan, Book - Get the best deals from top travel websites';

    return (
        <div>
            <FeaturedHeader headerType="homePage" />
            <div className="container">
                <Search searchType="all" />
                <div className="gap"></div>
                <div className="row row-wrap text-xs-center">
                    <TopDestinations destinationCount={3} title="Our Top Destinations" />
                </div>
                <div className="gap gap-small"></div>
                <div className="row row-wrap text-xs-center">
                    <ReviewList searchType='all' searchId={0} limit={3} offset={0} showTitle={true} />
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
                <TrustedPartners />
                <div className="gap"></div>
            </div>
        </div>
    );
};

export default HomePage;
