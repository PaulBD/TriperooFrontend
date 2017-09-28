import React, {PropTypes} from 'react';
import StarRating from '../../../forms/common/starRating';

const HotelThumb = ({hotel, hotelUrl, queryString, cssClass, nameLength}) => {
console.log(nameLength);
  let style = {
    backgroundImage: 'url(http://i.travelapi.com' + hotel.imagelUrl + ')'
  };
  let url = hotelUrl + '/hotels/' + hotel.hotelId + queryString;
  return (
    <div className={cssClass} key={hotel.hotelId}>
      <div className="card text-xs-left">
        <div className="cardBg hotels" style={style}>
        </div>
        <div className="card-block hotels">
          <h5>{hotel.name.length > nameLength ? hotel.name.substring(0,nameLength) + '...' : hotel.name}</h5>
          <a href={url} className="btn btn-primary priceRight">View</a>
          <p className="mb0">From {hotel.lowRate.toFixed(2)} {hotel.rateCurrencyCode}</p>
          <StarRating starRating={hotel.hotelRating} className="icon-list list-inline-block mb0 hotel-rating"/>
        </div>
      </div>
    </div>
  );
};

HotelThumb.propTypes = {
  hotel: PropTypes.object.isRequired,
  hotelUrl: PropTypes.string.isRequired,
  queryString: PropTypes.string.isRequired
};

export default HotelThumb;
