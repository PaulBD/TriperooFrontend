import React, {PropTypes} from 'react';
import StarRating from './starRating';

const DealList = ({deals}) => {
    return (
        <ul className="booking-list">
        {
            deals.map(listItem => {
            return (
                <li key={listItem.id}>
                    <a href={listItem.url} >
                        <div className="booking-item booking-item-small">
                            <div className="row">
                                <div className="col-xs-4">
                                    <img src={listItem.imageUrl} alt={listItem.title} />
                                </div>
                                <div className="col-xs-5">
                                    <h5 className="booking-item-title">{listItem.title}</h5>
                                    <StarRating starRating={listItem.starRating} className="icon-group booking-item-rating-stars"/>
                                </div>
                                <div className="col-xs-3"><span className="booking-item-price-from">from</span><span className="booking-item-price">{listItem.price}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>);
                })
            }
            </ul>   

  );
};

DealList.propTypes = {
  deals: PropTypes.array.isRequired
};

export default DealList;
