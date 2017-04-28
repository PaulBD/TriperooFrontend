import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';

class LocationStats extends React.Component {
  render(){
    return (
        <div className="sidebar-widget greyBg">
            <div className="row">
                <div className="col-md-6">
                    <StarRating starRating={this.props.averageReviewScore} className="icon-list list-inline-block mb0 last-minute-rating statStars"/>
                </div>
                <div className="col-md-6">
                <p className="statText">
                    {this.props.reviewCount} review's<br />
                    {this.props.likeCount} people like {this.props.locationName}</p>
                </div>
            </div>
        </div>
    );
  }
}

LocationStats.defaultProps = {
    likeCount: 0,
    reviewCount: 0,
    averageReviewScore: 0,
    locationName: ''
};

LocationStats.propTypes = {
    likeCount: PropTypes.number,
    reviewCount: PropTypes.number,
    averageReviewScore: PropTypes.number,
    locationName: PropTypes.string.isRequired
};


export default LocationStats;
