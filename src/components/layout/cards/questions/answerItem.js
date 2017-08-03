import React, {PropTypes} from 'react';
import AnswerHelpful from '../../../social/answerHelpful';

class AnswerItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { showMore: false };
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
    e.target.src='/static/img/userProfileImg.png';
  }

  render(){
    let answer = this.props.answer;

    return (
      <li>
        <div className="row">
          <div className="col-md-2">
            <div className="booking-item-review-person">
              <a className="booking-item-review-person-avatar round" href={answer.customerProfileUrl}>
                <img src={answer.customerImageUrl ? answer.customerImageUrl : '/static/img/userProfileImg.png'} alt={answer.customerName} onError={this.handleMissingImage}/>
              </a>
              <p className="booking-item-review-person-name">
                <a href={answer.customerProfileUrl}>{answer.customerName}</a>
              </p>
              <p className="booking-item-review-person-loc">{answer.customerLocation}</p>
            </div>
          </div>
          <div className="col-md-10">
            <div className="booking-item-review-content">
              <p><a href={answer.customerProfileUrl}>{answer.customerName}</a> replied...</p>
              <p><i>"{answer.answer}"</i></p>
              <p className="questionActions">Added {answer.friendlyDate} &bull; <AnswerHelpful questionRef={this.props.questionReference} answerRef={answer.answerReference} likeCount={answer.likeCount} /> </p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

AnswerItem.propTypes = {
  questionReference: PropTypes.string.isRequired,
  answer: PropTypes.object.isRequired
};


export default AnswerItem;
