import axios from 'axios';
import airportList from './json/ukAirports.json'; 

class AirportApi {
  // ****************************************
  // Return hardcoded uk airports from json 
  // ukAirports.json
  // ****************************************
  static getAirports() {
    return new Promise((resolve, reject) => {
	    
		  resolve(Object.assign([], airportList));
    });
  }
}

export default AirportApi;