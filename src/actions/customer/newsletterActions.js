import NewsletterApi from '../../api/customer/newsletterApi';
import * as types from '../../actionTypes/';

// ****************************************
// Save Newsletter
// ****************************************
export function requestNewsletter() {
  return { type: types.NEWSLETTER_REQUEST, isFetching: true };
}

export function newsletterSuccess(newsletter) {
  return {type: types.NEWSLETTER_SUCCESS, newsletter: newsletter, hasSaved: true, errorMessage: ''};
}

export function newsletterFailure(message) {
  return {type: types.NEWSLETTER_FAILURE, hasSaved: false, errorMessage: message};
}

export function saveNewsletter(emailAddress) {
  return dispatch => {
    dispatch(requestNewsletter());
    return NewsletterApi.saveNewsletter(emailAddress).then(newsletter => {
      dispatch(newsletterSuccess(newsletter));
    }).catch(error => {
      dispatch(newsletterFailure(error.response.data));
    });
  };
}
