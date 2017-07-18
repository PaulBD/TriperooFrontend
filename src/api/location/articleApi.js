import articles from '../json/articles.json';

class ArticlesApi {
  // ****************************************
  // Return categories for events
  // ****************************************
  static loadArticles(regionId) {
    return new Promise((resolve, reject) => {
      let filteredList = [];
      let size = articles.length;
      for (let index = 0; index < size; index++) {
        if (articles[index].regionId == regionId)
        {
          filteredList.push(articles[index]);
        }
      }
      resolve(Object.assign([], filteredList));
    });
  }
}

export default ArticlesApi;
