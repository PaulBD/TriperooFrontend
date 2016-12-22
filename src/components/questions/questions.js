import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionActions from '../../actions/questionActions';
import QuestionList from './list';
import {browserHistory} from 'react-router';
import Loader from '../common/loadingDots';

class Questions extends React.Component {
  constructor(props, context) {
      super(props, context);
    this.state = { isLoading: 1 };
  }

  componentDidMount() {
    this.state = { isLoading: 0 };
      if (this.props.searchType == 'place' && this.props.searchId > 0) {
        this.props.actions.loadQuestions(this.props.searchType, this.props.searchId, this.props.limit, this.props.offset);
      }
      else {
        this.props.actions.loadGenericQuestions(this.props.searchType, this.props.searchId, this.props.limit, this.props.offset);
      }
  }
    render(){
    const {questions} = this.props;

    return (
        <div className="sidebar-widget">
            <h4>Recent Questions</h4>
            <QuestionList questions={questions} />
            <Loader showLoader={this.state.isLoading} />
        </div>    
        );
    }
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  searchType: PropTypes.string.isRequired,
  searchId: PropTypes.number.isRequired,
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
