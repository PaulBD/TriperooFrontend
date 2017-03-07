import axios from 'axios';
import baseUrl from './baseApi';

class AuthenticationApi {
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

  static loginFacebookCustomer(emailAddress, facebookId, name, ImageUrl, currentCity) {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/authorize/facebook', {
          emailAddress,
          facebookId,
          name,
          ImageUrl,
          currentCity
      })
      .then(response => {
        resolve(Object.assign([], response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }

  static registerCustomer(emailAddress, password, firstName, lastName, currentCity) {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/register', {
          emailAddress,
          password,
          firstName,
          lastName,
          currentCity
      })
      .then(response => {    
        resolve(Object.assign([], response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }


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
}

export default AuthenticationApi;