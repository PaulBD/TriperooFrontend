import * as types from '../actionTypes/';
import axios from 'axios'
import dateHelper from '../utils/dateHelper';


export function saveNewsletter(settings, emailAddress) {
  return function (dispatch) {

    // TODO: Add Post request for inserting
    console.log(emailAddress);

/*
    axios.post('/api/v1/customer/newsletter', {
      emailAddress
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    */

    return dispatcher({
          type : types.FAILED_NEWSLETTER,
          error : 'Incorrect email address'
        });

    /*return dispatch({
      type: types.SAVE_NEWSLETTER,
      dateModified: dateHelper.getFormattedDateTime(),
      settings
    });*/
  };
}