import axios from 'axios';
import baseUrl from './baseApi';
import eventCategories from './json/eventCategories.json'; 

class EventsApi {
  // ****************************************
  // Return events using Eventful using 
  // location id
  // ****************************************
  static getEventsByLocationId(locationId, categoryName, limit, offset) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/events?locationId=' + locationId + '&categoryName=' + categoryName + '&pageSize=' + limit + '&pageNumber=' + offset
      })
      .then(response => {
        resolve(Object.assign({}, response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  };

  static getEventCategories() {
    return new Promise((resolve, reject) => {
      let filteredList = [];
      let size = eventCategories.length;
      for (let index = 0; index < size; index++) {
        if (eventCategories[index].show == 1)
        {
          filteredList.push(eventCategories[index]);
        }
      }
      resolve(Object.assign([], filteredList));
    });
  }
}

export default EventsApi;
