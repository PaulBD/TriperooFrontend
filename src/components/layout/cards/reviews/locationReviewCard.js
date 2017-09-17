import React, {PropTypes} from 'react';

import Loader from '../../../loaders/contentLoader';
import ReviewItem from './locationReviewItem';

class ReviewList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.reviews != undefined && this.props.reviews.length > -1) {
      if (this.props.reviews.length > 0)
      {
        return (
          <ul className="booking-item-reviews list">
            {
              this.props.reviews.map(function (review, i) {
                return (<ReviewItem key={i} review={review} />);
              })
            }
          </ul>
        );
      }
      else {
        if (this.props.isUsingFilter)
        {
          return (
            <div className="row">
              <div className="col-md-12">
                <p>There are no reviews available for {this.props.locationName} and this filter. Change your filter.</p>
              </div>
            </div>);
        }
        else {
          return (
            <div className="row">
              <div className="col-md-12">
                <p>There are no reviews available for {this.props.locationName}. Be the first to write a review.</p>
              </div>
            </div>);
        }
      }
    }
    else {
      return (<Loader showLoader={true} />);
    }
  }
}

ReviewList.defaultProps = {
  reviews: []
};

ReviewList.propTypes = {
  locationName: PropTypes.string,
  locationId: PropTypes.number,
  reviews: PropTypes.array.isRequired,
  isUsingFilter: PropTypes.bool
};


export default ReviewList;

