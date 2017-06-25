import axios from 'axios';
import baseUrl from '../baseApi';

class CmsApi {

  // ****************************************
  // Update Location
  // ****************************************
  static updateCMSLocation(cmsLocation) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url:  baseUrl + '/location/' + cmsLocation.regionID,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          location: cmsLocation
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

export default CmsApi;
