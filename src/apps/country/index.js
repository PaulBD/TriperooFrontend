import React from 'react';
import HotelSearch from '../../components/hotel/searchForm';

import HotelThumb from '../../components/hotel/thumb';
import TopHotels from '../../components/hotel/topHotels';
import TopRestaurants from '../../components/restaurant/topRestaurants';
import TopAttractions from '../../components/attraction/topAttractions';
import FacebookSignup from '../../components/common/facebookSignup';
import RecentQuestions from '../../components/recentQuestions';
import ReviewButton from '../../components/reviewButton';
import ReviewOverview from '../../components/reviewOverview';

import TopPlacesInCountry from '../../components/country/topPlacesInCountry';
import CountryOverview from '../../components/country/overview';
import Navigation from '../../components/country/navigation';
import Reviews from '../../components/country/reviews';
import Header from '../../components/country/header';

export default class CountryHome extends React.Component {
      componentDidMount() {
        window.scrollTo(0, 0);
      }
      
      render(){
      return (
        <div>
            <Header />
            <div className="container">
                <Navigation />
                <div className="gap gap-small"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <TopPlacesInCountry />
                    </div>
                    <div className="col-md-4">
                        <ReviewButton />
                        <div className="gap-small"></div>
                        <CountryOverview />
                    </div>
                    <div className="gap"></div>
                </div>
            </div>
            <div className="bg-holder cityBg">
                <div className="bg-mask"></div>
                <div className="bg-blur chesterBg" ></div>
                <div className="bg-content">
                    <div className="container">
                        <div className="gap"></div>

                        <div className="row">
                            <div className="col-md-4">
                                <TopRestaurants />
                            </div>
                            <div className="col-md-4">
                                <TopAttractions />
                            </div>
                            <div className="col-md-4">
                                <TopHotels />
                            </div>
                        </div>
                        <div className="gap"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="gap"></div>
                <div className="row">
                    
                        <RecentQuestions />
                </div>
            </div>
            <div className="container">
                <div className="gap gap-small"></div>
                <hr />
                <div className="gap"></div>
                <FacebookSignup />
                <div className="gap"></div>
            </div>
        </div>
    );
  }
}
