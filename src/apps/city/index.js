import React from 'react';
import HotelSearch from '../../components/hotelSearch';
import HotelThumb from '../../components/hotelThumb';
import TopHotels from '../../components/topHotels';
import TopRestaurants from '../../components/topRestaurants';
import TopAttractions from '../../components/topAttractions';
import FacebookSignup from '../../components/facebookSignup';
import CityNavigation from '../../components/cityNavigation';
import TopPlacesInCity from '../../components/topPlacesInCity';
import CityOverview from '../../components/cityOverview';
import WhatsOn from '../../components/whatsOn';
import CityMap from '../../components/cityMap';
import CityReviews from '../../components/cityReviews';
import TopReviewers from '../../components/topReviewers'
import ReviewButton from '../../components/reviewButton'
import ReviewOverview from '../../components/reviewOverview'
import CityHeader from '../../components/cityHeader'

export default class CityPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
  return (
    <div>
        <CityHeader />

        <div className="container">
            <CityNavigation />
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

                    <CityMap />
                    <div className="gap"></div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="gap"></div>
            <div className="row">
                <div className="col-md-8">
                    <CityReviews />
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
  )};
};
