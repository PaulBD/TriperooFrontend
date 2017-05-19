import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import TagList from '../common/tagList';
import Loader from '../common/loadingDots';

class ReviewCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
      e.target.src='/static/img/userProfileImg.png';
  }

  render() {
    return (
      <div className="row row-wrap">
        {
          this.props.reviews.map(review => {

            let style = {
              backgroundImage: 'url(' + review.imageUrl + ')'
            };

            return (
              <div className="col-md-4" key={review.reviewReference}>
                <div className="card reviewCard text-xs-left">
                <div className="cardBg reviewBg" style={style} ></div>

                  <div className="card-block testimonial">
                    <h4 className="card-title"><a href={review.placeUrl}>{review.placeNameShort != null && review.placeNameShort.length > 35 ? review.placeNameShort.substring(0, 35) + '...' : review.placeNameShort}</a></h4>
                    <p className="card-subtitle text-muted cardAddress">{review.placeAddress}</p>

                    <div className="testimonial-author commentCardTestimonial">
                        <img src={review.customerImageUrl ? review.customerImageUrl : '/static/img/userProfileImg.png'} alt={review.customerName} className="origin round profileImgLge" onError={this.handleMissingImage} />
                        <p className="testimonial-author-name"><a href={review.customerProfileUrl}>{review.customerName}</a>'s review</p>
                        <StarRating starRating={review.starRating} className="icon-list list-inline-block mb0 last-minute-rating"/>
                    </div>
                    <p className="card-text">
                        {review.comment.length > 220 ? review.comment.substring(0, 220) + '...' : review.comment}
                    </p>
                    <TagList tags={review.tags} maxTags={this.props.maxTags} readOnly={true} />
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

ReviewCard.defaultProps = {
  reviews: [],
  maxTags: 5
};

ReviewCard.propTypes = {
  reviews: PropTypes.array.isRequired,
  maxTags: PropTypes.number.isRequired
};

export default ReviewCard;
