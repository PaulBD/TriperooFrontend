import axios from 'axios';
import baseUrl from './baseApi';

class RestaurantsApi {
  // ****************************************
  // Return restaurants using parent id
  // ****************************************
  static getRestaurantsByParentLocationId(locationId, categoryName, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/restaurants?categoryName=' + categoryName + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });

  }
}

export default RestaurantsApi;