import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import TagList from '../common/tagList';

const ReviewList = ({reviews}) => {
  
  return (

    <div className="row row-wrap">
      {

        reviews.map(review => {
          console.log(review.triperooReviews.tags);
        return (
          <div className="col-md-4" key={review.triperooReviews.reference}>
            <div className="card text-xs-left">
              <img src={review.triperooReviews.place.imageUrl} alt={review.triperooReviews.place.name} />

              <div className="card-block testimonial">
                <h4 className="card-title">{review.triperooReviews.place.name}</h4>
                <h6 className="card-subtitle text-muted">{review.triperooReviews.place.address}</h6>
                
                <div className="testimonial-author commentCardTestimonial">
                    <img src={review.triperooReviews.reviewer.profilePic ? review.triperooReviews.reviewer.profilePic : '/static/img/userProfileImg.png'} alt={review.triperooReviews.reviewer.name} className="origin round profileImg"/>
                    <p className="testimonial-author-name"><a href={review.triperooReviews.reviewer.profileUrl}>{review.triperooReviews.reviewer.name}</a>'s review</p>
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
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;
