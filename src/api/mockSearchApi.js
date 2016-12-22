import delay from './delay';

const searches = [
  {
    id: 1,
    type: 'city',
    value: 'Chester',
    url: '/places/123/united-kingdom/chester'
  },
  {
    id: 2,
    type: 'city',
    value: 'Chesterfield',
    url: '/places/234/united-kingdom/chesterfield'
  },
  {
    id: 3,
    type: 'city',
    value: 'Christchurch',
    url: '/places/567/new-zealand/christchurch'
  },
  {
    id: 4,
    type: 'restaurant',
    value: 'Chr restaurant',
    url: '/places/123/united-kingdom/chester/restaurants/chr-restaurant'
  },
  {
    id: 5,
    type: 'hotel',
    value: 'Chester Inn Hotel',
    url: '/places/123/united-kingdom/chester/hotels/chester-inn-hotel'
  }
];

class SearchApi {
	static getSearch(value, searchType) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {

        let filteredList = [];
        let size = searches.length;
        for (let index = 0; index < size; index++) {
          let v = searches[index]['value'].toString().toLowerCase();
          if (v.indexOf(value.toLowerCase()) !== -1) {
            if (searchType === 'all') {
              filteredList.push(searches[index]);
            } else {
              let y = searches[index]['type'];
              if (y.toString().toLowerCase().indexOf(searchType.toLowerCase()) !== -1) {
                filteredList.push(searches[index]);
              }
            }
          }
        }

				resolve(Object.assign([], filteredList));
			}, delay);
		});
	}
}

export default SearchApi;