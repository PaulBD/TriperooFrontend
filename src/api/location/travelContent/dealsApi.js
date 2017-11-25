import axios from 'axios';
import baseUrl from '../../baseApi';
import environment from '../../environment';
import mockDeal from '../../json/mock/hotelDeal.json';

class DealsApi {
  // ****************************************
  // Return deals by location Id
  // ****************************************
  static getDealsByLocation(locationId, pageSize, pageNumber, exclude) {
    if (environment) {
      return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/location/' + locationId + '/deals?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&exclude=' + exclude)
          .then(function (response) {
            resolve(Object.assign([], response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], mockDeal));
      });
    }
  }
}

export default DealsApi;
