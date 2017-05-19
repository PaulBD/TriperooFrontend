import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userQuestionActions from '../../actions/customer/userQuestionActions';

class AnswerPopup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.closeModal = this.closeModal.bind(this);
   
    this.state = { answer: '' };
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

    const answer = { "questionId": this.props.questionId, "answer": this.refs.answer.value.trim() };
    console.log(answer);
    this.props.actions.postAnswer(answer);
  }

  render(){
    return (
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            <div className={!this.props.hasPosted ? "modal-body" : "modal-body hide"}>
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
                  <div className="col-md-12 text-xs-center">
                      <input className="btn btn-primary" type="submit" value="Submit Answer" />
                  </div>
                </form>
              </div>
            </div>
            <div className={this.props.hasPosted ? "modal-body" : "modal-body hide"}>
              <div className="row">
                <div className="col-md-12">
                  <h3>Thanks for Helping!</h3>
                  <p>Thank you for helping answer this question. Please click <a href="#" onClick={this.closeModal}>here</a> to close the window.</p>
                </div>
              </div>
            </div>
            <div className="modal-footer text-xs-center">
              <a href="#" onClick={this.closeModal}>Close</a>
            </div>
          </div>
        </div>
    );
  }
}

AnswerPopup.defaultProps = {
  questionId: 0,
  isSending: false,
  hasPosted: false
};

AnswerPopup.propTypes = {
  questionId: PropTypes.number,
  question: PropTypes.string.isRequired,
  userQuestionActions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPosted: PropTypes.bool,
  closeModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    isSending: state.question.isFetching,
    errorMessage: state.question.errorMessage,
    hasPosted: state.question.hasPosted 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userQuestionActions: bindActionCreators(userQuestionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPopup);
