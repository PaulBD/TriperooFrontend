import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import TagList from '../common/tagList';
import ReviewHelpful from './reviewHelpful';

class ReviewItem extends React.Component {
  constructor(props, context) {
    super(props, context);
        this.state = { showMore: false };
        this.onHandleTextClick = this.onHandleTextClick.bind(this);
    }

    onHandleTextClick(event) {
        event.preventDefault();
        if (this.state.showMore) {
            this.setState({ showMore: false });
        }
        else {
            this.setState({ showMore: true });
        }
    }

  render(){
    let review = this.props.review;
    let link = '';

    let comment = this.props.review.comment;


    let showMore = 'Read Less';

    if (!this.state.showMore)
    {
        if (comment.length > 480)
        {
            comment = comment.substring(0, 480) + '...';
            showMore = 'Read More';
        }
    }

    if (comment.length > 480)
    {
      link = (
        <div className="booking-item-review-expand">
          <a className="booking-item-review-expand-more" href="#" onClick={this.onHandleTextClick}>{showMore} <i className="fa fa-angle-down"></i></a>
        </div>
      );
    }

    return (
      <li>
        <div className="row">
            <div className="col-md-2">
                <div className="booking-item-review-person">
                    <a className="booking-item-review-person-avatar round" href={review.customerProfileUrl}>
                        <img src={review.customerImageUrl ? review.customerImageUrl : '/static/img/userProfileImg.png'} alt={review.customerName} onError={(e)=>{e.target.src='/static/img/userProfileImg.png'}}/>
                    </a>
                    <p className="booking-item-review-person-name">
                      <a href={review.customerProfileUrl}>{review.customerName}</a>
                    </p>
                    <p className="booking-item-review-person-loc">{review.customerLocation}</p>
                    <small><a href={review.customerProfileUrl}>{review.customerReviewCount}</a></small>
                </div>
            </div>
            <div className="col-md-10">
                <div className="booking-item-review-content">
                    <StarRating starRating={review.starRating} className="icon-list list-inline-block mb0 last-minute-rating"/>
                    <div className="gap gap-small"></div>
                    <p>{comment}</p>
                    {link}
                    <div className="gap gap-small"></div>
                    <TagList tags={review.tags} maxTags={10} readOnly={true} />
                    <div className="gap gap-small"></div>
                    <ReviewHelpful reviewRef={review.reviewReference} likeCount={review.likeCount} />
                </div>
            </div>
        </div>
    </li>  
    );
  }
}

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired
};


export default ReviewItem;
