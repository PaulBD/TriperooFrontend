import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../../actions/customer/authenticationActions';
import * as locationQuestionsActions from '../../../../actions/location/questions/questionsActions';
import * as modalActions from '../../../../actions/common/modalActions';
import * as userQuestionActions from '../../../../actions/customer/userQuestionActions';
import QuestionList from './listCard';
import Pagination from "react-js-pagination";
import Toastr from 'toastr';
import Loader from '../../../loaders/contentLoader';

class Questions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { questions: [], activePage: 1, isLoadingQuestions: false};
    this.changePage = this.changePage.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
    this.showAnswerPopup = this.showAnswerPopup.bind(this);
  }

  componentWillMount() {
    if (this.props.locationId > 0) {
      this.loadReviews();
    }
  }

  loadReviews() {
    this.setState({isLoadingQuestions: true});
    this.props.locationQuestionsActions.loadQuestionsByLocationId(this.props.locationId, this.props.parentLocationId, this.props.pageSize, this.props.pageNumber)
      .then(() => this.setState({isLoadingQuestions: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingQuestions: false});
      });
  }

  postQuestion(e) {
    e.preventDefault();
    this.props.modalActions.openQuestion(this.props.locationId, this.props.parentLocationId, this.props.locationNameLong, this.props.locationType);
  }

  changePage(value) {
    this.setState({ activePage: value });

    this.setState({isLoadingQuestions: true});
    this.props.locationQuestionsActions.loadQuestionsByLocationId(this.props.locationId, this.props.parentLocationId, this.props.pageSize, value - 1)
      .then(() => this.setState({isLoadingQuestions: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingQuestions: false});
      });
  }

  showAnswerPopup(ref, question) {
    this.props.userQuestionActions.resetAnswer();
    this.props.modalActions.openQuestionAnswer(ref, question, this.props.locationId, this.props.parentLocationId, this.props.pageSize, this.props.pageNumber);
  }

  render(){
    let title = '';

    if (this.props.showTitle) {
      title = (<div className="col-md-12"><h4 className="locationTitle">Recent Questions...</h4></div>);
    }

    let questionText = '';
    let questionUrl = this.props.locationUrl + '/questions';

    if (!this.state.isLoadingQuestions) {
      if (this.props.questionList) {
        if (this.props.questionList.length > 0) {
          if (this.props.isSideComponent) {
            questionText = (<div className="col-md-12"><p className="text-right"><a href={questionUrl}>Read all questions</a></p></div>);
          }
        }
      }

      return (
        <div className="row">
          {title}
          <QuestionList questions={this.props.questionList} locationId={this.props.locationId} prentLocationId={this.props.parentLocationId} locationName={this.props.locationName} pageSize={this.props.pageSize} pageNumber={this.props.pageNumber} isAuthenticated={this.props.isAuthenticated} isSideComponent={this.props.isSideComponent} showAnswerPopup={this.showAnswerPopup}/>

          <div className={this.props.isSideComponent ? "hide" : "row text-center"}>
            <div className="gap gap-small"></div>
            <Pagination innerClass={this.props.questionCount > this.props.pageSize ? "pagination text-center" : "hide"}
                        activePage={this.state.activePage} itemsCountPerPage={this.props.pageSize} totalItemsCount={this.props.questionCount}
                        pageRangeDisplayed={this.props.pageSize} onChange={this.changePage}/>
          </div>
          {questionText}
        </div>
      );
    }
    else {
      return (
        <div className="row">
          {title}
          <Loader showLoader={true} />
        </div>
      );
    }
  }
}

Questions.defaultProps = {
  showTitle: true,
  locationType: 'all',
  locationId: 0,
  parentLocationId: 0,
  pageSize: 0,
  pageNumber: 0,
  isFetching: false,
  questionList: [],
  isAuthenticated: false
};

Questions.propTypes = {
  questionList: PropTypes.array.isRequired,
  authenticationActions: PropTypes.object.isRequired,
  locationQuestionsActions: PropTypes.object.isRequired,
  userQuestionActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  locationType: PropTypes.string,
  locationName: PropTypes.string,
  locationUrl: PropTypes.string,
  locationNameLong: PropTypes.string,
  locationId: PropTypes.number,
  parentLocationId: PropTypes.number,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  showTitle: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  questionCount: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isSideComponent: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    questionList: state.locationQuestions.questions ? state.locationQuestions.questions.questionDto : [],
    questionCount: state.locationQuestions.questions ? state.locationQuestions.questions.questionCount : 0,
    isFetching: state.locationQuestions ? state.locationQuestions.isFetching : false,
    isAuthenticated: state.authentication.isAuthenticated,
    errorMessage: state.authentication.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticationActions: bindActionCreators(authenticationActions, dispatch),
    locationQuestionsActions: bindActionCreators(locationQuestionsActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
    userQuestionActions: bindActionCreators(userQuestionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
