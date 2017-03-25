import axios from 'axios';
import baseUrl from './baseApi';

class WeatherApi {
  // ****************************************
  // Return weather by location
  // ****************************************
  static getCurrentWeather(latitude, longitude, language) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/weather?longitude=' + longitude + '&latitude=' + latitude + '&lang=' + language)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default WeatherApi;