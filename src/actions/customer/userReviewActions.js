import ReviewApi from '../../api/customer/reviewApi';
import * as types from '../../actionTypes/';

// ****************************************
// Post new review
// ****************************************
export function postReviewInitialize(review) {
  return {type: types.POST_REVIEW_REQUEST, isSending: true, hasPosted: false, review};
}

export function postReviewSuccess() {
  return {type: types.POST_REVIEW_SUCCESS, isSending: false, hasPosted: true};
}

export function postReviewFailure(message) {
  return {type: types.POST_REVIEW_FAILURE, isSending: false, hasPosted: false, message};
}

export function postReview(review) {
  return dispatch => {
    dispatch(postReviewInitialize(review));
    if ((review.comment.length > 0) && (review.inventoryReference > 0))
    {
      console.log(review);

      return ReviewApi.postReview(review).then(review => {
        dispatch(postReviewSuccess());
      }).catch(error => {
        dispatch(postReviewFailure(error.response.data));
      });
    }
    else {
      dispatch(postReviewFailure("Please complete the review form"));
    }
  };
}

// ****************************************
// Update existing review
// ****************************************
export function updateReviewInitialize(review) {
  return {type: types.UPDATE_REVIEW_REQUEST, isSending: true, hasPosted: false, review};
}

export function updateReviewSuccess() {
  return {type: types.UPDATE_REVIEW_SUCCESS, isSending: false, hasPosted: true};
}

export function updateReviewFailure(message) {
  return {type: types.UPDATE_REVIEW_FAILURE, isSending: false, hasPosted: false, message};
}

export function updateReview(review) {
  return dispatch => {
    dispatch(updateReviewInitialize(review));
    if ((review.comment.length > 0) && (review.inventoryReference > 0) && (review.reviewReference.length > 0))
    {
      return ReviewApi.updateReview(review.reviewReference, review).then(review => {
        dispatch(updateReviewSuccess());
      }).catch(error => {
        dispatch(updateReviewFailure(error.response.data));
      });
    }
    else {
      dispatch(updateReviewFailure("Please complete the review form"));
    }
  };
}

// ****************************************
// Remove existing review
// ****************************************
export function removeReviewInitialize() {
  return {type: types.REMOVE_REVIEW_REQUEST, isSending: true, hasPosted: false};
}

export function removeReviewSuccess() {
  return {type: types.REMOVE_REVIEW_SUCCESS, isSending: false, hasPosted: true};
}

export function removeReviewFailure(message) {
  return {type: types.REMOVE_REVIEW_FAILURE, isSending: false, hasPosted: false, message};
}

export function removeReview(reference) {
  return dispatch => {
    dispatch(removeReviewInitialize());
    return ReviewApi.removeReview(reference).then(review => {
      dispatch(removeReviewSuccess());
    }).catch(error => {
      dispatch(removeReviewFailure(error.response.data));
    });
  };
}

// ****************************************
// Like review
// ****************************************
export function likeReviewInitialize(reviewReference) {
  return {type: types.LIKE_REVIEW_REQUEST, isSending: true, hasPosted: false, reviewReference};
}

export function likeReviewSuccess() {
  return {type: types.LIKE_REVIEW_SUCCESS, isSending: false, hasPosted: true};
}

export function likeReviewFailure(message) {
  return {type: types.LIKE_REVIEW_FAILURE, isSending: false, hasPosted: false, message};
}

export function likeReview(reviewReference) {
  return dispatch => {
    dispatch(likeReviewInitialize(reviewReference));
    if (reviewReference.length > 0)
    {
      return ReviewApi.likeReview(reviewReference).then(review => {
        dispatch(likeReviewSuccess());
      }).catch(error => {
        dispatch(likeReviewFailure(error));
      });
    }
    else {
      dispatch(likeReviewFailure("There has been an error liking this review"));
    }
  };
}

// ****************************************
// Get Reviews
// ****************************************
export function getCustomerReviewsInitialize(customerReference) {
  return {type: types.CUSTOMER_REVIEWS_REQUEST, isSending: true, hasPosted: false, customerReference};
}

export function getCustomerReviewsSuccess(reviews) {
  return {type: types.CUSTOMER_REVIEWS_SUCCESS, isSending: false, hasPosted: true, reviews};
}

export function getCustomerReviewsFailure(message) {
  return {type: types.CUSTOMER_REVIEWS_FAILURE, isSending: false, hasPosted: false, message};
}

export function getReviews(customerReference, pageSize, pageNumber) {
  return dispatch => {
    dispatch(getCustomerReviewsInitialize(customerReference));
    return ReviewApi.getReviews(customerReference, pageSize, pageNumber).then(reviews => {
      dispatch(getCustomerReviewsSuccess(reviews));
    }).catch(error => {
      dispatch(likeReviewFailure(error));
    });
  };
}
