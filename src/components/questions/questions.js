import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationQuestionsActions from '../../actions/location/locationQuestionsActions';
import QuestionList from './list';
import {browserHistory} from 'react-router';
import Loader from '../common/loadingDots';

class Questions extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.locationQuestionsActions.loadQuestionsByLocationId(this.props.locationId, this.props.limit, this.props.offset);
  }
  
  render(){
    let questionText = '';

    if (this.props.questionList.length == 0)
    {
      questionText= (<p>Be the first to ask a local expert a question about {this.props.locationName}.</p>);
    }

    return (
      <div className="sidebar-widget">
          <h4>Recent Questions</h4>
          <QuestionList questions={this.props.questionList} locationName={this.props.locationName} />
          <Loader showLoader={this.props.isFetching} />
          {questionText}
      </div>    
      );
  }
}

Questions.defaultProps = {
  questionList: [],
  isFetching: false
};

Questions.propTypes = {
  questionList: PropTypes.array.isRequired,
  locationQuestionsActions: PropTypes.object.isRequired,
  locationId: PropTypes.number.isRequired,
  locationName: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locationQuestions.isFetching ? state.locationQuestions.isFetching : false,
    questionList: state.locationQuestions.questions ? state.locationQuestions.questions : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationQuestionsActions: bindActionCreators(locationQuestionsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
