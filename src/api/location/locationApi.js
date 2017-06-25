import axios from 'axios';
import baseUrl from '../baseApi';

class LocationApi {
  // ****************************************
  // Return location details by location id
  // ****************************************
  static getLocation(locationId) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Like location by id
  // ****************************************
  static likeLocation(locationId, likeLocation) {

    let url = baseUrl + '/location/' + locationId + '/unlike';

    if (likeLocation) {
      url = baseUrl + '/location/' + locationId + '/like';
    }

    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url:  url,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default LocationApi;
