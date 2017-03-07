import NewsletterApi from '../api/mockNewsletterApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function saveNewsletterSuccess(newsletter) {
  return {type: types.SAVE_NEWSLETTER_SUCCESS, newsletter: newsletter, hasSaved: true, errorMessage: ''};
}

export function saveNewsletterError(message) {
  return {type: types.SAVE_NEWSLETTER_ERROR, hasSaved: false, errorMessage: message};
}

export function saveNewsletter(emailAddress) {
  return dispatch => {
    dispatch(beginAjaxCall());
    if (emailAddress.length > 0)
    {
      return NewsletterApi.saveNewsletter(emailAddress).then(newsletter => {
        dispatch(saveNewsletterSuccess(newsletter));
      }).catch(error => {
        dispatch(saveNewsletterError(error.response.data));
      });
    }
    else {
      console.log('Err');
      dispatch(saveNewsletterError("Please specify a valid email Address"));
    }
  };
}