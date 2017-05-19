import eventCategories from '../../json/eventCategories.json';
import attractionCategories from '../../json/attractionCategories.json';
import restaurantCategories from '../../json/restaurantCategories.json';
import nightlifeCategories from '../../json/nightlifeCategories.json';

class CategoryApi {
  // ****************************************
  // Return categories for events
  // ****************************************
  static getEventCategories() {
    return new Promise((resolve, reject) => {
      let filteredList = [];
      let size = eventCategories.length;
      for (let index = 0; index < size; index++) {
        if (eventCategories[index].show == 1)
        {
          filteredList.push(eventCategories[index]);
        }
      }
      resolve(Object.assign([], filteredList));
    });
  }

  // ****************************************
  // Return categories for attractions
  // ****************************************
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

  // ****************************************
  // Return categories for restaurants
  // ****************************************
  static getRestaurantCategories() {
    return new Promise((resolve, reject) => {
      let filteredList = [];
      let size = restaurantCategories.length;
      for (let index = 0; index < size; index++) {
        filteredList.push(restaurantCategories[index]);
      }
      resolve(Object.assign([], filteredList));
    });
  }

  // ****************************************
  // Return categories for nightlife
  // ****************************************
  static getNightlifeCategories() {
    return new Promise((resolve, reject) => {
      let filteredList = [];
      let size = nightlifeCategories.length;
      for (let index = 0; index < size; index++) {
        filteredList.push(nightlifeCategories[index]);
      }
      resolve(Object.assign([], filteredList));
    });
  }
}

export default CategoryApi;
