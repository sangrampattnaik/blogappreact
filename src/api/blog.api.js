import axios from 'axios';

const BASE_URL = 'http://ec2-13-126-40-21.ap-south-1.compute.amazonaws.com';

export const getBlogs = async () => {
  return await axios.get(BASE_URL + '/blog');
};

export const getBlogBySlug = async (slug) => {
  return await axios.get(BASE_URL + '/blog/' + slug);
};

export const createBlog = async (obj) => {
  return await axios.post(BASE_URL + '/blog', { ...obj });
};
