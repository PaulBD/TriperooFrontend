import axios from 'axios';
import baseUrl from './baseApi';

class AirportHotelApi {
  // ****************************************
  // Return airport hotels from HolidayExtras
  // ****************************************
  static loadAiportHotels(airport, arrivalDate, departDate, flightDate, nights, roomType, secondRoomType, parkingDays, language) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/airportHotels?locationName=' + airport + '&arrivalDate=' + arrivalDate + '&departDate=' + departDate + '&flightDate=' + flightDate + '&nights=' + nights  + '&roomType=' + roomType  + '&secondRoomType=' + secondRoomType + '&parkingDays=' + parkingDays + '&language=' + language
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

export default AirportHotelApi;
