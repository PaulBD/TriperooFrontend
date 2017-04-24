import axios from 'axios';
import baseUrl from './baseApi';
import attractionCategories from './json/attractionCategories.json'; 

class AttractionsApi {
  // ****************************************
  // Return attractions using parent id
  // ****************************************
  static getAttractionsByParentLocationId(parentLocationId, categoryName, pageSize, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/attractions?parentLocationId=' + parentLocationId + '&categoryName=' + categoryName + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber)
        .then(function (response) {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  static getAttractionCategories() {
    return new Promise((resolve, reject) => {
      let filteredList = [];
      let size = attractionCategories.length;
      for (let index = 0; index < size; index++) {
        filteredList.push(attractionCategories[index]);
      }
      resolve(Object.assign([], filteredList));
    });
  }
}

export default AttractionsApi;