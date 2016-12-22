import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewActions from '../../actions/reviewActions';
import ReviewList from './list';
import {browserHistory} from 'react-router';

class Reviews extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = { reviews: [] };

      if (this.props.searchType == 'place' && this.props.searchId > 0) {
        this.props.actions.loadReviews(this.props.searchType, this.props.searchId, this.props.limit, this.props.offset);
      }
      else {
        this.props.actions.loadGenericReviews(this.props.searchType, this.props.searchId, this.props.limit, this.props.offset);
      }
  }
    render(){
    const {reviews} = this.props;

    let html = null;

    if (this.props.showTitle == 1) {
      html = (
        <div>
          <h3 className="mb20">Share The Knowledge</h3>
          <p>Community is the heart of everything we do, share tips on where to go and what<br />to do with other like-minded people and help others discover amazing places.</p>
        </div>
      );
    }

    return (
        <div>
            {html}
            <div className="gap gap-small"></div>
            <ReviewList reviews={reviews} maxTags={5} />
        </div>    
        );
    }
}

Reviews.defaultProps = {
  showTitle: 1
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  searchType: PropTypes.string.isRequired,
  searchId: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  showTitle: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return {
    reviews: state.reviews
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reviewActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);