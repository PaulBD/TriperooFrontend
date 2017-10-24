import axios from 'axios';
import baseUrl from '../../baseApi';
import environment from '../../environment';
import mockEvents from '../../json/mock/events.json';

class EventsApi {
  // ****************************************
  // Return events using Eventful using
  // location id
  // ****************************************
  static getEventsByLocationId(locationId, categoryName, pageSize, pageNumber) {
    if (environment) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url:  baseUrl + '/location/' + locationId + '/events?categoryName=' + categoryName + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber
        })
        .then(response => {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, mockEvents));
      });
    }
  }

  // ****************************************
  // Return events using Eventful using
  // location id and keyword
  // ****************************************
  static getEventsByLocationIdAndKeyword(locationId, keyword, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/location/' + locationId + '/events/' + keyword + '?pageSize=' + pageSize + '&pageNumber=' + pageNumber
      })
        .then(response => {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default EventsApi;
