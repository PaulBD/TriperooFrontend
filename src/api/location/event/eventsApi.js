import axios from 'axios';
import baseUrl from '../../baseApi';

class EventsApi {
  // ****************************************
  // Return events using Eventful using 
  // location id
  // ****************************************
  static getEventsByLocationId(locationId, categoryName, pageSize, pageNumber) {
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
}

export default EventsApi;
