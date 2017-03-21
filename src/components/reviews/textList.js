import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewsActions from '../../actions/reviewsActions';
import ReviewList from './listCard';

class Reviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { reviews: [] };
  }

  componentWillMount() {
    this.props.actions.loadReviews(this.props.searchId, this.props.searchType, this.props.limit, this.props.offset);
  }

  render(){
  const {reviews} = this.props;

  return (
      <div className="row">
          <h4>Reviews</h4>
          <hr />
          <div className="gap gap-small"></div>
          <ReviewList reviews={reviews} maxTags={5} />
      </div>    
      );
  }
}

Reviews.defaultProps = {
  showTitle: true,
  searchType: 'all',
  searchId: 0,
  limit: 0,
  offset: 0
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  searchType: PropTypes.string.isRequired,
  searchId: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  showTitle: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    reviews: state.reviews
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reviewsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);