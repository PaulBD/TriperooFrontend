import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationReviewsActions from '../../actions/location/locationReviewsActions';
import ReviewList from './listCard';
import Pagination from "react-js-pagination";

class Reviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { reviews: [], activePage: 1};
    this.changePage = this.changePage.bind(this);
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

  changePage(value) {
    this.setState({ activePage: value });

    if (this.props.locationType == 'all')
    {
      this.props.locationReviewsActions.loadReviewsByLocationId(this.props.locationId, this.props.pageSize, value - 1);
    }
    else {
      this.props.locationReviewsActions.loadReviewsByType(this.props.locationType, this.props.pageSize, value - 1);
    }
  }


  render(){
  const {reviews} = this.props;

  let title = '';

  if (this.props.showTitle) {
      title = (<div><h4>Reviews</h4><hr /><div className="gap gap-small"></div></div>);
  }

  return (
      <div className="row">
        {title}
        <ReviewList reviews={this.props.reviews} locationId={this.props.locationId} locationName={this.props.locationName}/>
        
        <div className="gap gap-small"></div>
        <div className="row text-xs-center">
          <Pagination innerClass={this.props.reviewCount > 10 ? "pagination text-xs-center" : "hide"} activePage={this.state.activePage} itemsCountPerPage={10} totalItemsCount={this.props.reviewCount} pageRangeDisplayed={10} onChange={this.changePage} />
        </div>
      </div>    
      );
  }
}

Reviews.defaultProps = {
  showTitle: true,
  locationType: 'all',
  locationId: 0,
  pageSize: 0,
  pageNumber: 0,
  isFetching: false,
  reviews: []
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  locationReviewsActions: PropTypes.object.isRequired,
  locationType: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  showTitle: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  reviewCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    reviews: state.locationReviews.reviewList ? state.locationReviews.reviewList.reviewDto : [],
    reviewCount: state.locationReviews.reviewList ? state.locationReviews.reviewList.reviewCount : 0,
    isFetching: state.locationReviews ? state.locationReviews.isFetching : false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationReviewsActions: bindActionCreators(locationReviewsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);