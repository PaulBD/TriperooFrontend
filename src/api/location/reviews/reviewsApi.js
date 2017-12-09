import axios from 'axios';
import baseUrl from '../../baseApi';

class LocationReviewsApi {
  // ****************************************
  // Return reviews by location id
  // ****************************************
  static getReviewsByLocationId(locationId, pageSize, pageNumber) {
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

  // ****************************************
  // Return reviews by location id
  // ****************************************
  static getReviewsByLocationIdAndTags(locationId, selectedTags, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: baseUrl + '/location/' + locationId + '/reviews?tags=' + selectedTags + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber
      })
        .then(response => {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

    // ****************************************
  // Return reviews by type
  // ****************************************
  static getReviewsByType(reviewType, pageSize, pageNumber) {
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
}

export default LocationReviewsApi;
