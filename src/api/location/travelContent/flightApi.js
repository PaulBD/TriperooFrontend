import axios from 'axios';
import baseUrl from '../../baseApi';
import flights from '../../json/mock/flights.json';

class FlightApi {
  // ****************************************
  // Return flights using Kiwi
  // ****************************************
  /*static searchFlights(flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, market, locale, currency, flightType, passengerTotal, adultTotal, childTotal, infantTotal, directFlightsOnly, priceFrom, priceTo, departureTimeFrom, departureTimeTo, arrivalTimeFrom, arrivalTimeTo, returnDeperatureTimeFrom, returnDepartureTimeTo, returnArrivalTimeFrom, returnArrivalTimeTo, stopOverFrom, stopOverTo, offset, limit, sort, asc) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/flights?flyFrom=' + flyFrom + '&flyTo=' + flyTo + '&dateFrom=' + dateFrom + '&dateTo=' + dateTo + '&returnFrom=' + returnFrom + '&returnTo=' + returnTo + '&market=' + market + '&locale=' + locale + '&currency=' + currency + '&flightType=' + flightType + '&passengerTotal=' + passengerTotal + '&adultTotal=' + adultTotal + '&childTotal=' + childTotal + '&infantTotal=' + infantTotal + '&directflightsOnly=' + directFlightsOnly + '&priceFrom=' + priceFrom + '&priceTo=' + priceTo + '&departureTimeFrom=' + departureTimeFrom + '&departureTimeTo=' + departureTimeTo + '&arrivalTimeFrom=' + arrivalTimeFrom + '&arrivalTimeTo=' + arrivalTimeTo + '&returnDeperatureTimeFrom=' + returnDeperatureTimeFrom + '&returnDepartureTimeTo=' + returnDepartureTimeTo + '&returnArrivalTimeFrom=' + returnArrivalTimeFrom + '&returnArrivalTimeTo=' + returnArrivalTimeTo + '&stopOverFrom=' + stopOverFrom + '&stopOverTo=' + stopOverTo + '&offset=' + offset + '&limit=' + limit + '&sort=' + sort + '&asc=' + asc
      })
      .then(response => {
        resolve(Object.assign({}, response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }
*/
  static searchFlights(flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, market, locale, currency, flightType, passengerTotal, adultTotal, childTotal, infantTotal, directFlightsOnly, priceFrom, priceTo, departureTimeFrom, departureTimeTo, arrivalTimeFrom, arrivalTimeTo, returnDeperatureTimeFrom, returnDepartureTimeTo, returnArrivalTimeFrom, returnArrivalTimeTo, stopOverFrom, stopOverTo, offset, limit, sort, asc) {
    return new Promise((resolve, reject) => {
      resolve(Object.assign({}, flights));
    });
  }
}

export default FlightApi;
