import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import TagList from '../common/tagList';

let titleCase = require('title-case');

class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseLeaveContent = this.onMouseLeaveContent.bind(this);
    }

    onMouseEnterContent(e, id) {
        let html = document.getElementById("marker-" + id);
        html.querySelector(".mapInfo").style.display = "block";
    }

    onMouseLeaveContent(e, id) { 
        let html = document.getElementById("marker-" + id);
        html.querySelector(".mapInfo").style.display = "none";
    }

    render() {
    return (
        <ul className="booking-list placeItem">
        {
            this.props.places.map(place => {

            let price = returnPrice(place.pricesFrom,this.props.pageType);
            let rank = returnRank(this.props.pageType, this.props.places.count, place);

            let tags = '';
            let distance = returnDistance(place.distance, this.props.place);

            if (place.tags !== undefined) {
                tags = (<TagList tags={place.tags.tag} maxTags={3} />);
            }

            let placeRef = "place-"+ place.ref;
            let imageCount = photoCount(place.images);

            return (
                <li id={placeRef}>
                    <a className="booking-item" href={place.url} onMouseEnter={() => this.onMouseEnterContent(this, place.ref)} onMouseLeave={() => this.onMouseLeaveContent(this, place.ref)}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="booking-item-img-wrap">
                                    <img src={place.mainImage} title={place.name} />
                                    <div className="booking-item-img-num">{imageCount}</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="booking-item-rating">
                                    <StarRating starRating={place.customerRating} className="icon-group booking-item-rating-stars"/>
                                    <span className="booking-item-rating-number"><b >{place.customerRating}</b> of 5</span><small>({place.reviewCount} reviews)</small>
                                </div>
                                <h5 className="booking-item-title">{place.name} </h5>
                                {distance}
                                {tags}
                            </div>
                            <div className="col-md-3">
                                {price}
                            </div>
                        </div>
                    </a>
                </li>
                );
            })
        }
        </ul>   
        );
    }
}

SearchList.propTypes = {
  places: PropTypes.array.isRequired,
  place: PropTypes.string.isRequired,
  pageType: PropTypes.string.isRequired
};

function photoCount(images) {
            if (images !== undefined) {
            return (<span><i className="fa fa-picture-o"></i> {images.count}</span>);
        }
}

function returnPrice(price, pageType) {
    if (pageType == 'hotels') {
        if ((price == "Full") || (price == '-1')) {
            return '';
        }
        else {
            return (<span><span className="booking-item-price-from">from</span><span className="booking-item-price">£{price}</span><span>/night</span><span className="btn btn-primary">Book Now</span></span>);
        }
    }
    else {
        return '';
    }
}

function returnRank(pageType, placeCount, place) {
    if (pageType == 'hotels') {
        if (place.rank !== undefined) {
            return (<p className="booking-item-subtitle">Ranked {place.rank} of {placeCount} hotels in {titleCase(place)}</p>);
        }
    }
}

function returnDistance(distance, place) {
    if (distance !== undefined) {
        return (<p className="booking-item-address"><i className="fa fa-map-marker"></i> {distance}miles from {titleCase(place)} center</p>);
    }
}

export default SearchList;
