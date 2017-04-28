import axios from 'axios';
import baseUrl from './baseApi';

class LocationsApi {
  // ****************************************
  // Return child locations using parent id
  // ****************************************
  static getLocationsByParentId(parentLocationId, type, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/locations/' + parentLocationId + '?type=' + type + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
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