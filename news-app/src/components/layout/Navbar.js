import React, { useContext, useState } from 'react';
import NewsContext from '../../context/newsContext';

const Navbar = () => {
  const newsContext = useContext(NewsContext);

  const { getSearchResults, clearFilteredNews, filteredNews } = newsContext;

  const [searchField, setSearchField] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchField) {
      getSearchResults(searchField);
      setSearchField('');
      // console.log('clicked');
    }
  };
  const clearSearch = () => {
    clearFilteredNews();
    setSearchField('');
  };
  return (
    <nav className='p-5 text-white bg-blue-800 mb-5 flex md:flex-row flex-col justify-between items-center'>
      <div className='text-3xl md:text-4xl font-bold '>
        <i className='fas fa-rss'></i> News Stop
      </div>

      <form className='md:mt-0 mt-4' onSubmit={onSubmit}>
        <input
          type='text'
          className='p-1 border-none text-base rounded-md h-7 w-52 text-blue-800'
          placeholder='Search '
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        {filteredNews && filteredNews.length > 0 ? (
          <button
            type='button'
            className='py-1 px-2 text-lg hover:text-blue-900'
            onClick={clearSearch}
          >
            <i className='fas fa-times'></i>
          </button>
        ) : (
          <button
            type='submit'
            className='py-1 px-2 text-lg hover:text-blue-900'
          >
            <i className='fa fa-search'></i>
          </button>
        )}
      </form>
    </nav>
  );
};

export default Navbar;
