import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionActions from '../../actions/questionsActions';
import QuestionList from './list';
import {browserHistory} from 'react-router';
import Loader from '../common/loadingDots';

class Questions extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadQuestionsByLocationId(this.props.locationId, this.props.limit, this.props.offset);
  }
  
  render(){
    const {questions} = this.props;

    let questionText = '';

    if (questions.length == 0)
    {
      questionText= (<p>Be the first to ask a local expert a question about {this.props.locationName}.</p>);
    }

    return (
      <div className="sidebar-widget">
          <h4>Recent Questions</h4>
          <QuestionList questions={questions} locationName={this.props.locationName} />
          <Loader showLoader={this.props.isFetching} />
          {questionText}
      </div>    
      );
  }
}

Questions.defaultProps = {
  questions: [],
  isFetching: false
};

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  locationId: PropTypes.number.isRequired,
  locationName: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.questions.isFetching ? state.questions.isFetching : false,
    questions: state.questions.questions ? state.questions.questions : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
