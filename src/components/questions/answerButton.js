import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userQuestionActions from '../../actions/customer/userQuestionActions';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as modalActions from '../../actions/common/modalActions';
let titleCase = require('title-case');

class AnswerQuestionButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.askQuestion = this.askQuestion.bind(this);
  }

  askQuestion(e) {
    e.preventDefault();

    this.props.userQuestionActions.resetAnswer();
    this.props.modalActions.openQuestionAnswer(this.props.questionReference, this.props.question, this.props.locationId, this.props.pageSize, this.props.pageNumber);
  }

  render(){
    if (this.props.isAuthenticated) {

      let message = '';

      if (this.props.locationName == '' || this.props.locationName == undefined)
      {
        message = 'Answer this question';
      }
      else {
        if (this.props.locationName.length > 15)
        {
          message = 'Answer this question';
        }
        else {
          message = 'Answer this question about ' + titleCase(this.props.locationName);
        }
      }

      return (
        <div>
          <a href="#" className="btn btn-secondary questionBtn" onClick={this.askQuestion}>
            <i className="fa fa-question-circle"></i>
            {message}
          </a>
          <div className="gap-small"></div>
        </div>
      );
    }
    else { return null; }
  }
}

AnswerQuestionButton.defaultProps = {
  isAuthenticated: false,
  nameShort: '',
  name: ''
};


AnswerQuestionButton.propTypes = {
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  locationNameLong: PropTypes.string,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  questionReference: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  authenticationActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  userQuestionActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticationActions: bindActionCreators(authenticationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
    userQuestionActions: bindActionCreators(userQuestionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestionButton);
