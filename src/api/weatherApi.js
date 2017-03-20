import axios from 'axios';
import baseUrl from './baseApi';

class WeatherApi {
  static getCurrentWeather(id) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/weather?id=' + id)
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