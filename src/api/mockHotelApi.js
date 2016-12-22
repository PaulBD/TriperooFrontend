import delay from './delay';
import hotels from './json/hotels.json'; 

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
}

export default HotelApi;