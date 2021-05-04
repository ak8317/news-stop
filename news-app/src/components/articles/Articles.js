import React, { useContext } from 'react';
import ArticleItem from './ArticleItem';
import NewsContext from '../../context/newsContext';
import Spinner from '../layout/Spinner';

const Articles = () => {
  const newsContext = useContext(NewsContext);
  const { latestNews, loading, filteredNews, searchText } = newsContext;

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='container w-100 lg:w-4/5 mx-auto flex flex-col px-10 mb-10'>
      {filteredNews.length > 0 ? (
        <h1 className='text-center font-bold text-3xl text-gray-400'>
          {`Showing Results for ${searchText}`}
        </h1>
      ) : (
        <h1 className='text-center font-bold text-3xl text-gray-400'>
          Latest News
        </h1>
      )}
      {filteredNews.length > 0
        ? filteredNews.map((article, id) => (
            <ArticleItem article={article} key={id} />
          ))
        : latestNews.map((article, id) => (
            <ArticleItem article={article} key={id} />
          ))}
    </div>
  );
};

export default Articles;
