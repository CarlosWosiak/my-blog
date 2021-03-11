import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

const Post = ({ title, body }) => (
  <div>
    <h1>{title}</h1>
    <div>{renderHTML(body)}</div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
