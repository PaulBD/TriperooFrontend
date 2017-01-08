import delay from './delay';
import hotels from './json/hotels.json'; 
import hotelSearch from './json/hotelSearch.json';

class HotelApi {
  static getHotelsByLocation(id, placeType) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        let filteredList = [];
        let size = hotels.hotel.length;
        for (let index = 0; index < size; index++) {
            filteredList.push(hotels.hotel[index]);
        }

        resolve(Object.assign([], filteredList));
      }, delay);
    });
  }

  static getHotelsBySearch(searchValue, startDate, endDate, rooms, guests) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        let filteredList = [];
        let size = hotelSearch.hotel.length;
        for (let index = 0; index < size; index++) {
            filteredList.push(hotelSearch.hotel[index]);
        }

        resolve(Object.assign([], filteredList));
      }, delay);
    });
  }

}

export default HotelApi;