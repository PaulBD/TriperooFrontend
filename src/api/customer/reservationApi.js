import axios from 'axios';
import baseUrl from '../baseApi';

class ReservationApi {
  // ****************************************
  // Get Itinery
  // ****************************************
  static getHotelItinery() {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:  baseUrl + '/customer/itinery/hotel',
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
  // Cancel Hotel Itinery
  // ****************************************
  static cancelHotelItinery(itineryId, confirmationNumber, reason) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url:  baseUrl + '/customer/itinery/hotel/' + itineryId + '?confirmationNumber=' + confirmationNumber + '&reason=' + reason,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
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

export default ReservationApi;
