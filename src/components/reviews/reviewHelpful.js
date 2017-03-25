import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewActions from '../../actions/reviewActions';
import ReviewList from './listCard';

class ReviewHelpful extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.likeReview = this.likeReview.bind(this);
    this.state = { likeCount: 0, hasClicked: false };
  }

  componentWillMount() {
    this.setState({ likeCount: this.props.likeCount });
  }

  likeReview(e)
  {
    e.preventDefault();
    this.props.actions.likeReview(this.props.reviewRef);
    this.setState({ likeCount: this.state.likeCount + 1, hasClicked: true });
  }

  render(){
    if (!this.state.hasClicked)
    {
      return (
        <p className="booking-item-review-rate">Was this review helpful?
            <a className="fa fa-thumbs-o-up box-icon-inline round" href="#" onClick={this.likeReview}></a><b className="text-color"> {this.state.likeCount}</b>
        </p> 
      );
    } 
    else {
      return (<p className="booking-item-review-rate">Thanks!</p>);
    }
  }
}


ReviewHelpful.defaultProps = {
  isSending: false,
  hasPosted: false
};

ReviewHelpful.propTypes = {
  reviewRef: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
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
    actions: bindActionCreators(reviewActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewHelpful);
