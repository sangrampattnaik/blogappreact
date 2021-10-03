/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';
import ReactFileReader from 'react-file-reader';

export const Editor = ({ handleSubmit, formObj, setFormObj }) => {
  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <div className='mb-3'>
        <label for='title' className='form-label'>
          Title
        </label>
        <input
          onChange={(e) => setFormObj({ ...formObj, [e.target.name]: e.target.value })}
          type='text'
          className='form-control'
          name='title'
          id='title'
          placeholder='add your blog title'
        />
      </div>
      <div class='mb-3'>
        <label for='base64_image_encoded' class='form-label'>
          Default file input example
        </label>
        <ReactFileReader base64={true} handleFiles={(e) => setFormObj({ ...formObj, base64_image_encoded: e.base64 })}>
          <a style={{ cursor: 'pointer' }} class='btn btn-primary mr-3'>
            Upload Display Image
          </a>
          {formObj.base64_image_encoded && <img src={formObj.base64_image_encoded} alt='Preview' />}
        </ReactFileReader>
      </div>
      <div className='mb-3'>
        <label for='body' className='form-label'>
          Body
        </label>
        <textarea
          onChange={(e) => setFormObj({ ...formObj, [e.target.name]: e.target.value })}
          className='form-control'
          id='body'
          name='body'
          placeholder='add your blog body...'
          rows='10'
        ></textarea>
      </div>
      <button type='submit' class='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

Editor.propTypes = {
  formObj: PropTypes.object.isRequired,
  setFormObj: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
