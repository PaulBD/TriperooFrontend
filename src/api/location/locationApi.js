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
  // Update Location
  // ****************************************
  static updateLocation(location) {
    return new Promise((resolve, reject) => {
      console.log(location);
      axios({
        method: 'put',
        url:  baseUrl + '/location/' + location.regionID,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          location
        }
      })
      .then(response => {
        resolve(Object.assign({}, response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }
}

export default LocationApi;
