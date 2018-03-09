import React, {PropTypes} from 'react';
import StarRating from '../../../forms/common/starRating';

const HotelThumb = ({hotel, hotelUrl, queryString, cssClass, nameLength}) => {
  let style = {
    backgroundImage: 'url(' + hotel.thumbnail + ')'
  };
  let url = hotelUrl + '/hotels/' + hotel.hotelId + queryString;
  return (
    <div className={cssClass} key={hotel.hotelId}>
      <div className="card text-xs-left">
        <div className="cardBg hotels" style={style}>
        </div>
        <div className="card-block hotels">
          <h5>{hotel.hotelName.length > nameLength ? hotel.hotelName.substring(0,nameLength) + '...' : hotel.hotelName}</h5>
          <p className="mb0">From {hotel.minRate.amount.toFixed(2)} {hotel.minRate.currency}</p>
          <a href={url} className="btn btn-primary priceRight">View</a>
          <StarRating starRating={hotel.stars ? parseInt(hotel.stars) : 0} className="icon-list list-inline-block mb0 hotel-rating"/>
          <p className="mb0"><small>{hotel.distance.toFixed(2)} miles from city center</small></p>
        </div>
      </div>
    </div>
  );
};

HotelThumb.propTypes = {
  hotel: PropTypes.object.isRequired,
  hotelUrl: PropTypes.string.isRequired,
  queryString: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  nameLength: PropTypes.number
};

export default HotelThumb;
