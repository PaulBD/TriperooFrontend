import axios from 'axios';
import baseUrl from '../baseApi';

class AirportParkingApi {
  // ****************************************
  // Return airport parking from HolidayExtras
  // ****************************************
  static loadAirportParking(airportName, dropoffDate, dropoffTime, pickupDate, pickupTime, language) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/airport/parking/' + airportName + '?dropoffDate=' + dropoffDate + '&dropoffTime=' + dropoffTime + '&pickupDate=' + pickupDate + '&pickupTime=' + pickupTime + '&language=' + language
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

export default AirportParkingApi;
