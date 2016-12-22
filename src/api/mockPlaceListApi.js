import delay from './delay';

const places = [
  {
    id: 1,
    cityId: 123,
    countryId: 123,
    name: "Chester",
    url: '/places/123/united-kingdom/chester',
    imageUrl: '/static/img/locations/city/united-kingdom/chester.jpg'
  },
  {
    id: 2,
    cityId: 123,
    countryId: 123,
    name: "Lorem Ipsum Dolar sit amet",
    url: '/places/123/united-kingdom/hotels/test',
    imageUrl: '/static/img/800x600.png'
  },
  {
    id: 3,
    cityId: 123,
    countryId: 123,
    name: "Lorem Ipsum Dolar sit amet",
    url: '/places/123/united-kingdom/hotels/test',
    imageUrl: '/static/img/800x600.png'
  },
  {
    id: 4,
    cityId: 123,
    countryId: 123,
    name: "Lorem Ipsum Dolar sit amet",
    url: '/places/123/united-kingdom/hotels/test',
    imageUrl: '/static/img/800x600.png'
  },
  {
    id: 5,
    cityId: 123,
    countryId: 123,
    name: "Lorem Ipsum Dolar sit amet",
    url: '/places/123/united-kingdom/hotels/test',
    imageUrl: '/static/img/800x600.png'
  },
  {
    id: 6,
    cityId: 123,
    countryId: 123,
    name: "Lorem Ipsum Dolar sit amet",
    url: '/places/123/united-kingdom/hotels/test',
    imageUrl: '/static/img/800x600.png'
  },
  {
    id: 7,
    cityId: 123,
    countryId: 123,
    name: "Lorem Ipsum Dolar sit amet",
    url: '/places/123/united-kingdom/hotels/test',
    imageUrl: '/static/img/800x600.png'
  }
];

class PlaceListApi {
  static getTopPlaces(id, type) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let filteredList = [];
        let size = places.length;
        for (let index = 0; index < size; index++) {

          let v = 0;

          if (type === 'city') {
            v = places[index]['cityId'];
          }
          else {
            v = places[index]['countryId'];
          }

          if (v == id) {
            filteredList.push(places[index]);
          }
        }
        
        resolve(Object.assign([], filteredList));
      }, delay);
    });
  }
}

export default PlaceListApi;