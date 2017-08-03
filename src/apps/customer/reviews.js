import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import * as userReviewActions from '../../actions/customer/userReviewActions';
import ReviewList from '../../components/layout/cards/reviews/homePageReviewCard';
import Pagination from "react-js-pagination";
import UserProfile from '../../components/forms/customer/userProfile';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';

class UserReviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { loading: true, loadingReviews: false };
    this.refreshData = this.refreshData.bind(this);
  }

  componentWillMount() {
    document.title = 'Your Reviews';
    window.scrollTo(0, 0);

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false, loadingReviews: true});
        this.loadReviews();
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false});
      });
  }

  refreshData() {
    this.loadReviews();
  }

  loadReviews(){
    this.props.userReviewActions.getReviews(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false, loadingReviews: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false, loadingReviews: false});
      });
  }

  render(){
    if ((!this.state.loading) && (!this.state.loadingReviews)){
      return (
        <div className="container">
          <div className="gap gap-small"></div>
          <div className="row">
            <div className="col-md-12">
              <h5>Your Reviews</h5>
              <hr />
              <ReviewList reviews={this.props.reviews} maxTags={5} showEdit={true} cssClass="col-md-6" refreshData={this.refreshData}/>
              <div className="gap gap-small"></div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

UserReviews.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  userReviewActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  currentUserId: PropTypes.string,
  reviews: PropTypes.array,
  reviewCount: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.user.user ? state.user.user : null,
    reviews: state.review.reviews ? state.review.reviews : [],
    reviewCount: state.review.reviewCount ? state.review.reviewCount : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch),
    userReviewActions: bindActionCreators(userReviewActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReviews);
