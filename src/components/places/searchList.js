import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import TagList from '../common/tagList';

const SearchList = ({places}) => {
    return (
    <div className="row row-wrap">
        {
            places.map(place => {

            let price = place.pricesFrom;

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

            if (place.tags !== undefined) {
                tags = (<TagList tags={place.tags.tag} maxTags={4} />);
            }

            let placeId = "place-" + place.ref;

            return (
                <div key={place.ref} id={placeId}>
                    <a href={place.url}>
                        <div className="booking-item booking-item-small">
                            <div className="row">
                                <div className="col-xs-4">
                                    <img src={place.mainImage} title={place.name} />
                                </div>
                                <div className="col-xs-8">
                                    <div className="row">
                                        <div className="col-xs-9">
                                            <h3 className="booking-item-title">{place.name}</h3>
                                            <StarRating starRating={place.starRating} className="icon-list list-inline-block mb0 last-minute-rating"/>
                                            
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

SearchList.propTypes = {
  places: PropTypes.array.isRequired
};

export default SearchList;
