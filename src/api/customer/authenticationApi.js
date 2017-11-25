import axios from 'axios';
import baseUrl from '../baseApi';

class AuthenticationApi {

  // ****************************************
  // Log Customer into platform and set token
  // ****************************************
  static loginCustomer(emailAddress, password) {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/authorize', {
          emailAddress,
          password
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
  // Log Customer into platform (via Facebook)
  // and set token
  // ****************************************
  static loginFacebookCustomer(accessToken, emailAddress, facebookId, name, imageUrl, currentCity, currentCityId) {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/authorize/facebook', {
          accessToken,
          emailAddress,
          facebookId,
          name,
          imageUrl,
          currentCity,
          currentCityId
      })
      .then(response => {
        console.log(response.data);
        resolve(Object.assign([], response.data));
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
    });
  }

  // ****************************************
  // Get Facebook User
  // ****************************************
  static getFacebookUser(emailAddress, facebookId) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/authorize/facebook?emailAddress=' + emailAddress + '&facebookId=' + facebookId)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }


  // ****************************************
  // Register new customer
  // ****************************************
  static registerCustomer(emailAddress, password, name, currentCity, currentCityId) {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/register', {
          emailAddress,
          password,
          name,
          currentCity,
          currentCityId
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
  // Reset password and send customer an email
  // ****************************************
  static resetPassword(emailAddress) {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/reset-password', {
          emailAddress
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
  // Update password
  // ****************************************
  static updatePassword(newPassword, encryptedGuid) {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/update-password', {
        newPassword,
        encryptedGuid
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

export default AuthenticationApi;
