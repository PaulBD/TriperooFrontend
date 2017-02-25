import axios from 'axios';

class CustomerApi {
  static loginCustomer(emailAddress, password) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost/api/v1/authorize', {
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
      axios.post('http://localhost/api/v1/authorize/facebook', {
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
      axios.post('http://localhost/api/v1/register', {
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
      axios.post('http://localhost/api/v1/reset-password', {
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

export default CustomerApi;