import delay from './delay';

const place = {
    id: 123,
    type: "city",
    name: "Chester",
    county: "Cheshire",
    country: "United Kingdom",
    imageUrl: "/static/img/locations/city/united-kingdom/chester.jpg",
    url: "/places/123/united-kingdom/chester",
    countryUrl: "/places/123/united-kingdom",
    overview: "Chester is a city in northwestern, England, lying on the River Dee, close to the border with Wales. It is one of the best preserved walled cities in Britain, with a number of medieval buildings. Chester is one of English history's greatest gifts to today's tourist. Its red-sandstone wall, encircling a fine collection of Tudor and Victorian buildings, was built during Roman times. The Industrial Revolution brought railways, canals, and new roads to the city, which saw a great deal of expansion and development. Chester Town Hall and the Grosvenor Museum are good examples of Victorian architecture...",
    latitude:"53.1934",
    longitude: "-2.8931",
    data: {
      hotels: {
        url: '/places/123/united-kingdom/chester/hotels',
        name: 'Hotels',
        count: 65
      },
      restaurants: {
        url: '/places/123/united-kingdom/chester/restaurants',
        name: 'Restaurants',
        count: 63
      },
      bars: {
        url: '/places/123/united-kingdom/chester/bars',
        name: 'Bars',
        count: 61
      },
      attractions: {
        url: '/places/123/united-kingdom/chester/attractions',
        name: 'Attractions',
        count: 25
      },
      reviews: {
        url: '/places/123/united-kingdom/chester/reviews',
        name: 'Reviews',
        count: 45
      },
      questions: {
        url: '/places/123/united-kingdom/chester/questions',
        name: 'Questions',
        count: 23
      }
    }
};

const country = {
  id: 123,
  type: "country",
  name: "United Kingdom",
  imageUrl: "/static/img/locations/city/united-kingdom/chester.jpg",
  url: "/place/united-kingdom",
  overview: "What is the United Kingdom? For some, the UK is a blueblood manor home in the Cotswolds. For others, it's the international melting pot of hip-and-happening Manchester. For visitors, it's almost anything you like. Want to visit isolated castle ruins and hike through a moon-like landscape? Head to northern Scotland. Want to get literary? Stop in London's City Center to catch a performance at Shakespeare's Globe Theatre or visit Jane Austen's favorite sites in Bath. How about a trip back in time? Witness the grandeur of York's medieval cathedral, Edinburgh's perfectly preserved 1000-year-old castle, or go way, way back, to pre-historic monoliths at Stonehenge. But don't forget the natural beauty. Northern Ireland's Causeway Coast offers a rugged and scenic landscape, interspersed with darling villages. Hikers flock to Wales' Snowdonia National Park or England's Pennines to take part in one of the UK's favorite pastimes. No trip to the UK is complete without spending a few nights in a traditional pub drinking with the locals and trying out the local dishes which, these days, often means curry or noodles.",
  latitude:"53.1934",
  longitude: "-2.8931",
  data: {
    hotels: {
      url: '/places/123/united-kingdom/search-hotels',
      name: 'Hotels',
      count: 0
    },
    flights: {
      url: '/places/123/united-kingdom/search-flights',
      name: 'Flights',
      count: 0
    },
    restaurants: {
      url: '/places/123/united-kingdom/search-restaurants',
      name: 'Restaurants',
      count: 0
    },
    attractions: {
      url: '/places/123/united-kingdom/search-attractions',
      name: 'Attractions',
      count: 0
    },
    reviews: {
      url: '/places/123/united-kingdom/read-reviews',
      name: 'Reviews',
      count: 0
    },
    questions: {
      url: '/places/123/united-kingdom/ask-questions',
      name: 'Questions',
      count: 0
    }
  }
};

class PlaceApi {
	static getPlace(id, type) {
		return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (type === 'city') {
          resolve(Object.assign([], place));
        } else {
          resolve(Object.assign([], country));
        }
			}, delay);
		});
	}
}

export default PlaceApi;