import axios from 'axios';
import baseUrl from '../../baseApi';
import hotel from '../../json/mock/hotel.json';

class HotelDealsApi {

  // ****************************************
  // Return hotel by id
  // ****************************************
  static getHotelById(locationId, hotelId, locale, currencyCode) {
    /*return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/hotel/' + hotelId + '/?locale=' + locale + '&currencyCode=' + currencyCode)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
    */
    return new Promise((resolve, reject) => {
      resolve(Object.assign({}, hotel));
    });
  }

  // ****************************************
  // Return hotels by location Id
  // ****************************************
  static getHotelsByLocation(locationId, arrivalDate, nights, locale, currencyCode, room, city, country) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/hotels/' + arrivalDate + '/' + nights + '?locale=' + locale + '&currencyCode=' + currencyCode + '&room1=' + room + '&city=' + city + '&Country=' + country)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Return hotels by location Id
  // ****************************************
  static getHotelsByProximty(locationId, latitude, longitude, radius, locale, currencyCode) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/hotels/?latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&locale=' + locale + '&currencyCode=' + currencyCode)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }


  // ****************************************
  // Return hotel deals by location Id
  // ****************************************
  static getHotelDealsByLocation(locationId, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/location/' + locationId + '/deals/hotels?pageSize=' + pageSize + '&pageNumber=' + pageNumber)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default HotelDealsApi;
