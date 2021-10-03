import PropTypes from 'prop-types';
import React from 'react';

export const BlogPreview = ({ blog }) => {
  return (
    <div className='card'>
      <img src={blog.image_path} className='card-img' alt={'Blog Cover'} />
      <div className='card-body'>
        <h5 className='card-title'>{blog.title}</h5>
        <p className='card-text'>{blog.body}</p>
        <p className='card-text'>{blog.created_at}</p>
      </div>
    </div>
  );
};

BlogPreview.propTypes = {
  blog: PropTypes.object.isRequired,
};
