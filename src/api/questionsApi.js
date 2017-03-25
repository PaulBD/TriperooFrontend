import axios from 'axios';
import baseUrl from './baseApi';

class QuestionsApi {
  // ****************************************
  // Return a list of questions by location id
  // ****************************************
  static getQuestionsByLocationId(locationId, limit, offset) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/questions?locationId=' + locationId + '&limit=' + limit + '&offset=' + offset
      })
      .then(response => {
        resolve(Object.assign([], response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  };
}

export default QuestionsApi;