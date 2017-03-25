import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewActions from '../../actions/reviewActions';

import Loader from '../common/loadingDots';
import ReviewItem from './reviewItem';

class ReviewList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.reviews != undefined && this.props.reviews.length > -1) {
      if (this.props.reviews.length > 0)
      {
        return (
          <ul className="booking-item-reviews list">
            {
              this.props.reviews.map(function (review, i) {
                return (<ReviewItem key={i} review={review} />);
              })
            }
          </ul>
        );
      }
      else {
        return (<p>There are no reviews available for {this.props.locationName}. Be the first to post a review.</p>);
      }
    } 
    else {
      return (<Loader showLoader={true} />);
    }
  }
};

ReviewList.defaultProps = {
  isSending: false,
  hasPosted: false
};

ReviewList.propTypes = {
  locationName: PropTypes.string.isRequired,
  locationId: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);

