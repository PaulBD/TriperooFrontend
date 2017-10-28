import axios from 'axios';
import baseUrl from '../baseApi';

class UserApi {

  // ****************************************
  // Update User
  // ****************************************
  static updateUser(profile) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url:  baseUrl + '/customer',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          profile
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Get User
  // ****************************************
  static getUser(customerReference) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/customer/' + customerReference)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }



  // ****************************************
  // GET trip
  // ****************************************
  static getTrip(tripId, customerReference) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/customer/' + customerReference + '/trip/' + tripId,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // GET trips
  // ****************************************
  static getTrips(customerReference) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/customer/' + customerReference + '/trips',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Post new trip
  // ****************************************
  static postTrip(trip, customerReference) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/customer/' + customerReference + '/trip',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          trip
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Archive trip
  // ****************************************
  static archiveTrip(tripId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url:  baseUrl + '/customer/trip/' + tripId,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }


  // ****************************************
  // GET activities
  // ****************************************
  static getActivities(tripId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/customer/trip/' + tripId + '/activities',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Post new activity
  // ****************************************
  static postActivity(tripId, activity) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/customer/trips/' + tripId + '/activity',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          activity
        }
      })
      .then(response => {
        resolve(Object.assign([], response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }

  // ****************************************
  // Archive activity
  // ****************************************
  static archiveActivity(tripId, locationId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url:  baseUrl + '/customer/trips/' + tripId + '/activity/' + locationId,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Post new photos
  // ****************************************
  static postPhotos(photos) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/customer/photos',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          photos
        }
      })
      .then(response => {
        resolve(Object.assign([], response.data));
      })
      .catch(function (error) {
        reject(error);
      });
    });
  }

  // ****************************************
  // Post new visit
  // ****************************************
  static postVisit(location) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/customer/visit',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          location
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default UserApi;
