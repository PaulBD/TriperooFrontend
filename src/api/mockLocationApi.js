import delay from './delay';

import locationCity from './json/location-city.json';
import locationCountry from './json/location-country.json';

class LocationApi {
	static getLocation(id, type) {
		return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (type === 'city') {
          resolve(Object.assign([], locationCity));
        } else {
          resolve(Object.assign([], locationCountry));
        }
			}, delay);
		});
	}
}

export default LocationApi;