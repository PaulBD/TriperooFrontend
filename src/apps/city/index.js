import React from 'react';
import HotelSearch from '../../components/hotel/searchForm';

import HotelThumb from '../../components/hotel/thumb';
import TopHotels from '../../components/hotel/topHotels';
import TopRestaurants from '../../components/restaurant/topRestaurants';
import TopAttractions from '../../components/attraction/topAttractions';
import FacebookSignup from '../../components/facebookSignup';
import TopReviewers from '../../components/topReviewers';
import ReviewButton from '../../components/reviewButton';
import ReviewOverview from '../../components/reviewOverview';

import WhatsOn from '../../components/city/whatsOn';
import TopPlacesInCity from '../../components/city/topPlacesInCity';
import CityOverview from '../../components/city/overview';
import Navigation from '../../components/city/navigation';
import Reviews from '../../components/city/reviews';
import Map from '../../components/city/map';
import Header from '../../components/city/header';

export default class CityHome extends React.Component {
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
                        <TopPlacesInCity />
                    </div>
                    <div className="col-md-4">
                        <ReviewButton />
                        <div className="gap-small"></div>
                        <CityOverview />
                    
                        <div className="gap-small"></div>
                        <WhatsOn />
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
                        <div className="gap-small"></div>

                        <Map />
                        <div className="gap"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="gap"></div>
                <div className="row">
                    <div className="col-md-8">
                        <Reviews />
                    </div>
                    <div className="col-md-4">
                        <ReviewOverview />
                        <div className="gap-small"></div>
                        <TopReviewers />
                        <div className="gap-small"></div>
                        <ReviewButton />
                        <div className="gap-small"></div>
                    </div>
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
