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

export function postReview(review, state) {
	return dispatch => {
		dispatch(postReviewInitialize(review));
		if ((review.comment.length > 0) && (review.inventoryReference > 0))
		{
			return ReviewApi.postReview(review).then(review => {
				state.setState({ wizardStep: 3 });
				dispatch(postReviewSuccess());
			}).catch(error => {
        console.log(error);
				dispatch(postReviewFailure(error.response.data));
			});
		}
		else {
			dispatch(postReviewFailure("Please complete the review form"));
		}
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