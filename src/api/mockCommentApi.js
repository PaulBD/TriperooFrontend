import delay from './delay';

const comments = [
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

class CommentApi {
	static getComments(type, id, limit, offset) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {

        let filteredList = [];
        let size = comments.length;

        if (limit < size) {
          size = limit;
        }

        for (let index = 0; index < size; index++) {

          if (type !== '') {
            let v = comments[index]['featureType'];
            if (v.toString().toLowerCase().indexOf(type.toLowerCase()) !== -1) {
              filteredList.push(comments[index]);
            }
          } else {
            filteredList.push(comments[index]);
          }
        }

				resolve(Object.assign([], filteredList));
			}, delay);
		});
	}
}

export default CommentApi;