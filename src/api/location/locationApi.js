import axios from 'axios';
import baseUrl from '../baseApi';
import environment from '../environment';
import location from '../json/mock/location.json';

class LocationApi {
  // ****************************************
  // Return location details by location id
  // ****************************************
  static getLocation(locationId, isCity) {
    if (environment) {
      return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/location/' + locationId + '?isCity=' + isCity)
          .then(function (response) {
            resolve(Object.assign({}, response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, location));
      });
    }
  }

  // ****************************************
  // Like location by id
  // ****************************************
  static likeLocation(locationId, likeLocation, isCity) {

    let url = baseUrl + '/location/' + locationId + '/unlike?isCity=' + isCity;

    if (likeLocation) {
      url = baseUrl + '/location/' + locationId + '/like?isCity=' + isCity;
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

  // ****************************************
  // uploadPhoto
  // ****************************************
  static uploadPhotos(locationId, photos) {
    let data = new FormData();
    data.append('file', document);
    data.append('name', name);

    photos.forEach(file => {
      data.append('file', file);
      data.append('name', file.name);
    });

    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/location/' + locationId + '/photos',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: data
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
