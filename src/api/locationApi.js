import axios from 'axios';
import baseUrl from './baseApi';

class LocationApi {
  static getLocation(id) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location?id=' + id)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default LocationApi;