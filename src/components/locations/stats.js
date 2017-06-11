import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';

class LocationStats extends React.Component {
  render(){
    let reviewUrl = this.props.locationUrl + '/reviews';
    return (
        <div className="sidebar-widget">
          <hr className="hrTop"/>
            <div className="row">
                <div className="col-md-6">
                    <StarRating starRating={this.props.stats.averageReviewScore} className="icon-list list-inline-block mb0 last-minute-rating statStars"/>
                </div>
                <div className="col-md-6">
                <p className="statText">
                  <a href={reviewUrl}>{this.props.stats.reviewCount} review's</a><br />
                  {this.props.stats.likeCount} {this.props.stats.likeCount == 1 ? 'person likes' : 'people like'} {this.props.locationName}</p>
                </div>
            </div>
          <hr className="hrBottom" />
        </div>
    );
  }
}

LocationStats.defaultProps = {
    stats: {},
    locationUrl: '',
    locationName: ''
};

LocationStats.propTypes = {
    stats: PropTypes.object.isRequired,
  locationUrl: PropTypes.string.isRequired,
    locationName: PropTypes.string.isRequired
};


export default LocationStats;
