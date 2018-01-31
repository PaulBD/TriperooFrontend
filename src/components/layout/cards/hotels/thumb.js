import React, {PropTypes} from 'react';
import StarRating from '../../../forms/common/starRating';

const HotelThumb = ({hotel, hotelUrl, queryString, cssClass, nameLength}) => {
  let style = {
    backgroundImage: 'url(https://i.travelapi.com' + hotel.imagelUrl + ')'
  };
  let url = hotelUrl + '/hotels/' + hotel.hotelId + queryString;
  return (
    <div className={cssClass} key={hotel.hotelId}>
      <div className="card text-xs-left">
        <div className="cardBg hotels" style={style}>
        </div>
        <div className="card-block hotels">
          <h5>{hotel.name.length > nameLength ? hotel.name.substring(0,nameLength) + '...' : hotel.name}</h5>
          <p className={(hotel.roomRateDetailsList && hotel.roomRateDetailsList.roomRateDetails && hotel.roomRateDetailsList.roomRateDetails.rateInfos) || hotel.lowRate ? "mb0" : "hide"}>From {hotel.roomRateDetailsList && hotel.roomRateDetailsList.roomRateDetails && hotel.roomRateDetailsList.roomRateDetails.rateInfos ? hotel.roomRateDetailsList.roomRateDetails.rateInfos.rateInfo.chargeableRateInfo.total : hotel.lowRate} {hotel.rateCurrencyCode}</p>
          <a href={url} className="btn btn-primary priceRight">View</a>
          <StarRating starRating={hotel.hotelRating} className="icon-list list-inline-block mb0 hotel-rating"/>
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
