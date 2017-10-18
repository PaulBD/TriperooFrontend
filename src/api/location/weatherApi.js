import axios from 'axios';
import baseUrl from '../baseApi';
import environment from '../environment';
import mockWeather from '../json/mock/weather.json';

class WeatherApi {
  // ****************************************
  // Return weather by location
  // ****************************************
  static getCurrentWeather(locationId, language) {
    if (environment){
      return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/location/' + locationId + '/weather?lang=' + language)
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
        resolve(Object.assign({}, mockWeather));
      });
    }
  }
}

export default WeatherApi;
