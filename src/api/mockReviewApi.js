import delay from './delay';

const reviews = [
  {
    id: 1,
    featureType: 'restaurant',
    reviewer: {
      name: 'Paul Billington-Dykes',
      starRating: 3,
      comment: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      profileUrl: '/people/paul-billington-dykes',
      profilePic: '/static/img/50x50.png'
    },
    place: {
      id: 345,
      cityId: 123,
      countryId: 123,
      name: 'Coffee Shop 123',
      address: '3 Lion Court, Chester Ch4 0GN',
      image: '/static/img/coffee.jpg',
      tags: [
        "Default",
        "Deafult1",
        "Def"
      ]
    }
  },
  {
    id: 2,
    featureType: 'hotel',
    reviewer: {
      name: 'Paul Billington-Dykes',
      starRating: 3,
      comment: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      profileUrl: '/people/paul-billington-dykes',
      profilePic: '/static/img/50x50.png'
    },
    place: {
      id: 345,
      cityId: 123,
      countryId: 123,
      name: 'Holiday Inn Chester',
      address: '3 Lion Court, Chester Ch4 0GN',
      image: '/static/img/coffee.jpg',
      tags: [
        "1",
        "2",
        "Def"
      ]
    }
  },
  {
    id: 3,
    featureType: 'hotel',
    reviewer: {
      name: 'Paul Billington-Dykes',
      starRating: 3,
      comment: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      profileUrl: '/people/paul-billington-dykes',
      profilePic: '/static/img/50x50.png'
    },
    place: {
      id: 345,
      cityId: 123,
      countryId: 123,
      name: 'Holiday inn Liverpool',
      address: '3 Lion Court, Chester Ch4 0GN',
      image: '/static/img/coffee.jpg',
      tags: [
        "Default",
        "Deafult1",
        "Def"
      ]
    }
  },
  {
    id: 4,
    featureType: 'attraction',
    reviewer: {
      name: 'Paul Billington-Dykes',
      starRating: 3,
      comment: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      profileUrl: '/people/paul-billington-dykes',
      profilePic: '/static/img/50x50.png'
    },
    place: {
      id: 345,
      cityId: 123,
      countryId: 123,
      name: 'Chester Zoo',
      address: '3 Lion Court, Chester Ch4 0GN',
      image: '/static/img/coffee.jpg',
      tags: [
        "Default",
        "Deafult1",
        "Def"
      ]
    }
  }
];

class ReviewApi {
	static getReviews(type, id, limit, offset) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {

        let filteredList = [];
        let size = reviews.length;

        if (limit < size) {
          size = limit;
        }

        for (let index = 0; index < size; index++) {
          let v = reviews[index]['place.id'];
          if (v == id) {
            filteredList.push(reviews[index]);
          }
        }

				resolve(Object.assign([], filteredList));
			}, delay);
		});
	}

    static getGenericReviews(type, id, limit, offset) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        let filteredList = [];
        let size = reviews.length;

        if (limit < size) {
          size = limit;
        }

        for (let index = 0; index < size; index++) {

          switch (type)
          {
            case 'city':
              let f = reviews[index]['place.cityId'];
              if (f == id) {
                filteredList.push(reviews[index]);
              }
              break;
            case 'country':
              let g = reviews[index]['place.countryId'];
              if (g == id) {
                filteredList.push(reviews[index]);
              }
              break;
            default:
              filteredList.push(reviews[index]);
              break;
          }
        }

        resolve(Object.assign([], filteredList));
      }, delay);
    });
  }
}

export default ReviewApi;