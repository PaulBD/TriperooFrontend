import React from 'react';
import Feature from '../../components/common/feature';
import LastMinuteFeature from '../../components/common/lastMinuteFeature';

import Search from '../../components/homePage/search';

import TrendingNow from '../../components/trendingNow';
import HotDeals from '../../components/hotDeals';
import Recommendations from '../../components/recommendations';
import TopDestinations from '../../components/topDestinations';
import RecentQuestions from '../../components/recentQuestions';
import HomePageCopy from '../../components/homePage/copy';
import FacebookSignup from '../../components/facebookSignup';

const HomePage = () => {
  return (
	<div>
        <Feature featureType="homePage" />
        <div className="container">
            <Search searchType="all" />
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

        <LastMinuteFeature featureType="lastMinute" />

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
