import axios from 'axios';
import baseUrl from '../baseApi';
import topDestinations from '../json/destinations.json';

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
        });
    });
  }

  // ****************************************
  // Search locations in TriperooCommon and
  // return a location list
  // ****************************************
  static searchLocations(value, searchType) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/locations/search?searchvalue=' + value + '&searchtype=' + searchType)
        .then(function (response) {
          resolve(Object.assign([], response.data.locations));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Return hardcoded destinations from json
  // destinations.json
  // ****************************************
  static getTopLocations(size, contentType) {
    return new Promise((resolve, reject) => {
      let filteredList = [];
      for (let index = 0; index < size; index++) {
        if (contentType == '') {
          filteredList.push(topDestinations[index]);
        } else {
          let v = topDestinations[index]['contentType'];
          if (v.includes(contentType)) {
            filteredList.push(topDestinations[index]);
          }
        }
      }

      resolve(Object.assign([], filteredList));
    });
  }
}

export default LocationsApi;
