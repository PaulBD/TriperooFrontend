import delay from './delay';

const deals = [
  {
    id: 1,
    cityId: 123,
    countryId: 123,
    type: 'attraction',
    featureType: 'hot',
    title: 'Holiday Inn JFK 22',
    subTitle: 'from £327',
    price: '£327',
    imageUrl: '/static/img/hotel1.jpg',
    url: '/united-states/new-york/hotels/holiday-inn-jfk',
    starRating: 3
  },
  {
    id: 2,
    cityId: 123,
    countryId: 123,
    type: 'attraction',
    featureType: 'hot',
    title: 'Holiday Inn JFK 42',
    subTitle: 'from £387',
    price: '£387',
    imageUrl: '/static/img/hotel.jpg',
    url: '/united-states/new-york/hotels/holiday-inn-jfk',
    starRating: 5
  },
  {
    id: 3,
    cityId: 123,
    countryId: 123,
    type: 'attraction',
    featureType: 'hot',
    title: 'Holiday Inn JFK 11',
    subTitle: 'from £327',
    price: '£327',
    imageUrl: '/static/img/hotel2.jpg',
    url: '/united-states/new-york/hotels/holiday-inn-jfk',
    starRating: 2
  },
  {
    id: 4,
    cityId: 123,
    countryId: 123,
    type: 'restaurant',
    featureType: 'trending',
    title: 'Holiday Inn JFK 1',
    subTitle: 'from £3107',
    price: '£307',
    imageUrl: '/static/img/hotel2.jpg',
    url: '/united-states/new-york/hotels/holiday-inn-jfk',
    starRating: 3
  },
  {
    id: 5,
    cityId: 123,
    countryId: 123,
    type: 'restaurant',
    featureType: 'trending',
    title: 'Holiday Inn JFK 4',
    subTitle: 'from £317',
    price: '£317',
    imageUrl: '/static/img/hotel.jpg',
    url: '/united-states/new-york/hotels/holiday-inn-jfk',
    starRating: 5
  },
  {
    id: 6,
    cityId: 123,
    countryId: 123,
    type: 'restaurant',
    featureType: 'trending',
    title: 'Holiday Inn JFK 1',
    subTitle: 'from £327',
    price: '£327',
    imageUrl: '/static/img/hotel2.jpg',
    url: '/united-states/new-york/hotels/holiday-inn-jfk',
    starRating: 2
  },
  {
    id: 7,
    cityId: 123,
    countryId: 123,
    type: 'hotel',
    featureType: 'special',
    title: 'Holiday Inn JFK 1',
    subTitle: 'from £387',
    subTitle: 'from £347',
    price: '£347',
    imageUrl: '/static/img/hotel1.jpg',
    url: '/united-states/new-york/hotels/holiday-inn-jfk',
    starRating: 3
  },
  {
    id: 8,
    cityId: 123,
    countryId: 123,
    type: 'hotel',
    featureType: 'special',
    title: 'Holiday Inn JFK 2',
    subTitle: 'from £387',
    price: '£387',
    imageUrl: '/static/img/hotel.jpg',
    url: '/united-states/new-york/hotels/holiday-inn-jfk',
    starRating: 5
  },
  {
    id: 9,
    cityId: 123,
    countryId: 123,
    type: 'hotel',
    featureType: 'special',
    title: 'Holiday Inn JFK 3',
    subTitle: 'from £347',
    price: '£347',
    imageUrl: '/static/img/hotel2.jpg',
    url: '/united-states/new-york/hotels/holiday-inn-jfk',
    starRating: 2
  }
];

class DealApi {
	static getDealList(featureType) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {

        let filteredList = [];
        let size = deals.length;
        for (let index = 0; index < size; index++) {
          let v = deals[index]['featureType'];
          if (v.toString().toLowerCase().indexOf(featureType.toLowerCase()) !== -1) {
            filteredList.push(deals[index]);
          }
        }

				resolve(Object.assign([], filteredList));
			}, delay);
		});
	}

  static getDealListByPlace(id, placeType, type) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        let filteredList = [];
        let size = deals.length;
        for (let index = 0; index < size; index++) {
          let v = deals[index]['type'];
          if (v.toString().toLowerCase().indexOf(type.toLowerCase()) !== -1) {
            filteredList.push(deals[index]);
          }
        }

        resolve(Object.assign([], filteredList));
      }, delay);
    });
  }
}

export default DealApi;