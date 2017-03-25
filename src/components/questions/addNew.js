import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionActions from '../../actions/questionActions';

class QuestionPopup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
   
    this.state = { question: '', wizardStep: 1 };
  }

  handleQuestionChange(e) {
    this.setState({ question: e.target.value });
  }

  submitQuestion(e) {
    e.preventDefault();
    
    let event = new MouseEvent('click', { 'view': window, 'bubbles': true, 'cancelable': false });
    let node = document.getElementById('closeReview');

    const question = { "inventoryReference": this.props.id, "question": this.refs.question.value.trim() };
    this.props.actions.postQuestion(question, this, event, node);
  }

  render(){
    return (
      <div className="modal fade" id="questionModel" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            <div className={this.state.wizardStep == 1 ? "modal-body" : "modal-body hide"}>
              <div className="row">
                <form className="modalForm" onSubmit={this.submitQuestion}>
                  <div className={this.props.errorMessage != undefined && this.props.errorMessage.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
                    <div className="bg-danger form-danger">
                    {this.props.errorMessage}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h3>Ask a Question</h3>
                    <p>Ask a question to the community and get the best travel tips from people that have been to <strong>{this.props.name}</strong>.</p>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                        <label>Question</label>
                        <textarea ref="question" className="form-control" rows="6" value={this.state.question} onChange={this.handleQuestionChange}></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-xs-center">
                      <input className="btn btn-primary" type="submit" value="Ask Question" />
                  </div>
                </form>
              </div>
            </div>
            <div className={this.state.wizardStep == 2 ? "modal-body" : "modal-body hide"}>
              <div className="row">
                <div className="col-md-12">
                  <h3>Thanks for the Question</h3>
                  <p>Thank you for posting your question. Please click <a href="#" data-dismiss="modal" id="closeReview">here</a> to close the window.</p>
                </div>
              </div>
            </div>
            <div className="modal-footer text-xs-center">
              <a href="#" data-dismiss="modal">Close</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

QuestionPopup.defaultProps = {
  id: 0,
  name: '',
  isSending: false,
  hasPosted: false
};

QuestionPopup.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  actions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPosted: PropTypes.bool
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
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPopup);
