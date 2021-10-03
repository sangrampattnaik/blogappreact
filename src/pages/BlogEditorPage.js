import React, { useState } from 'react';
import { Editor } from '../components/Editor/Editor';
import { createBlog } from '../api/blog.api';
import { useHistory } from 'react-router-dom';
const BlogEditorPage = () => {
  const history = useHistory();
  const [formObj, setFormObj] = useState({
    title: '',
    body: '',
    base64_image_encoded: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    createBlog(formObj)
      .then(() => history.push('/'))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className='mt-4'>
      <h2>Write your Blog...</h2>
      <Editor formObj={formObj} setFormObj={setFormObj} handleSubmit={handleSubmit} />
    </div>
  );
};

export default BlogEditorPage;
