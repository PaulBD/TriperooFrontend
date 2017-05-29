import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationQuestionsActions from '../../actions/location/locationQuestionsActions';
import * as userQuestionActions from '../../actions/customer/userQuestionActions';
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
    this.props.locationQuestionsActions.loadQuestionsByLocationId(this.props.locationId, this.props.limit, this.props.offset)
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

    if (!this.state.isLoadingQuestions) {
      if (this.props.questionList.length == 0) {
        questionText = (<p>Be the first to ask a local expert a question about {this.props.locationName}.</p>);
      }
    }

    if (!this.state.isLoadingQuestions) {
      return (
        <div className="sidebar-widget">
          <h4>Recent Questions</h4>
          <QuestionList questions={this.props.questionList} locationName={this.props.locationName}/>
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
  questionList: [],
  hasUpdatedQuestion: false
};

Questions.propTypes = {
  questionList: PropTypes.array.isRequired,
  locationQuestionsActions: PropTypes.object.isRequired,
  userQuestionActions: PropTypes.object.isRequired,
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    questionList: state.locationQuestions.questions ? state.locationQuestions.questions : [],
    hasUpdatedQuestion: state.question.hasPosted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationQuestionsActions: bindActionCreators(locationQuestionsActions, dispatch),
    userQuestionActions: bindActionCreators(userQuestionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
