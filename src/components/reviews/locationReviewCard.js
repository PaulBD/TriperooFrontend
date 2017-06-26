import React, {PropTypes} from 'react';

import Loader from '../common/loadingDots';
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
        return (<p>There are no reviews available for {this.props.locationName}. Be the first to post a review.</p>);
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
  reviews: PropTypes.array.isRequired
};


export default ReviewList;

