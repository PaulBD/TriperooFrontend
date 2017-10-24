import axios from 'axios';
import baseUrl from '../../baseApi';
import environment from '../../environment';
import locationReviews from '../../json/mock/locationReviews.json';

class LocationReviewsApi {
  // ****************************************
  // Return reviews by location id
  // ****************************************
  static getReviewsByLocationId(locationId, pageSize, pageNumber) {
    if (environment) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: baseUrl + '/location/' + locationId + '/reviews?pageSize=' + pageSize + '&pageNumber=' + pageNumber
        })
          .then(response => {
            resolve(Object.assign({}, response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, locationReviews));
      });
    }
  }

  // ****************************************
  // Return reviews by location id
  // ****************************************
  static getReviewsByLocationIdAndTags(locationId, selectedTags, pageSize, pageNumber) {
    if (environment) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url:  baseUrl + '/location/' + locationId + '/reviews?tags=' + selectedTags + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber
        })
          .then(response => {
            resolve(Object.assign({}, response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, locationReviews));
      });
    }
  }

    // ****************************************
  // Return reviews by type
  // ****************************************
  static getReviewsByType(reviewType, pageSize, pageNumber) {
    if (environment) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: baseUrl + '/reviews/' + reviewType + '?pageSize=' + pageSize + '&pageNumber=' + pageNumber
        })
          .then(response => {
            resolve(Object.assign({}, response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, locationReviews));
      });
    }
  }
}

export default LocationReviewsApi;
