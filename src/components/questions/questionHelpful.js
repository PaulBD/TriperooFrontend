import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userQuestionActions from '../../actions/customer/userQuestionActions';

class ReviewHelpful extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.likeQuestion = this.likeQuestion.bind(this);
    this.state = { likeCount: 0, hasClicked: false };
  }

  componentWillMount() {
    this.setState({ likeCount: this.props.likeCount });
  }

  likeQuestion(e)
  {
    e.preventDefault();
    this.props.userQuestionActions.likeQuestion(this.props.questionRef.replace("question:", ""));
    this.setState({ likeCount: this.state.likeCount + 1, hasClicked: true });
  }

  render(){
    if (!this.state.hasClicked)
    {
      return (
        <span className="booking-item-review-rate">Was this question helpful?
          <a className="fa fa-thumbs-o-up box-icon-inline round" href="#" onClick={this.likeQuestion}></a><b className="text-color"> {this.state.likeCount}</b>
        </span>
      );
    }
    else {
      return (<span className="booking-item-review-rate">Thanks!</span>);
    }
  }
}


ReviewHelpful.defaultProps = {
  isSending: false,
  hasPosted: false
};

ReviewHelpful.propTypes = {
  questionRef: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  userQuestionActions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPosted: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    isSending: state.review.isFetching,
    errorMessage: state.review.errorMessage,
    hasPosted: state.review.hasPosted,
    reviews: state.reviews
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userQuestionActions: bindActionCreators(userQuestionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewHelpful);
