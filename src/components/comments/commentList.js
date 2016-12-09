import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import TagList from '../common/tagList';

const CommentList = ({comments}) => {
  
  return (

    <div className="row row-wrap">
      {
        comments.map(comment => {
        return (
          <div className="col-md-4" key={comment.id}>
            <div className="card text-xs-left">
              <img src={comment.place.image} alt={comment.place.name} />

              <div className="card-block testimonial">
                <h4 className="card-title">{comment.place.name}</h4>
                <h6 className="card-subtitle text-muted">{comment.place.address}</h6>
                
                <div className="testimonial-author commentCardTestimonial">
                    <img src={comment.reviewer.profilePic} alt={comment.reviewer.name} />
                    <p className="testimonial-author-name"><a href={comment.reviewer.profileUrl}>{comment.reviewer.name}</a>'s review</p>
                    <StarRating starRating={comment.reviewer.starRating} className="icon-list list-inline-block mb0 last-minute-rating"/>
                </div>
                <p className="card-text">
                    {comment.reviewer.comment}
                </p>
                <TagList tags={comment.place.tags} />
              </div>
            </div> 
          </div>
          );
        })
      }
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
