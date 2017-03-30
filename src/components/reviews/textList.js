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
    this.props.actions.loadReviewsByLocationId(this.props.locationId, this.props.locationType, this.props.limit, this.props.offset);
  }

  render(){
  const {reviews} = this.props;

  return (
      <div className="row">
        <h4>Member Reviews</h4>
        <hr />
        <div className="gap gap-small"></div>
        <ReviewList reviews={this.props.reviews} locationId={this.props.locationId} locationName={this.props.locationName}/>
      </div>    
      );
  }
}

Reviews.defaultProps = {
  showTitle: true,
  locationType: 'all',
  locationId: 0,
  limit: 0,
  offset: 0,
  isFetching: false,
  reviews: []
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  locationType: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  locationId: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  showTitle: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    reviews: state.reviewList ? state.reviewList.reviewList : [],
    isFetching: state.reviewList ? state.reviewList.isFetching : false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reviewsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);