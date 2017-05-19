import axios from 'axios';
import baseUrl from '../../baseApi';

class NightlifeApi {
  // ****************************************
  // Return nightlife using parent id
  // ****************************************
  static getNightlifeByParentLocationId(locationId, categoryName, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/nightlife?categoryName=' + categoryName + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default NightlifeApi;