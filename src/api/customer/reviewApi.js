import axios from 'axios';
import baseUrl from '../baseApi';

class ReviewApi {
  // ****************************************
  // Post new review
  // ****************************************
  static postReview(review) {
    let url = baseUrl + '/review';

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
  // Update existing review
  // ****************************************
  static updateReview(reviewReference, review) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url:  baseUrl + '/review/' + reviewReference,
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
  // Remove existing review
  // ****************************************
  static removeReview(reference) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url:  baseUrl + '/review/' + reference,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
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
        url:  baseUrl + '/review/' + reviewReference + '/like',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
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
  // Get Reviews
  // ****************************************
  static getReviews(customerReference, pageSize, pageNumber) {
    let url = baseUrl + '/customer/' + customerReference + '/reviews?pageSize=' + pageSize + '&pageNumber=' + pageNumber;
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  url,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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
