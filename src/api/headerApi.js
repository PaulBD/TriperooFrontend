import pageHeaders from './json/pageHeaders.json'; 

class HeaderApi {
  static getHeader(headerType) {
    return new Promise((resolve, reject) => {
      let filteredList = [];
      let size = pageHeaders.length;
      for (let index = 0; index < size; index++) {
        let v = pageHeaders[index]['headerType'];
        if (v.toString().toLowerCase().indexOf(headerType.toLowerCase()) !== -1) {
          filteredList.push(pageHeaders[index]);
        }
      }

      resolve(Object.assign([], filteredList));
    });
  }
}

export default HeaderApi;