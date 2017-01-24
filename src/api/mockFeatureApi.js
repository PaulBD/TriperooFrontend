import delay from './delay';

const features = [
  {
    id: 1,
    featureType: 'homePage',
    title: 'Fuerteventura',
    subTitle: 'travel 5 star from',
    price: '£400',
    url: '/holidays/fuerteventura',
    backgroundImage: '/static/img/locations/Fuerteventura.jpg',
    buttonText: 'Explore'
  },
  {
    id: 2,
    featureType: 'destination',
    title: 'Pick a destination to start exploring',
    subTitle: 'Photos, maps, and advice from your friends and people like you',
    price: '',
    url: '/whisk-me-away',
    backgroundImage: '/static/img/destinationMain2.jpg',
    buttonText: 'Whisk Me Away'
  },
  {
    id: 3,
    featureType: 'flight',
    title: 'Bangkok Return Flight',
    subTitle: 'Perfect Christmas Gift',
    price: '£499 per person',
    url: '/flights',
    backgroundImage: '/static/img/flight.jpg',
    buttonText: 'Explore'
  },
  {
    id: 4,
    featureType: 'holiday',
    title: 'Cancun, Carribean Coast',
    subTitle: 'Perfect Christmas Gift',
    price: '£499 per person',
    url: '/holidays',
    backgroundImage: '/static/img/winter-sun.jpeg',
    buttonText: 'Explore'
  },
  {
    id: 5,
    featureType: 'hotel',
    title: 'Ritz - London',
    subTitle: 'stay 5 star from',
    price: '£99 per night',
    url: '/places/united-kingdom/london/hotels/the-ritz',
    backgroundImage: '/static/img/hotelRoom.jpg',
    buttonText: 'Explore'
  },
  {
    id: 6,
    featureType: 'lastMinute',
    headline: 'Last Minute Deal',
    title: 'The Peninsula - New York',
    subTitle: 'Fri 15 Mar - Sun 16 Mar',
    price: '£121 per person',
    url: '/static/img/locations/popular-destinations/peninsula.jpg',
    backgroundImage: '/static/img/hotelRoom.jpg',
    buttonText: 'Book Now',
    starRating: 5
  }
];

class FeaturedApi {
	static getFeatureForHeader(featureType) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {

        let filteredList = [];
        let size = features.length;
        for (let index = 0; index < size; index++) {
          let v = features[index]['featureType'];
          if (v.toString().toLowerCase().indexOf(featureType.toLowerCase()) !== -1) {
            filteredList.push(features[index]);
          }
        }

				resolve(Object.assign([], filteredList));
			}, delay);
		});
	}
}

export default FeaturedApi;