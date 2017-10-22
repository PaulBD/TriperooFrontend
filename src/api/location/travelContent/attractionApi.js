import axios from 'axios';
import baseUrl from '../../baseApi';

class AttractionApi {
  // ****************************************
  // Return Attractions using parent id
  // ****************************************
  static getAttractionsByParentLocationId(locationId, categoryName, attractionName, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/attractions?categoryName=' + categoryName + '&name=' + attractionName + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default AttractionApi;
