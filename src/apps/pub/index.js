import React from 'react';
import HotelSearch from '../../components/hotelSearch';
import HotelThumb from '../../components/hotelThumb';
import TopHotels from '../../components/topHotels';
import TopRestaurants from '../../components/topRestaurants';
import TopAttractions from '../../components/topAttractions';
import FacebookSignup from '../../components/facebookSignup';
import CityNavigation from '../../components/cityNavigation';
import CitySubHeader from '../../components/citySubHeader';

export default class PubPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
  return (
    <div>
        <CitySubHeader />

        <div className="gap gap-small"></div>

        <div className="container">
            <div className="row">
                
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
