import axios from 'axios';
import baseUrl from './baseApi';

class LocationsApi {
  static getLocations(parentId, type, limit, offset) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/locations?parentId=' + parentId + '&type=' + type + '&limit=' + limit + '&offset=' + offset)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default LocationsApi;