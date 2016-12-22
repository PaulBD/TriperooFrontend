import delay from './delay';

const questions = [
  {
    id: 1,
    featureType: 'restaurant',
    reviewer: {
      name: 'Paul Billington-Dykes',
      starRating: 3,
      question: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
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
      question: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
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
      question: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
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
      question: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
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

class QuestionApi {
	static getQuestions(type, id, limit, offset) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {

        let filteredList = [];
        let size = questions.length;

        if (limit < size) {
          size = limit;
        }

        for (let index = 0; index < size; index++) {
          let v = questions[index]['place.id'];
          if (v == id) {
            filteredList.push(questions[index]);
          }
        }

				resolve(Object.assign([], filteredList));
			}, delay);
		});
	}

    static getGenericQuestions(type, id, limit, offset) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        let filteredList = [];
        let size = questions.length;

        if (limit < size) {
          size = limit;
        }

        for (let index = 0; index < size; index++) {

          switch (type)
          {
            case 'city':
              let f = questions[index]['place.cityId'];
              if (f == id) {
                filteredList.push(questions[index]);
              }
              break;
            case 'country':
              let g = questions[index]['place.countryId'];
              if (g == id) {
                filteredList.push(questions[index]);
              }
              break;
            default:
              filteredList.push(questions[index]);
              break;
          }
        }

        resolve(Object.assign([], filteredList));
      }, delay);
    });
  }
}

export default QuestionApi;