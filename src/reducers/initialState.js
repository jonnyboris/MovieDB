export default {
  search: {
    query: "",
    loading: false,
    results: [],
    resultsPage: 1,
    message: 'Search for a movie above'
  },

  config: {
    configured: false,
    images: {},
    change_keys: [],
    genres: {},
    message: 'Loading config'
  },

  favourites: {
    list: [],
    ids: {}
  },

  movie: {
    details: {},
    cast: {},
    trailer: {loaded: false},

    loading: true,
    message: "Loading movie"
  }
};
