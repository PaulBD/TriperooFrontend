import React, {PropTypes} from 'react';
import StarRating from '../../../forms/common/starRating';
import TagList from '../../../forms/common/tagList';

const HotelList = ({hotels}) => {
  return (
    <div className="row row-wrap">
      {
        hotels.map(hotel => {

          let price = hotel.pricesFrom;

          if (price == "Full") {
            price = (
              <div>
                <span className="booking-item-price-from">&nbsp;</span>
                <span className="booking-item-price">Full</span>
              </div>
            );
          }
          else {
            price = (
              <div>
                <span className="booking-item-price-from">from</span>
                <span className="booking-item-price">£{price}</span>
              </div>
            );
          }


          let tags = '';

          if (hotel.tags !== undefined) {
            tags = (<TagList tags={hotel.tags.tag} maxTags={4} />);
          }

          return (
            <div key={hotel.ref}>
              <a href={hotel.url}>
                <div className="booking-item booking-item-small">
                  <div className="row">
                    <div className="col-xs-4">
                      <img src={hotel.mainImage} title={hotel.name} />
                    </div>
                    <div className="col-xs-8">
                      <div className="row">
                        <div className="col-xs-9">
                          <h3 className="booking-item-title">{hotel.name}</h3>
                          <StarRating starRating={hotel.starRating} className="icon-list list-inline-block mb0 last-minute-rating"/>
                          <div className="gap gap-small"></div>
                        </div>
                        <div className="col-xs-3">
                          <div className="gap gap-small"></div>
                          {price}
                        </div>
                        <div className="col-xs-12">
                          {tags}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="gap gap-small"></div>
            </div>
          );
        })
      }
    </div>
  );
};

HotelList.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default HotelList;
