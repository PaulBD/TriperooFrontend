import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userQuestionActions from '../../actions/customer/userQuestionActions';
import * as locationQuestionsActions from '../../actions/location/questions/questionsActions';

class AnswerPopup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = { answer: '', postingAnswer: false};
  }

  handleAnswerChange(e) {
    this.setState({ answer: e.target.value });
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  submitAnswer(e) {
    e.preventDefault();
    this.setState({postingAnswer: true});
    const answer = { "questionReference": this.props.questionReference, "answer": this.refs.answer.value.trim(), "likeCount": 0 };
    this.props.userQuestionActions.postAnswer(answer)
      .then(() =>{
        this.setState({postingAnswer: false});
        this.props.locationQuestionsActions.loadQuestionsByLocationId(this.props.locationId, this.props.pageSize, this.props.pageNumber);
      })
      .catch(error => {
        this.setState({postingAnswer: false});
      });
  }

  render(){
    return (
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            <div className={!this.props.hasPostedAnswer ? "modal-body" : "modal-body hide"}>
              <div className="row">
                <form className="modalForm" onSubmit={this.submitAnswer}>
                  <div className={this.props.errorMessage != undefined && this.props.errorMessage.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
                    <div className="bg-danger form-danger">
                    {this.props.errorMessage}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h4>{this.props.question}</h4>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                        <label>Answer</label>
                        <textarea ref="answer" className="form-control" rows="6" value={this.state.answer} onChange={this.handleAnswerChange}></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                      <input className="btn btn-primary" type="submit" value="Submit Answer" disabled={this.state.postingAnswer} />
                  </div>
                </form>
              </div>
            </div>
            <div className={this.props.hasPostedAnswer ? "modal-body" : "modal-body hide"}>
              <div className="row">
                <div className="col-md-12">
                  <h3>Thanks for Helping!</h3>
                  <p>Thank you for helping answer this question. Please click <a href="#" onClick={this.closeModal}>here</a> to close the window.</p>
                </div>
              </div>
            </div>
            <div className="modal-footer text-center">
              <a href="#" onClick={this.closeModal}>Close</a>
            </div>
          </div>
        </div>
    );
  }
}

AnswerPopup.defaultProps = {
  questionReference: '',
  isSending: false,
  hasPosted: false
};

AnswerPopup.propTypes = {
  arrayPosition: PropTypes.number,
  questionReference: PropTypes.string,
  question: PropTypes.string.isRequired,
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  userQuestionActions: PropTypes.object.isRequired,
  locationQuestionsActions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPostedAnswer: PropTypes.bool,
  closeModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    isSending: state.question.isFetching,
    errorMessage: state.question.errorMessage,
    hasPostedAnswer: state.question.hasPostedAnswer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userQuestionActions: bindActionCreators(userQuestionActions, dispatch),
    locationQuestionsActions: bindActionCreators(locationQuestionsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPopup);
