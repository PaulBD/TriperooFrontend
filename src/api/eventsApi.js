import axios from 'axios';
import baseUrl from './baseApi';

class EventsApi {
  // ****************************************
  // Return events using Eventful using 
  // location name
  // ****************************************
  static getEventsByLocationName(locationName, limit, offset) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/events?location=' + locationName + '&pageSize=' + limit + '&pageNumber=' + offset
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

export default EventsApi;