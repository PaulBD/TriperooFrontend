import React from 'react';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import Search from '../../components/search/homePage';
import Destinations from '../../components/content/dynamic/destinations';
import ReviewList from '../../components/reviews/homePageReviewList';
import FacebookSignup from '../../components/customer/authentication/facebookSignup';

const HomePage = () => {

    document.title = 'Explore, Plan, Book - Get the best deals from top travel websites';

    return (
        <div>
            <FeaturedHeader contentType="homePage" />
            <div className="container">
                <Search searchType="all" />
                <div className="gap"></div>
                <div className="row row-wrap text-xs-center">
                    <Destinations locationCount={3} title="Our Top Destinations" />
                </div>
                <div className="gap gap-small"></div>
                <div className="row row-wrap text-xs-center">
                    <ReviewList locationType="all" locationId={0} pageSize={3} locationName="" pageNumber={0} showTitle={true} />
                </div>
                <div className="gap"></div>
            </div>
            <LastMinuteDeal locationId={2114} />
            <div className="container">
                <div className="gap"></div>
                <BulletPoints />
                <div className="gap gap-small"></div>
                <FacebookSignup />
                <TrustedPartners />
                <div className="gap"></div>
            </div>
        </div>
    );
};

export default HomePage;
