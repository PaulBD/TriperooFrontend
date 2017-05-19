import axios from 'axios';
import baseUrl from '../../baseApi';

class AttractionsApi {
  // ****************************************
  // Return attractions using parent id
  // ****************************************
  static getAttractionsByParentLocationId(locationId, categoryName, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/attractions?categoryName=' + categoryName + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default AttractionsApi;