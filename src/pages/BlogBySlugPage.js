/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getBlogBySlug } from '../api/blog.api';
import { BlogPreview } from '../components/BlogPreview/BlogPreview';

const BlogBySlugPage = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState();

  useEffect(() => {
    setIsLoading(true);
    getBlogBySlug(slug)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div class='mt-4'>
      {isLoading && <p>Loading...</p>}
      {!isLoading && blog && <BlogPreview blog={blog} />}
      {!isLoading && !blog && <p>No Blog Found...</p>}
    </div>
  );
};

export default BlogBySlugPage;
