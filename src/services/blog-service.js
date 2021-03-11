import axios from 'axios';

export const getBlogPosts = async () => {
  const posts = await axios.get('/posts');
  return posts.data;
};
