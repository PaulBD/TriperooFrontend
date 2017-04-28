import axios from 'axios';
import baseUrl from './baseApi';

class ReviewsApi {
  // ****************************************
  // Return reviews by location id
  // ****************************************
  static getReviewsByLocationId(locationId, reviewType, pageSize, pageNumber) {

    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/location/' + locationId + '/reviews?type=' + reviewType + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber
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

export default ReviewsApi;