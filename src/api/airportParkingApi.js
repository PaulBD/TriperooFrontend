import axios from 'axios';
import baseUrl from './baseApi';
import eventCategories from './json/eventCategories.json'; 

class AirportParkingApi {
  // ****************************************
  // Return airport parking from HolidayExtras
  // ****************************************
  static loadAiportParking(airport, dropoffDate, dropoffTime, pickupDate, pickupTime, language) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/parking?locationName=' + airport + '&dropoffDate=' + dropoffDate + '&dropoffTime=' + dropoffTime + '&pickupDate=' + pickupDate + '&pickupTime=' + pickupTime + '&language=' + language
      })
      .then(response => {
        resolve(Object.assign({}, response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  };

}

export default AirportParkingApi;
