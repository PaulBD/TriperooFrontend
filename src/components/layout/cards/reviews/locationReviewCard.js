import React, {PropTypes} from 'react';

import Loader from '../../../loaders/contentLoader';
import ReviewItem from './locationReviewItem';

class ReviewList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.writeFirstReview = this.writeFirstReview.bind(this);
  }

  writeFirstReview(e){
    this.props.writeReview(e);
  }

  render() {
    if (this.props.reviews != undefined && this.props.reviews.length > -1) {
      if (this.props.reviews.length > 0)
      {
        return (
          <ul className="booking-item-reviews list">
            {
              this.props.reviews.map(function (review, i) {
                return (<ReviewItem key={i} review={review} showLocation={this.props.showLocation}/>);
              }, this)
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
                <p>There are no reviews available for {this.props.locationName}. Be the first to <a href="#" onClick={this.writeFirstReview}>write a review</a>.</p>
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
  reviews: [],
  showLocation: false
};

ReviewList.propTypes = {
  locationName: PropTypes.string,
  locationId: PropTypes.number,
  reviews: PropTypes.array.isRequired,
  isUsingFilter: PropTypes.bool,
  writeReview: PropTypes.func,
  showLocation: PropTypes.bool
};


export default ReviewList;

