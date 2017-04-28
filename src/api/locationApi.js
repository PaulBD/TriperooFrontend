import axios from 'axios';
import baseUrl from './baseApi';

class LocationApi {
  // ****************************************
  // Return location details by location id
  // ****************************************
  static getLocation(locationId) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default LocationApi;