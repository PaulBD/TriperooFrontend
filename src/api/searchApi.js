import axios from 'axios';
import baseUrl from './baseApi';

class SearchApi {
  static getSearch(value, searchType) {
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

export default SearchApi;