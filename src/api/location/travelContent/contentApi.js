import axios from 'axios';
import baseUrl from '../../baseApi';

class ContentApi {
  // ****************************************
  // Return Content using parent id
  // ****************************************
  static getContentByParentLocationId(locationId, contentType, categoryName, name, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/' + contentType + '?categoryName=' + categoryName + '&name=' + name + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default ContentApi;
