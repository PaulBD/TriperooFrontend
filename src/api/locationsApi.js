import axios from 'axios';
import baseUrl from './baseApi';

class LocationsApi {
  // ****************************************
  // Return child locations using parent id
  // ****************************************
  static getLocationsByParentId(parentId, type, limit, offset) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/locations?parentId=' + parentId + '&type=' + type + '&limit=' + limit + '&offset=' + offset)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
          console.log(error);
        });
    });
  }
}

export default LocationsApi;