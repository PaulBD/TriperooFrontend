import axios from 'axios';
import baseUrl from '../baseApi';

class UserApi {


  // ****************************************
  // Update User
  // ****************************************
  static updateUser(profile) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url:  baseUrl + '/customer',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          profile
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
  // Get User
  // ****************************************
  static getUser(customerReference) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/customer/' + customerReference)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }


  // ****************************************
  // GET bookmarks
  // ****************************************
  static getBookmarks() {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/customer/bookmarks',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
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
  // Archive bookmark
  // ****************************************
  static archiveBookmark(locationId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url:  baseUrl + '/customer/bookmark/' + locationId,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
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
