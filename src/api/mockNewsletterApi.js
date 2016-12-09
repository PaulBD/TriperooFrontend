import delay from './delay';

const response = [  
{
    id: 1,
    emailAddress: 'test@test.com'
  }
];

class NewsletterApi {
	static saveNewsletter(emailAddress) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
        let filteredList = [];

        filteredList.push(response[0]);

				resolve(Object.assign([], filteredList));
			}, delay);
		});
	}
}

export default NewsletterApi;