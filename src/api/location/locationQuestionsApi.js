import axios from 'axios';
import baseUrl from '../baseApi';

class LocationQuestionsApi {
  // ****************************************
  // Return a list of questions by location id
  // ****************************************
  static getQuestionsByLocationId(locationId, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/location/' + locationId + '/questions?pageSize=' + pageSize + '&pageNumber=' + pageNumber
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

export default LocationQuestionsApi;