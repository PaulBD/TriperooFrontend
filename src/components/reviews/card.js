import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import TagList from '../common/tagList';
import Loader from '../common/loadingDots';

const ReviewList = ({reviews}) => {
  if (reviews.length > 0) {
    return (
      <div className="row row-wrap">
        {
          reviews.map(review => {
          return (
            <div className="col-md-4" key={review.triperooReviews.reviewReference}>
              <div className="card text-xs-left">
                <img src={review.triperooReviews.placeImage} alt={review.triperooReviews.placeName} />

                <div className="card-block testimonial">
                  <h4 className="card-title">{review.triperooReviews.placeName}</h4>
                  <h6 className="card-subtitle text-muted">{review.triperooReviews.placeAddress}</h6>
                  
                  <div className="testimonial-author commentCardTestimonial">
                      <img src={review.triperooReviews.profileImage ? review.triperooReviews.profileImage : '/static/img/userProfileImg.png'} alt={review.triperooReviews.customerName} className="origin round profileImg"/>
                      <p className="testimonial-author-name"><a href={review.triperooReviews.profileUrl}>{review.triperooReviews.customerName}</a>'s review</p>
                      <StarRating starRating={review.triperooReviews.starRating} className="icon-list list-inline-block mb0 last-minute-rating"/>
                  </div>
                  <p className="card-text">
                      {review.triperooReviews.comment}
                  </p>
                  <TagList tags={review.triperooReviews.tags} maxTags={5} readOnly={true} />
                </div>
              </div> 
            </div>
            );
          })
        }
      </div>
    );
  } 
  else {
    return (<Loader showLoader={true} />);
  }
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;
