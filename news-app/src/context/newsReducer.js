import {
  GET_LATEST_NEWS,
  SET_LOADING,
  API_ERROR,
  LOAD_SEARCH,
  CLEAR_SEARCH,
} from './types';

const newsReducer = (state, action) => {
  switch (action.type) {
    case GET_LATEST_NEWS:
      return {
        ...state,
        latestNews: action.payload,
        loading: false,
      };
    case LOAD_SEARCH:
      return {
        ...state,
        filteredNews: action.payload,
        searchText: action.p,
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        filteredNews: [],
        searchText: '',
        loading: false,
      };
    case API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default newsReducer;
