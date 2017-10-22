import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationReviewsActions from '../../../../actions/location/locationReviewsActions';
import * as modalActions from '../../../../actions/common/modalActions';
import ReviewList from './locationReviewCard';
import Pagination from "react-js-pagination";
import Toastr from 'toastr';
import ReviewFilter from '../../../filters/reviewTags';
import Loader from '../../../loaders/contentLoader';

class Reviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isUsingFilter: false, reviews: [], activePage: 1, isLoadingReviews: false};
    this.changePage = this.changePage.bind(this);
    this.writeReview = this.writeReview.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
  }

  componentWillMount() {
    this.loadReviews();
  }

  loadReviews() {
      if (this.props.locationType != 'all' && this.props.locationId > 0) {
        this.setState({isLoadingReviews: true, isUsingFilter: false});
        this.props.locationReviewsActions.loadReviewsByLocationId(this.props.locationId, this.props.pageSize, this.props.pageNumber)
          .then(() => this.setState({isLoadingReviews: false}))
          .catch(error => {
            Toastr.error(error);
            this.setState({isLoadingReviews: false});
          });
      }
      else {
        this.setState({isLoadingReviews: true, isUsingFilter: false});
        this.props.locationReviewsActions.loadReviewsByType(this.props.locationType, this.props.pageSize, this.props.pageNumber)
          .then(() => this.setState({isLoadingReviews: false}))
          .catch(error => {
            Toastr.error(error);
            this.setState({isLoadingReviews: false});
          });
      }
  }

  writeReview(e) {
    e.preventDefault();
    this.props.modalActions.openReview(this.props.locationId, this.props.locationNameLong, this.props.locationType);
  }

  changePage(value) {
    this.setState({ activePage: value });

    if (this.props.locationType != 'all' && this.props.locationId > 0) {
      this.setState({isLoadingReviews: true, isUsingFilter: false});
      this.props.locationReviewsActions.loadReviewsByLocationId(this.props.locationId, this.props.pageSize, value - 1)
        .then(() => this.setState({isLoadingReviews: false}))
        .catch(error => {
          Toastr.error(error);
          this.setState({isLoadingReviews: false});
        });
    }
    else {
      this.setState({isLoadingReviews: true, isUsingFilter: false});
      this.props.locationReviewsActions.loadReviewsByType(this.props.locationType, this.props.pageSize, value - 1)
        .then(() => this.setState({isLoadingReviews: false}))
        .catch(error => {
          Toastr.error(error);
          this.setState({isLoadingReviews: false});
        });
    }
  }

  filterReviews(selectedTags) {
    this.setState({isUsingFilter: true});
    this.props.locationReviewsActions.loadReviewsByLocationIdAndTags(this.props.locationId, selectedTags, this.props.pageSize, this.props.pageNumber);
  }


  render(){

    let title = '';

    if (!this.state.isLoadingReviews) {
      return (
        <div className="row">
          <div className={this.props.locationType != 'all' && this.props.locationId > 0 ? "col-md-12" : "hide"}>
            <ReviewFilter filterReviews={this.filterReviews}/>
          </div>
          <div className="col-md-12">
          <ReviewList reviews={this.props.reviews} locationId={this.props.locationId} locationName={this.props.locationName} isUsingFilter={this.state.isUsingFilter} />

          <div className="gap gap-small"></div>
          <div className="row justify-content-center">
            <nav aria-label="Review Pagination">
              <Pagination innerClass={this.props.reviewCount > this.props.pageSize ? "pagination justify-content-center" : "hide"}
                        activePage={this.state.activePage} itemsCountPerPage={this.props.pageSize} totalItemsCount={this.props.reviewCount}
                        pageRangeDisplayed={this.props.pageSize} onChange={this.changePage}/>
            </nav>
          </div>
        </div>
        </div>
      );
    }
    else {
      return (
        <div className="row">
          {title}
          <Loader showLoader={true} />
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
  pageNumber: 0,
  isFetching: false,
  reviews: []
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  locationReviewsActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  locationType: PropTypes.string,
  locationName: PropTypes.string,
  locationNameLong: PropTypes.string,
  locationId: PropTypes.number,
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
    locationReviewsActions: bindActionCreators(locationReviewsActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
