import axios from 'axios';
import baseUrl from '../../baseApi';
import environment from '../../environment';
import hotelList from '../../json/mock/hotels.json';
import hotel from '../../json/mock/hotel2.json';
import hotelRooms from '../../json/mock/hotelRoom2.json';
import mockHotelDeal from '../../json/mock/hotelDeal.json';


class HotelDealsApi {


  // ****************************************
  // Return hotel by id
  // ****************************************
  static getHotelById(locationId, hotelId, locale, currencyCode) {
    if (environment) {
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
  static getHotelRoomsById(locationId, hotelId, arrivalDate, nights, rooms, guests, locale, currencyCode) {
    if (environment) {
      return new Promise((resolve, reject) => {
        let url = baseUrl + '/location/' + locationId + '/hotel/' + hotelId + '/rooms/' + arrivalDate + '/' + nights + '/?locale=' + locale + '&currencyCode=' + currencyCode + '&rooms=' + rooms+ '&guests=' + guests;
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
  static getHotelsByLocation(locationId, arrivalDate, nights, locale, currencyCode, rooms1, rooms2, rooms3, location, filters, sortBy, pageSize, pageNumber, exclude) {
    if (environment) {
      let url = baseUrl + '/location/' + locationId + '/hotels';
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:  url,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            locale: locale,
            currencyCode: currencyCode,
            location: location,
            propertyCategory: filters.propertyCategory,
            minRate: filters.minRate,
            maxRate: filters.maxRate,
            minStarRating: filters.minStarRating,
            maxStarRating: filters.maxStarRating,
            minTripAdvisorRating: filters.minTripAdvisorRating,
            maxTripAdvisorRating: filters.maxTripAdvisorRating,
            facilityList: filters.facilityList,
            arrivalDate: arrivalDate,
            nights: nights,
            rooms1: rooms1,
            rooms2: rooms2,
            rooms3: rooms3,
            sortBy: sortBy,
            exclude: exclude,
            checkDates: true,
            pageSize: pageSize,
            pageNumber: pageNumber
          }
        })
          .then(response => {
            resolve(Object.assign({}, response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
    else {

      console.log(hotelList);
      return new Promise((resolve, reject) => {
        resolve(Object.assign({}, hotelList));
      });
    }
  }

  // ****************************************
  // Return hotels by Proximity
  // ****************************************
  static getHotelsByProximty(locationId, latitude, longitude, radius, arrivalDate, nights, locale, currencyCode, rooms1, rooms2, rooms3, location, filters, sortBy, pageSize, pageNumber, exclude, checkDates) {
    if (environment) {

      let url = baseUrl + '/location/' + locationId + '/hotels';

      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:  url,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            locale: locale,
            currencyCode: currencyCode,
            latitude: latitude,
            longitude: longitude,
            radius: radius,
            propertyCategory: filters.propertyCategory,
            minRate: filters.minRate,
            maxRate: filters.maxRate,
            minStarRating: filters.minStarRating,
            maxStarRating: filters.maxStarRating,
            minTripAdvisorRating: filters.minTripAdvisorRating,
            maxTripAdvisorRating: filters.maxTripAdvisorRating,
            facilityList: filters.facilityList,
            arrivalDate: arrivalDate,
            nights: nights,
            rooms1: rooms1,
            rooms2: rooms2,
            rooms3: rooms3,
            sortBy: sortBy,
            checkDates: checkDates,
            exclude: exclude,
            pageSize: pageSize,
            pageNumber: pageNumber
          }
        })
          .then(response => {
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
    if (environment) {
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
    else {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], mockHotelDeal));
      });
    }
  }
}

export default HotelDealsApi;
