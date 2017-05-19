import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as modalActions from '../../actions/common/modalActions';
import Loader from '../common/loadingDots';

class QuestionList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  answerQuestion(e) {
    e.preventDefault();
    let id = e.target.getAttribute('data-id');
    let question = e.target.getAttribute('data-question');
    this.props.modalActions.openQuestionAnswer(id, question);
  }

  handleMissingImage(e) {
      e.target.src='/static/img/userProfileImg.png';
  }

  render() {
    if (this.props.questions != undefined && this.props.questions.length > -1) {


      return (
          <ul className="thumb-list thumb-list-right">
          {
            this.props.questions.map(question => {
            return (
                <li key={question.questionReference}>
                    <a href={question.customerProfileUrl}>
                      <img src={question.customerImageUrl ? question.customerImageUrl : '/static/img/userProfileImg.png'} alt={question.customerName} className="origin round profileImgLge" onError={this.handleMissingImage} />
                    </a>
                    <div className="thumb-list-item-caption">
                        <p className="thumb-list-item-meta">{question.friendlyDate}</p>
                        <h4 className="thumb-list-item-title"><a href={question.customerProfileUrl}>{question.customerName}</a></h4>
                        <p className="thumb-list-item-desciption">
                          { this.props.isAuthenticated ?  <a href="#" onClick={this.answerQuestion} data-id={question.questionReference} data-question={question.question}>{question.question.length > 50 ? question.question.substring(0, 50) + '...' : question.question}</a> : question.question.length > 50 ? question.question.substring(0, 50) + '...' : question.question}
                        </p>
                    </div>
                </li>
              );
            })
          }
        </ul>
      );
    }
    else {
      return (<Loader showLoader={true} />);
    }
  }
}

QuestionList.defaultProps = {
  isAuthenticated: false,
  isFetching: false
};

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  authenticationActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
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
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
