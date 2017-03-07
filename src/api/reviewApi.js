import axios from 'axios';
import baseUrl from './baseApi';

class ReviewApi {
  static postReview(review) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/review',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          review
        }
      })
      .then(response => {
        resolve(Object.assign([], response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  };
}

export default ReviewApi;