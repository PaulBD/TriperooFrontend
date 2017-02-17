import axios from 'axios';

class SearchApi {
  static getSearch(value, searchType) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost/api/v1/locations/search?q=' + value)
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