import axios from 'axios';
import baseUrl from './baseApi';

class ReviewsApi {
  // ****************************************
  // Return reviews by location id
  // ****************************************
  static getReviewsByLocationId(locationId, reviewType, limit, offset) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/reviews?type=' + reviewType + '&id=' + locationId + '&limit=' + limit + '&offset=' + offset
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

export default ReviewsApi;