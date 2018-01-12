import axios from 'axios';
import baseUrl from '../../baseApi';

class DealsApi {
  // ****************************************
  // Return deals by location Id
  // ****************************************
  static getDealsByLocation(locationId, pageSize, pageNumber, exclude) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        dataType: 'jsonp',
        url:  baseUrl + '/location/' + locationId + '/deals?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&exclude=' + exclude,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
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
