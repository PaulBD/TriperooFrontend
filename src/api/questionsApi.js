import axios from 'axios';
import baseUrl from './baseApi';


class QuestionsApi {
  static getQuestions(id, limit, offset) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/questions/' + id + '?limit=' + limit + '&offset=' + offset
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