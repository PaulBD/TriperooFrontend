import axios from 'axios';

class NewsletterApi {
	static saveNewsletter(emailAddress) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost/api/v1/customer/newsletter?emailaddress=' + emailAddress)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }
}


export default NewsletterApi;