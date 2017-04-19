import axios from 'axios';
import baseUrl from './baseApi';

class ReviewApi {
  // ****************************************
  // Post new review
  // ****************************************
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
  }

  // ****************************************
  // Like an existing review
  // ****************************************
  static likeReview(reviewReference) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url:  baseUrl + '/review/like',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          reviewReference
        }
      })
      .then(response => {
        resolve(Object.assign([], response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }
}

export default ReviewApi;