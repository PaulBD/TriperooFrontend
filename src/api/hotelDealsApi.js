import axios from 'axios';
import baseUrl from './baseApi';

class HotelDealsApi {
  // ****************************************
  // Return hotel deals by location name
  // ****************************************
  static getHotelDealsByLocation(locationName, limit, offset) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/hotel/deals?location=' + locationName + '&limit=' + limit + '&offset=' + offset)
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