import React, {PropTypes} from 'react';
import HotelThumb from './thumb';
import Loader from '../../../loaders/contentLoader';

const HotelResults = ({hotels, url, loadingHotels}) => {
    if (!loadingHotels) {
      if (hotels != undefined && hotels.hotelList != undefined) {
        if (hotels.hotelList.size > 0) {
          /*hotels.hotelList.hotelSummary.map(hotel => {
            return (
              <HotelThumb hotel={hotel} hotelUrl={url} key={hotel.hotelId} cssClass="col-md-4 mb-4" nameLength={33}/>);
          });
          */
          return (<p>Results to show here</p>);
        }
        else {
          return (
            <div className="alert alert-danger" role="alert">
              There are no hotels available for your selected dates.
            </div>
          );
        }
      }
      else {
        return null;
      }
    }
    else {
      return (<Loader showLoader={true}/>);
    }
};

HotelResults.propTypes = {
  hotel: PropTypes.object.isRequired,
  loadingHotels: PropTypes.bool.isRequired
};

export default HotelResults;
