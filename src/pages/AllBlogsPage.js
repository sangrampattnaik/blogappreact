import React, { useEffect, useState } from 'react';

import { getBlogs } from '../api/blog.api';
import { BlogCard } from '../components/BlogCard/BlogCard';

const AllBlogsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    setIsLoading(true);
    getBlogs()
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div class='row row-cols-1 row-cols-md-2 g-4 mt-2'>
      {!isLoading && blogs && blogs.length === 0 && <p>No Blogs Found...</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && blogs && blogs.length > 0 && blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default AllBlogsPage;
