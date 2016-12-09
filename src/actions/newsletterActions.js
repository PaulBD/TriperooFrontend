import NewsletterApi from '../api/mockNewsletterApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadNewsletterSuccess(response) {
  return {type: types.LOAD_NEWSLETTER_SUCCESS, response};
}

export function saveNewsletter(emailAddress) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return NewsletterApi.saveNewsletter(emailAddress).then(response => {
      dispatch(loadNewsletterSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}