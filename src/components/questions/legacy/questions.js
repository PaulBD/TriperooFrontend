import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationQuestionsActions from '../../actions/location/locationQuestionsActions';
import QuestionList from './list';
import Loader from '../common/loadingDots';
import Toastr from 'toastr';

class Questions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateQuestions = this.updateQuestions.bind(this);
    this.state = { isLoadingQuestions: false };
  }

  componentDidMount() {
    this.updateQuestions();
  }

  updateQuestions() {
    this.setState({isLoadingQuestions: true});
    this.props.locationQuestionsActions.loadQuestionsByLocationId(this.props.locationId, this.props.pageSize, this.props.pageNumber)
      .then(() =>{
        this.setState({isLoadingQuestions: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingQuestions: false});
      });
  }

  render(){
    let questionText = '';
    let questionUrl = this.props.locationUrl + '/questions';

    if (!this.state.isLoadingQuestions) {
      if (this.props.questionList && this.props.questionList.questionDto) {
        if (this.props.questionList.questionDto.length == 0) {
          questionText = (<p>Be the first to ask a local expert a question about {this.props.locationName}.</p>);
        }
        else {
          questionText = (<p className="text-xs-right">
            <hr />
            <a href={questionUrl}>Read all questions</a></p>);
        }
      }
    }

    if (!this.state.isLoadingQuestions) {
      return (
        <div className="sidebar-widget">
          <h4>Recent Questions</h4>
          <QuestionList questions={this.props.questionList} locationName={this.props.locationName} locationId={this.props.locationId} pageSize={this.props.pageSize} pageNumber={this.props.pageNumber}/>
          {questionText}
        </div>
      );
    }
    else {
      return (
        <div className="sidebar-widget">
          <h4>Recent Questions</h4>
          <Loader showLoader={this.state.isLoadingQuestions}/>
        </div>
      );
    }
  }
}

Questions.defaultProps = {
  questionList: {},
  hasUpdatedQuestion: false
};

Questions.propTypes = {
  questionList: PropTypes.object.isRequired,
  locationQuestionsActions: PropTypes.object.isRequired,
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationUrl: PropTypes.string,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    questionList: state.locationQuestions.questions ? state.locationQuestions.questions : {},
    hasUpdatedQuestion: state.question.hasPosted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationQuestionsActions: bindActionCreators(locationQuestionsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
