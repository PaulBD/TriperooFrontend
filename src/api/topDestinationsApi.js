import axios from 'axios';
import topDestinations from './json/topDestinations.json'; 

class TopDestinationsApi {
  static getTopDestinations(size) {
    return new Promise((resolve, reject) => {
	    let filteredList = [];
	    for (let index = 0; index < size; index++) {
	        filteredList.push(topDestinations[index]);
	    }
		resolve(Object.assign([], filteredList));
    });
  }
}

export default TopDestinationsApi;