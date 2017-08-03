import React, {PropTypes} from 'react';
import StarRating from '../../../forms/common/starRating';

const HotelThumb = ({hotel}) => {

  let url = '/2114/visit/london-england-united-kingdom/hotels/' + hotel.eanHotelID;
  return (
    <div className="thumb" key={hotel.eanHotelID}>
      <a className="hover-img" href={url}>
        <img src="/static/img/800x600.png" alt="Image Alternative text" title="Gaviota en el Top" />
        <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
          <div className="text-small">
            <h5>{hotel.name}</h5>
            <p className="mb0">Between {hotel.lowRate} {hotel.propertyCurrency} and {hotel.highRate} {hotel.propertyCurrency}</p>
            <StarRating starRating={hotel.starRating} className="icon-list list-inline-block mb0 hotel-rating"/>
          </div>
        </div>
      </a>
    </div>
  );
};

HotelThumb.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default HotelThumb;
