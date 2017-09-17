import axios from 'axios';
import baseUrl from '../../baseApi';
import hotelList from '../../json/mock/hotels.json';
import hotel from '../../json/mock/hotel2.json';
import hotelRooms from '../../json/mock/hotelRoom2.json';

let live = true;

class HotelDealsApi {


  // ****************************************
  // Return hotel by id
  // ****************************************
  static getHotelById(locationId, hotelId, locale, currencyCode) {
    if (live) {
      return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/location/' + locationId + '/hotel/' + hotelId + '/?locale=' + locale + '&currencyCode=' + currencyCode)
          .then(function (response) {
            resolve(Object.assign({}, response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, hotel));
      });
    }
  }

  // ****************************************
  // Return hotel rooms by id
  // ****************************************
  static getHotelRoomsById(locationId, hotelId, arrivalDate, nights, locale, currencyCode) {
    if (live) {
      return new Promise((resolve, reject) => {
        let url = baseUrl + '/location/' + locationId + '/hotel/' + hotelId + '/rooms/' + arrivalDate + '/' + nights + '/?locale=' + locale + '&currencyCode=' + currencyCode;
        axios.get(url)
          .then(function (response) {
            resolve(Object.assign({}, response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, hotelRooms));
      });
    }
  }

  // ****************************************
  // Return hotels by location Id
  // ****************************************
  static getHotelsByLocation(locationId, arrivalDate, nights, locale, currencyCode, room, city, pageSize, pageNumber) {
    if (live) {
      return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/location/' + locationId + '/hotels/' + arrivalDate + '/' + nights + '?locale=' + locale + '&currencyCode=' + currencyCode + '&room1=' + room + '&city=' + city + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
          .then(function (response) {
            resolve(Object.assign({}, response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, hotelList));
      });
    }
  }

  // ****************************************
  // Return hotels by location Id
  // ****************************************
  static getHotelsByProximty(locationId, latitude, longitude, radius, locale, currencyCode, pageSize, pageNumber) {
    if (live) {
      return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/location/' + locationId + '/hotels/?latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&locale=' + locale + '&currencyCode=' + currencyCode + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
          .then(function (response) {
            resolve(Object.assign({}, response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, hotelList));
      });
    }
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
