import React from 'react';
import SearchHome from '../../components/searchhome';
import TrendingNow from '../../components/trendingNow';
import HotDeals from '../../components/hotDeals';
import Recommendations from '../../components/recommendations';
import TopDestinations from '../../components/topDestinations';
import RecentQuestions from '../../components/recentQuestions';
import HomePageFeature from '../../components/homePageFeature';
import HomePageCopy from '../../components/homePageCopy';
import LastMinuteDeal from '../../components/lastMinuteDeal';
import FacebookSignup from '../../components/facebookSignup';

const HomePage = () => {
  return (
	<div>
        <div className="top-area show-onload">
            <HomePageFeature />
        </div>
        <div className="container">
            <SearchHome />
            <div className="gap"></div>
            <div className="row row-wrap text-xs-center">
                <TopDestinations />
            </div>
            <div className="gap gap-small"></div>
            <div className="row row-wrap text-xs-center">
                <RecentQuestions />
            </div>
            <div className="gap"></div>
        </div>

        <LastMinuteDeal />

        <div className="container">
            <div className="gap"></div>

            <div className="row">
                <div className="col-md-4">
                    <TrendingNow />
                </div>
                <div className="col-md-4">
                    <HotDeals />
                </div>
                <div className="col-md-4">
                    <Recommendations />
                </div>
            </div>
            <div className="gap gap-small"></div>
            
            <HomePageCopy />

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
