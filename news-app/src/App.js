import React, { useContext, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Articles from './components/articles/Articles';
import NewsContext from './context/newsContext';

const App = () => {
  const newsContext = useContext(NewsContext);

  useEffect(() => {
    newsContext.getLatestNews();

    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar />
      <Articles />
    </>
  );
};

export default App;
