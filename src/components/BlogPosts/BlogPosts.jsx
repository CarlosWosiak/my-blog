import React, { useState, useEffect } from 'react';
import './BlogPosts.scss';
import { getBlogPosts } from '../../services/blog-service';
import Post from '../Post/Post';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const serverPosts = await getBlogPosts();
    const renderedPosts = [];
    serverPosts.forEach((post) => {
      renderedPosts.push(
        <Post
          key={`${post.title}-post`}
          body={post.body}
          title={post.title}
        />,
      );
    });
    setPosts(renderedPosts);
  }, []);

  return (
    <div className="blog-container">
      {posts}
    </div>
  );
};

export default BlogPosts;
