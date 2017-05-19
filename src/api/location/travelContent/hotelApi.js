import axios from 'axios';
import baseUrl from '../../baseApi';

class HotelDealsApi {
  // ****************************************
  // Return hotel deals by location Id
  // ****************************************
  static getHotelDealsByLocation(locationId, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/deals/hotels?pageSize=' + pageSize + '&pageNumber=' + pageNumber)
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