import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import TagList from '../common/tagList';

const ReviewList = ({reviews}) => {
  
  return (

    <div className="row row-wrap">
      {
        reviews.map(review => {
        return (
          <div className="col-md-4" key={review.id}>
            <div className="card text-xs-left">
              <img src={review.place.image} alt={review.place.name} />

              <div className="card-block testimonial">
                <h4 className="card-title">{review.place.name}</h4>
                <h6 className="card-subtitle text-muted">{review.place.address}</h6>
                
                <div className="testimonial-author commentCardTestimonial">
                    <img src={review.reviewer.profilePic} alt={review.reviewer.name} />
                    <p className="testimonial-author-name"><a href={review.reviewer.profileUrl}>{review.reviewer.name}</a>'s review</p>
                    <StarRating starRating={review.reviewer.starRating} className="icon-list list-inline-block mb0 last-minute-rating"/>
                </div>
                <p className="card-text">
                    {review.reviewer.comment}
                </p>
                <TagList tags={review.place.tags} maxTags={5} readOnly={true} />
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
