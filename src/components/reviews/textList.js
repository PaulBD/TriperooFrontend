import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationReviewsActions from '../../actions/location/locationReviewsActions';
import * as modalActions from '../../actions/common/modalActions';
import ReviewList from './listCard';
import Pagination from "react-js-pagination";
import Toastr from 'toastr';
import Loader from '../common/loadingDots';

class Reviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { reviews: [], activePage: 1, isLoadingReviews: false};
    this.changePage = this.changePage.bind(this);
    this.writeReview = this.writeReview.bind(this);
  }

  componentWillMount() {
    this.loadReviews();
  }

  loadReviews() {
      if (this.props.locationType != 'all' && this.props.locationId > 0) {
        this.setState({isLoadingReviews: true});
        this.props.locationReviewsActions.loadReviewsByLocationId(this.props.locationId, this.props.pageSize, this.props.pageNumber)
          .then(() => this.setState({isLoadingReviews: false}))
          .catch(error => {
            Toastr.error(error);
            this.setState({isLoadingReviews: false});
          });
      }
      else {
        this.setState({isLoadingReviews: true});
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

    if (this.props.locationType == 'all')
    {
      this.setState({isLoadingReviews: true});
      this.props.locationReviewsActions.loadReviewsByLocationId(this.props.locationId, this.props.pageSize, value - 1)
        .then(() => this.setState({isLoadingReviews: false}))
        .catch(error => {
          Toastr.error(error);
          this.setState({isLoadingReviews: false});
        });
    }
    else {
      this.setState({isLoadingReviews: true});
      this.props.locationReviewsActions.loadReviewsByType(this.props.locationType, this.props.pageSize, value - 1)
        .then(() => this.setState({isLoadingReviews: false}))
        .catch(error => {
          Toastr.error(error);
          this.setState({isLoadingReviews: false});
        });
    }
  }


  render(){

    let title = '';

    if (this.props.showTitle) {
      title = (<div><a href="#" onClick={this.writeReview} className="reviewLink">Been to {this.props.locationName}? Write a review</a><h4>Reviews</h4><hr /><div className="gap gap-small"></div></div>);
    }
    if (!this.state.isLoadingReviews) {
      return (
        <div className="row">
          {title}
          <ReviewList reviews={this.props.reviews} locationId={this.props.locationId} locationName={this.props.locationName}/>

          <div className="gap gap-small"></div>
          <div className="row text-xs-center">
            <Pagination innerClass={this.props.reviewCount > 10 ? "pagination text-xs-center" : "hide"}
                        activePage={this.state.activePage} itemsCountPerPage={10} totalItemsCount={this.props.reviewCount}
                        pageRangeDisplayed={10} onChange={this.changePage}/>
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
