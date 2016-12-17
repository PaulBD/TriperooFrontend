import React from 'react';
import Feature from '../../components/common/feature';
import LastMinuteFeature from '../../components/common/lastMinuteFeature';

import Search from '../../components/homePage/search';

import TrendingDeals from '../../components/trendingDeals';
import HotDeals from '../../components/hotDeals';
import SpecialDeals from '../../components/specialDeals';

import TopDestinations from '../../components/topDestinations';
import RecentQuestions from '../../components/comments/questions';

import HomePageCopy from '../../components/homePage/copy';
import FacebookSignup from '../../components/common/facebookSignup';

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
                <RecentQuestions searchType='' searchId={0} limit={3} offset={0} />
            </div>
            <div className="gap"></div>
        </div>
        <LastMinuteFeature featureType="lastMinute" />
        <div className="container">
            <div className="gap"></div>

            <div className="row">
                <div className="col-md-4">
                    <TrendingDeals searchType="trending"/>
                </div>
                <div className="col-md-4">
                    <HotDeals searchType="hot" />
                </div>
                <div className="col-md-4">
                    <SpecialDeals searchType="special"/>
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
