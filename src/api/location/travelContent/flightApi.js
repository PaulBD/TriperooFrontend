import axios from 'axios';
import baseUrl from '../../baseApi';
const eventCategories = '../json/eventCategories.json'; 

class FlightApi {
  // ****************************************
  // Return events using Eventful using 
  // location id
  // ****************************************
  static searchFlights(market, currency, locale, originPlace, destinationPlace, fromDate, toDate) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/flights/' + market + '/' + currency + '/' + locale + '/' + originPlace + '/' + destinationPlace + '/' + fromDate + '/' + toDate
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

export default FlightApi;
