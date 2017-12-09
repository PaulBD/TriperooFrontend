import axios from 'axios';
import baseUrl from '../../baseApi';

class DealsApi {
  // ****************************************
  // Return deals by location Id
  // ****************************************
  static getDealsByLocation(locationId, pageSize, pageNumber, exclude) {
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
}

export default DealsApi;
