import React, {PropTypes} from 'react';

class QuestionItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  answerQuestion(e) {
    e.preventDefault();
    let ref = e.target.getAttribute('data-ref');
    let question = e.target.getAttribute('data-question');
    this.props.showAnswerPopup(ref, question);
  }

  handleMissingImage(e) {
    e.target.src='/static/img/userProfileImg.png';
  }

  render() {
    let question = this.props.question;
console.log(question);
    return (
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-2 col-2">
            <a className="booking-item-review-person-avatar round" href={question.profile.profileUrl}>
              <img src={question.profile.imageUrl ? question.profile.imageUrl : '/static/img/userProfileImg.png'} alt={question.profile.name} onError={this.handleMissingImage} />
            </a>
          </div>
          <div className={this.props.isSideComponent ? "col-md-10 col-10" : "col-md-8 col-8"}>
            <a href={question.profile.profileUrl}>{question.profile.name}</a> is looking for advice...
            {this.props.isSideComponent ? <p className="smlText">Added {question.friendlyDate}</p> : ''}
            <p><i>"{question.question}"</i></p>
            <p className="questionActions">{this.props.isAuthenticated ? (<span><a href="#" onClick={this.answerQuestion} data-ref={question.questionReference} data-question={question.question}>Answer Question</a> &bull;</span>) : ""}  {question.answers.length} {question.answers.length == 1 ? 'Answer' : 'Answers'} {!this.props.isSideComponent ? <span>&bull; Added {question.friendlyDate}</span> : ''}</p>
          </div>
          <div className={this.props.isSideComponent ? "hide" : "col-md-2 col-2"}>
            <a href={question.questionUrl}>
              <div className="col-md-12 questionResponse">
                <strong>{question.answers.length}</strong><br />{question.answers.length == 1 ? 'answer' : 'answers'}<br />to this question
              </div>
            </a>
          </div>
        </div>
        <hr className="dottedLine"/>
      </div>
    );
  }
}

QuestionItem.defaultProps = {
  question: {}
};

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired,
  isSideComponent: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  showAnswerPopup: PropTypes.func.isRequired
};


export default QuestionItem;

