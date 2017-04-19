import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewsActions from '../../actions/reviewsActions';
import ReviewList from './listCard';
import Pagination from "react-js-pagination";

class Reviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { reviews: [], activePage: 1, limit: 1 };
    this.changePage = this.changePage.bind(this);
  }

  componentWillMount() {
    console.log(this.props.limit);
    this.props.actions.loadReviewsByLocationId(this.props.locationId, this.props.locationType, this.props.limit, this.props.offset);
  }

  changePage(value) {
    this.setState({ activePage: value });
    this.props.actions.loadReviewsByLocationId(this.props.locationId, this.props.locationType, this.props.limit, value - 1);
  }


  render(){
  const {reviews} = this.props;

  console.log(this.props.reviews.length);

  let title = '';

  if (this.props.showTitle) {
      title = (<div><h4>Member Reviews</h4><hr /><div className="gap gap-small"></div></div>);
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
  isFetching: PropTypes.bool.isRequired,
  reviewCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {

console.log(state.reviewList);

  return {
    reviews: state.reviewList.reviewList ? state.reviewList.reviewList.reviewDto : [],
    reviewCount: state.reviewList.reviewList ? state.reviewList.reviewList.reviewCount : 0,
    isFetching: state.reviewList ? state.reviewList.isFetching : false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reviewsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);