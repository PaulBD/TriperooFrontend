import axios from 'axios';
import topDestinations from './json/destinations.json'; 

class DestinationsApi {
  // ****************************************
  // Return hardcoded destinations from json 
  // destinations.json
  // ****************************************
  static getDestinations(size) {
    return new Promise((resolve, reject) => {
	    let filteredList = [];
	    for (let index = 0; index < size; index++) {
	        filteredList.push(topDestinations[index]);
	    }
		resolve(Object.assign([], filteredList));
    });
  }
}

export default DestinationsApi;