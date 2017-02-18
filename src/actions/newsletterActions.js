import NewsletterApi from '../api/mockNewsletterApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function saveNewsletterSuccess(newsletter) {
    	console.log(newsletter);
  return {type: types.SAVE_NEWSLETTER_SUCCESS, newsletter: newsletter};
}

export function saveNewsletter(emailAddress) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return NewsletterApi.saveNewsletter(emailAddress).then(newsletter => {
      dispatch(saveNewsletterSuccess(newsletter));
    }).catch(error => {
      throw(error);
    });
  };
}