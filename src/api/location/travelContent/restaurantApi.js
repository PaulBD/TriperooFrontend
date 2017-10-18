import axios from 'axios';
import baseUrl from '../../baseApi';
import environment from '../../environment';
import restaurants from '../../json/mock/restaurants.json';

class RestaurantApi {
  // ****************************************
  // Return restaurants using parent id
  // ****************************************
  static getRestaurantsByParentLocationId(locationId, categoryName, pageSize, pageNumber) {
    if (environment){
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
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, restaurants));
      });
    }
  }
}

export default RestaurantApi;
