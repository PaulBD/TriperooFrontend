import axios from 'axios';

class CustomerApi {
  static loginCustomer(emailAddress, password) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost/api/v1/authorize', {
          emailAddress,
          password
      })
      .then(response => {
        resolve(Object.assign([], response.data.triperooCustomers));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }

  static loginFacebookCustomer(emailAddress, facebookId, name, image) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost/api/v1/authorize/facebook', {
          emailAddress,
          facebookId,
          name,
          image
      })
      .then(response => {
        resolve(Object.assign([], response.data.triperooCustomers));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }
}

export default CustomerApi;