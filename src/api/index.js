import fetchJsonp from 'fetch-jsonp';

class Api {
  constructor() {
    this.base = 'https://api.themoviedb.org/3';
    this.api_key = '389bc583121f268d96efb0fda3906dca';
  }

  searchMovies(query) {
    const url = this._getFullUrl('/search/movie/', {query});
    return this._getJSONP(url);
  }

  getMovie(id) {
    const url = this._getFullUrl(`/movie/${id}`);
    return this._getJSONP(url);
  }

  getCast(id) {
    const url = this._getFullUrl(`/movie/${id}/credits`);
    return this._getJSONP(url);
  }

  getVideos(id) {
    const url = this._getFullUrl(`/movie/${id}/videos`);
    return this._getJSONP(url);
  }

  getConfig() {
    const url = this._getFullUrl('/configuration');
    return this._getJSONP(url);
  }

  getGenres() {
    const url = this._getFullUrl('/genre/movie/list');
    return this._getJSONP(url);
  }

  _getJSONP(url) {
    return fetchJsonp(url)
      .then(response => response.json());
  }

  _getFullUrl(path, data = {}) {
    const dataWithKey = {...data, 'api_key': this.api_key};
    let params;
    let ret = [];

    for (let d in dataWithKey){
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(dataWithKey[d]));
    }
    params = ret.join('&');

    return `${this.base}${path}?${params}`;
  }
}

export default new Api();
