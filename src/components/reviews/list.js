import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewsActions from '../../actions/reviewsActions';
import ReviewCard from './reviewCard';
import ContentLoader from '../common/contentLoader';

class Reviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { reviews: [] };
  }

  componentWillMount() {
    this.props.reviewActions.loadReviewsByLocationId(this.props.locationId, this.props.locationType, this.props.limit, this.props.offset);
  }

  render(){
    const {reviews} = this.props;

    let title = null;

    if (this.props.showTitle) {
      title = (
        <div>
          <h3 className="mb20">Share The Knowledge</h3>
          <p>Community is the heart of everything we do, share tips on where to go and what to do with other<br />like-minded people and help others discover amazing places, even earn commission whilst you do it!</p>
        </div>
      );
    }

    if (!this.props.isFetching)
    {
      return (
        <div>
            {title}
            <div className="gap gap-small"></div>
            <ReviewCard reviews={reviews} maxTags={5} />
        </div>    
      );
    }
    else {
      return (
        <div>
            {title}
            <div className="gap gap-small"></div>
            <div className="row row-wrap">
              <div className="col-md-4">
                <ContentLoader showLoader={true} />
              </div>              
              <div className="col-md-4">
                <ContentLoader showLoader={true} />
              </div>              
              <div className="col-md-4">
                <ContentLoader showLoader={true} />
              </div>
            </div>
        </div>
      );
    }
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
  reviewActions: PropTypes.object.isRequired,
  locationType: PropTypes.string.isRequired,
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
    reviewActions: bindActionCreators(reviewsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);