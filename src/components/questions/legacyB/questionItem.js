import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../actions/customer/authenticationActions';
import * as modalActions from '../../../actions/common/modalActions';
import * as userQuestionActions from '../../../actions/customer/userQuestionActions';

class QuestionItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { showMore: false };
    this.handleMissingImage = this.handleMissingImage.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  answerQuestion(e) {
    e.preventDefault();
    let ref = e.target.getAttribute('data-ref');
    let question = e.target.getAttribute('data-question');
    this.props.userQuestionActions.resetAnswer();
    this.props.modalActions.openQuestionAnswer(ref, question, this.props.locationId, this.props.pageSize, this.props.pageNumber);
  }

  handleMissingImage(e) {
    e.target.src='/static/img/userProfileImg.png';
  }

  render(){
    let question = this.props.question;

    return (
      <li>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-2">
              <a className="booking-item-review-person-avatar round" href={question.customerProfileUrl}>
                <img src={question.customerImageUrl ? question.customerImageUrl : '/static/img/userProfileImg.png'} alt={question.customerName} onError={this.handleMissingImage}/>
              </a>
            </div>
            <div className="col-md-8">
              <a href={question.customerProfileUrl}>{question.customerName}</a> is looking for advice...

              <p><i>"{this.props.question.question}"</i></p>
              <p className="questionActions">Like { this.props.isAuthenticated ? (<span>&bull; <a href="#" onClick={this.answerQuestion} data-ref={question.questionReference} data-question={question.question}>Answer Question</a></span>) : ""} &bull; Added {question.friendlyDate}</p>
            </div>
            <div className="col-md-2">
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
  }
}

QuestionItem.defaultProps = {
  isAuthenticated: false,
  isFetching: false
};

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired,
  authenticationActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.authentication.isFetching,
    isAuthenticated: state.authentication.isAuthenticated,
    errorMessage: state.authentication.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticationActions: bindActionCreators(authenticationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
    userQuestionActions: bindActionCreators(userQuestionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionItem);
