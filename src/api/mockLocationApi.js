import axios from 'axios';

class LocationApi {
  static getLocation(id, type) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost/api/v1/location/' + type + '/' + id)
        .then(function (response) {
          resolve(Object.assign([], response.data.triperoo));
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }
}

export default LocationApi;