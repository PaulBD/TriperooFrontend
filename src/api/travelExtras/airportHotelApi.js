import axios from 'axios';
import baseUrl from '../baseApi';

class AirportHotelApi {
  // ****************************************
  // Return airport hotels from HolidayExtras
  // ****************************************
  static loadAirportHotels(airportName, arrivalDate, departDate, dropOffCarDate, collectCarDate, nights, roomType, secondRoomType, parkingDays, language) {
    return new Promise((resolve, reject) => {
      let url = baseUrl + '/airport/' + airportName + '/hotels?arrivalDate=' + arrivalDate + '&departDate=' + departDate + '&nights=' + nights  + '&roomType=' + roomType  + '&secondRoomType=' + secondRoomType + '&parkingDays=' + parkingDays + '&language=' + language;
      if (collectCarDate != null)
      {
        url += '&dropOffCarDate=' + dropOffCarDate + '&collectCarDate=' + collectCarDate;
      }

      axios({
        method: 'get',
        url:  url
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

export default AirportHotelApi;
