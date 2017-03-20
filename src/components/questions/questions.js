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
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.props.actions.loadQuestions(this.props.id, this.props.limit, this.props.offset);
    this.state = { isLoading: false };
  }
  render(){
    const {questions} = this.props;

    if (questions.length > 0)
    {
      return (
        <div className="sidebar-widget">
            <h4>Recent Questions</h4>
            <QuestionList questions={questions} />
            <Loader showLoader={this.state.isLoading} />
        </div>    
        );
    }
    else { return null; }
  }
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
