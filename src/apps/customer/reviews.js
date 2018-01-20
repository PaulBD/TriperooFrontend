import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import * as userReviewActions from '../../actions/customer/userReviewActions';
import * as modalActions from '../../actions/common/modalActions';
import ReviewList from '../../components/layout/cards/reviews/homePageReviewCard';
import TriperooLoader from '../../components/loaders/globalLoader';
import CustomerHeader from '../../components/layout/customer/customerNavigation';
import Toastr from 'toastr';

class UserReviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { loading: true, loadingReviews: false };
    this.refreshData = this.refreshData.bind(this);
    this.createReview = this.createReview.bind(this);
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
    this.props.userReviewActions.getReviews(this.props.currentUserId, 8, 0)
      .then(() => {
        this.setState({loading: false, loadingReviews: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false, loadingReviews: false});
      });
  }

  createReview(e) {
    e.preventDefault();
    this.props.modalActions.openReview(0, '', '', 8, 0, this.props.currentUserId);
  }

  render(){
    if ((!this.state.loading) && (!this.state.loadingReviews)){
      return (
        <div>
        <CustomerHeader user={this.props.user} isAuthenticated={this.props.isAuthenticated} isActiveUser={this.props.isActiveUser} pageName={!this.props.isActiveUser ? this.props.user.profile.name + "' Reviews" : 'Reviews'}/>

        <div className="container">
          <div className="gap gap-small"></div>
          <div className="row customerPhotos">
            <div className="col-md-12">
              <div className={this.props.reviews.length == 0 ? "row customerPhotos" : "hide"}>
                <div className="col-md-4">
                  <div className="card text-center createPhoto">
                    <div className="card-block">
                      <a href="#" onClick={this.createReview}><i className="fa fa-plus-circle" /></a>
                      <h4 className="card-title">Share Your Experiences</h4>
                      <p className="card-text">Tell us about the good, the bad and the ugly!</p>
                      <a href="#" className="btn btn-primary"  onClick={this.createReview}>Add Review</a>
                    </div>
                  </div>
                </div>
              </div>
              <ReviewList currentUserId={this.props.currentUserId} reviews={this.props.reviews} maxTags={5} showEdit={this.props.isActiveUser} cssClass="card-columns" refreshData={this.refreshData}/>
              <div className="gap gap-small"></div>
            </div>
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
  modalActions: PropTypes.object.isRequired,
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
    isActiveUser: user ? ownProps.params.guid.trim() == user.userId.trim() : false,
    user: state.user.user ? state.user.user : null,
    reviews: state.review.reviews ? state.review.reviews : [],
    reviewCount: state.review.reviewCount ? state.review.reviewCount : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch),
    userReviewActions: bindActionCreators(userReviewActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReviews);
