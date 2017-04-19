import axios from 'axios';
import baseUrl from './baseApi';

class AttractionsApi {
  // ****************************************
  // Return attractions using parent id
  // ****************************************
  static getAttractionsByParentLocationId(parentLocationId, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/attractions?parentLocationId=' + parentLocationId + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
          console.log(error);
        });
    });
  }
}

export default AttractionsApi;