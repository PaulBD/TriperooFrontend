import axios from 'axios';
import baseUrl from './baseApi';

class HotelDealsApi {
  // ****************************************
  // Return hotel deals by location name
  // ****************************************
  static getHotelDealsByLocation(locationName, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/hotel/deals?locationName=' + locationName + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default HotelDealsApi;