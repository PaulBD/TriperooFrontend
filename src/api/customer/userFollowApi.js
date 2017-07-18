import axios from 'axios';
import baseUrl from '../baseApi';

class UserFollowApi {

  // ****************************************
  // Follow User
  // ****************************************
  static followUser(userReference) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: baseUrl + '/customer/' + userReference + '/follow',
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
  // Unfollow User
  // ****************************************
  static unfollowUser(userReference) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url: baseUrl + '/customer/' + userReference + '/follow',
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
  // Get Following
  // ****************************************
  static getFollowing(customerReference) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/customer/' + customerReference + '/following')
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Get Followed By
  // ****************************************
  static getFollowedBy(customerReference) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/customer/' + customerReference + '/followedBy')
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}


export default UserFollowApi;
