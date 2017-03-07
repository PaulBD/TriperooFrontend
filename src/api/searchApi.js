import axios from 'axios';
import baseUrl from './baseApi';

class SearchApi {
  static getSearch(value, searchType) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/locations/search?q=' + value + '&type=' + searchType)
        .then(function (response) {
          resolve(Object.assign([], response.data.triperooCommon.places));
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }
}

export default SearchApi;