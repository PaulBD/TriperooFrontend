import axios from 'axios';
import baseUrl from '../baseApi';

class WeatherApi {
  // ****************************************
  // Return weather by location
  // ****************************************
  static getCurrentWeather(locationId, language) {
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
}

export default WeatherApi;