import axios from 'axios';
import baseUrl from '../baseApi';

class PhotoApi {

  // ****************************************
  // Get USer Photos
  // ****************************************
  static getUserPhotos(customerReference) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/customer/' + customerReference + "/photos")
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }


  // ****************************************
  // Remove Photo
  // ****************************************
  static removePhoto(customerReference, photoReference) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url:  baseUrl + '/customer/' + customerReference + '/photos/' + photoReference,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
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

export default PhotoApi;
