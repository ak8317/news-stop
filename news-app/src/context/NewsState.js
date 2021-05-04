import axios from 'axios';
import { useReducer } from 'react';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import {
  GET_LATEST_NEWS,
  SET_LOADING,
  API_ERROR,
  LOAD_SEARCH,
  CLEAR_SEARCH,
} from './types';

const NewsState = (props) => {
  const initialState = {
    latestNews: [],
    filteredNews: [],
    searchText: '',
    error: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  //get latest news
  const getLatestNews = async () => {
    setLoading();

    try {
      const res = await axios.get('/api/articles');

      dispatch({
        type: GET_LATEST_NEWS,
        payload: res.data[0].articles,
      });
    } catch (err) {
      dispatch({
        type: API_ERROR,
        paylaod: err,
      });
    }
  };
  //search query
  const getSearchResults = async (text) => {
    setLoading();

    try {
      const res = await axios.post('/api/articles', {
        query: text,
      });
      dispatch({
        type: LOAD_SEARCH,
        payload: res.data.articles,
        p: text,
      });
    } catch (err) {
      dispatch({
        type: API_ERROR,
        paylaod: err,
      });
    }
  };
  const clearFilteredNews = () => {
    dispatch({
      type: CLEAR_SEARCH,
    });
  };
  //set loading to true:
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <NewsContext.Provider
      value={{
        latestNews: state.latestNews,
        error: state.error,
        loading: state.loading,
        filteredNews: state.filteredNews,
        searchText: state.searchText,
        getLatestNews,
        getSearchResults,
        clearFilteredNews,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
