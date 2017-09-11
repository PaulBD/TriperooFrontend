import React, {PropTypes} from 'react';
import HotelThumb from './thumb';
import Loader from '../../../loaders/contentLoader';

const HotelResults = ({hotel, url, loadingHotels}) => {
    if (!loadingHotels) {
      return (<HotelThumb hotel={hotel} hotelUrl={url} key={hotel.hotelId} cssClass="col-md-4 mb-4" nameLength={33}/>);
    }
    else {
      return (<Loader showLoader={true}/>);
    }
};

HotelResults.propTypes = {
  hotel: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  loadingHotels: PropTypes.bool.isRequired
};

export default HotelResults;
