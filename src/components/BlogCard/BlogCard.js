import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export const BlogCard = ({ blog }) => {
  const history = useHistory();

  const navigateToPreview = (e) => {
    e.stopPropagation();
    history.push(`/blog/${blog.slug}`);
  };

  return (
    <div className='col'>
      <div className='card'>
        <img src={blog.image_path} className='card-img-top' alt={'blog cover'} />
        <div className='card-body'>
          <h5 onClick={navigateToPreview} style={{ cursor: 'pointer' }} className='card-title'>
            {blog.title}
          </h5>
          <p className='card-text'>{blog.body}</p>
        </div>
        <div className='card-footer'>
          <small className='text-muted'>{blog.created_at}</small>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};
