import React, {PropTypes} from 'react';

import Loader from '../common/loadingDots';

class ListCard extends React.Component {
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
    if (this.props.questions != undefined && this.props.questions.length > -1) {
      if (this.props.questions.length > 0)
      {
        let isSideComponent = this.props.isSideComponent;
        let isAuthenticated = this.props.isAuthenticated;

        return (
          <ul className="booking-item-reviews list">
            {
              this.props.questions.map(function (question, i) {
                return (
                  <li key={question.questionReference}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="col-md-2">
                          <a className="booking-item-review-person-avatar round" href={question.customerProfileUrl}>
                            <img src={question.customerImageUrl ? question.customerImageUrl : '/static/img/userProfileImg.png'} alt={question.customerName} onError={this.handleMissingImage} />
                          </a>
                        </div>
                        <div className={isSideComponent ? "col-md-10" : "col-md-8"}>
                          <a href={question.customerProfileUrl}>{question.customerName}</a> is looking for advice...

                          <p><i>"{question.question}"</i></p>
                          <p className="questionActions">{ isAuthenticated ? (<span><a href="#" onClick={this.answerQuestion} data-ref={question.questionReference} data-question={question.question}>Answer Question</a></span>) : ""} &bull; Added {question.friendlyDate}</p>
                        </div>
                        <div className={isSideComponent ? "hide" : "col-md-2"}>
                          <a href={question.questionUrl}>
                            <div className="col-md-12 questionResponse">
                              <strong>{question.answers.length}</strong><br />{question.answers.length == 1 ? 'response' : 'responses'} on this list
                            </div>
                          </a>
                        </div>
                      </div>

                    </div>
                    <hr className="dottedLine"/>
                  </li>
                );
              }, this)
            }
          </ul>
        );
      }
      else {
        return (<p>There are no questions available for {this.props.locationName}. Be the first to ask a question.</p>);
      }
    }
    else {
      return (<Loader showLoader={true} />);
    }
  }
}

ListCard.defaultProps = {
  questions: []
};

ListCard.propTypes = {
  locationName: PropTypes.string,
  locationId: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isSideComponent: PropTypes.bool.isRequired,
  showAnswerPopup: PropTypes.func.isRequired
};


export default ListCard;

