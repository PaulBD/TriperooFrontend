import axios from 'axios';
import baseUrl from '../baseApi';

class NewsletterApi {
  // ****************************************
  // Save newsletter
  // ****************************************
	static saveNewsletter(emailAddress) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/customer/newsletter',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          emailAddress
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


export default NewsletterApi;