import axios from 'axios';
import baseUrl from '../baseApi';

class UserApi {

  // ****************************************
  // Post new bookmark
  // ****************************************
  static postBookmark(bookmark) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/customer/bookmark',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          bookmark
        }
      })
      .then(response => {
        resolve(Object.assign([], response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }

  // ****************************************
  // Post new photos
  // ****************************************
  static postPhotos(photos) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/customer/photos',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          photos
        }
      })
      .then(response => {
        resolve(Object.assign([], response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }
}

export default UserApi;