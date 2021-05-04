import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ArticleItem = ({ article }) => {
  return (
    <div className='flex flex-col md:flex-row overflow-hidden  mt-4 w-100 mx-2 shadow'>
      <div className='h-auto w-auto md:w-1/2'>
        <a href={article.url} target='_blank' rel='noreferrer'>
          <img
            className='h-full w-full object-cover object-center '
            src={article.urlToImage}
            alt=''
          />
        </a>
      </div>
      {/* <div
        className='bg-cover bg-center h-60 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
        style={{ backgroundImage: `url(${article.urlToImage})` }}
      ></div> */}
      <div className='w-full h-auto px-4 py-4 text-gray-800 flex flex-col'>
        <p className='font-bold text-lg text-2xl leading-tight hover:text-gray-500 focus:text-gray-500'>
          <a href={article.url} target='_blank' rel='noreferrer'>
            {article.title}{' '}
          </a>
        </p>
        <p className='mt-2'>{article.description}</p>
        <p className='text-sm text-gray-700 tracking-wide font-semibold mt-auto'>
          {article.source.name}
          <Moment format='MMMM Do YYYY, h:mm a' className='float-right'>
            {new Date(article.publishedAt)}
          </Moment>
        </p>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleItem;
