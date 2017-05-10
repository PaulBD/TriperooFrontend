import axios from 'axios';
import baseUrl from './baseApi';

class AirportLoungeApi {
  // ****************************************
  // Return airport lounge from HolidayExtras
  // ****************************************
  static loadAirportLounges(airportName, arrivalDate, arrivalTime, flightTime, adultCount, childCount, infantCount, language) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/airport/' + airportName + '/lounges?arrivalDate=' + arrivalDate + '&arrivalTime=' + arrivalTime  + '&flightTime=' + flightTime + '&adultCount=' + adultCount + '&childCount=' + childCount + '&infantCount=' + infantCount+ '&language=' + language
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

export default AirportLoungeApi;
