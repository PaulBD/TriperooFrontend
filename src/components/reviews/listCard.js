import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import TagList from '../common/tagList';
import Loader from '../common/loadingDots';

const ReviewList = ({reviews}) => {

  if (reviews != undefined && reviews.length > -1) {
    return (
      <div className="row row-wrap">
        {
          reviews.map(review => {

          let style = {
            backgroundImage: 'url(' + review.imageUrl + ')'
          };
          return (
            <div className="col-md-12" key={review.reviewReference}>

<div className="row">
<div className="col-md-4">
<div className="testimonial-author commentCardTestimonial">
                      <img src={review.customerImageUrl ? review.customerImageUrl : '/static/img/userProfileImg.png'} alt={review.customerName} className="origin round profileImgLge" onError={(e)=>{e.target.src='/static/img/userProfileImg.png'}} />
                      <p className="testimonial-author-name"><a href={review.customerProfileUrl}>{review.customerName}</a>'s review</p>
                      <StarRating starRating={review.starRating} className="icon-list list-inline-block mb0 last-minute-rating"/>
                  </div>
</div>
<div className="col-md-8">

<p className="card-text">
                      {review.comment}
                  </p>
                  <TagList tags={review.tags} maxTags={5} readOnly={true} />
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
