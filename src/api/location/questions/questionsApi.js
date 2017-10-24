import axios from 'axios';
import baseUrl from '../../baseApi';
import environment from '../../environment';
import locationQuestions from '../../json/mock/locationQuestions.json';

class LocationQuestionsApi {
  // ****************************************
  // Return a list of questions by location id
  // ****************************************
  static getQuestionsByLocationId(locationId, pageSize, pageNumber) {
    if (environment) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: baseUrl + '/location/' + locationId + '/questions?pageSize=' + pageSize + '&pageNumber=' + pageNumber
        })
          .then(response => {
            resolve(Object.assign([], response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], locationQuestions));
      });
    }
  }
}

export default LocationQuestionsApi;
