import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationReviewsActions from '../../actions/location/locationReviewsActions';
import ReviewCard from './reviewCard';
import ContentLoader from '../common/contentLoader';

class Reviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { reviews: [] };
  }

  componentWillMount() {
    if (this.props.locationType != 'all' && this.props.locationId > 0)
    {
      this.props.locationReviewsActions.loadReviewsByLocationId(this.props.locationId, this.props.pageSize, this.props.pageNumber);
    }
    else {
      this.props.locationReviewsActions.loadReviewsByType(this.props.locationType, this.props.pageSize, this.props.pageNumber);
    }
  }

  render(){
    const {reviews} = this.props;

    let title = null;

    if (this.props.showTitle) {
      if (reviews.length > 0)
      {
        title = (
          <div>
            <h3 className="mb20">Share The Knowledge</h3>
            <p>Community is the heart of everything we do, share tips on where to go and what to do with other<br />like-minded people and help others discover amazing places, even earn commission whilst you do it!</p>
            <div className="gap gap-small"></div>
          </div>
        );
      }
    }

    if (!this.props.isFetching)
    {
      return (
        <div>
            {title}
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
  pageSize: 0,
  pageNumber: 1,
  isFetching: false,
  reviews: []
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  locationReviewsActions: PropTypes.object.isRequired,
  locationType: PropTypes.string,
  locationId: PropTypes.number,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  showTitle: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    reviews: state.locationReviews.reviewList ? state.locationReviews.reviewList.reviewDto : [],
    isFetching: state.locationReviews ? state.locationReviews.isFetching : false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationReviewsActions: bindActionCreators(locationReviewsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
