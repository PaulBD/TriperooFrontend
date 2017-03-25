import axios from 'axios';
import baseUrl from './baseApi';

class AutocompleteApi {

  // ****************************************
  // Search locations in TriperooCommon and 
  // return a location list
  // ****************************************
  static searchLocations(value, searchType) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/autocomplete?searchvalue=' + value + '&searchtype=' + searchType)
        .then(function (response) {
          resolve(Object.assign([], response.data.locations));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default AutocompleteApi;