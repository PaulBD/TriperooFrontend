import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationQuestionsActions from '../../../actions/location/locationQuestionsActions';
import * as modalActions from '../../../actions/common/modalActions';
import QuestionList from './listCard';
import Pagination from "react-js-pagination";
import Toastr from 'toastr';
import Loader from '../../common/loadingDots';

class Questions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { questions: [], activePage: 1, isLoadingQuestions: false};
    this.changePage = this.changePage.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
  }

  componentWillMount() {
    this.loadReviews();
  }

  loadReviews() {
      this.setState({isLoadingQuestions: true});
      this.props.locationQuestionsActions.loadQuestionsByLocationId(this.props.locationId, this.props.pageSize, this.props.pageNumber)
        .then(() => this.setState({isLoadingQuestions: false}))
        .catch(error => {
          Toastr.error(error);
          this.setState({isLoadingQuestions: false});
        });
  }

  postQuestion(e) {
    e.preventDefault();
    this.props.modalActions.openQuestion(this.props.locationId, this.props.locationNameLong, this.props.locationType);
  }

  changePage(value) {
    this.setState({ activePage: value });

      this.setState({isLoadingQuestions: true});
      this.props.locationQuestionsActions.loadQuestionsByLocationId(this.props.locationId, this.props.pageSize, value - 1)
        .then(() => this.setState({isLoadingQuestions: false}))
        .catch(error => {
          Toastr.error(error);
          this.setState({isLoadingQuestions: false});
        });
  }


  render(){
    let title = '';

    if (this.props.showTitle) {
      title = (<div><a href="#" onClick={this.postQuestion} className="reviewLink">Been to {this.props.locationName}? Write a review</a><h4>Reviews</h4><hr /><div className="gap gap-small"></div></div>);
    }
    if (!this.state.isLoadingQuestions) {
      return (
        <div className="row">
          {title}
          <QuestionList questions={this.props.questionList} locationId={this.props.locationId} locationName={this.props.locationName} pageSize={this.props.pageSize} pageNumber={this.props.pageNumber}/>

          <div className="gap gap-small"></div>
          <div className="row text-xs-center">
            <Pagination innerClass={this.props.questionCount > 10 ? "pagination text-xs-center" : "hide"}
                        activePage={this.state.activePage} itemsCountPerPage={this.props.pageSize} totalItemsCount={this.props.questionCount}
                        pageRangeDisplayed={this.props.pageSize} onChange={this.changePage}/>
          </div>
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
  pageSize: 0,
  pageNumber: 0,
  isFetching: false,
  questionList: []
};

Questions.propTypes = {
  questionList: PropTypes.array.isRequired,
  locationQuestionsActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  locationType: PropTypes.string,
  locationName: PropTypes.string,
  locationNameLong: PropTypes.string,
  locationId: PropTypes.number,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  showTitle: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  questionCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    questionList: state.locationQuestions.questions ? state.locationQuestions.questions.questionDto : [],
    questionCount: state.locationQuestions.questions ? state.locationQuestions.questions.questionCount : 0,
    isFetching: state.locationQuestions ? state.locationQuestions.isFetching : false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationQuestionsActions: bindActionCreators(locationQuestionsActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
