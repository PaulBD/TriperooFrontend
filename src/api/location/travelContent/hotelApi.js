import axios from 'axios';
import baseUrl from '../../baseApi';


class HotelDealsApi {

  // ****************************************
  // Book hotel
  // ****************************************
  static bookHotel(locationId, hotelId, arrivalDate, nights, supplierType, rateKey, roomTypeCode, rateCode, chargeableRate, numberOfAdults1, firstNameRoom1, lastNameRoom1, bedTypeIdRoom1, numberOfAdults2, firstNameRoom2, lastNameRoom2, bedTypeIdRoom2, numberOfAdults3, firstNameRoom3, lastNameRoom3, bedTypeIdRoom3, emailAddress, firstName, lastName, homePhone, workPhone, creditCardType, creditCardNumber, creditCardIdentifier, creditCardExpiryMonth, creditCardExpiryYear, address1, city, stateProvince, countryCode, postalCode, specialInstructions) {

    let url = baseUrl + '/location/' + locationId + '/hotel/' + hotelId + '/book';
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          arrivalDate: arrivalDate,
          nights: nights,
          supplierType: supplierType,
          rateKey: rateKey,
          roomTypeCode: roomTypeCode,
          rateCode: rateCode,
          chargeableRate: chargeableRate,
          numberOfAdults1: numberOfAdults1,
          firstNameRoom1: firstNameRoom1,
          lastNameRoom1: lastNameRoom1,
          bedTypeIdRoom1: bedTypeIdRoom1,

          numberOfAdults2: numberOfAdults2,
          firstNameRoom2: firstNameRoom2,
          lastNameRoom2: lastNameRoom2,
          bedTypeIdRoom2: bedTypeIdRoom2,

          numberOfAdults3: numberOfAdults3,
          firstNameRoom3: firstNameRoom3,
          lastNameRoom3: lastNameRoom3,
          bedTypeIdRoom3: bedTypeIdRoom3,

          emailAddress: emailAddress,
          firstName: firstName,
          lastName: lastName,
          homePhone: homePhone,
          workPhone: workPhone,

          creditCardType: creditCardType,
          creditCardNumber: creditCardNumber,
          creditCardIdentifier: creditCardIdentifier,
          creditCardExpiryMonth: creditCardExpiryMonth,
          creditCardExpiryYear: creditCardExpiryYear,
          address1: address1,
          city: city,
          stateProvince: stateProvince,
          countryCode: countryCode,
          postalCode: postalCode,
          specialInstructions: specialInstructions

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

  // ****************************************
  // Return hotel by id
  // ****************************************
  static getHotelById(locationId, hotelId, locale, currencyCode) {
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

  // ****************************************
  // Return hotel rooms by id
  // ****************************************
  static getHotelRoomsById(locationId, hotelId, arrivalDate, nights, rooms, guests, locale, currencyCode) {
    return new Promise((resolve, reject) => {
      let url = baseUrl + '/location/' + locationId + '/hotel/' + hotelId + '/rooms/' + arrivalDate + '/' + nights + '/?locale=' + locale + '&currencyCode=' + currencyCode + '&rooms=' + rooms + '&guests=' + guests;
      axios.get(url)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Return hotel room by room code
  // ****************************************
  static getHotelRoomByRoomCode(locationId, hotelId, arrivalDate, nights, rooms, guests, locale, currencyCode, roomTypeCode, rateCode) {
    return new Promise((resolve, reject) => {
      let url = baseUrl + '/location/' + locationId + '/hotel/' + hotelId + '/room/' + arrivalDate + '/' + nights + '?roomTypeCode=' + roomTypeCode + '&locale=' + locale + '&currencyCode=' + currencyCode + '&rooms=' + rooms + '&guests=' + guests + '&rateCode=' + rateCode;
      axios.get(url)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Return hotels by location Id
  // ****************************************
  static getHotelsByLocation(locationId, arrivalDate, nights, locale, currencyCode, rooms1, rooms2, rooms3, location, filters, sortBy, pageSize, pageNumber, exclude) {

    let url = baseUrl + '/location/' + locationId + '/hotels';
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
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

  // ****************************************
  // Return hotels by Proximity
  // ****************************************
  static getHotelsByProximty(locationId, latitude, longitude, radius, arrivalDate, nights, locale, currencyCode, rooms1, rooms2, rooms3, location, filters, sortBy, pageSize, pageNumber, exclude, checkDates) {
    let url = baseUrl + '/location/' + locationId + '/hotels';

    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
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
}

export default HotelDealsApi;
