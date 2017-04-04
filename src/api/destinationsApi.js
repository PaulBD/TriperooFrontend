import axios from 'axios';
import topDestinations from './json/destinations.json'; 

class DestinationsApi {
  // ****************************************
  // Return hardcoded destinations from json 
  // destinations.json
  // ****************************************
  static getDestinations(size, contentType) {
    return new Promise((resolve, reject) => {
	    let filteredList = [];
	    for (let index = 0; index < size; index++) {
        if (contentType == '') {
          filteredList.push(topDestinations[index]);
        } else {
          let v = topDestinations[index]['contentType'];
          console.log(topDestinations[index]['name']);

          if (v.includes(contentType)) {
            filteredList.push(topDestinations[index]);
          }
        }
	    }

      console.log(filteredList);
		resolve(Object.assign([], filteredList));
    });
  }
}

export default DestinationsApi;