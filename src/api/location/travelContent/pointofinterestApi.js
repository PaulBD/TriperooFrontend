import axios from 'axios';
import baseUrl from '../../baseApi';

class PointOfInterestApi {
  // ****************************************
  // Return Point of Interests using parent id
  // ****************************************
  static getPointOfInterestsByParentLocationId(locationId, categoryName, pointOfInterestName, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/pointofinterest?categoryName=' + categoryName + '&name=' + pointOfInterestName + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default PointOfInterestApi;
