import React from 'react';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import Search from '../../components/forms/searchForms/homePage';
import Destinations from '../../components/content/dynamic/destinations';
import ReviewList from '../../components/layout/cards/reviews/homePageReviewList';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';

const HomePage = () => {

    document.title = 'Explore, Plan, Book - Get the best deals from top travel websites';

    return (
        <div>
            <FeaturedHeader contentType="homePage" />
            <div className="container">
                <Search searchType="all" />
                <div className="gap gap-mini"></div>
                <div className="row text-center">
                    <Destinations locationCount={3} title="Our Top Destinations" contentType="homePage" />
                </div>
                <hr />
              <div className="gap"></div>
                <div className="row row-wrap">
                    <ReviewList locationType="all" locationId={0} pageSize={3} locationName="" pageNumber={0} showTitle={true} />
                </div>
            </div>
            <LastMinuteDeal locationId={2114} />
            <div className="container">
                <div className="gap"></div>
                <BulletPoints />
                <div className="gap gap-mini"></div>
                <FacebookSignup />
                <TrustedPartners />
                <div className="gap gap-mini"></div>
            </div>
        </div>
    );
};

export default HomePage;
